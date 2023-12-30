<template>
  <div class="col-12">
    <section class="row">
      <div>
        <img class="img-fluid" :src="image" alt="">
        <p>{{ weather.name }}</p>

      </div>

    </section>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { logger } from '../utils/Logger'
import { imagesService } from '../services/ImagesService'
import { AppState } from '../AppState.js'
import { weatherService } from '../services/WeatherService'

export default {
  setup() {

    onMounted(() => {
      getImage()
      getWeather()
    })

    async function getImage() {
      try {
        await imagesService.getImage()
      } catch (error) {
        logger.log(error)
      }
    }

    async function getWeather() {
      try {
        await weatherService.getWeather()
      } catch (error) {
        logger.log(error)
      }
    }



    return {
      image: computed(() => AppState.activeImage?.imgUrl),
      // coverImg: computed(() => `url(${AppState.activeImage?.imgUrl})`)
      weather: computed(() => AppState.weather)

    }
  }
}
</script>

<style scoped lang="scss">
// .bg-img {
//   background-image: v-bind(coverImg);
//   background-position: center;
//   background-size: cover;
// }
</style>
