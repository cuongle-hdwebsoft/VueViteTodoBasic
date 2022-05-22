<template>
  <header>
    <div class="navbar">
      <img class="logo" src="/favicon.ico" alt="logo" />
      <ul class="navbar__nav">
        <li class="navbar__item">
          <router-link to="/homepage" class="navbar__link">Home</router-link>
        </li>
        <li class="navbar__item">
          <router-link to="/news" class="navbar__link">News</router-link>
        </li>
        <li class="navbar__item">
          <router-link to="/login" class="navbar__link">Login</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.navbar {
  display: flex;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  align-items: center;
  padding: 15px 20px;

  &__nav {
    flex: 1;

    margin: 0;
    display: flex;
    list-style: none;

    & .navbar__item a {
      padding: 10px;
      text-decoration: none;
      color: #111;

      &:hover {
        font-weight: bold;
        text-decoration: underline;
      }
    }
  }

  .logo {
    width: 40px;
    height: 40px;
  }
}
</style>