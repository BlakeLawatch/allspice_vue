<template>
  <div class="container-fluid bg-img">
    <section class="row justify-content-center">
      <Navbar />
      <div class="col-8">

      </div>
      <div v-if="account" class="col-3">
        <div class="mt-4 mb-2 px-5">
          <CreateTodoComponent />
        </div>
        <div class="box-shadow todo-overflow">
          <div class="p-3 border-style" v-for="todo in todos" :key="todo.id">
            <TodoComponent :todo="todo" />
          </div>
        </div>
      </div>
      <div class="col-8 d-flex align-items-end">
        <QuoteComponent :quote="quote" />
      </div>
      <div class="col-3"></div>
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
import Navbar from '../components/Navbar.vue'

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
      account: computed(() => AppState.account),
      isHidden: false
    };
  },
  components: { WeatherComponent, QuoteComponent, TodoComponent, CreateTodoComponent, Navbar }
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
  height: 50svh;

}

.todo-overflow::-webkit-scrollbar {
  border-radius: 1px;

}

// .todo-overflow::-moz-progress-bar {
//   border-radius: 1px;
// }
</style>
