<template>
  <div class="feature">
    <div class="container">
      <div class="row">
        <div class="col-md-3" v-for="item in data" :key="item.id">
          <div class="feature__col">
            <img
              class="feature__icon"
              :src="require(`@/assets/images/icons/${item.icon}.png`)"
              :alt="`${item.icon}.png`"
            />
            <h4 class="feature__title">{{ item.title }}</h4>
            <p class="feature__p">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Features",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },

  // methods: {
  //   viaJS(x) {
  //     return 
  //   }
  // },
};
</script>

<style>
</style>