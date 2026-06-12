import {FaCheck, FaEdit, FaTrash} from 'react-icons/fa';
import {useReducer} from 'react';

function Note(props) {
  const [text, setText] = useReducer('');
  let isEditing = false;

  const Toggle = () => {
    props.setId(props.id);
    props.ToggleNote();
  }
  const Delete = () => {
    props.setId(props.id);
    props.DeleteNote();
  }
  const Edit = () => {
    isEditing = !isEditing;
  }
  const Save = () => {
    props.setId(props.id);
    props.setInput(text);
    props.SaveNote();
  }

  return(
    <div className="task flex">
      <i className={props.isCompleted ? "complete tag" : "incomplete tag"}></i>
      <div>
        {props.isEditing ? (<input type='text' name='target' title={props.name} 
          className='edit' onChange={event => setText(event.target.value)}/>) 
          : (<h3>{props.name}</h3>) }
        <p>{props.date}</p>
      </div>
      <p className={props.isEditing ? "FaCheck nope" : "FaCheck"} 
        onClick={props.isEditing ? "" : Toggle}><FaCheck/></p>
      <p className={props.isEditing ? "FaEdit green" : "FaEdit"} 
        onClick={props.isEditing ? Save : Edit}><FaEdit/></p>
      <p className={props.isEditing ? "FaTrash nope" : "FaTrash"} 
        onClick={props.isEditing ? "" : Delete}><FaTrash/></p>
    </div>
  );
}
export default Note;