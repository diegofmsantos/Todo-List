"use client"

import { TaskContext } from "@/context/TaskContext"
import { useContext, useState } from "react"
import { Button } from "./ui/button"

export const Header = () => {

    const taskCtx = useContext(TaskContext)

    const [taskField, setTaskField] = useState('')

    const handleAddTask = () => {
        taskCtx?.addTask(taskField)
        setTaskField('')
    }

    return (
        <header>
            <h2 className="text-3xl text-center font-bold text-teal-700">Lista de Tarefas</h2>
            <div className="flex flex-col gap-4 my-8 md:flex-row md:w-[600px]">
                <input
                    value={taskField}
                    onChange={e => setTaskField(e.target.value)}
                    type="text"
                    className="h-8 rounded-md  outline-none px-1 border border-teal-700/70 flex-1"
                    autoFocus />
                <Button className="bg-teal-700 h-8" onClick={handleAddTask}>Adicionar</Button>
            </div>
        </header>
    )
}