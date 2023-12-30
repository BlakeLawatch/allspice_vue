<template>
  <div v-if="coverImg" class="bg-img">
    <!-- <img class="img-fluid" :src="coverImg" alt=""> -->
    <p>hello world</p>

  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import Pop from '../utils/Pop'
import { logger } from '../utils/Logger'
import { imagesService } from '../services/ImagesService'
import { AppState } from '../AppState.js'

export default {
  setup() {

    onMounted(() => {
      getImages()
    })

    async function getImages() {
      try {
        await imagesService.getImages()
      } catch (error) {
        // Pop.error(error)
        logger.log(error)
      }
    }
    return {
      // image: computed(() => AppState.activeImage?.largeImgUrl)
      coverImg: computed(() => `url(${AppState.activeImage?.imgUrl})`)

    }
  }
}
</script>

<style scoped lang="scss">
.bg-img {
  background-image: v-bind(coverImg);
  background-position: center;
  background-size: cover;
}
</style>
