// Write your code here
import {List, Tittle, Note, NoteDetails} from './styledComponents'

const NoteItem = props => {
  const {notesDetails} = props
  const {tittle, notes} = notesDetails

  return (
    <List>
      <NoteDetails>
        <Tittle>{tittle}</Tittle>
        <Note>{notes}</Note>
      </NoteDetails>
    </List>
  )
}

export default NoteItem
