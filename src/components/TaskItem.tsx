"use client"

import { TaskContext } from "@/context/TaskContext"
import { useContext, useState } from "react"
import { IoTrashOutline } from "react-icons/io5"
import { MdOutlineEdit } from "react-icons/md"

export const TaskItem = () => {

    const taskCtx = useContext(TaskContext)

    const handleEditTask = (id: number) => {
        const item = taskCtx?.tasks.find(it => it.id === id)
        if (!item) return false

        const newText = window.prompt('Editar tarefa?', item.task)
        if (!newText || newText.trim() === '') return false

        taskCtx?.editTask(id, newText)
    }

    const handleDoneTask = (id: number) => {
        taskCtx?.toggleDoneTask(id)
    }

    const handleDeleteTask = (id: number) => {
        if (window.confirm('Tem certeza que deseja excluir a tarefa?')) {
            taskCtx?.deleteTask(id)
        }
    }

    return (

        <div className="rounded-md p-1 flex flex-col gap-4 items-center justify-between w-full">
            {taskCtx?.tasks.map(item => (
                <div
                    key={item.id}
                    className="rounded-md p-1 flex items-center justify-between w-full bg-teal-100">
                    <div className="flex items-center gap-2">
                        <input type="checkbox" onClick={() => handleDoneTask(item.id)} />
                        <label
                            className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}>{item.task}</label>
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <MdOutlineEdit
                                className="w-5 h-5 mr-2 cursor-pointer"
                                onClick={() => handleEditTask(item.id)}
                            />
                            <IoTrashOutline
                                className="w-5 h-5 mr-2 cursor-pointer"
                                onClick={() => handleDeleteTask(item.id)}
                            />
                        </div>
                    </div>
                </div>
            ))
            }
        </ div>

    )
}