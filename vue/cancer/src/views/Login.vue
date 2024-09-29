<template>
  <div>
    <div class="wrapper">
      <div class="header">
        <div class="banner">
          <a class="logo">癌憂Away</a>
        </div>
      </div>
      <div class="login">
        <router-link to="/userLogin"
          ><button class="userLogin">一般登入</button></router-link
        >
        <router-link to="/adminLogin"
          ><button class="adminLogin">醫護人員登入</button></router-link
        >
      </div>
    </div>
  </div>
</template>


<script>
export default {};
</script>

<style scoped>
.login {
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.login button {
  margin-top: 70px;
  color: white;
  font-size: 50px;
  border: 0;
  font-weight: bold;
}

.login button:hover {
  background-color: #a0b096;
}

.userLogin {
  background-color: #859a75;
}

.adminLogin {
  background-color: #859a75;
}

@media screen and (max-width: 550px) {
  .login {
    height: 400px;
  }

  .login button {
    width: 270px;
    height: 150px;
    font-size: 40px;
  }
}

@media screen and (min-width: 550px) and (max-width: 768px) {
  .login {
    height: 450px;
  }

  .login button {
    width: 300px;
    height: 160px;
    font-size: 45px;
  }
}

@media screen and (min-width: 768px) {
  .header {
    height: 100px;
  }

  .banner {
    height: 100px;
    display: flex;
    justify-content: center;
  }

  .logo {
    font-size: 60px;
  }
  .login {
    height: 500px;
  }

  .login button {
    width: 350px;
    height: 200px;
    font-size: 50px;
  }
}
</style>