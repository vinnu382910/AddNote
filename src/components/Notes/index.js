// Write your code here
import {v4 as uuidv4} from 'uuid'
import {useState} from 'react'
import NoteItem from '../NoteItem'

import {
  NotesCont,
  Heading,
  NotesInputCont,
  TittleInput,
  TextArea,
  AddBtn,
  EmptyNotesItem,
  EmptyNotesImg,
  Heading2,
  Text,
  NotesItemsCont,
} from './styledComponents'

const Notes = () => {
  const [tittle, setTittle] = useState('')
  const [notes, setNote] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeTittle = event => {
    setTittle(event.target.value)
  }
  const onChangeNote = event => {
    setNote(event.target.value)
  }

  const onAddNotes = event => {
    event.preventDefault()
    const note = {
      id: uuidv4(),
      tittle,
      notes,
    }
    setNotesList(prevNotesList => [...prevNotesList, note])
    setTittle('')
    setNote('')
  }

  const renderEmptyNotes = () => (
    <EmptyNotesItem>
      <EmptyNotesImg
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <Heading2>No Notes Yet</Heading2>
      <Text>Notes you add will appear here</Text>
    </EmptyNotesItem>
  )

  const renderNotes = () => (
    <NotesItemsCont>
      {notesList.map(eachNote => (
        <NoteItem notesDetails={eachNote} key={eachNote.id} />
      ))}
    </NotesItemsCont>
  )

  return (
    <NotesCont>
      <Heading>Notes</Heading>
      <NotesInputCont onSubmit={onAddNotes}>
        <TittleInput
          type="text"
          placeholder="Title"
          value={tittle}
          onChange={onChangeTittle}
        />
        <TextArea
          type="text"
          placeholder="Take a Note..."
          value={notes}
          onChange={onChangeNote}
        />
        <AddBtn type="submit">Add</AddBtn>
      </NotesInputCont>
      {notesList.length > 0 ? renderNotes() : renderEmptyNotes()}
    </NotesCont>
  )
}

export default Notes
