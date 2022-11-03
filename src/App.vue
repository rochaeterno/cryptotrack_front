<template>
  <nav class="nav-app w-full">
    <img
      src="./assets/logo-dacxi.png"
      alt="DACXI Crypto Currency"
      class="nav-logo"
    />
  </nav>

  <div class="container container-app px-4">
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
  min-height: 72vh;
  max-width: 100vw;
}
</style>
