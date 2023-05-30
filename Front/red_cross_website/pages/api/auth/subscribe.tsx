import User from '../../../DATA/libs/authModel'
import connectDB from '../../../DATA/libs/mongooseConnect'
import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from "bcryptjs";


const handler = async (req: NextApiRequest, res: NextApiResponse) => {


    connectDB().catch(error => res.json({ error: "connection failed" }))

    if (req.method === 'POST') {

        if (!req.body) return res.status(404).json({ error: "Cannot find form data" });

        const { email, password, address } = req.body;

        const checkExistance = await User.findOne({ email: email });

        if (checkExistance) return res.status(422).json({ message: "User already exist" });

        User.create({ email, password: await bcrypt.hash(password, 12), address }, function (err: any, data: any) {
            if (err) return res.status(404).json({ err });
            res.status(201)
        });
    }

    else {
        res.status(500).json({ message: "HTTP method should be POST" })
    }
}

export default handler;




