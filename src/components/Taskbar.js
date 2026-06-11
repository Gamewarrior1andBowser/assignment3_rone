import {useReducer} from 'react';
import Note from './Note';

function Taskbar() {
  const tasks = [{id: 0, name: "test", date: "June 11, 8:34 am", isCompleted: false}];
  let count = 0;
  return(
    <>
      <section>
        <div className='textbar'>
          <input type='text'/>
          <button title='Add'/>
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