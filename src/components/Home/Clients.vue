<template>
  <div class="OurClients">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-3 OurClients__title">
          <h3>Our <b>Partners</b></h3>
        </div>
        <div class="col-sm-12 col-md-9 OurClients__icons">
          <img
            v-for="client in images"
            :key="client"

            :src="client.pathLong"
            :alt="client.pathShort"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Clients",
  data() {
    return {
      images: [],
    };
  },

  mounted() {
    this.importAll(
      require.context("@/assets/images/icons/clients", true, /\.png$/)
    );
  },

  methods: {
    importAll(r) {
      r.keys().forEach((key) =>
        this.images.push({ pathLong: r(key), pathShort: key })
      );
    },
  },
};
</script>

<style>
</style>