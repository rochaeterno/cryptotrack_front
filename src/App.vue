<template>
  <nav class="nav-app">
    <img
      src="./assets/logo-dacxi.png"
      alt="DACXI Crypto Currency"
      class="nav-logo"
    />
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </nav>

  <div class="container-app">
    <router-view />
  </div>

  <div class="footer-app">
    <p>Powered by CoinGecko</p>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0%;
}

.nav-app {
  display: flex;
  min-height: 10vh;
  min-width: 100vw;
  transition: all 0.3s ease-in;
  background: linear-gradient(
    225deg,
    rgba(8, 8, 164, 0.6) 100%,
    rgba(0, 0, 65, 0.6) 0%
  );
  margin-bottom: 3rem;

  .nav-logo {
    object-fit: contain;
    padding: 1rem 0 1rem 1.2rem;
  }
}

.footer-app {
  font-size: 0.6rem;
  color: gray;
  margin: 1rem 0 1rem 0;
}

.container-app {
  min-height: 75vh;
}
</style>
