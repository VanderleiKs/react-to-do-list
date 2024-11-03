import {Task} from "./Tasks.tsx";
import {useState} from "react";
import BgComponents from "./ui/BgComponents.tsx";
import {Alert} from "@mui/material";
import Input from "./ui/Input.tsx";

export default function AddTask({onAddTask}: { onAddTask: (task: Task) => void }) {
    const [inputTitle, setInputTitle] = useState('');
    const [inputDescription, setInputDescription] = useState('');
    const [hasError, setHasError] = useState(false);

    function addTask() {
        if (inputTitle === '' || inputDescription === '') {
            setHasError(true);
            return
        }
        setHasError(false);
        const task: Task = {
            id: 0,
            title: inputTitle,
            description: inputDescription,
            isCompleted: false
        }
        onAddTask(task);
        setInputTitle('');
        setInputDescription('');
    }

    return (
        <>
            <BgComponents>
                {hasError &&
                    <Alert severity={"error"} variant={"filled"}>
                        Há campos que devem ser preenchidos
                    </Alert>
                }
                <Input type={"text"} onChange={(event: any) => setInputTitle(event.target.value)}
                       value={inputTitle}
                       placeholder={`Title of the task`}/>
                <Input type={"text"} onChange={(event: any) => setInputDescription(event.target.value)}
                       value={inputDescription}
                       placeholder={`Description of the task`}/>
                <button onClick={addTask}
                        className="bg-green-400 text-green-700 hover:bg-amber-400 w-full rounded p-2">Add Task
                </button>
            </BgComponents>
        </>
    )
}