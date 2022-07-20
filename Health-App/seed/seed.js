import db from "../connection/connection.js";
import Facts from "../models/facts.js";

const data = [
  {
    "statment": "go for a run",
    "price": 0,
    "access": 10
  },

  {
    "statment": "do yoga",
    "price": 3,
    "access": 8
  }
]


const seedData = () => {
  Facts.deleteMany({})
    .then(()=>{
      Facts.insertMany(data)
        .then(()=> db.close())
    })
}


seedData()