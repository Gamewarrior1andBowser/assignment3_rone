

function Note(props) {

  return(
    <div className="task">
      <i className={props.isCompleted ? "complete" : "incomplete"}></i>
      <h3>{props.name}</h3>
      <p>{props.date}</p>
      
    </div>
  );
}
export default Note;