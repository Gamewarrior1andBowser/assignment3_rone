import {useReducer, useState} from 'react';
import Note from './Note';

function Taskbar() {
  const tasks = [{id: 0, name: "test", 
    date: "June 10, 8:34 am", isCompleted: false}, 
    {id: 1, name: "end my suffering", 
    date: "June 12, 11:14 am", isCompleted: false}];
  const [id, setId] = useState(0);
  const [input, setInput] = useReducer('');
  let count = 1;

  const Toggle = () => {
    tasks[id].isCompleted = !tasks[id].isCompleted;
  }
  const Delete = () => {
    tasks.pop(id);
  }
  const Save = () => {
    tasks[id].name = input;
  }
  const Add = () => {
    tasks.push({id: count++, name: input, 
      date: new Date().toLocaleTimeString, isCompleted: false});
  }


  return(
    <>
      <section className='flex center'>
        <div className='textbar'>
          <input type='text' placeholder='New Task' 
          onChange={event => setInput(event.target.value)}/>
          <input type='button' value='Add' onClick={Add}/>
        </div>
      </section>
      <section>
        {tasks.map((data) => (
          <Note id={data.id} name={data.name} date={data.date} 
          isCompleted={data.isCompleted} setId={setId} ToggleNote={Toggle}
          DeleteNote={Delete} SaveNote={Save} setInput={setInput}/>
        ))}
      </section>
    </>
  );
}
export default Taskbar;