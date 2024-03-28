<script lang="ts">
import { Task } from 'types/type';
import { defineComponent } from 'vue';
import { mapActions, mapMutations } from 'vuex';

export default defineComponent({
  name: 'ViewTask',
  data: function() {
    return{
      task: {} as Task
    }
  },
  methods: {
    ...mapActions(['getTaskById']),
    ...mapMutations(['delete']),
    Delete(){
      console.log('1111')
      this.delete(this.task)
      this.$router.push('/')
    }
  },
  async mounted() {
    const task: Task = await this.getTaskById(this.$route.params.id);
    this.task = task;
  }
})

</script>

<template>
    <header>
      <i>Просмотр</i>
    </header>
    <main>

      <div class="block">
        <div class="buttons">
          <div>
            <RouterLink to="/"><button class="w_button">Назад</button></RouterLink>
            <RouterLink :to="`/edit/${task.id}`" exact><button class="b_button">Редактировать</button></RouterLink>
          </div>
          <button @click="Delete" class="r_button">Удалить</button>
        </div>
        <div class="block_task">
          <p class="header_task_params">Название задачи </p>
          <p>{{ task.name }}</p> 
          <p class="header_task_params">Дата создания</p> 
          <p>{{ task.date }}</p>
          <p v-if="task.priority" class="header_task_params">Приоритет</p>  
          <p v-if="task.priority" >{{ task.priority }}</p>
          <p v-if="task.mark" class="header_task_params">Отметки</p>
          <p v-if="task.mark">{{ task.mark.join() }}</p>     
          <p class="header_task_params">Описание</p>  
          <p>{{ task.description }}</p>      
        </div>
      </div>

    </main>

</template>

<style scoped>

header{
  font-family:'Segoe UI';
  font-size: x-large;
  padding: 20px;
  display: flex;
  justify-content: center;
}

main{
  font-family:'Segoe UI';
  margin: 40px 40px 100px;
  display: flex;
  flex-wrap: nowrap;
}

.buttons{
  display: flex;
  justify-content: space-between;
}

.block{
  padding: 20px; 
  width: 100%; 
}

.b_button{
  padding: 10px;
  border-radius: 5px;
  background-color: #0091DB;
  color: #FFF;
  border: none;
  margin-bottom: 20px;
}

.w_button{
  padding: 10px;
  border-radius: 5px;
  background-color: #FFF;
  color: #000;
  border: none;
  margin-bottom: 20px;
  box-shadow: -1px -1px 8px rgba(0, 0, 0, 0.1);
  margin-right: 10px;
}

.r_button{
  padding: 10px;
  border-radius: 5px;
  background-color: #e82a2a;
  color: #FFF;
  border: none;
  margin-bottom: 20px;
  box-shadow: -1px -1px 8px rgba(0, 0, 0, 0.1);
  margin-right: 10px;
}

.block_task{
  padding: 20px;
  box-shadow: -1px -1px 8px rgba(0, 0, 0, 0.1);
}

.header_task_params{
  text-transform: uppercase;
  color: #9C9C9C;
  font-size: small;
  font-weight: 600;
}

</style>
