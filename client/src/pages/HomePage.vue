<template>
  <div class="col-12 bg-img">
    <section class="row">
      <div>
        <!-- <img class="img-fluid" :src="image" alt=""> -->
        <WeatherComponent :weather="weather" />

      </div>
      <div>
        <QuoteComponent :quote="quote" />
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
import { quotesService } from '../services/QuotesService'
import WeatherComponent from '../components/WeatherComponent.vue'
import QuoteComponent from '../components/QuoteComponent.vue'

export default {
  setup() {
    onMounted(() => {
      getImage();
      getWeather();
      getQuote()
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

    async function getQuote() {
      try {
        await quotesService.getQuote()
      } catch (error) {
        logger.log(error)
      }
    }
    return {
      // image: computed(() => AppState.activeImage?.imgUrl),
      coverImg: computed(() => `url(${AppState.activeImage?.imgUrl})`),
      weather: computed(() => AppState.weather),
      quote: computed(() => AppState.quote)
    };
  },
  components: { WeatherComponent, QuoteComponent }
}
</script>

<style scoped lang="scss">
.bg-img {
  background-image: v-bind(coverImg);
  background-position: center;
  background-size: cover;
}
</style>
