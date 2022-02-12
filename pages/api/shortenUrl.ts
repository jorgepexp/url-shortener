import type { NextApiRequest, NextApiResponse } from 'next';

export default async function shortenUrl(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.body;
  const randomUrl = Math.random().toString(36).substring(2, 6);

  res.status(200).send({ url, randomUrl });
}
