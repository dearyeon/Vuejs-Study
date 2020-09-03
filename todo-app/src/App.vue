<template>
  <div id="app">
    <TodoHeader />
    <TodoTitle />
    <TodoInput />
    <TodoController />
    <TodoList />
    <TodoFooter />
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoTitle from "./components/TodoTitle";
import TodoInput from "./components/TodoInput";
import TodoController from "./components/TodoController";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
//import getDate from "./assets/commonJS/getDate.js";

export default {
  name: "App",
  components: {
    TodoHeader,
    TodoTitle,
    TodoInput,
    TodoController,
    TodoList,
    TodoFooter
  }
  /*
  data() {
    return {
      todoItems: []
    };
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
  methods: {
    removeOneItem(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    toggleOneItem(todoItem) {
      todoItem.completed = !todoItem.completed;
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
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
  mouted() {
    this.sortTodoOldest();
  }*/
};
</script>