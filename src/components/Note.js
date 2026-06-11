

function Note(props) {

  return(
    <div className="task flex">
      <i className={props.isCompleted ? "complete tag" : "incomplete tag"}></i>
      <div>
        <h3>{props.name}</h3>
        <p>{props.date}</p>
      </div>
    </div>
  );
}
export default Note;