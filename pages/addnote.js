import { useRouter } from 'next/router'
import React, { useState } from 'react'

const AddNote = ({notes}) => {

    const [credentials, setCredentials] = useState({ title: "", description: "", tag: "" })
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:3000/api/notes/addnote", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title: credentials.title, description: credentials.description, tag: credentials.tag })
        })
        const result = await response.json()

        if (result.success) {
            alert("Note Added successfully")
            // Optionally, you can redirect or clear the form here
        } else {
            alert("Error")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col m-10'>
                <input name='title' value={credentials.title} onChange={onChange} className='m-5 text-black' type="text" placeholder='title' />
                <input name='description' value={credentials.description} onChange={onChange} className='m-5 text-black' type="text" placeholder='Description' />
                <input name='tag' value={credentials.tag} onChange={onChange} className='m-5 text-black' type="text" placeholder='tag' />
                <button type='submit'>Submit</button>
            </form>

            <div>
                {notes? (
                    notes.map(note => (
                        <li key={note._id}><a>{note.title}</a></li>
                    ))
                ): (
                    <div>
                        Loading...
                    </div>
                )}
            </div>
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

export default AddNote
