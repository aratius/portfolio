<template>
  <div id="loading-wrapper">
    <vue-loading
      type="spiningDubbles"
      color="#aaa"
      :size="{ width: '100px', height: '100px' }"
    ></vue-loading>
  </div>
</template>

<script>
import { VueLoading } from "vue-loading-template";
export default {
  components: {
    VueLoading,
  },
};
</script>

<style>
#loading-wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  background-color: rgb(0, 0, 0);
}
</style>
