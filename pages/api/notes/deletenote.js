import connectDb from "@/middleware/mongoose"
import Note from "@/models/Note"

const handler = async(req,res)=>{
    if(req.method == 'DELETE'){
        try {
            for(let i =0; i<req.body.length; i++){
                let p = await Note.findByIdAndDelete(req.body[i]._id)
            }

            req.body.length? res.json({message: "Deleted successfully"}) : res.json({message: "Wrap object with array"})

        } catch (error) {
            res.json({message: "inside catch"})
        }
    }
    else{
        res.json({message: "This method is not allowed"})
    }
}

export default connectDb(handler)