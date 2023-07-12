import mongoose from "mongoose";


let isConnected= false;

export const connectToDB=async()=>{
    console.log("hi")
    mongoose.set('strictQuery',true);

    if(isConnected){console.log(
        "MongoDB is already connected")
    return;
}
try{
await mongoose.connect (process.env.MONGODB_URI,{
    dbName:"SharedPrompt",useNewUrlParser:true,
    useUnifiedTopology:true,
})
isConnected=true;
console.log("MONGODB is connected")
}catch (error){
    console.log(error)

}   
}