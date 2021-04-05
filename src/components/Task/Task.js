import './Task.css';

function Task({id, complete, text, deleteTask}) {

function buttonClick(){

  deleteTask(id)

}
  return (
    <li className={{complete} ? 'task--complete' : ''}>
        <p className="task__text">{text}</p>
        { complete === false && <button className="button">Complete</button> }
        <button className="button" onClick={buttonClick}>Delete</button>
    </li>
  );
}

export default Task;