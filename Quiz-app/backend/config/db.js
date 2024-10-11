const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`Successfully connected to MongoDB: ${connection.connection.host}`);
    } catch (err) {
        console.error(`Connection failed: ${err.message}`);
        process.exit(1); // Exits the application if the connection fails
    }
};

module.exports = connectDB;
