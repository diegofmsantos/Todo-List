import { taskReducer } from "@/app/reducer/taskReducer";
import { Task } from "@/types/Task";
import { ReactNode, createContext, useReducer } from "react";

type TaskContextType = {
    tasks: Task[],
    addTask: (task: string) => void
    editTask: (id: number, newText: string) => void
    toggleDoneTask: (id: number) => void
    deleteTask: (id: number) => void
}
export const TaskContext = createContext<TaskContextType | null>(null)

export const TaskProvider = ({ children }: { children: ReactNode }) => {

    const [tasks, dispatch] = useReducer(taskReducer, [])

    const addTask = (task: string) => {
        dispatch({ type: 'add', payload: { task } })
    }

    const editTask = (id: number, newTask: string) => {
        dispatch({ type: 'edit', payload: { id, newTask } })
    }

    const toggleDoneTask = (id: number) => {
        dispatch({ type: 'done', payload: { id } })
    }

    const deleteTask = (id: number) => {
        dispatch({ type: 'delete', payload: { id } })
    }

    return (
        <TaskContext.Provider value={{ tasks, addTask, toggleDoneTask, deleteTask, editTask }}>{children}</TaskContext.Provider>
    )
}