import {createStore} from 'vuex'

export default createStore({
    state: {
        tasks: []
    },
    mutations: {
        addTask(state, taskName) {
            state.tasks.push({name: taskName});
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        deleteTask(state, index) {
            state.tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        initializeStore(state) {
            const savedTasks = localStorage.getItem('tasks');
            if (savedTasks) {
                state.tasks = JSON.parse(savedTasks);
            }
        },
        editTask(state, { index, name }) {
            state.tasks[index].name = name;
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
    },
    actions: {
        initializeStore({commit}) {
            commit('initializeStore');
        }
    },
    modules: {}
})
