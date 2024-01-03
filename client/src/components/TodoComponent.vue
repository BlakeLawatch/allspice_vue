<template>
    <section class="row justify-content-center">
        <div class="col-10 box-shadow text-center p-2 text-light">
            <p>{{ todo.description }}</p>
        </div>
        <!-- <div class="mb-3 form-check">
            <input v-model="editable.completed" type="checkbox" class="form-check-input" id="completed">
            <label class="form-check-label" for="completed"></label>
        </div> -->
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