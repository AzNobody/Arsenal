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
        <img :src="image" alt="Slide Image" style="width: 500px; height: 500px;">
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<style>
.carousel__viewport {
  margin: 30px auto 0 auto;
}
.carousel__item {
  min-height: 500px;
  width: 500px;
  background-color: var(--vc-clr-primary);
  color: #F2E2C4;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Ensure images are clipped to the rounded corners */
  border-radius: 10px; /* Add rounded corners to the images */
}

.carousel__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  color: #B9342C;
  font-size: 24px; /* Adjust arrow size */
  position: absolute; /* Position arrows */
  top: 50%; /* Center arrows vertically */
  transform: translateY(-50%); /* Center arrows vertically */
  border-radius: 50%; /* Make arrow shapes rounded */
  background-color: #90312c; /* Match carousel background color */
  padding: 8px; /* Adjust padding for arrows */
  cursor: pointer;
}

.carousel__prev {
  left: 10px; /* Adjust left position for the previous arrow */
}

.carousel__next {
  right: 10px; /* Adjust right position for the next arrow */
}

.carousel__pagination {
  padding: 0;
  margin-top: 0;
}

.carousel__track {
  height: 500px;
  width: 80%;
}

.carousel__next--disabled,
.carousel__prev--disabled {
  cursor: auto;
}
</style>
