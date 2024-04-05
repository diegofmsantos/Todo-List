import { TaskContext } from "@/context/TaskContext"
import { useContext } from "react"

export const Footer = () => {

    const taskCtx = useContext(TaskContext)

    return (
        <footer>
            <div className="text-lg font-bold mt-2">Quantidade de tarefas: {taskCtx?.tasks.length}</div>
        </footer>
    )
}