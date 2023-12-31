<template>
    <div v-if="weather" class="col-12">
        <section class="row justify-content-center">
            <div class="col-10 box-shadow text-center p-2 text-light">
                <p class="fs-2 mb-0">{{ weather.main }} <i class="mdi mdi-temperature-fahrenheit"></i> - {{ weather.name }}
                </p>
                <p class="fs-2 mb-0">{{ weather.mainCelsius }} <i class="mdi mdi-temperature-celsius"></i> -
                    {{ weather.name }}</p>
            </div>
        </section>

    </div>
</template>


<script>
import { computed } from 'vue';
import { Weather } from '../models/Weather';
import { AppState } from '../AppState';


export default {
    props: { weather: { type: Weather, required: true } },
    setup() {
        return {}

    }
};
</script>


<style lang="scss" scoped>
.box-shadow {
    background-color: rgba(128, 128, 128, 0.432);
    border-radius: 40px;
}
</style>