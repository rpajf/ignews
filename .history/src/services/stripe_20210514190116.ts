import Stripe from 'stripe'

export const Stripe =  new Stripe(
  process.env.STRIPE_API_KEY,
)