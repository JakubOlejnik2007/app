<template>
  <div class="wycinka-drzewa">
    <form>
      <label for="miejscowosc">Miejscowość</label>
      <input type="text" id="miejscowosc" />

      <label for="imie">Imie</label>
      <input type="text" id="imie" />

      <label for="nazwisko">Nazwisko</label>
      <input type="text" id="nazwisko" />

      <label for="urzad_gminy">Urząd gminy</label>
      <input type="text" id="urzad_gminy" />

      <label for="adres">Adres</label>
      <input type="text" id="adres" />

      <label for="adres">Adres</label>
      <input type="text" id="adres" />
    </form>
  </div>
</template>

<script>
export default {
  name: "wycinka-drzewa.vue",
  data() {
    return {
      imie: sessionStorage.getItem("imie"),
      nazwisko: sessionStorage.getItem("nazwisko"),
    };
  },
};
</script>

<style lang="scss" scoped>
.wycinka-drzewa {
  box-sizing: border-box;
  background-color: #2c3e50;
  padding: 10px;
  margin: 10px;
  color: beige;
  border-radius: 30px;
  p {
    text-align: left;
  }
  .flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    input {
      border-radius: 15px;
      padding: 5px;
      text-align: center;
    }
  }
  .heading {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    img {
      background-color: beige;
      border-radius: 30px;
    }
  }
}
input[type="submit"] {
  border-radius: 15px;
  padding: 5px;
  text-align: center;
}
</style>
