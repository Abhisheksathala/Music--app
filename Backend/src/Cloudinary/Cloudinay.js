import { v2 as cloudinary } from 'cloudinary';



const connectCloudinary = async (req,res)=>{

    await cloudinary.config({
        cloud_name: process.env.cloudinary_CloudName,
        api_key: process.env.cloudinary_APIKey,
        api_secret: process.env.cloudinary_APISecret
    })

}


export default connectCloudinary