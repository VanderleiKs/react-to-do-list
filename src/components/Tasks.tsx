import {ArrowForwardIos, DeleteOutline, Check} from '@mui/icons-material'
import BgComponents from "./ui/BgComponents.tsx";
import {useNavigate} from "react-router-dom";
import ButtonBase from "./ui/ButtonBase.tsx";

export default function Tasks(props: {
    tasks: Task[],
    onTaskClick: (id: number) => void,
    onDelete: (id: number) => void
}) {
    const navigate = useNavigate();

    function onDetail(id: number) {
        const task = props.tasks.find((task) => task.id === id);
        if (!task) {
            return
        }
        const query = new URLSearchParams();
        query.set('title', task.title || '');
        query.set('description', task.description || '');
        navigate(
            {
                pathname: `/task-details/${task.id}`,
                search: `?${query}`
            })
    }

    return (
        <>
            <BgComponents>
                <ul className={`space-y-4`}>
                    {props.tasks.map((task) => (
                        <li key={task.id} className={`flex gap-2`}>
                            <ButtonBase
                                className={`w-full text-left ${task.isCompleted && 'line-through'}`}
                                onClick={() => props.onTaskClick(task.id)}
                            >{task.isCompleted &&
                                <Check className="text-green-600"/>}{task.title}</ButtonBase>
                            <ButtonBase onClick={() => onDetail(task.id)}>
                                <ArrowForwardIos/></ButtonBase>
                            <ButtonBase onClick={() => props.onDelete(task.id)}>
                                <DeleteOutline/></ButtonBase>
                        </li>
                    ))}
                </ul>
            </BgComponents>
        </>
    )
}

export interface Task {
    id: number;
    title?: string;
    description?: string;
    isCompleted?: boolean;
}