<!-- Widok lgoowania -->
<template>
  <div class="center">
    <h2>Logowanie</h2>
    <form>
      <div class="txt_field">
        <input type="text" required />
        <span></span>
        <label>Nazwa użytkownika</label>
      </div>
      <div class="txt_field">
        <input type="password" required />
        <span></span>
        <label>Hasło</label>
      </div>
      <input type="submit" value="Logowanie" />
      <span></span>
      <div class="signup_link">
        Nie masz konta? <a href="#"><h3>Zarejestruj się</h3></a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginView",
};
</script>

<style lang="scss" scoped>
/*$color1 : #42b983;
$mainfontcolor : #f7cac9;
$color2: #2c3e50;
*/
.center {
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  background-color: #2c3e50;
  border-radius: 10px;
  text-align: center;
  padding: 15px 0;

  h2 {
    font-size: 32px;
  }
  h3 {
    font-size: 12.8px;
  }

  form {
    padding: 0 40px;
    box-sizing: border-box;
    .txt_field {
      position: relative;
      border-bottom: 2px solid #44cae8;
      margin: 30px 0;
      input {
        width: 100%;
        padding: 0 5px;
        height: 40px;
        font-size: 16px;
        border: none;
        background: none;
        outline: none;
        &:focus ~ label,
        &:valid ~ label {
          top: -12px;
          color: #f7cac9;
        }
        &:focus ~ span::before,
        &:valid ~ span::before {
          width: 100%;
        }
      }
      label {
        position: absolute;
        top: 50%;
        left: 5px;
        color: #adadad;
        transform: translateY(-50);
        font-size: 16px;
        pointer-events: none;
        transition: 0.25s;
      }
      span::before {
        content: "";
        position: absolute;
        top: 40px;
        left: 0;
        width: 100%;
        height: 2px;
        background: #2282c3;
        transition: 0.25s;
      }
    }
  }
}
.pass {
  margin: -5px 0 20px 5px;
  color: #f7cac9;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
}
input[type="submit"] {
  width: 100%;
  height: 50px;
  border: 1px solid;
  background-color: #42b983;
  border-radius: 25px;
  font-size: 18px;
  color: #f7cac9;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  &:hover {
    border-color: #2282c3;
    transition: 0.25s;
  }
}
.signup_link {
  margin: 30px 0;
  text-align: center;
  font-size: 16px;
  color: #f7cac9;
  a {
    color: #42b983;
    text-decoration: none;
  }
}
/*.signup_link a:hover{
    text-decoration: underline;
}*/
</style>
