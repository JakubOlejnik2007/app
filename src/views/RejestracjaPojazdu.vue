<!-- kiedy zamierzasz coś zrobić? -->
<template>
  <div class="rejestracja_pojazdu">
    <div class="heading">
      <h2>Wniosek o rejestrację pojazdu</h2>
      <img
        src="@/assets/car.png"
        alt="Wniosek o rejestrację pojazdu"
        title="Wniosek o rejestrację pojazdu"
      />
    </div>
    <form>
      <p>
        <label for="imie">Imie</label>
        <input type="text" id="imie" />
      </p>
      <p>
        <label for="nazwisko">Nazwisko lub nazwa właściciela</label>
        <input type="text" id="nazwisko" />
      </p>
      <p>
        <label for="adres_wlasciciela">Adres właściciela</label>
        <input type="text" id="adres_wlasciciela" />
      </p>
      <p>
        <label for="nazwa_organu">Nazwa organu rejestrującego</label>
        <input type="text" id="nazwa_organu" />
      </p>
      <p>
        <label for="pesel">Pesel</label>
        <input type="number" id="pesel" min="0" max="99999999999" />
      </p>
      <p>
        <label for="data_urodzenia">Data urodzenia</label>
        <input type="date" id="data_urodzenia" />
      </p>
      <p>
        <label for="miejscowosc_organu"
          >Miejscowość organu rejestrującego</label
        >
        <input type="text" id="pesel_lub_region" />
      </p>
      <p>
        Wnoszę o rejstrację - czasową rejstrację
        <label for="cel"> w celu </label>
        <input type="text" id="cel" />
        -&nbsp;wyrejestrowanie i zawiadamiam o nabyciu/zbyciu następującego
        pojazdu:
      </p>
      <p>
        <label for="rodzaj">1. Rodzaj pojazdu i przeznaczenie</label>
        <input type="text" id="rodzaj" />
      </p>
      <p>
        <label for="model">2. Marka,typ, model</label>
        <input type="text" id="model" />
      </p>
      <p>
        <label for="rok">3. Rok produkcji</label>
        <input type="number" id="rok" min="1900" max="2023" />
      </p>
      <p>
        <label for="numer">4. Numer VIN / nr nadwozia, podwozia lub ramy</label>
        <input type="text" id="numer" />
      </p>
      <p>
        <label for="numer_rejestr">5. Dotychczasowy numer rejestracyjny</label>
        <input type="text" id="numer_rejestr" />
      </p>
      <p>
        <label for="numer_kartypojazd"
          >6. Numer karty pojazdu, jeżeli była wydana</label
        >
        <input type="text" id="numer_kartypojazd" />
      </p>
      <p>
        7. Sprowadzonego z terytorium państwa członkowskiego UE
        <label for="sprowadzenie"> dnia </label>
        <input type="text" id="sprowadzenie" />
        Data nabycia/zbycia dotychczas zarejestrowanego
        <label for="pojazd"> pojazdu </label>
        <input type="text" id="pojazd" />
      </p>
      <p>
        Wnoszę o wydanie tablic rejestracyjnych indywidualnych o następującym
        wyróżniku
        <label for="tablice_rejestr"> pojazdu: </label>
        <input type="text" id="tablice_rejestr" />
      </p>
      <p>
        Oświadczam, że podane we wniosku dane i informacje są aktualne i zgodne
        ze stanem faktycznym.
      </p>
      <input type="submit" value="submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: "rejestracja_pojazdu.vue",
};
</script>

<style lang="scss" scoped>
.rejestracja_pojazdu {
  box-sizing: border-box;
  background-color: #2c3e50;
  padding: 10px;
  margin: 10px;
  color: beige;
  border-radius: 30px;
  p {
    text-align: left;
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
</style>
