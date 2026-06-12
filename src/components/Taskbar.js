import {useReducer} from 'react';
import Note from './Note';

function Taskbar() {
  const tasks = [{id: 0, name: "test", date: "June 11, 8:34 am", isCompleted: false}];
  const [id, setId] = useReducer(0);
  const [input, setInput] = useReducer('');
  let count = 0;

  const Toggle = () => {
    tasks[id].isCompleted = !tasks[id].isCompleted;
  }
  const Delete = () => {
    tasks.pop(id)
  }
  const Save = () => {
    tasks[id].name = input;
  }


  return(
    <>
      <section className='flex center'>
        <div className='textbar'>
          <input type='text' placeholder='New Task'/>
          <input type='button' value='Add'/>
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