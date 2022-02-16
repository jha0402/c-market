// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from '@libs/server/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import withHandler from '@libs/server/withHandler';
import { prisma } from '@prisma/client';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { phone, email } = req.body;
    const payload = phone ? { phone: +phone } : { email };
    const token = await client.token.create({
        data: {
            payload: '123',
            user: {
                connectOrCreate: {
                    where: {
                        ...payload,
                    },
                    create: {
                        name: 'Anonymous',
                        ...payload,
                    },
                },
            },
        },
    });
    console.log(token);
    return res.status(200).end();
}

export default withHandler('POST', handler);
