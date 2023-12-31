<template>
    <div v-if="quote" class="col-12">
        <section class="row justify-content-center">
            <div class="col-10 box-shadow text-center p-2 text-light">
                <p class="fs-2 mb-0">{{ quote.author }} </p>
                <p class="fs-2 mb-0">{{ quote.content }} </p>
            </div>
        </section>
    </div>
</template>


<script>
import { Quote } from '../models/Quote';


export default {
    props: { quote: { type: Quote, required: true } },
    setup() {
        return {}
    }
};
</script>


<style lang="scss" scoped></style>