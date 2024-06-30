import AddNote from "./AddNote"
import NoteList from "./NoteList"

export default function Body({data,onAdd, onDelete,onAction}){
    return (
        <div className="note-app__body">
            <AddNote onAdd={onAdd}/>
            <NoteList title={'Favorit'} data={data.filter(note=>note.favorite)} onDelete={onDelete} onAction={onAction}/>
            <NoteList title={'Catatan Aktif'} data={data.filter(note=>!note.archived)} onDelete={onDelete} onAction={onAction}/>
            <NoteList title={'Arsip'} data={data.filter(note=>note.archived)} onDelete={onDelete} onAction={onAction}/>
        </div>
    )
}