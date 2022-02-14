// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import client from '@libs/server/client';

type Data = {
    name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    await client.user.create({
        data: {
            email: 'hi',
            name: 'hi',
        },
    });
    res.status(200).json({ name: 'John Doe' });
}
