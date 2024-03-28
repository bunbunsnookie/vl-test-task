import { createStore } from 'vuex'
import { Task } from '../types/type'

export default createStore({
    state: {
        tasks: [] as Task[],
    },
    getters: {
        getAll(state) {
            return state.tasks;
        }
    },
    mutations: {
        add(state, task: Task) {
            state.tasks.push(task);

        },
        delete(state, task: Task) {
            const i = state.tasks.indexOf(task)
            state.tasks.splice(i,1)
        },
        edit(state, task: Task) {
            const i = state.tasks.findIndex((t: Task) => task.id == t.id)
            state.tasks[i] = task
        }
    },
    actions: {
        getTaskById({dispatch, commit}, id:number): Task {
            const task =  this.state.tasks.find((task: Task) => task.id == id)
            return typeof task != 'undefined' ? task as Task : {} as Task;
        }
    },
})