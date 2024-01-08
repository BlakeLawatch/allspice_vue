<template>
    <div v-if="weather" @click="showFahrenheit = !showFahrenheit" type="button" class="d-flex text-center p-2 text-light">
        <p v-if="showFahrenheit" class="fs-2 px-4 mb-0">{{ weather.main
        }} <i class="mdi mdi-temperature-fahrenheit"></i> - {{ weather.name }}
        </p>
        <p v-else class="fs-2 px-4 mb-0">{{ weather.mainCelsius }} <i class="mdi mdi-temperature-celsius"></i> -
            {{ weather.name }}</p>
        <!-- <p class="fs-2 mb-0">{{ weather.clouds }}</p> -->
    </div>
</template>


<script>
import { ref } from 'vue';
import { Weather } from '../models/Weather';



export default {
    props: { weather: { type: Weather, required: true } },
    setup() {
        const showFahrenheit = ref(true)
        return {
            showFahrenheit
            // isFahrenheit() {
            //     this.showFahrenheit = !this.showFahrenheit
            // },

        }
    }

};
</script>


<style lang="scss" scoped></style>