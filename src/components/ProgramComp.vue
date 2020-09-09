<template>
  <div id="program-wrapper">
    <h2 class="gallery">Gallery</h2>
    <div id="program-item-container">
      <div :id="`img-${item.name}`" v-for="(item, key) in list" :key="key">
        <router-link :to="`program/${item.id}`">
          <img :src="imgPath[item.id - 1]" alt />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import program from "@/api/program.js";
export default {
  data() {
    return {
      imgPath: [
        //この画像指定の方法あんまり良くない
        require("@/assets/img/program/1.png"),
        require("@/assets/img/program/2.png"),
        require("@/assets/img/program/3.png"),
        require("@/assets/img/program/4.png"),
      ],
    };
  },
  computed: {
    list: () => program.find_all(),
  },
};
</script>

<style>
#program-wrapper {
  width: 100%;
}

img {
  width: 80%;
  max-width: 600px;
  margin: 5vh 0;
  border: 3px solid #9e911b;
}

img:hover {
  border: 3px solid #c5c1c1;
}
</style>
