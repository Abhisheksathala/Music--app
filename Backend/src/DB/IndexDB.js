import mongoose from "mongoose";

const IndexDB = async ()=>{

    try {
        const ConnectDBInstance  =  mongoose.connect('mongosh "mongodb+srv://cluster0.e9f5ssy.mongodb.net/" --apiVersion 1 --username abhisheksathala296')
        if(ConnectDBInstance){
            console.log(
                "\n- CONNECTED TO MONGODB FROM INDEXdb OF CONFIG",
                ConnectDBInstance.connection.host
              );

        }

    } catch (error) {
        console.log('The error occured in the mongoDBindexDB',error);
        process.exit(1);
    }
}



export  default IndexDB