<template>
  <div id="homeCarosel" class="carousel slide">
    <div class="carousel-indicators home__carousel-indicators">
      <button
        type="button"
        data-bs-target="#homeCarosel"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#homeCarosel"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#homeCarosel"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item home__carousel-item active">
        <img
          src="@/assets/images/slides/pic1.png"
          class="d-block w-100"
          alt=""
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>120 Anastasia Avenue, Coral Gables</h5>
          <p>$625,000</p>
          <button type="button" class="btn btn-outline-dark">MORE INFO</button>
        </div>
      </div>
      <div class="carousel-item home__carousel-item">
        <img
          src="@/assets/images/slides/pic1.png"
          class="d-block w-100"
          alt=""
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>120 Anastasia Avenue, Coral Gables</h5>
          <p>$625,000</p>
          <button type="button" class="btn btn-outline-dark">MORE INFO</button>
        </div>
      </div>
      <div class="carousel-item home__carousel-item">
        <img
          src="@/assets/images/slides/pic1.png"
          class="d-block w-100"
          alt=""
        />
        <div class="carousel-caption d-none d-md-block">
          <h5>120 Anastasia Avenue, Coral Gables</h5>
          <p>$625,000</p>
          <button type="button" class="btn btn-outline-dark">MORE INFO</button>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#homeCarosel"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#homeCarosel"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss'>
@import "@/assets/layouts/colors.scss";

.home {
  &__carousel-indicators {
    bottom: 200px;

    & [data-bs-target] {
      height: 15px;
      width: 15px;
      border-radius: 50%;
    }
  }

  h5 {
    font-size: 48px;
    line-height: 56px;
    font-weight: 700;
    font-family: "Raleway";
  }

  &__carousel-item {
    background-color: #000000;

    img {
      opacity: 0.85;
    }

    h5,
    p {
      font-size: 2.5rem;
      color: $primary;
    }

    button {
      color: $primary;
      background: rgba(255, 254, 254, 0.2); // white, opacity 0.2
      border: 0;
      font-style: "Helvetica";
      font-family: "Helvetica";
      font-weight: bold;

      &:hover {
        background: rgba(255, 254, 254, 0.5)
      }
    }
  }
}
</style>