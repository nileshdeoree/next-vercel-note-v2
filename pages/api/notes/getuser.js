import fetchuser from "@/middleware/fetchuser"
import connectDb from "@/middleware/mongoose"
const { default: Note } = require("@/models/Note")

const handler = async(req, res)=>{
    if(req.method == 'GET'){
        try {
            let p = await Note.find({user: req.user.id})
            res.json(p)

        } catch (error) {
            res.json({message: "inside catch"})
        }
    }
    else{
        res.json({message: "This method is not allowed"})
    }
}

export default connectDb(fetchuser(handler))