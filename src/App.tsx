import Tasks, {Task} from "./components/Tasks.tsx";
import AddTask from "./components/AddTask.tsx";
import {useEffect, useState} from "react";
import BodyBgComponent from "./components/ui/BodyBgComponent.tsx";
import TitleBgComponent from "./components/ui/TitleBgComponent.tsx";

export default function App() {
    const localTasks = localStorage.getItem('tasks');
    const arrayTasks = localTasks && JSON.parse(localTasks);
    const [tasks, setTasks] = useState<Task[]>(arrayTasks || []);
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    function onTaskClick(id: number) {
        const newTask: Task[] = tasks.map((task) => {
            if (task.id === id) {
                return {...task, isCompleted: !task.isCompleted}
            }
            return task
        });
        setTasks(newTask)
    }

    function onTaskDelete(id: number) {
        const newTask: Task[] = tasks.filter((task) => task.id !== id);
        setTasks(newTask)
    }

    function getLastId(): number {
        if (tasks.length === 0) {
            return tasks.length
        }
        const taskOrder = tasks.sort((a, b) => a.id - b.id)
        return taskOrder[tasks.length - 1].id
    }

    function addTask(task: Task) {
        task = {...task, id: getLastId() + 1}
        setTasks([...tasks, task]);
    }

    return (
        <BodyBgComponent>
            <TitleBgComponent>Gerenciador de tarefas</TitleBgComponent>
            <AddTask onAddTask={addTask}/>
            <Tasks tasks={tasks} onTaskClick={onTaskClick} onDelete={onTaskDelete}/>
        </BodyBgComponent>
    )
}