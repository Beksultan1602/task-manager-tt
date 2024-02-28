<template>
    <form @submit.prevent="createTask">
        <input type="text" v-model="taskName" placeholder="Название задачи" required>
        <button type="submit">Создать задачу</button>
    </form>
</template>

<script>
export default {
    name: "CreateTaskForm",
    data() {
        return {
            taskName: ''
        };
    },
    methods: {
        createTask() {
            this.$store.commit('addTask', this.taskName);
            this.taskName = '';
        }
    }
}
</script>

<style scoped>

</style>