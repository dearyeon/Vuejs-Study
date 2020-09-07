<template>
  <div id="app">
    <div class="top">
      <TodoHeader />
        <TodoTitle v-bind:propsdata="checkCount" />
        <TodoInput v-on:addItem="addOneItem" />
        <TodoHello />
    </div>
    <div class="body">
        <TodoController v-on:clearAll="clearAllItem" v-on:sortItem="sortAllItem" />
        <TodoList 
          v-bind:propsdata="todoItems" 
          v-on:removeItem="removeOneItem" 
          v-on:toggleItem="toggleOneItem"
        />
      <TodoFooter />
    </div>
  </div>
</template>


<script>
import TodoHeader from "./components/TodoHeader";
import TodoTitle from "./components/TodoTitle";
import TodoInput from "./components/TodoInput";
import TodoController from "./components/TodoController";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
import getDate from "./assets/commonJS/getDate.js";

export default {
  name: "App",
  components: {
    TodoHeader,
    TodoTitle,
    TodoInput,
    TodoController,
    TodoList,
    TodoFooter
  },
  data() {
    return {
      todoItems: []
    };
  },
  methods: {
    addOneItem(todoItem) {
      var value = {
        item: todoItem,
        date: `${getDate().date} ${getDate().week}`,
        time: getDate().time,
        completed: false
      };
      localStorage.setItem(todoItem, JSON.stringify(value));
      this.todoItems.push(value);
    },
    removeOneItem(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    toggleOneItem(todoItem) {
      todoItem.completed = !todoItem.completed;
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItem() {
      this.todoItems = [];
      localStorage.clear();
    },
    sortTodoLatest() {
      this.todoItems.sort(function(a,b) {
        return b.time - a.time;
      });
    },
    sortTodoOldest() {
      this.todoItems.sort(function(a,b) {
        return a.time - b.time;
      });
    },
    sortAllItem(selectedSort) {
      if(selectedSort.value === "date-desc") {
        this.sortTodoLatest();
      } else if (selectedSort.value === "date-asc") {
        this.sortTodoOldest();
      }
    }
  },
  created() {
    if(localStorage.length > 0) {
      for(let i = 0; i < localStorage.length; i++) {
        if(localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
      }
    }
  },
  computed: {
    checkCount() {
      const checkLeftItems = () => {
        let leftCount = 0;
        for(let i = 0; i < this.todoItems.length; i++) {
          if(this.todoItems[i].completed === false) {
            leftCount++;
          }
        }
        return leftCount;
      };

      const count = {
        total: this.todoItems.length,
        left: checkLeftItems()
      };
      return count;
    }
  },
  mouted() {
    this.sortTodoOldest();
  }
};
</script>

<style lang="scss">
@import "./assets/style/_reset";

.top {
  width: 100%;
  min-height: 43.6rem;
  padding: 0 $padding 4.5rem;
  background-image: linear-gradient(45deg, #3770cc 20%, #ce91c9 84%);
}

.body {
  padding: 3rem $padding;
  background-color: #efefef;
}
</style>