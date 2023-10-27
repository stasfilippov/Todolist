import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = 'all' | 'active' | 'completed';

function App() {

	let [tasks, setTasks] = useState([
		{id: v1(), title: 'HTML&CSS', isDone: true},
		{id: v1(), title: 'JS', isDone: true},
		{id: v1(), title: 'ReactJS', isDone: false},
		{id: v1(), title: 'Rest API', isDone: false},
		{id: v1(), title: 'GraphQL', isDone: false},
	]);

	const addNewTask = (titleTask: string) => {
		let newTask = {id: v1(), title: titleTask, isDone: false}

		let newTasksState = [...tasks, newTask]
		setTasks(newTasksState)
	}

	function removeTask(id: string) {
		let filteredTasks = tasks.filter(t => t.id !== id);
		setTasks(filteredTasks);
	}

	let [filter, setFilter] = useState<FilterValuesType>('all');

	let tasksForTodolist = tasks;

	if (filter === 'active') {
		tasksForTodolist = tasks.filter(t => t.isDone === false);
	}
	if (filter === 'completed') {
		tasksForTodolist = tasks.filter(t => t.isDone === true);
	}

	function changeFilter(value: FilterValuesType) {
		setFilter(value);
	}

	return (
		<div className="App">
			<Todolist title="What to learn"
			          tasks={tasksForTodolist}
			          removeTask={removeTask}
			          changeFilter={changeFilter}
			          addNewTask={addNewTask}
			/>
		</div>
	);
}

export default App;
