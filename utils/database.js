import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    if(isConnected){
        console.log ('MOngoFB is COnnected');
        return;
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI,{
            dbname:"share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology:true,
        })
        isConnected = true;

        console.log('MongoDb connected')
    }catch(error){
        console.log(error)
    }
}