import mongoose from "mongoose";

const connectdb = async () => {
    try {
        console.log("Connecting to MongoDB...");
        console.log("MONGO_URI exists:", !!process.env.MONGO_URI);

        await mongoose.connect(process.env.MONGO_URI);

        console.log("✅ Database is connected");
    } catch (err) {
        console.error("❌ MongoDB Connection Error:");
        console.error(err);
    }
};

export default connectdb;