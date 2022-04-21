import React, { useState } from "react";

//create your first component
const Home = () => {
	const [newTask, setNewTask] = useState("");
	const [tasks, setTasks] = useState([]);

	function addItem() {
		if (!newTask) {
			alert("Add a task!");
			return;
		}
		const task = {
			id: Math.floor(Math.random() * 1000),
			value: newTask,
		};

		setTasks((tasks) => [...tasks, task]);
		setNewTask("");
	}
	function deleteItem(id) {
		const newArray = tasks.filter((task) => task.id !== id);
		setNewTask("");
		console.log(newArray);
	}
	return (
		<div>
			<h1>My todo List</h1>
			<input
				type="text"
				placeholder="What do you have to do today?"
				value={newTask}
				onChange={(e) => setNewTask(e.target.value)}
			/>
			<button onClick={() => addItem()}>➕ </button>
			<ul>
				{tasks.map((task) => {
					return (
						<li key={task.id}>
							{task.value}
							<button onClick={() => deleteItem(task.id)}>
								❌
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Home;
