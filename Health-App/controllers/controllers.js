import Facts from "../models/facts.js"

export function getAllFacts(req,res) {
  Facts.find({}) .then(results=>{
      res.json(results)
    })
    .catch(err=>res.json({message:err}))

}