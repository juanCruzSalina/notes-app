import { auth, db } from 'config/firebase'
import { INoteFormValues } from 'components/molecules/NotesForm/NotesForm'
import { deleteDoc, addDoc, updateDoc, getDocs, getDoc, collection, doc, where, query } from 'firebase/firestore/lite'
import { fileUpload } from 'helpers/fileupload'
import { INote } from 'components/molecules/NoteMiniature/NoteMiniature'

export const notesRef = collection(db, 'notes')

interface IEditNote {
  id: string,
  title?:string,
  body?: string,
  date?: number,
  image?: File,
}



export const getNotes = async () => {
  const { uid } = auth.currentUser!
  const notesQuery = query(notesRef, where('uid', '==', uid))
  const querySnapshot = await getDocs(notesQuery)
  const docs: Array<any> = querySnapshot.docs.map((doc) => {
    const { id } = doc
    return {
      id,
      ...doc.data()
    }
  })
  return docs
}

export const addNotes = async ({image, ...rest}: INoteFormValues ) => {
  const { uid } = auth.currentUser!
  if (image) {
    const { url } = await fileUpload(image!)
    const { id } = await addDoc(notesRef, {...rest,image: url, uid})
    const note = await getDoc(doc(notesRef, id))
    const newNote = {id, ...note.data()}
    return newNote as INote
  }
  const { id } = await addDoc(notesRef, {...rest, uid})
  const note = await getDoc(doc(notesRef, id))
  console.log(note)
  const newNote = {id, ...note.data()}
  return newNote as INote
}

export const uploadNote = async (values: IEditNote) => {
  const { id, image } = values
  if (image) {
    const { url } = await fileUpload(image)
    await updateDoc(doc(notesRef, id), {image: url, ...values})
  }
  await updateDoc(doc(notesRef, id), {...values})
}

export const deleteNote = async (id: string) => {
  await deleteDoc(doc(notesRef, id))
}