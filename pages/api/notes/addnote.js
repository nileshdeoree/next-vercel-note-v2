import fetchuser from "@/middleware/fetchuser";
import connectDb from "@/middleware/mongoose";
const { default: Note } = require("@/models/Note")

const handler = async(req,res)=>{
    if(req.method == 'POST'){
        try {
            let p = new Note({
                user: req.user.id,
                title: req.body.title,
                description: req.body.description,
                tag: req.body.tag,
            })
            await p.save()
            res.json({message: "success", p})

        } catch (error) {
            res.json({message: "inside catch"})
        }
    }
    else{
        res.json({message: "This method is not allowed"})
    }
}

export default connectDb(fetchuser(handler))




























// import connectDb from "@/middleware/mongoose";
// import Note from "@/models/Note";
// import fetchuser from "@/middleware/fetchuser";

// const handler = async (req, res) => {
//     if (req.method === 'POST') {
//         console.log(req.user);
//         try {
//             const p = new Note({
//                 user: req.user.id,
//                 title: req.body.title,
//                 description: req.body.description,
//                 tag: req.body.tag,
//             });
//             const savedNote = await p.save();
//             res.json(savedNote);

//         } catch (error) {
//             res.status(500).send("inside catch");
//         }
//     } else {
//         res.status(405).send({ message: "Only POST requests are allowed" });
//     }
// }

// export default connectDb(fetchuser(handler));



// import connectDb from "@/middleware/mongoose";
// import Note from "@/models/Note";
// import fetchuser from "@/middleware/fetchuser";
// import { noteValidationRules, validate } from "@/middleware/validators";

// const handler = async (req, res) => {
//     if (req.method === 'POST') {
//         try {
//             const { title, description, tag } = req.body;
            
//             const note = new Note({
//                 title, description, tag, user: req.user.id
//             });
//             const savedNote = await note.save();

//             res.json(savedNote);

//         } catch (error) {
//             res.status(500).send("inside catch");
//         }
//     } else {
//         res.status(405).send({ message: "Only POST requests are allowed" });
//     }
// }

// export default connectDb(fetchuser(noteValidationRules(), validate, handler));













/*

// ROUTE 2: Add a new Note using: POST "/api/notes/addnote". Login required
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),], async (req, res) => {
        try {
            const { title, description, tag } = req.body;
            console.log("hello i am in backend " , typeof req.body)

            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const note = new Note({
                title, description, tag, user: req.user.id
            })
            const savedNote = await note.save()

            res.json(savedNote)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })

*/