<template>
    <section class="row justify-content-center">
        <div class="col-10 box-shadow text-center p-2 text-light">
            <p>{{ todo.description }}</p>
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