<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import WeatherComponent from './components/WeatherComponent.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState),
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}


footer {

  place-content: center;
  height: 32vh;
}

.box-shadow {
  background-color: rgba(7, 8, 88, 0.692);
  border-radius: 40px;
  border: solid white;
}
</style>
