import { NextApiRequest, NextApiResponse } from 'next'


export default (request: NextApiRequest, response: NextApiResponse) => {
  const id = request.query
  console.log(request.query);

  const users = [
    {id: 1, name: 'Ralph'},
    {id: 2, name: 'diego'},
    {id: 3, name: 'marina'}


  ]

  return response.json(users)


}