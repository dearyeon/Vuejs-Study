<template>
    <footer class="footer">Made by YeonJi ! ! !</footer>
</template>

<style lang="scss">
@import "@/assets/style/_mixins.scss";
.footer {
  @include flexbox;
  @include justify-content(center);
  margin-top: 8rem;
  margin-bottom: 3px;
  font-size: 1.2rem;
  color: #bdbdbd;
  &__link {
    margin-left: 0.42rem;
    &:hover {
      color: #a7a7a7;
      text-decoration: underline;
    }
  }
}
</style>