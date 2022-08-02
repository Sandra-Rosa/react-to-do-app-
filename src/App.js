import './App.css'
import logo from './girl-todo.png'

function App() {
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
            <input type="text" placeholder="Add item..." className="type" />
            <i className="fas fa-plus"></i>
          </div>
          <div className="app2">
            <input type="checkbox" name="" id="check" />
            <span className='type2'>
              React Tutorial
            </span>
            <i className="fas fa-times"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
