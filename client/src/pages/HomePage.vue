<template>
  <div class="col-12 bg-img">
    <section class="row">
      <div>
        <!-- <img class="img-fluid" :src="image" alt=""> -->
        <WeatherComponent :weather="weathers" />

      </div>
      <div>
        <!-- <p>{{ author.author }}</p> -->
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
import WeatherComponent from '../components/WeatherComponent.vue'

export default {
  setup() {
    onMounted(() => {
      getImage();
      getWeather();
    });
    async function getImage() {
      try {
        await imagesService.getImage();
      }
      catch (error) {
        logger.log(error);
      }
    }
    async function getWeather() {
      try {
        await weatherService.getWeather();
      }
      catch (error) {
        logger.log(error);
      }
    }
    return {
      // image: computed(() => AppState.activeImage?.imgUrl),
      coverImg: computed(() => `url(${AppState.activeImage?.imgUrl})`),
      weathers: computed(() => AppState.weather)
    };
  },
  components: { WeatherComponent }
}
</script>

<style scoped lang="scss">
.bg-img {
  background-image: v-bind(coverImg);
  background-position: center;
  background-size: cover;
}
</style>
