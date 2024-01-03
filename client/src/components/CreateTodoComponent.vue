<template>
    <form @submit.prevent="createTodo()">
        <div class="mb-3">
            <label for="description" class="form-label"></label>
            <input v-model="editable.description" type="text" class="form-control" id="description">
        </div>
        <button type="submit"><i class="mdi mdi-plus-thick"></i></button>
    </form>
</template>


<script>
import { ref } from 'vue';
import { todosService } from '../services/TodosService';


export default {
    setup() {
        const editable = ref({})
        return {
            editable,

            async createTodo() {
                const data = editable.value
                await todosService.createTodo(data)
                editable.value = {}

            }
        }
    }
};
</script>


<style lang="scss" scoped></style>