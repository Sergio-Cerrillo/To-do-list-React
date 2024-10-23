import { useState } from 'react'
import './index.css'

function App() {

  const [items, setItems]=useState([])
  const [inputValue, setInputValue]=useState('')
  const [importance, setImportance] = useState(1);

  //add 
  const addItems=()=>{
    if(inputValue !== '') {
      setItems([...items, {text: inputValue, completed:false, importance:Number(importance)}]);
      setInputValue('')
    }
    }
  
    //permitir añadir texto
    const inputChange=(event)=>{
      setInputValue(event.target.value)
    }

    //complete
    const taskComplete=(index)=>{
      const newItems = [...items]
      newItems[index].completed = !newItems[index].completed;
      setItems(newItems)
    }

    const taskDelete=(index)=>{
      const newItems = items.filter((_, i) => i !== index)
      setItems(newItems)
    }

  return (
  <>
    <header className='header'>
      <h1>To-Do-List</h1>
    </header>
    <div className='add-area'>
      <input  className='input-add' type='text' onChange={inputChange} value={inputValue} placeholder='Añadir nueva tarea...' />
      <label className='label-add'>IMPORTANCIA:</label>
      <select className='select-add' value={importance} onChange={(e)=>setImportance(e.target.value)}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
      <button className='button-add' onClick={addItems}>+</button>
   </div>
    <body className='body-app'>
      <p className="read-the-docs">
        <ul className='tasks'>
          {items.map((item, index)=>(
            <li key={index} className={item.completed ? 'completed' : 'not-completed'}>
              <button className='button-ok' onClick={()=>taskComplete(index)}>
                <img src="./pics/completed.png" alt="ok" />
                </button>
              <button className='button-delete' onClick={()=>taskDelete(index)}>
                <img src="./pics/trash.png" alt="delete" />
              </button>
              IMPORTANCIA: {item.importance} - {item.text} 
            </li> 
          ))}
        </ul>
      </p>
    </body>
    </>
  )
}

export default App
