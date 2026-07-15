import mongoose from 'mongoose'

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL as string,{
            dbName : "MealRoute"
        });
        console.log("connected to mongoDB")
    }
    catch(error){
        if(error instanceof Error){
            console.log(error.message);
        }
        else{
            console.log(error);
        }
    }
}

export default connectDB;