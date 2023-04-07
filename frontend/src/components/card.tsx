import React,{useState} from 'react'
import styles from './card.module.css'
import { FiEdit, FiTrash2 } from "react-icons/fi";

interface PropTypes {
  title: string;
  notes: string;
  id: number;
}

const Card = (props: PropTypes) => {
  const [Edit, setEdit] = useState(false)
  const [NewNote, setNewNote] = useState('')

  const editCard = () => {
    console.log('Edit Card')
    setEdit(true)
  }
  const handleNewNote = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewNote(event.target.value)
  }

  const data = '“The illusion of the free will to do is but ignorance of the law of assumption upon which all action is based. Everything happens automatically. All that befalls you, all that is done by you – happens.”'
  return (
    <div key={props.id} className={styles.container}>
      <h3 className={styles.title}>{props.title}</h3>
      <p>{props.notes}</p>
      <div className={styles.icon_container}>
        <FiEdit style={{ color: 'green' }} size={18} onClick={editCard} />
        <FiTrash2 style={{ color: 'red' }} size={18}/>
      </div>
      {Edit &&
      <form>
        <input type='text' onChange={handleNewNote}></input>
      </form>
      }
    </div>
  )
}

export default Card