// Style your elements here
import styled from 'styled-components'

export const List = styled.li`
  border: 2.3px solid #aab8c8;
  padding: 10px;
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  @media screen and (max-width: 576px) {
    margin-right: 0px;
    width: 100%;
  }
`
export const NoteDetails = styled.div`
  height: 150px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: auto;
  text-align: start;
`

export const Tittle = styled.h1`
  font-family: Roboto;
  font-size: 18px;
`
export const Note = styled.p`
  font-family: Roboto;
  font-size: 12px;
`
