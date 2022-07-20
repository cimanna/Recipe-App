import mongoose from 'mongoose'

const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

mongoose.connect(
  'mongodb://localhost:27017/health', mongooseConfig)

  
const db = mongoose.connection

db.on("error", (error) => {
  console.error(error);
});

db.once("disconnected", () => {
  console.log("Disconnected from MONGODB");
});


export default db