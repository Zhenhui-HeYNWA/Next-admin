import mongoose from 'mongoose';

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;

    const db = await mongoose.connect(process.env.BASICURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    connection.isConnected = db.connection.readyState;

    console.log('MongoDB connected:', connection.isConnected);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
