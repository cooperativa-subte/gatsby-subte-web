import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby';

export default function handler(req: GatsbyFunctionRequest, res: GatsbyFunctionResponse) {
  if (req.method !== 'POST')
    return res.status(405).send({ message: 'This method is not available' });

  const body = JSON.parse(req.body);

  if (!body.raiting) return res.status(400).send({ message: 'Param is missing' });

  res.json({ message: 'Yey! Gracias por completar el desafío' });
}
