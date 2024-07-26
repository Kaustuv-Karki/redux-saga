import { useState } from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import { useDispatch } from 'react-redux'
import { addUser } from './features/slices/userSlice'

function App() {
  const dispatch = useDispatch()
  const [text, setText] = useState('')
  const {names} = useSelector((state) =>state.user)
  console.log(names)

  return (
    <>
    {names.map((name : any, index:any) => (
      <div key={index}>{name}</div>
    ))}
    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    <button onClick={()=>dispatch(addUser(text))}>
      Add
    </button>
    </>
  )
}

export default App
