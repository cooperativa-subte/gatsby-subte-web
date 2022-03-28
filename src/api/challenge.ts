import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby';

export default function handler(req: GatsbyFunctionRequest, res: GatsbyFunctionResponse) {
  if (req.method !== 'POST')
    return res.status(405).send({ message: 'This method is not available' });

  res.setHeader('Access-Control-Allow-Origin', '*');

  const body = JSON.parse(req.body);

  if (!body.raiting) return res.status(400).send({ message: 'Wrong param :(' });

  res.json({ message: 'Yey! Gracias por completar el desafío' });
}
