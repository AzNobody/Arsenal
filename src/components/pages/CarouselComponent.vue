<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

//Utilisation de la librairie vue3-carousel, il manque énormément de doc et pas tout le style
//fonctionne correctement mais correction possible avec les bons selecteurs
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Basic',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      imagePaths: [
        "/src/assets/images_carousel/apex_skies.jpg",
        "/src/assets/images_carousel/cyber_noir.jpg",
        "/src/assets/images_carousel/mystic_chronicles.jpg",
      ],
    };
  },
})
</script>

<template>
  <Carousel>
    <Slide v-for="image in imagePaths" :key="image">
      <div class="carousel__item">
        <img :src="image" alt="Slide Image" style="width: 700px; height: 700px;">
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<style>
.carousel__item {
  //Ratio 16:9 et taille optimale avec 400x715 mais
  //les photo sont à l'origine 1024x1024 donc ratio 1:1
  //min-height: 400px;
  //width: 715px;
  min-height: 700px;
  width: 700px;
  background-color: var(--vc-clr-primary);
  color: #F2E2C4;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

//Même si l'IDE les marquent comme non utilisés, ces selecteurs affectent les données du package
//Si on veut modifier le comportement carousel il faut inspecter les selecteurs utilisés
//par le package en utilisant l'inspecteur dans chrome

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  color: #1D1F26;
}

.carousel__pagination {
  padding: 0;
  margin-top: 0;
}

.carousel__track {
  height: 500px;
  width: 80%;
}

.carousel__next--disabled, .carousel__prev--disabled {
  cursor: auto;
}
</style>
