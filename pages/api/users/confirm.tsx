// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from '@libs/server/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import withHandler, { ResponseType } from '@libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
    const { token } = req.body;
    console.log(token);
    res.status(200).end();
}

export default withHandler('POST', handler);
