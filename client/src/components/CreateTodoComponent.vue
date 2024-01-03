<template>
    <form @submit.prevent="createTodo()">
        <div class="d-flex box-shadow p-2 rounded">
            <input v-model="editable.description" type="text" class="form-control form-control-sm" id="description">
            <button class="ms-1 btn text-light" type="submit"><i class="mdi mdi-plus-thick"></i></button>

        </div>
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