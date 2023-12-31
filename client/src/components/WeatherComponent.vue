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
import { Weather } from '../models/Weather';


export default {
    props: { weather: { type: Weather, required: true } },
    setup() {
        return {}

    }
};
</script>


<style lang="scss" scoped></style>