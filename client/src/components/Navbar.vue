<template>
  <nav class="navbar navbar-expand-sm color px-3">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <img alt="logo" src="src/assets/img/main-logo.png" height="75" />
      </div>
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-around" id="navbarText">
      <div class="weather-border">
        <WeatherComponent :weather="weather" />
      </div>
      <div class="d-flex">
        <p class="fs-2 mb-0 ms-5 fw-bold text-light">{{ currentTime }}</p>
      </div>
      <ul class="navbar-nav me-auto">
      </ul>
      <!-- LOGIN COMPONENT HERE -->
      <!-- <div>
        <button class="btn text-light" @click="toggleTheme"><i class="mdi"
            :class="theme == 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"></i></button>
      </div> -->
      <Login />
    </div>
  </nav>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { loadState, saveState } from '../utils/Store.js';
import Login from './Login.vue';
import WeatherComponent from './WeatherComponent.vue';
import { AppState } from '../AppState';
export default {
  setup() {

    const theme = ref(loadState('theme') || 'light')
    const currentTime = ref(new Date().toLocaleTimeString())



    onMounted(() => {
      document.documentElement.setAttribute('data-bs-theme', theme.value)
      setInterval(() => {
        currentTime.value = new Date().toLocaleTimeString()
      }, 1000)

    })

    // function timer() {
    //   const currentTime = new Date()
    //   const hours = currentTime.getHours()
    //   const minutes = currentTime.getMinutes()
    //   const currentTime = hours + ':'+ minutes
    // }




    return {
      theme,
      currentTime,
      weather: computed(() => AppState.weather),


      toggleTheme() {
        theme.value = theme.value == 'light' ? 'dark' : 'light'
        document.documentElement.setAttribute('data-bs-theme', theme.value)
        saveState('theme', theme.value)
      },




    }
  },
  components: { Login, WeatherComponent }

}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 768px) {
  nav {
    height: 64px;
  }
}

.color {
  background-image: linear-gradient(to right, #070858, #7171f594);
  border-bottom: thin solid white;
}

.weather-border {
  border-left: thin dashed white;
  border-right: thin dashed white;
}
</style>
