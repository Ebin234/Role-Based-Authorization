const mongoose = require('mongoose');

const connectDB = async ()=>{
    const connect = await mongoose.connect(process.env.MONGOsDB_URL);
    return connect
}

module.exports = connectDB;