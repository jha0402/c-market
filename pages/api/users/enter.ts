// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from '@libs/server/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import withHandler from '@libs/server/withHandler';
import { ResponseType } from '@libs/server/withHandler';
import twilio from 'twilio';
import mail from '@sendgrid/mail';

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
mail.setApiKey(process.env.SENDGRID_API_KEY!);

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
    const { phone, email } = req.body;
    const user = phone ? { phone } : email ? { email } : null;
    if (!user) return res.status(400).json({ ok: false });
    const payload = Math.floor(100000 + Math.random() * 900000) + '';
    const token = await client.token.create({
        data: {
            payload,
            user: {
                connectOrCreate: {
                    where: {
                        ...user,
                    },
                    create: {
                        name: 'Anonymous',
                        ...user,
                    },
                },
            },
        },
    });
    if (phone) {
        // const message = await twilioClient.messages.create({
        //     messagingServiceSid: process.env.TWILIO_MSID,
        //     to: process.env.PHONE!,
        //     body: `Your login token is ${payload}`,
        // });
        // console.log(message);
    } else if (email) {
        // const email = await mail.send({
        //     from: 'jha0402@gmail.com',
        //     to: 'jha0402@gmail.com',
        //     subject: 'C-market test email',
        //     text: `Your token is ${payload}`,
        //     html: `<strong>Your token is ${payload}</strong>`,
        // });
        // console.log(email);
    }
    return res.json({ ok: true });
}

export default withHandler({ method: 'POST', handler, isPrivate: false });
