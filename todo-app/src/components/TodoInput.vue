<template>
    <div class="add">
        <input 
            type="text" 
            class="add__input" 
            placeholder="Enter your task here" 
            v-model="newTodoItem" 
            v-on:keypress.enter="addTodoItem" 
        />
        <button class="add__button" v-on:click="addTodoItem">>
            <span class="blind">Add</span>
        </button>
    </div>
</template>

<script>
//import getDate from "../assets/commonJS/getDate.js";

export default {
    data() {
        return {
            newTodoItem: ""
        };
    },
    methods: {
        addTodoItem() {
            if (this.newTodoItem !== "") {
                this.$emit("addItem", this.newTodoItem);
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