<template>
  <div>
    <h2 class="gallery">Gallery</h2>
    <div id="program-item-container">
      <div :id="`img-${item.name}`" v-for="(item, key) in list" :key="key">
        <a :href="item.link">
          <img :src="imgPath[item.id - 1]" alt />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import drawing from "@/api/drawing.js";

export default {
  components: {},
  data() {
    return {
      imgPath: [
        //この画像指定の方法あんまり良くない
        require("@/assets/img/drawing/draw1.jpg"),
        require("@/assets/img/drawing/draw2.jpg"),
        require("@/assets/img/drawing/draw3.jpg"),
        require("@/assets/img/drawing/draw4.jpg"),
      ],
    };
  },
  computed: {
    list: () => drawing.find_all(),
  },
};
</script>

<style>
.gallery {
  margin-top: 0;
  margin-bottom: 20px;
}

#program-item-container {
  width: 100%;
  max-width: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
}
</style>
