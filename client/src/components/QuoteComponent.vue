<template>
    <div v-if="quote" class="col-12">
        <section class="row justify-content-center">
            <div class="col-10 box-shadow text-center p-2 text-light">
                <p class="fs-2 mb-0 quote-body">{{ quote.content }} </p>
                <p class="fs-2 mb-0 quote-author">{{ quote.author }} </p>
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


<style lang="scss" scoped>
.quote-body {
    cursor: pointer;
}

.quote-body:hover+.quote-author {
    visibility: visible;
    opacity: 1;
    transition: 1s;
}

.quote-author {
    visibility: hidden;
    opacity: 0;
}
</style>