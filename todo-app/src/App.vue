<template>
  <div id="app">
    <Modal v-show="showModal" v-on:close="showModal = false">
      <template v-slot:modal-text>{{ modalText }}</template>
    </Modal>
    <div class="top">
      <TodoHeader />
      <div v-if="userName">
        <TodoTitle v-bind:propCount="checkCount" v-bind:propName="userName" />
        <TodoInput v-on:addItem="addOneItem" />
      </div>
      <div v-else>
        <TodoHello v-on:addName="addUserName" />
      </div>
    </div>
    <div class="body">
        <TodoController v-on:clearAll="clearAllItem" v-on:sortItem="sortAllItem" />
        <TodoList 
          v-bind:propItems="todoItems" 
          v-on:removeItem="removeOneItem" 
          v-on:toggleItem="toggleOneItem"
          v-bind:propEmpty="isEmpty"
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
import TodoHello from "./components/TodoHello";
import Modal from "./components/common/Modal";
import getDate from "./assets/commonJS/getDate.js";

export default {
  name: "App",
  components: {
    TodoHeader,
    TodoTitle,
    TodoInput,
    TodoController,
    TodoList,
    TodoFooter,
    TodoHello,
    Modal
  },
  data() {
    return {
      todoItems: [],
      userName: "",
      showModal: false,
      modalText: ""
    };
  },
  methods: {
    addOneItem(todoItem) {
      // 빈 내용일 경우
      if(todoItem === "") {
        this.showModal = !this.showModal;
        this.modalText = "The form is empty. Please enter your task.";
        return false;
      }
      // 중복되는 내용일 경우
      for(let i = 0; i < this.todoItems.length; i++) {
        if(this.todoItems[i].item === todoItem) {
          this.showModal = !this.showModal;
          this.modalText = "I think you've already had the task.";
          return false;
        }
      }
      // 저장할 정보
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
    },
    addUserName(userName) {
      localStorage.setItem("userName", userName);
      this.userName = userName;
    }
  },
  created() {
    this.userName = localStorage.getItem("userName");

    if(localStorage.length > 0) {
      for(let i = 0; i < localStorage.length; i++) {
        if(localStorage.key(i) !== "userName") {
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
    },
    isEmpty() {
      return this.todoItems.length <= 0 ? true : false;
    }
  },
  mounted() {
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