<template>
    <section class="row justify-content-center">


        <div class="text-light d-flex justify-content-between todo-overflow">
            <div class="d-flex align-items-center">

                <input @click="completeTask(todo)" type="checkbox" class="form-check-input rounded-circle me-2 selectable"
                    id="completed" :checked="todo.completed">

                <p v-if="!todo.completed" class="mb-0 fw-bold">{{ todo.description }}</p>
                <p v-else class="mb-0 line">{{ todo.description }}</p>
            </div>
            <div>
                <button @click="destroyTodo(todo.id)" class="fs-4 btn text-light"><i
                        class="mdi mdi-delete-empty"></i></button>
            </div>
        </div>
    </section>
</template>


<script>

import { computed, ref } from 'vue';
import { ToDos } from '../models/ToDos';
import { AppState } from '../AppState';
import { todosService } from '../services/TodosService';
import Pop from '../utils/Pop';
import { logger } from '../utils/Logger';

export default {
    props: { todo: { type: ToDos, required: true } },
    setup() {
        const done = ref(true)
        const editable = ref({})
        return {
            done,
            editable,
            todos: computed(() => AppState?.todos),


            async destroyTodo(todoId) {
                try {
                    await todosService.destroyTodo(todoId)
                    Pop.success("Deleted Todo")
                } catch (error) {
                    logger.log(error)
                }
            },

            async completeTask(todo) {
                try {

                    todo.completed = !todo.completed
                    await todosService.completeTask(todo.completed, todo.id)
                } catch (error) {
                    logger.log(error)
                }
            }
        }
    }
};
</script>


<style lang="scss" scoped>
.line {
    text-decoration: line-through;
    color: #7171f594;


}
</style>