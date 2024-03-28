<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import { Task } from 'types/type'


export default defineComponent({
  name: 'TaskListBody',
  data: function() {
    return {
      tasks: [] as Task [],
    }
  },
  methods: {
    ...mapGetters(['getAll']),
  },
  mounted() {
    this.tasks = this.getAll()
  }
})

</script>

<template>
    <header>
      <i>Список задач</i>
    </header>
    <main>

      <RouterLink to="/add"><input class="m_add_button" type="button" value="Добавить задачу"></RouterLink>
      
      <div class="settings">
        <div class="sort_block">

          <p class="settings_header">Сортировка</p>
          <ul class="list">
            <li class="sort_elem"><input type="radio" name="sort" style="transform:scale(1.5);margin-right: 10px;">Новые</li>
            <li class="sort_elem"><input type="radio" name="sort" style="transform:scale(1.5);margin-right: 10px;">Старые</li>
          </ul>

        </div>

        <div class="selection_block">

          <div class="section">
            <p class="settings_header">Приоритет</p>
            <ul class="list">
              <li class="selection_elem"><input type="checkbox" name="selection_priority" style="transform:scale(1.5);margin-right: 10px;">Low</li>
              <li class="selection_elem"><input type="checkbox" name="selection_priority" style="transform:scale(1.5);margin-right: 10px;">Normal</li>
              <li class="selection_elem"><input type="checkbox" name="selection_priority" style="transform:scale(1.5);margin-right: 10px;">High</li>
            </ul>
          </div>

          <div class="section">
            <p class="settings_header">Отметка</p>
            <ul class="list">
              <li class="selection_elem"><input type="checkbox" name="selection_mark" style="transform:scale(1.5);margin-right: 10px;">Research</li>
              <li class="selection_elem"><input type="checkbox" name="selection_mark" style="transform:scale(1.5);margin-right: 10px;">Design</li>
              <li class="selection_elem"><input type="checkbox" name="selection_mark" style="transform:scale(1.5);margin-right: 10px;">Development</li>
            </ul>
          </div>

        </div>
      </div>

      <div class="tasks">
        <RouterLink to="/add"><input class="add_button" type="button" value="Добавить задачу"></RouterLink>
        <div class="block_task" v-for="task in tasks" :key="task.id">
          <RouterLink :to="`view/${task.id}`" style="text-decoration: none">
            <p>Название: {{ task.name }}</p> 
            <p>Создано: {{ task.date }}</p>  
            <p v-if="task.priority.length != 0">Приоритет: {{ task.priority }}</p>  
            <p v-if="task.mark.length != 0">Отметки: {{ task.mark.join() }}</p>   
          </RouterLink>         
        </div>
        <div v-if="tasks.length === 0" style="display: flex; justify-content: center; padding-top: 20px;">Задачи ещё не созданы.</div>
      </div>
    </main>

</template>

<style scoped>

@media (max-width: 960px) {

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
  flex-direction: column;
  flex-wrap: nowrap;
}

.settings_header{
  text-transform: uppercase;
  color: #9C9C9C;
  font-size: small;
  font-weight: 600;
}

.list{
  margin: 0;
  padding: 0;
}

.sort_elem{
  list-style-type: none;
  padding-bottom: 10px;
}

.tasks{
  margin-bottom: 20px;
}


.sort_block{
  padding: 10px;
  box-shadow: -1px -1px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.selection_block{
  padding: 10px;
  box-shadow: -1px -1px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 40px;
  margin-bottom: 20px;
}

.selection_elem{
  list-style-type: none;
  padding-bottom: 10px;
}

.m_add_button{
  padding: 10px;
  border-radius: 5px;
  background-color: #0091DB;
  color: #FFF;
  border: none;
  margin-bottom: 20px;
}

.add_button{
  display: none;
}

.block_task{
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: -1px -1px 8px rgba(0, 0, 0, 0.1);
}

.block_task p{
  color: black;
}

.section{
  display: flex;
  flex-direction: column;
  padding: 10px;
}
  

}

@media (min-width: 960px){

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

.settings_header{
  text-transform: uppercase;
  color: #9C9C9C;
  font-size: small;
  font-weight: 600;
}

.list{
  margin: 0;
  padding: 0;
}

.sort_elem{
  list-style-type: none;
  padding-bottom: 10px;
}

.settings{
  width: 20%;
}

.tasks{
  width: 80%;
  padding-left: 50px;  
}

.sort_block{
  width: 100%;
  padding: 10px;
  box-shadow: -1px -1px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.selection_block{
  width: 100%;
  padding: 10px;
  box-shadow: -1px -1px 8px rgba(0, 0, 0, 0.1);
}

.selection_elem{
  list-style-type: none;
  padding-bottom: 10px;
}

.add_button{
  padding: 10px;
  border-radius: 5px;
  background-color: #0091DB;
  color: #FFF;
  border: none;
  margin-bottom: 20px;
}

.m_add_button{
  display: none;
}

.block_task{
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: -1px -1px 8px rgba(0, 0, 0, 0.1);
}

.block_task p{
  color: black;
}


}



</style>
