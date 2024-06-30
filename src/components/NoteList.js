import EmptyNote from "./EmptyNote";
import NoteItem from "./NoteItem";

export default function NoteList({title,data, onDelete, onAction}){

    return(
        <>
            <h2>{title}</h2>
            {
                data.length ? <div className="notes-list">{data.map(note=><NoteItem note={note} onDelete={onDelete} onAction={onAction}/>)}</div> : <EmptyNote />
            }
        </>
    )
}