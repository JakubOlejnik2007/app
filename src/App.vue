<template>
  <MainHeader />
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <main>
    <router-view />
  </main>
  <footer>
    <MainFooter />
  </footer>
</template>

<style lang="scss">
body {
  height: 200vh;
}
#app {
  display: grid;
  grid-template-areas:
    "header"
    "nav"
    "main"
    "footer";
  grid-template-rows: auto auto 1fr auto;
  height: 100%;
  color: #f7cac9;
  /*background: rgb(54, 57, 69);
  background: linear-gradient(
    90deg,
    rgba(54, 57, 69, 1) 13%,
    rgba(52, 86, 139, 0.97) 50%,
    rgba(54, 57, 69, 1) 87%
  );*/
  /*background-image: linear-gradient(
    270deg,
    hsl(228deg 12% 24%) 0%,
    hsl(228deg 17% 28%) 4%,
    hsl(228deg 21% 32%) 11%,
    hsl(228deg 26% 36%) 19%,
    hsl(228deg 32% 39%) 30%,
    hsl(229deg 38% 42%) 43%,
    hsl(229deg 45% 44%) 56%,
    hsl(229deg 38% 42%) 69%,
    hsl(228deg 32% 39%) 80%,
    hsl(228deg 26% 36%) 90%,
    hsl(228deg 21% 32%) 96%,
    hsl(228deg 17% 28%) 100%,
    hsl(228deg 12% 24%) 100%
  );*/
  background-image: url("@/assets/carbon_fibre.png");
  /* background pattern from subtlepatterns.com */
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
nav {
  background-color: #2c3e50;
  position: sticky;
  top: 0;
  padding: 30px;
  a {
    font-weight: bold;
    color: #f7cac9;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import MainFooter from "@/components/Footer";
import MainHeader from "@/components/Header";
export default {
  components: { MainHeader, MainFooter },
};
</script>
