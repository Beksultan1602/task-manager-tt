<template>
    <div>
        <create-task-form />
        <task-list :tasks="tasks"/>
    </div>
</template>

<script>
import CreateTaskForm from "@/components/CreateTaskForm";
import TaskList from "@/components/TaskList";
export default {
    name: "Tasks",
    components: {TaskList, CreateTaskForm},
    computed: {
        tasks() {
            return this.$store.state.tasks;
        }
    }
}
</script>

<style scoped>

</style>