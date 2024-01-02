<template>
  <div class="container-fluid bg-img">
    <section class="row">
      <div class="col-12">
        <!-- <img class="img-fluid" :src="image" alt=""> -->
        <WeatherComponent :weather="weather" />

      </div>
      <div>
        <QuoteComponent :quote="quote" />
      </div>
      <div>
        <p>{{ todos }}</p>
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
import { todosService } from '../services/TodosService'
import WeatherComponent from '../components/WeatherComponent.vue'
import QuoteComponent from '../components/QuoteComponent.vue'

export default {
  setup() {
    onMounted(() => {
      getImage();
      getWeather();
      getQuote();
      getTodos()
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

    async function getTodos() {
      try {
        await todosService.getTodos()
      } catch (error) {
        logger.log(error)
      }
    }



    return {
      coverImg: computed(() => `url(${AppState.activeImage?.imgUrl})`),
      weather: computed(() => AppState.weather),
      quote: computed(() => AppState.quote),
      todos: computed(() => AppState.todos)
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
  height: 100svh;
}
</style>
