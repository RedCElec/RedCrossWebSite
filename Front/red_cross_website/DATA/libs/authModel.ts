
import mongoose, { Document, Schema, model, models } from "mongoose";

export interface IUser extends Document {
    email: string,
    password: string,
    address: string,
}


export interface IUser_Model extends IUser { }



const IUserSchema: Schema = new Schema({

    email: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },

}
);

//mongoose.models = {};

export default model("User", IUserSchema) ;

