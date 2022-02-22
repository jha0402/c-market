// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from '@libs/server/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { withApiSession } from '@libs/server/withSession';

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
    const { token } = req.body;
    const auth = await client.token.findUnique({
        where: {
            payload: token,
        },
    });
    if (!auth) return res.status(404).end();
    req.session.user = {
        id: auth.userId,
    };
    await req.session.save();
    await client.token.deleteMany({
        where: {
            userId: auth.userId,
        },
    });
    res.json({ ok: true });
}

export default withApiSession(withHandler({ method: 'POST', handler, isPrivate: false }));
