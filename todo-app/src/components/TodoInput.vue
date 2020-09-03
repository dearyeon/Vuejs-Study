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
            if(this.newTodoItem !== "") {
                this.$emit("addItem", this.newTodoItem);
                this.clearInput();
            }
        },
        clearInput() {
            this.newTodoItem = "";
        }
    }
};
</script>