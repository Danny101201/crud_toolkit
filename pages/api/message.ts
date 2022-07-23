// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Info = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Info>
) {
  res.status(200).json({ message: 'Danny wu you are the best' })
}
