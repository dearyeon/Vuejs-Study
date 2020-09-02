<template>
    <div class="title">
        <p class="title_message">{{ message }}</p>
        <p class="title_task">
            You've got
            <span class="title_task-total">{{ taskTotal }}</span> tasks today.
        </p>
    </div>
</template>

<script>
export default {
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
  color: #fff;

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