<script lang="ts">
import { Task } from 'types/type';
import { defineComponent } from 'vue';
import { mapActions, mapMutations } from 'vuex';

export default defineComponent({
  name: 'EditingTask',
  data: function() {
    return{
      task: {} as Task,
      taskName: '',
      taskPriority: '',
      taskMark: [] as string[],
      taskDescription: '',
    }
  },
  methods: {
    ...mapActions(['getTaskById']),
    ...mapMutations(['edit']),
    EditTask() {
            const newTask: Task = {
                id: this.task.id,
                name: this.taskName.trim().length === 0 ? 'Тестовая задача' : this.taskName,
                date: this.task.date,
                priority:  this.taskPriority,
                mark: this.taskMark,
                description: this.taskDescription,
            }
            this.edit(newTask)
        }   

  },
  async mounted() {
    const task: Task = await this.getTaskById(this.$route.params.id);

    this.task = task;
    this.taskName = task.name
    this.taskDescription = task.description
    this.taskPriority = task.priority
    this.taskMark = task.mark
  }
})

</script>

<template>
    <header>
      <i>Редактирование</i>
    </header>
    <main>

      <div class="block">
        <RouterLink :to="`/view/${task.id}`"><button class="w_button">Назад</button></RouterLink>
        <div class="block_task">
          <p class="header_task_params">Название задачи </p>
          <input  class="inp" v-model="taskName" />
          <p class="header_task_params">Приоритет</p> 
          <select class="select" v-model="taskPriority">
            <option value="Low">Low</option>
            <option value="Normal">Normal</option>
            <option value="High">High</option>
          </select>
          <p class="header_task_params">Отметки</p>
          <select class="select" v-model="taskMark" multiple>
            <option value="Research">Research</option>
            <option value="Design">Design</option>
            <option value="Development">Development</option>
          </select>    
          <p class="header_task_params">Описание</p>  
          <textarea v-model="taskDescription"></textarea>      
        </div>

        <RouterLink :to="`/view/${task.id}`" exact><button @click="EditTask" class="b_button">Сохранить</button></RouterLink>

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
  display: flex;
  flex-wrap: nowrap;
}

.buttons{
  display: flex;
  justify-content: space-between;
}

.block{
  padding: 50px; 
  width: 100%; 
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

.b_button{
  padding: 10px;
  border-radius: 5px;
  background-color: #0091DB;
  color: #FFF;
  border: none;
  margin-bottom: 20px;
}


.block_task{
  padding: 20px;
  box-shadow: -1px -1px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.header_task_params{
  text-transform: uppercase;
  color: #9C9C9C;
  font-size: small;
  font-weight: 600;
}

.inp{
    height: 3vh;
    width: 100%;
}

textarea{
  margin-bottom: 20px;
  height: 20vh;
  resize: none;
  width: 100%;
}

.select{
  width: 20%;
}

@media (max-width: 960px) {

.select{
  width: 80%;
}
  

}


</style>
