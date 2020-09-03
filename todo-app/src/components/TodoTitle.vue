<template>
  <div class="title">
    <p class="title__message">{{ message }}</p>
    <p class="title__task">
      You've got
      <span class="title__task-total">{{ taskTotal }}</span> tasks today.
    </p>
  </div>
</template>

<script>
export default {
  //props: ["propsdata"],
    data() {
        return {
            message: "Hello, YeonJi.",
            taskTotal: 5
        };
    }
}
</script>

<style lang="scss">
.title {
  max-width: 720px;
  margin: 0 auto;
  letter-spacing: 0.03rem;
  color: rgb(197, 125, 255);

  &_message {
    font-size: 1.6rem;
  }

  &_task {
    margin-top: 3.5rem;
    margin-bottom: 5rem;
    font-weight: bold;

    &-top {
      display: block;
      font-size: 2.6rem;
    }

    &-total {
      font-size: 5.4rem;
      line-height: 110%;
    }
  }
}
</style>