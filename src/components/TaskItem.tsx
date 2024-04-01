"use client"

import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox"
import { IoTrashOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import { useContext, useState } from "react";
import { TaskContext } from "@/context/TaskContext";

export const TaskItem = () => {

    const taskCtx = useContext(TaskContext)
    const [scratched, setScratched] = useState(false)

    const handleEditTask = (id: number) => {
        taskCtx?.editTask(id)
    }

    const handleDoneTask = (id: number) => {
        setScratched(!scratched)
        taskCtx?.doneTask(id)
    }

    const handleDeleteTask = (id: number) => {
        taskCtx?.deleteTask(id)
    }

    return (
        <div className="h-9 rounded-md p-1 flex items-center justify-between w-full bg-teal-100">
            {taskCtx?.tasks.map((item) => (
                <div
                    key={item.id}
                    className="h-9 rounded-md p-1 flex items-center justify-between w-full bg-teal-100">
                    <div className="flex items-center gap-2">
                        <Checkbox
                            defaultChecked={item.done}
                            onClick={() => handleDoneTask(item.id)} />
                        <Label
                            className={`text-md ${scratched ? 'line-through text-red-400' : 'text-black'}`}>
                            {item.task}
                        </Label>
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
            ))}
        </div>
    )
}