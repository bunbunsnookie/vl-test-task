<script lang="ts">
import { defineComponent } from 'vue';
import TaskListBody from './components/TaskListBody.vue';

export default defineComponent({
  name: 'App',
  components: {
    TaskListBody
  }
});
</script>

<template>
  <TaskListBody/>
</template>

<style scoped>

html, body{
  padding: 0; 
  margin: 0;
  background-color: #F9FAFE;
}

</style>
