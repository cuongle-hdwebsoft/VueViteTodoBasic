<template>
  <header>
    <div class="navbar">
      <ul class="navbar__nav">
        <li class="navbar__item">
          <router-link to="/" class="navbar__link"
            ><el-icon><HomeFilled /></el-icon><span>Home</span></router-link
          >
        </li>
        <li class="navbar__item">
          <router-link to="/news" class="navbar__link"
            ><el-icon><Document /></el-icon><span>News</span></router-link
          >
        </li>
        <li class="navbar__item">
          <router-link to="/login" class="navbar__link"
            ><el-icon><SwitchButton /></el-icon><span>Login</span></router-link
          >
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { HomeFilled, Document, SwitchButton } from "@element-plus/icons-vue";
export default {
  components: {
    HomeFilled,
    Document,
    SwitchButton,
  },
};
</script>

<style lang='scss' scoped>
.navbar {
  display: flex;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  align-items: center;
  padding: 20px 0px;
  background-color: $primary-bg;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  z-index: 9999;
  height: 60px;

  &__nav {
    flex: 1;
    margin: 0;
    display: flex;
    list-style: none;
    padding: 0;

    & .navbar__item a {
      padding: 10px 20px;
      text-decoration: none;
      color: $white-text;

      &:hover {
        font-weight: bold;
        text-decoration: underline;
      }
    }
  }

  &__link {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 40px;
    height: 40px;
  }

  & span {
    margin-left: 5px;
  }
}
</style>