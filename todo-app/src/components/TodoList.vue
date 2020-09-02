<template>
    <ul class="list">
        <li class="list_item">
            <input type="checkbox" id="list-item-l" />
            <label for="list-item-l">
                <p class="list_text">Smile! :)</p>
            </label>
            <p class="list_date">5/26</p>
            <button class="list_delete">Delete</button>
        </li>
    </ul>
</template>

<style lang="scss">
$color: #f0f0f0;
.list {
  background: $color;

  &__text {
    font-weight: bold;
  }
}
</style>