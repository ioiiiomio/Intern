import { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';
import { CorsOptions } from 'cors';

// Initialize the cors middleware
const cors = Cors({
  origin: 'http://localhost:3001',
  methods: ['GET', 'POST', 'OPTIONS'],
} as CorsOptions);

// Helper to run middleware in Next.js
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
): Promise<unknown> {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: unknown) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

// Actual handler
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await runMiddleware(req, res, cors);

  res.status(200).json({ message: 'next API works' });
}
