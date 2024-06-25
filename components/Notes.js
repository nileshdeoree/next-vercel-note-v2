import React from "react"

const Notes = ({notes}) => {

    return (
        <div>
            {notes.map( note=>(
                <li key={note._id}><a>{note.title}</a></li>
            ))}
        </div>
    )
}

export async function getStaticProps(){
    let res = await fetch("http://localhost:3000/api/notes/getallnotes")
    let notes = await res.json()

    return {
        props: {
            notes
        }
    }
}

export default Notes
