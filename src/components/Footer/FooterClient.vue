<template>
  <div class="col-3">
    <h3 class="footer__title">For clients</h3>
    <ul class="footer__list">
      <li v-for="(menu, index) in footerMenuClient" :key="index">
        <router-link class="footer__link" aria-current="page" :to="menu.path">
          {{ menu.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    footerMenuClient: {
      type: Array,
      required: true,
    }
  }
};

</script>

<style>
</style>