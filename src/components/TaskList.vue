<template>
    <div>
        <h2>Список задач</h2>
        <ul>
            <li v-for="(task, index) in tasks" :key="index">
                <span>{{ task.name }}</span>
                <button @click="editTask(index)">Редактировать</button>
                <button @click="deleteTask(index)">Удалить</button>
            </li>
        </ul>
        <div v-if="showEditModal">
            <input type="text" v-model="editedTaskName" required>
            <button @click="saveEditedTask">Сохранить</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "TaskList",
    props: ['tasks'],
    data() {
        return {
            showEditModal: false,
            editedTaskIndex: null,
            editedTaskName: ''
        };
    },
    methods: {
        editTask(index) {
            this.showEditModal = true;
            this.editedTaskIndex = index;
            this.editedTaskName = this.tasks[index].name;
        },
        saveEditedTask() {
            this.$store.commit('editTask', { index: this.editedTaskIndex, name: this.editedTaskName });
            this.showEditModal = false;
            this.editedTaskIndex = null;
            this.editedTaskName = '';
        },
        deleteTask(index) {
            this.$store.commit('deleteTask', index);
        }
    }
}
</script>

<style scoped>

</style>