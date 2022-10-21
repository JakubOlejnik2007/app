<template>
  <header>
    <img src="@/assets/logo.png" title="logo" alt="logo" />
    <h1>E - Urząd</h1>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
};
</script>

<style lang="scss">
header {
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  background-color: #42b983;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  img {
    height: 25vh;
  }
}
</style>
