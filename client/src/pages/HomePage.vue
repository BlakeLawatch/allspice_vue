<template>
  <div class="container-fluid bg-img">
    <section class="row justify-content-center">
      <div class="col-12 d-flex align-items-end">
        <WeatherComponent :weather="weather" />
        <QuoteComponent :quote="quote" />
      </div>
    </section>
    <section class="row">
      <div v-for="todo in todos" :key="todo?.id">
        <TodoComponent :todo="todo" />
      </div>
      <div>
        <CreateTodoComponent />
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
import TodoComponent from '../components/TodoComponent.vue'
import CreateTodoComponent from '../components/CreateTodoComponent.vue'

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
      todos: computed(() => AppState?.todos)
    };
  },
  components: { WeatherComponent, QuoteComponent, TodoComponent, CreateTodoComponent }
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
