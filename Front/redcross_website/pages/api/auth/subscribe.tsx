





import User from '../../../libs/authModel'
import connectDB from '../../../libs/mongooseConnect'
import type { NextApiRequest, NextApiResponse } from 'next'


const handler = async (req: NextApiRequest, res: NextApiResponse) => {


    connectDB().catch(error => res.json({error: "connection failed"}))

    if (req.method === 'POST') { 
    
    if(!req.body)return res.status(404).json({error: "Cannot find form data"});

    const readableValue = req.body;
    
    const checkExistance = await User.findOne({email : readableValue.email});
    
    if(checkExistance) return res.status(422).json({message : "User already exist"});


   const user = new User({
        email: readableValue.email,
        password: readableValue.password,
        address: readableValue.address
    });
    // Create new user
    var usercreated = await user.save();
    
    res.status(200).send(usercreated);
    }

    else{
        res.status(500).json({message: "HTTP method should be POST"})
    }
}

export default handler;




