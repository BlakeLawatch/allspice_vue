<template>
    <section class="row justify-content-center">


        <div class="text-light d-flex justify-content-between">
            <div class="d-flex">
                <input type="checkbox" class="form-check-input rounded-circle me-2" id="completed">
                <label class="form-check-label" for="completed"></label>
                <p class="mb-0">{{ todo.description }}</p>
            </div>
            <div>
                <p class="mb-0"><i class="mdi mdi-delete-empty"></i></p>
            </div>
        </div>
    </section>
</template>


<script>

import { computed } from 'vue';
import { ToDos } from '../models/ToDos';
import { AppState } from '../AppState';

export default {
    props: { todo: { type: ToDos, required: true } },
    setup() {
        return {

            todos: computed(() => AppState?.todos)
        }
    }
};
</script>


<style lang="scss" scoped></style>