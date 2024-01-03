<template>
    <section class="row justify-content-center">


        <div class="text-light d-flex justify-content-between">
            <div class="d-flex align-items-center">
                <input type="checkbox" class="form-check-input rounded-circle me-2" id="completed">
                <label class="form-check-label" for="completed"></label>
                <p class="mb-0">{{ todo.description }}</p>
            </div>
            <div>
                <button @click="destroyTodo(todo.id)" class=" fs-4 btn text-light"><i
                        class="mdi mdi-delete-empty"></i></button>
            </div>
        </div>
    </section>
</template>


<script>

import { computed } from 'vue';
import { ToDos } from '../models/ToDos';
import { AppState } from '../AppState';
import { todosService } from '../services/TodosService';
import Pop from '../utils/Pop';
import { logger } from '../utils/Logger';

export default {
    props: { todo: { type: ToDos, required: true } },
    setup(props) {
        return {
            todos: computed(() => AppState?.todos),


            async destroyTodo(todoId) {
                try {
                    await todosService.destroyTodo(todoId)
                    Pop.success("Deleted Todo")
                } catch (error) {
                    logger.log(error)
                }
            }
        }
    }
};
</script>


<style lang="scss" scoped></style>