// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from '@libs/server/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { withIronSessionApiRoute } from 'iron-session/next';

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
    const { token } = req.body;
    const auth = await client.token.findUnique({
        where: {
            payload: token,
        },
    });
    if (!auth) res.status(404).end();
    req.session.user = {
        id: auth?.userId,
    };
    await req.session.save();
    res.status(200).end();
}

export default withIronSessionApiRoute(withHandler('POST', handler), {
    cookieName: 'csession',
    password: 'asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf',
});
