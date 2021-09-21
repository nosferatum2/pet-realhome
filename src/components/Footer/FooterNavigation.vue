<template>
  <div class="col-3">
    <h3 class="footer__title">Navigation</h3>
    <ul class="footer__list">
      <li v-for="({name, path}, index) in footerMenu" :key="index">
        <router-link class="footer__link" aria-current="page" :to="path">
          {{ name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: {
    footerMenu: {
      type: Array,
      required: true,
    }
  }
};
</script>

<style>
</style>