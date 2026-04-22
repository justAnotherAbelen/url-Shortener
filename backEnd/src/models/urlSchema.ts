import mongoose from "mongoose";
import { nanoid } from "nanoid";

const urlSchema = new mongoose.Schema({
    fullUrl:{
        type : String ,
        require : true ,
    },
    shortUrl:{
        type : String ,
        require : true ,
        // generate a random character string for each created url (nanoid())
        //then take only the first 10 characters (substring(0,10))
        default : () => nanoid().substring(0,10)
    },
    clicks:{
        type : Number ,
        default : 0 ,
    },
    createdAt:{
        type : Date ,
        default : Date.now ,
    },
    updatedAt:{
        type : Date ,
        default : Date.now ,
    },
},
{timestamps : true}
)

export const urlModel = mongoose.model("Url",urlSchema);