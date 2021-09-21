<template>
  <footer class="footer footer_bg">
    <div class="container">
      <div class="row">
        <FooterIcons />
        <FooterNavigation :footerMenu="footerMenu" />
        <FooterClient :footerMenuClient="footerMenuClient" />
        <FooterContact />
      </div>
    </div>
  </footer>
</template>

<script>
import { menuList, menuClient } from "@/constants/menuLinks";

import FooterIcons from "@/components/Footer/FooterIcons.vue";
import FooterNavigation from "@/components/Footer/FooterNavigation.vue";
import FooterClient from "@/components/Footer/FooterClient.vue";
import FooterContact from "@/components/Footer/FooterContact.vue";

export default {
  name: "Footer",
  components: {
    FooterIcons,
    FooterNavigation,
    FooterClient,
    FooterContact,
  },
  data() {
    return {
      footerMenu: menuList,
      footerMenuClient: menuClient,
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/layouts/colors.scss";

.footer {
  color: #ffffff;
  padding: 75px 0;

  &_bg {
    background-color: $footer;
  }

  &__logo {
    padding-bottom: 20px;
  }

  &__socials,
  &__list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
  }

  &__social {
    list-style: none;
    margin-right: 15px;
    text-align: center;
    background-color: $primary;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    line-height: 30px;

    &:last-child {
      margin-right: 0;
    }
  }

  &__link {
    display: inline-block;
    color: $primary;
    text-decoration: none;
    padding-bottom: 18px;

    &_red {
      color: $red;
    }

    &_underline {
      text-decoration: underline;
      text-transform: none;
    }
  }
  //Navigation
  &__title {
    margin: 0;
    font-size: 28px;
    padding-bottom: 35px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    padding-bottom: 18px;

    & li:nth-child(2) {
      & p:nth-child(-n + 2) {
        margin-bottom: 0;
      }
    }
  }
}
</style>