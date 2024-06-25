import connectDb from "@/middleware/mongoose";
import Note from "@/models/Note";

const handler = async (req, res) => {
    if (req.method === 'PUT') {
        try {
            for(let i=0; i<req.body.length; i++){
                let p = await Note.findByIdAndUpdate(req.body[i]._id,  req.body[i])
            }
            req.body.length? res.json({ message: "Updated successfully" }) : res.json({ message: "Wrap object with array" })

        } catch (error) {
            res.json({ message: "inside catch"});
        }
    } else {
        res.status(405).json({ message: "This method is not allowed" });
    }
};

export default connectDb(handler);
















// try {
//     for (let i = 0; i < req.body.length; i++) {
//         let p  = await Note.findByIdAndUpdate(req.body[i]._id, req.body[i])
//     }
    
//     res.json({message: "Updated Successfully"})

// } catch (error) {
//     res.json({message: "inside catch"})
// }