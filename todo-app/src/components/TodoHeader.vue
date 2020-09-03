<template>
    <header class="header">
        <h1 class="logo">My Todo</h1>
        <p class="date">{{ timestamp }}</p>
    </header>
</template>

<script>
import getDate from "../assets/commonJS/getDate.js";

export default {
    data() {
        return {
            timestamp: ""
        };
    },
    created() {
        this.timestamp = `${getDate().month}/${getDate().date} ${getDate().week}`
    }
};
</script>

<style lang="scss">
@import "@/assets/style/_mixins.scss";
.header {
  max-width: 720px;
  margin: 0 auto;
  padding: 20px 0 55px;
  color: #fff;
  @include flexbox;
  @include align-items(center);
  @include justify-content(space-between);
  &__date {
    letter-spacing: 0.02rem;
    font-size: 1.2rem;
  }
}
.logo {
  width: 5.8rem;
  height: 1.6rem;
  background-size: 100%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-image: icon("logo", "ffffff");
}
</style>