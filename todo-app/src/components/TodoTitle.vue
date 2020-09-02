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