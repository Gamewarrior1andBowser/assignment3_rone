import {useReducer} from 'react';
import Note from './Note';

function Taskbar() {
  const tasks = [{id: 0, name: "test", date: "June 11, 8:34 am", isCompleted: false}];
  let count = 0;
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
          isCompleted={data.isCompleted}/>
        ))}
      </section>
    </>
  );
}
export default Taskbar;