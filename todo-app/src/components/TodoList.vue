<template>
    <ul class="list">
        <li class="list_item" v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item">
            <input 
              type="checkbox" 
              v-bind:id="todoItem.item"
              v-bind:checked="todoItem.completed === true"
              v-on:change="toggleComplete(todoItem)"
            />
            <label v-bind:for="todoItem.item" class="list_label">
                <p class="list_text">{{ todoItem.item }}</p>
            </label>
            <div class="list_ringt">
              <button class="list_delete" v-on:click="removeTodo(todoItem, index)">
                <div class="blind">Delete</div>
              </button>
              <p class="list_date">{{ todoItem.date }}</p> <!-- 빼야하는가? -->
            </div>
        </li>
    </ul>
</template>

<script>
export default {
  props: ["propsdata"],
  data() {
    return {
      todoItems: []
    };
  },
  created() {
    if(localStorage.length > 0) {
      for(let i = 0; i < localStorage.length; i++){
        if(localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
      }
    }
  },
  methods: {
    toggleComplete(todoItem) {
      this.$emit("toggleItem", todoItem);
    },
    removeTodo(todoItem, index) {
      this.$emit("removeItem", todoItem, index);
    }
  }
}
</script>

<style lang="scss">
$color: #f0f0f0;
.list {
  background: $color;

  &__text {
    font-weight: bold;
  }
}
</style>