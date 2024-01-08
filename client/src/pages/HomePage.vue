<template>
  <div class="container-fluid bg-img">
    <section class="row justify-content-center">
      <div class="col-8">

      </div>
      <div class="col-3">
        <div class="mt-4 mb-2 px-5">
          <CreateTodoComponent />
        </div>
        <div class="box-shadow todo-overflow">
          <div class="p-3 border-style" v-for="todo in todos" :key="todo.id">
            <TodoComponent :todo="todo" />
          </div>
        </div>
      </div>
    </section>
    <section class="row justify-content-center">
      <div class="col-12 d-flex justify-content-around mt-3">
        <!-- <WeatherComponent :weather="weather" /> -->
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
      todos: computed(() => AppState?.todos),
      isHidden: false
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

.border-style {
  border-bottom: dashed .1rem #7171f594;
}

.todo-overflow {
  overflow-y: auto;
  max-height: 40svh;

  // NOTE why won't this work?

  // scrollbar-width: thin;
}
</style>
