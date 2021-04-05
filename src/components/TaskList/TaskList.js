import Task from '../Task/Task'
import './TaskList.css';


function TaskList({tasks, status, deleteTask}) {
  return (
    <section className={`${status}-tasks`}>
            <h2 className="heading">{status === 'incomplete' ? 'Tasks to do' : 'Completed Tasks'}</h2>
            <ul className="task-list">
            {tasks.map(task => 
            <Task 
            key = {task.id} 
            id = {task.id}
            complete = {task.completed} 
            text = {task.text}
            deleteTask = {deleteTask}/>)}
            </ul>
        </section>
  );
}

export default TaskList;