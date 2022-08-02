import './App.css'
import logo from './girl-todo.png'
import {useState} from 'react'
function App() {
  const [toDos,setToDos] = useState([])
  const [toDo,setToDo] = useState('')
  const deleteTask = (value)=> {

    var ask = window.confirm("Do you want to delete the task?");
    if (ask) {
      const test = [...toDos];
        test.splice(value, 1);

        setToDos(test)
    }else {
      console.log("Don't delete");
    }

   
  }
  return (
    <div className="div1">
      <span className="nav">Sandra Rosa Antony</span>
      <div className="main">
        <img src={logo} alt="Logo" className="girl" />
        <div className="content">
          <span className="Heading">
            To-Do App
          </span>
          <span className="paragraph">
            Let’s be productive...
          </span>
          <div className="app">
            <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="Add item..." className="type" />
            <i onClick={()=>setToDos([...toDos,{id:Date.now(),text:toDo,status:false}])} className="fas fa-plus"></i>
          </div>
          { toDos.map((value)=>{
            return (
            <div className="app2">
            <input onChange={
              (e)=>{
                  setToDos(toDos.filter(obj=>{
                    if(obj.id===value.id){
                       obj.status=e.target.checked
                    }
                    return obj
                  }))
              }
            } value={value.status} type="checkbox" name="" id="check" />
            <span className='type2'>
              {value.text}
            </span>
            <i className="fas fa-times" onClick={()=>deleteTask(value)}></i>
          </div>)
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
