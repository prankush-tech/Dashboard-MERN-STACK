import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

const connectDB = async () => {
	const { connection } = await mongoose.connect(process.env.MONGO_URI);

	console.log(`Database is Connceted with: ${connection.host}`);
};
export default connectDB;
