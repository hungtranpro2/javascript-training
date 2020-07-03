let tasks = [];
const pomodoroForm = document.querySelector('.js-add-task');
const pomodoroTableBody = document.querySelector('.js-task-table-body');


const addTask = (event) => {

  event.preventDefault();

  const taskName = document.querySelector('.js-task-name').value;
  const pomodoroCount = document.querySelector('.js-pomodoro-count').value;

  tasks.push({
    taskName,
    pomodoroDone: 0,
    pomodoroCount,
    finished: false
  });

  pomodoroForm.reset();

  renderTasks(pomodoroTableBody, tasks);
}
pomodoroForm.addEventListener('submit', addTask);

const renderTasks = (tBodyNode, tasks = []) => {
  tBodyNode.innerHTML = tasks.map( ( task, id ) => `
    <tr>
      <td class = "cell-task-name">${task.taskName}</td>
      <td class = "cell-pom-count">${task.pomodoroDone} / ${task.pomodoroCount} pomodori</td>
      <td class = "cell-pom-controls">
      ${task.finished ? 'finished' : `
        <button class="js-task-done" data-id="${id}">Done</button>
        <button class="js-increase-pomodoro" data-id="${id}">Increase Pomodoro Count</button>
      `}
      <button class="js-delete-task" data-id="${id}">Delete Task</button>
      </td>
    </tr>
  ` ).join( '' );
  addTaskEventListeners();
}

const finishTask = (e)  => {
  const taskId = e.target.dataset.id;
  if(tasks[taskId].pomodoroDone!=tasks[taskId].pomodoroCount)
  {
    alert('Unfinished task');
  }
  else {tasks[taskId].finished = true;}
  renderTasks(pomodoroTableBody, tasks);
}

const increasePomodoroDone = (e) => {
  const taskId = e.target.dataset.id;
  if(tasks[taskId].pomodoroDone<tasks[taskId].pomodoroCount){
    tasks[taskId].pomodoroDone+=1;
  }
  renderTasks(pomodoroTableBody, tasks);
}

const deleteTask = (e) => {
  const taskId = e.target.dataset.id;
  tasks.splice(taskId,1);
  renderTasks(pomodoroTableBody, tasks);
}

const addTaskEventListeners = (e)=> {
  document.querySelectorAll( '.js-task-table-body .js-task-done' ).forEach( button =>
    button.addEventListener( 'click', finishTask )
  );

  document.querySelectorAll('.js-task-table-body .js-increase-pomodoro').forEach(button => button.addEventListener('click',increasePomodoroDone));

  document.querySelectorAll('.js-delete-task').forEach(button => button.addEventListener('click',deleteTask));
}
