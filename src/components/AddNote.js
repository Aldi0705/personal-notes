import { useState } from "react"

export default function AddNote({onAdd}){
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [titleLength] = useState(50)

    function handleSubmit(event){
        event.preventDefault()
        let now = new Date()
        let newNote = {
            id: now.getTime(),
            title,
            body,
            archived: false, 
            createdAt: now,
        }
        onAdd(newNote)
    }
    
    return (
        <div className="note-input">
            <h2>Buat catatan</h2>
            
            <form onSubmit={handleSubmit}>
                <p className="note-input__title__char-limit">Sisa karakter: {titleLength-title.length}</p>
                <input className="note-input__title" type="text" placeholder="Ini adalah judul ..." maxLength={titleLength} onChange={(event)=>setTitle(event.target.value)} value={title}/>
                <textarea className="note-input__body" type="text" placeholder="Tuliskan catatanmu di sini ..." onChange={(event)=>setBody(event.target.value)} value={body}></textarea>
                <button type="submit">Buat</button>
            </form>
        </div>
    )
}