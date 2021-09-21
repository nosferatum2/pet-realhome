<template>
  <div class="wrap d-flex flex-column min-vh-100">
    <header>
      <slot name="header"></slot>
    </header>
    <main class="flex-fill container-fluid p-0">
      <div class="row">
        <slot></slot>
      </div>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

// <style lang="scss">
// .container {
//   font-size: 18px;
//   line-height: 30px;
//   color: #3c3c3c;
//   font-weight: 400;
//   font-family: "Playfair Display";
// }
//
</style>