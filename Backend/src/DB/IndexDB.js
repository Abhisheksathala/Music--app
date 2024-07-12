import mongoose from "mongoose";

const IndexDB = async ()=>{

    try {
        const ConnectDBInstance  = await  mongoose.connect(process.env
        .MONGODB_URI
        )
        if(ConnectDBInstance){
            console.log(
                "\n- CONNECTED TO MONGODB FROM INDEXdb OF CONFIG"
              );

        }

    } catch (error) {
        console.log('The error occured in the mongoDBindexDB',error);
        process.exit(1);
    }
}



export  default IndexDB