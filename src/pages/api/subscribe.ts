import { query } from 'faunadb';
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from 'next-auth/client';
import { fauna } from "../../services/fauna";
import { stripe } from '../../services/stripe';

type User={
  ref: {
    id: string;
  }
  data: {
    stripe_customer_id: string
  }
}

export default async(req: NextApiRequest, res: NextApiResponse) =>{

  if(req.method ==='POST'){
    const session = await getSession({req})

    const user = await fauna.query<User>(
        query.Get(
          query.Match(
            query.Index('user_by_email'),
            query.Casefold(session.user.email)
          )
        )
      )
      
      let costomerId = user.data.stripe_customer_id
      if(!costomerId){
        const stripeCustomer = await stripe.customers.create({
          email: session.user.email,
          // medata
        })
        await fauna.query(
          query.Update(
            query.Ref(query.Collection('users'), user.ref.id ),
            {data: {stripe_costumer_id: stripeCustomer.id}}
          )
        )
        costomerId = stripeCustomer.id;
      }
    
    const stripeCheckoutSession = stripe.checkout.sessions.create({

      customer: costomerId,
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      line_items: [{
        price: 'price_1Ir8gDKaBo6zUtp1ZFsMLAj2',
        quantity: 1
      }],
      mode: 'subscription',
      allow_promotion_codes: true, 
      success_url: process.env.STRIPE_SUCESS_URL,
      cancel_url: process.env.STRIPE_CANCEL_URL
    })
    return res.status(200).json({ sessionId: (await stripeCheckoutSession).id})

  } else {
    res.setHeader('ALLOW', 'POST')
    res.status(405).end('Method not allowed')
  }

}