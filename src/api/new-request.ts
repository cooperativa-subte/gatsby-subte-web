import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby';

export default function handler(req: GatsbyFunctionRequest, res: GatsbyFunctionResponse) {
  if (req.method !== 'POST')
    return res.status(405).send({ message: 'This method is not available' });

  if (Object.keys(req.body).length === 0) return res.status(400).end();

  console.log(req.body);

  res.json({ message: 'gracias' });
}
