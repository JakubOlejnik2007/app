<template>
  <div class="rejestracja_pojazdu">
    <form>
      <label for="miejscowosc">Miejscowość</label>
      <input type="text" id="miejscowosc" />

      <label for="imie">Imie</label>
      <input type="text" id="imie" />

      <label for="nazwisko">Nazwisko lub nazwa właściciela</label>
      <input type="text" id="nazwisko" />

      <label for="adres_wlasciciela">Adres właściciela</label>
      <input type="text" id="urzad_" />

      <label for="adres">Adres</label>
      <input type="text" id="adres" />

      <label for="adres">Adres</label>
      <input type="text" id="adres" />
    </form>
  </div>
</template>

<script>
export default {
  name: "rejestracja_pojazdu.vue",
};
</script>

<style scoped>
.rejestracja_pojazdu {
  background-color: #2c3e50;
  padding: 20px;
  margin: 15px;
  color: #f7cac9;
  border-radius: 30px;
}
</style>
