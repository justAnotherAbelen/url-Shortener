import express from "express";
import { urlModel } from "../models/urlSchema.js";

export const createUrl = async (req:express.Request,res:express.Response) => {
    try{
        const {fullUrl} = req.body;
        console.log(`the full url is : ${fullUrl}`);
        const foundUrl = await urlModel.find({fullUrl});

        if (foundUrl.length > 0) {
            res.status(409).json(foundUrl);
            res.send(foundUrl);
        }else{
            const shortUrl = await urlModel.create({fullUrl});
            res.status(201).send({shortUrl})
        }
        return res.status(400).json({message: "Invalid URL"});

    }catch(error){
        console.log("Error in createShortUrl controller !!! ")
        return res.status(500).json({message: "Internal server error"});
    }
}

export const getUrl = async (req:express.Request,res:express.Response) => {
    try{

        const shortUrl = await urlModel.find();
        if(shortUrl.length < 0 ){
             return res.status(404).send({"message" : "URL not found !!!"})
        }else{
            return res.status(200).send(shortUrl)
        }

    }catch(error){
        console.log("Error in get Url controller !!! ")
        return res.status(500).json({message: "Internal server error"});
    }
}

export const deleteUrl = async (req:express.Request,res:express.Response) => {
    try{
        const { id, shortUrl, fullUrl } = req.body;
        let filter: { _id?: string; shortUrl?: string; fullUrl?: string } = {};

        if (id) {
            filter = { _id: id };
        } else if (shortUrl) {
            filter = { shortUrl };
        } else if (fullUrl) {
            filter = { fullUrl };
        } else {
            return res.status(400).json({
                message: "Provide one identifier: id, shortUrl, or fullUrl",
            });
        }

        const deletedUrl = await urlModel.findOneAndDelete(filter);
        if (!deletedUrl) {
            return res.status(404).json({ message: "URL not found !!!" });
        }

        return res.status(200).json({
            message: "URL deleted successfully",
            deletedUrl,
        });
    }catch(error){
        console.log("Error in deleteShortUrl controller !!! ")
        return res.status(500).json({message: "Internal server error"});
    }
}

export const getUrlByid = async (req:express.Request,res:express.Response) => {
    try{
        const id = req.params.id;
        if (!id || typeof id !== "string") {
            return res.status(400).json({ message: "Invalid short url id" });
        }
        const shortUrl = await urlModel.findOneAndUpdate(
            { shortUrl: id },
            { $inc: { clicks: 1 } },
            { new: true }
        );

        if(!shortUrl){
            return res.status(404).json({ message: "Message Not Found !!!" });
        }else{
            return res.redirect(`${shortUrl.fullUrl}`);
        }

    }catch(error){
        console.log("Error in createShortUrl controller !!! ")
        return res.status(500).json({message: "Internal server error"});
    }
}