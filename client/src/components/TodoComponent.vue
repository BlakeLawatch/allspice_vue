<template>
    <div v-if="todo" class="col-12">

        <p>{{ todo.description }}</p>
    </div>
</template>


<script>

import { ToDos } from '../models/ToDos';

export default {
    props: { todo: { type: ToDos, required: true } },
    setup() {
        return {}
    }
};
</script>


<style lang="scss" scoped></style>../models/ToDo