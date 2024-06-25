import connectDb from "@/middleware/mongoose";
const { default: Note } = require("@/models/Note")

const handler = async(req,res)=>{
    if(req.method == 'GET'){
        try {
            let p = await Note.find()
            res.json(p)

        } catch (error) {
            res.json({message: "inside catch"})
        }
    }
    else{
        res.json({message: "This method is not allowed"})
    }
}

export default connectDb(handler)
