<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand logo" href="/">
        <img src="@/assets/images/logo_dark.png" alt="logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse collapse-fontsize navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li
            class="nav-item menu-link"
            v-for="(menu, index) in headerMenuList"
            :key="index"
          >
            <router-link
              class="nav-link"
              aria-current="page"
              :to="menu.path"
              active-class="active"
            >
              {{ menu.name }}
            </router-link>
          </li>
        </ul>
        <div class="socials">
          <a href="https://www.facebook.com" target="_blank"
            ><img src="@/assets/images/icons/facebook.png" alt="facebook"
          /></a>
          <a href="https://myaccount.google.com" target="_blank"
            ><img src="@/assets/images/icons/gplus.png" alt="google-plus"
          /></a>
          <a href="https://www.instagram.com" target="_blank"
            ><img src="@/assets/images/icons/insta.png" alt="instagram"
          /></a>
          <a href="https://www.pinterest.ru/" target="_blank"
            ><img src="@/assets/images/icons/printerest.png" alt="printerest"
          /></a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { menuList } from "@/constants/menuLinks";

export default {
  name: "Header",
  props: {},
  data() {
    return {
      headerMenuList: menuList,
    };
  },
  components: {},
};
</script>

<style lang="scss">
@import "@/assets/layouts/colors.scss";

.navbar {
  height: 90px;
  box-shadow: 0 0 5px rgba(0, 0, 1, 0.2);
  // filter: drop-shadow(0 0 5px rgba(0,0,1,0.2));
}
.navbar-nav {
  height: 90px;
}
.logo {
  padding-right: 13%;
}
.collapse-fontsize {
  font-size: 18px;
}
.nav-link {
  background-color: $primary;
  height: 100%;
  padding: 25px 30px !important;
  white-space: nowrap;

  &.active {
    background-color: $grey4;
  }

  &:hover {
    background-color: $hovergrey;
  }
}

.socials {

  a {
    margin-right: 10px;
    width: 30px;
    height: 30px;
    border: 4px solid $hovergrey;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
  }

  @media screen and (max-width: 1399px) {
    display: none;
  }
}
</style>
