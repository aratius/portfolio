<template>
  <div id="app">
    <div id="top-menu">
      <router-link to="/">new2000()</router-link>
    </div>
    <div id="bottom-menu">
      <router-link to="/profile">profile</router-link>
      <router-link to="/program">program</router-link>
      <router-link to="/drawing">drawing</router-link>
      <router-link to="/contact">contact</router-link>
    </div>
    <div id="contents">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
html body {
  margin: 0;
  padding: 0;
  width: 100vw;
  overflow-x: hidden;
  background-color: #000;
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: "Josefin Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  text-align: center;
  color: #eaeaea;
  margin-top: 60px;
  position: absolute;
  right: 0;
}

a {
  text-decoration: none;
  color: white;
  display: inline-block;
}

#top-menu {
  font-size: large;
  width: 100%;
  height: 8vh;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #080808cc;
  font-size: 30px;
}

#bottom-menu {
  width: 100%;
  height: 8vh;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #fff; */
  background-color: #080808cc;
  font-size: 20px;
}

#bottom-menu a {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#bottom-menu a:hover {
  background-color: #fff;
  color: red;
}

#contents {
  width: 100%;
  height: 88%;
  margin: 8vh auto;
}

h2 {
  font-size: 30px;
}
</style>
