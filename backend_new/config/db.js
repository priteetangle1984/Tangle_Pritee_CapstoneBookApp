const mongoose = require("mongoose");
const db =
  "mongodb+srv://Adminpritee:ZLT848zxGBdsd20H@cluster0.ws1jjnt.mongodb.net/MERNFINAL";
/* Replace <password> with your database password */

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;