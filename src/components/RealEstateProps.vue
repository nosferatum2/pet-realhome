<template>
  <div class="realestateprop">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2 class="realestateprop__h2">Featured <b>Properties</b></h2>
        </div>
        <div class="col-md-12">
          <p class="realestateprop__subtitle">
            Quisque diam lorem interdum vitaapibus vitae pede. Donec eget tellus
            non erat lacinia fertum. Donec in velit vel ipsum auctovinar.
          </p>
        </div>
      </div>
      <div class="row realestateprop__cards">
        <div
          class="col-sm-12 col-md-5 col-lg-3 realestateprop__cards_card"
          v-for="(value, key) in data"
          :key="value.id"
        >
          <div class="realestateprop__img">
            <img
              :src="require(`@/assets/images/pictures/${value.image}.png`)"
              :alt="`${value.image}.png`"
            />
          </div>
          <h4 class="realestateprop__h4">{{ value.title }}</h4>
          <p class="realestateprop__location">{{ value.location }}</p>
          <p class="realestateprop__price">
            {{
              Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 0,
              }).format(value.price)
            }}
          </p>
          <ul class="realestateprop__desc">
            <li class="realestateprop__item">{{ value.desc.area }} Sq Ft</li>
            <li class="realestateprop__item">
              <!-- take a key + value -->
              {{ Object.keys(data[key].desc)[1] }} {{ value.desc.bedrooms }}
            </li>
            <li class="realestateprop__item">
              <!-- take a key + value -->
              {{ Object.keys(data[key].desc)[2] }} {{ value.desc.bathroom }}
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <button
          type="button"
          class="btn btn-danger realestateprop__btn"
          @click="this.$router.push('/property')"
        >
          ALL PROPERTIES
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RealEstateProps",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang='scss'>
</style>