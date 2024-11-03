import {useNavigate, useSearchParams} from "react-router-dom";
import BgComponents from "./ui/BgComponents.tsx";
import BodyBgComponent from "./ui/BodyBgComponent.tsx";
import {ArrowBackIos} from '@mui/icons-material'
import TitleBgComponent from "./ui/TitleBgComponent.tsx";

export default function TaskDetails() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    return (
        <BodyBgComponent>
            <div className="grid grid-cols-[min-content_1fr]">
                <button className="text-left text-red-500 text-xl hover:text-amber-500 py-2 max-w-8 cursor-pointer"
                        onClick={() => navigate(-1)}>
                    <ArrowBackIos/></button>
                <TitleBgComponent>Detalhes da tarefa</TitleBgComponent>
            </div>
            <BgComponents>
                <h2>{searchParams.get('title')?.toUpperCase()}</h2>
                <p className="text-amber-500">{searchParams.get('description')}</p>
            </BgComponents>
        </BodyBgComponent>
    )
}