import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function shortenUrl(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.body;
  const shortenedUrl = Math.random().toString(36).substring(2, 6);
  const createdAt = new Date();

  await axios
    .post('http://localhost:4000/links', { url, shortenedUrl, createdAt })
    .then(response => {
      if (response.status === 201) {
        console.table(response.data);
        return res.status(200).json({ shortenedUrl });
      } else {
        console.log('Response', response.data);
      }
    })
    .catch(error => {
      console.error(error.message);
    });
}
