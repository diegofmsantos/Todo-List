import { taskReducer } from "@/reducer/taskReducer"
import { Task } from "@/types/Task"
import { ReactNode, createContext, useReducer } from "react"

type TaskContextType = {
    task: Task[]
    addTask: (task: string) => void
    editTask: (id: number) => void
    doneTask: (id: number) => void
    deleteTask: (id: number) => void
}

export const TaskContext = createContext<TaskContextType | null>(null)

export const TaskProvider = ({ children }: { children: ReactNode }) => {

    const [task, dispatch] = useReducer(taskReducer, [{
        id: 1,
        task: 'Estudar programação',
        done: false
    }])

    const addTask = (task: string) => {
        dispatch({ type: 'add', payload: { task } })
    }

    const editTask = (id: number) => {
        const item = task.find(it => it.id === id)
        if (!item) return false

        const newTask = window.prompt('Editar tarefa', item.task)
        if (!newTask || newTask?.trim() === '') return false

        dispatch({ type: 'edit', payload: { id, newTask } })
    }

    const doneTask = (id: number) => {
        dispatch({ type: 'done', payload: { id } })
    }

    const deleteTask = (id: number) => {
        dispatch({ type: 'delete', payload: { id } })
    }

    return (
        <TaskContext.Provider value={{ task, addTask, editTask, doneTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    )
}