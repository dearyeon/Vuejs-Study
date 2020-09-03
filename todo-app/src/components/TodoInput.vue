<template>
    <div class="add">
        <input 
            type="text" 
            class="add_input" 
            placeholder="Enter your task here" 
            v-model="newTodoItem" 
            v-on:keyup.enter="addTodoItem" 
        />
        <button class="add_button" v-on:click="addTodoItem">>
            <span class="blind">Add</span>
        </button>
    </div>
</template>

<script>
import getDate from "../assets/commonJS/getDate.js";

export default {
    data() {
        return {
            newTodoItem: ""
        };
    },
    methods: {
        addTodoItem() {
            if (this.newTodoItem !== "") {
                var value = {
                item: this.newTodoItem,
                date: `${getDate().date} ${getDate().week}`,
                time: getDate().time
                };
                localStorage.setItem(this.newTodoItem, JSON.stringify(value));
                this.clearInput();
            }
        }
    }
};
</script>

<style lang="scss">
@import "@/assets/style/_mixins.scss";
.add {
  position: relative;
  max-width: 720px;
  margin: 0 auto;
  
  .main-input {
    @include animation(fadeShow, 800ms, 1, 900ms);
  }
}
</style>