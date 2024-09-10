// Style your elements here
import styled from 'styled-components'

export const NotesCont = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #d8d8d8;
  min-height: 100vh;
`
export const Heading = styled.h1`
  font-family: Bree Serif;
  color: #4c63b6;
`

export const NotesInputCont = styled.form`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  width: 80%;
  background-color: #fff;
  margin-top: 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`
export const TittleInput = styled.input`
  border: none;
  outline: none;
  margin: 10px;
  font-weight: bold;
  color: #475569;
`
export const TextArea = styled.textarea`
  border: none;
  outline: none;
  margin: 10px;
  color: #475569;
`
export const AddBtn = styled.button`
  background-color: #4c63b6;
  color: #fff;
  font-weight: bold;
  font-family: Roboto;
  height: 34px;
  width: 65px;
  align-self: flex-end;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
`
export const EmptyNotesItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`
export const EmptyNotesImg = styled.img`
  height: 150px;
  width: 150px;
`
export const Heading2 = styled.h1`
  color: #1e293b;
  font-weight: bold;
  font-family: Roboto;
`
export const Text = styled.p`
  color: #334155;
  font-weight: bold;
  font-family: Roboto;
`
export const NotesItemsCont = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  list-style: none;
  flex-wrap: wrap;
  width: 80%;
  @media screen and (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 0px;
  }
`
