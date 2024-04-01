"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useContext, useState } from "react";
import { TaskContext, TaskProvider } from "@/context/TaskContext";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox"
import { IoTrashOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";

const Page = () => {

  const taskCtx = useContext(TaskContext)
  const [taskField, setTaskField] = useState('')
  const [scratched, setScratched] = useState(false)

  const handleAddTask = () => {
      if(taskField) {
        taskCtx?.addTask(taskField)
        setTaskField('')
      }
      console.log(taskCtx?.task)
  }

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
    <TaskProvider>
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="-z-10 fixed w-screen h-screen">
          <Image
            src="/images/bg-todo-list.jpg"
            alt="background"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div
          className="w-[700px] h-[500px] bg-white/80 rounded-md p-4 flex flex-col justify-start items-center gap-2"
        >
          <h2 className="text-3xl font-bold text-teal-700">Lista de Tarefas</h2>
          <div className="flex gap-4 min-w-[500px] my-8">
            <input
              value={taskField}
              onChange={e => setTaskField(e.target.value)}
              type="text"
              className="h-8 rounded-md  outline-none px-1 border border-teal-700/70 flex-1" />
            <Button
              className="bg-teal-700 h-8"
              onClick={handleAddTask}>
              Adicionar
            </Button>
          </div>

          {taskCtx?.task.map((item) => (
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
      </div>
    </TaskProvider>
  )
}

export default Page;