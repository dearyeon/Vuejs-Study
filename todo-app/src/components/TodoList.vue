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
            <p class="list_date">{{ todoItem.date }}</p> <!-- 빼야하는가? -->
              <button class="list_delete" v-on:click="removeTodo(todoItem, index)">
                <div class="blind">Delete</div>
              </button>
        </li>
    </ul>
</template>

<script>
export default {
  //props: ["propsdata"],
  data() {
    return {
      todoItems: []
    };
  },
  created() {
    if(localStorage.length > 0) {
      for(let i = 0; i < localStorage.length; i++){
        if(localStorage.key(i) != "loglevel:webpack-dev-server") {
          this.todoItems.push(
            //JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
      }
    }
  },
  methods: { 
    toggleComplete(todoItem) {
      todoItem.completed = !todoItem.completed;
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
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
