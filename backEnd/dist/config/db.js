import mongoose from "mongoose";
export const connectDB = async () => {
    try {
        const connect = await mongoose.connect(`${process.env.MONGO_URI}`, {
            dbName: process.env.MONGO_DB_NAME || "url",
        });
        console.log(`MongoDB connected: ${connect.connection.host} ,${connect.connection.name}`);
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
};
export default connectDB;
//# sourceMappingURL=db.js.map