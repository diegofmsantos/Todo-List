import { Task } from "@/types/Task";

type AddTask = {
    type: 'add',
    payload: { task: string }
}

type EditTask = {
    type: 'edit',
    payload: { id: number, newTask: string }
}

type ToggleDoneTask = {
    type: 'done',
    payload: { id: number }
}

type DeleteTask = {
    type: 'delete'
    payload: { id: number }
}

type TaskActions = AddTask | EditTask | ToggleDoneTask | DeleteTask

export const taskReducer = (task: Task[], actions: TaskActions) => {

    switch (actions.type) {
        case 'add':
            return [...task, {
                id: task.length,
                task: actions.payload.task,
                done: false
            }]

        case 'edit':
            return task.map(t => {
                if (t.id === actions.payload.id) {
                    t.task = actions.payload.newTask
                }
                return t
            })

        case 'done':
            return task.map(t => {
                if (t.id === actions.payload.id) t.done = !t.done
                return t
            })

        case 'delete':
            return task.filter(t => t.id !== actions.payload.id)

        default:
            return task
    }

}