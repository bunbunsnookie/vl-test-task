<script lang="ts">
import { defineComponent } from 'vue'
import { mapMutations } from 'vuex'
import { Task } from 'types/type'


export default defineComponent({
    name: 'AddTask',
    data: function(){
        return {
            taskName: '',
            taskPriority: '',
            taskMark: [],
            taskDescription: '',
            taskDate: new Date().toLocaleString(),
        }
    },
    methods: {
        ...mapMutations(['add']),
        NewTask() {
            const newTask: Task = {
                id: (new Date()).getTime(),
                name: this.taskName.trim().length === 0 ? 'Тестовая задача' : this.taskName,
                date: this.taskDate,
                priority:  this.taskPriority,
                mark: this.taskMark,
                description: this.taskDescription,
            }
            this.add(newTask)
        }    
    },
})




</script>

<template>

    <header>
      <i class="t">Добавить задачу</i>
    </header>

    <main>

        <form>

            <input v-model="taskName" placeholder="Название задачи" class="inp"/>

            <div class="selection_block">

                <div>
                    <p class="settings_header">Приоритет</p>
                    <ul class="container_1">
                        <li class="selection_elem"><input v-model="taskPriority" value="Low" type="radio" name="selection_priority" style="transform:scale(1.5);margin-right: 10px;">Low</li>
                        <li class="selection_elem"><input v-model="taskPriority" value="Normal" type="radio" name="selection_priority" style="transform:scale(1.5);margin-right: 10px;">Normal</li>
                        <li class="selection_elem"><input v-model="taskPriority" value="High" type="radio" name="selection_priority" style="transform:scale(1.5);margin-right: 10px;">High</li>
                    </ul>
                </div>

                <div>
                    <p class="settings_header">Отметка</p>
                    <ul class="container_2">
                        <li class="selection_elem"><input v-model="taskMark" value="Research" type="checkbox" name="selection_mark" style="transform:scale(1.5);margin-right: 10px;">Research</li>
                        <li class="selection_elem"><input v-model="taskMark" value="Design" type="checkbox" name="selection_mark" style="transform:scale(1.5);margin-right: 10px;">Design</li>
                        <li class="selection_elem"><input v-model="taskMark" value="Development" type="checkbox" name="selection_mark" style="transform:scale(1.5);margin-right: 10px;">Development</li>
                    </ul>
                </div>


            </div>

            <textarea v-model="taskDescription" placeholder="Описание задачи"></textarea>

            <RouterLink to="/" class="container_button"><button @click="NewTask" class="add_button">Добавить задачу</button></RouterLink>

        </form>

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

.t{
    
}

main{
    font-family:'Segoe UI';
    display: flex;
    justify-content: center;
    margin-top: 40px;
}

form{
    color: white;
    padding: 30px;
    box-shadow: -1px -1px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    max-width: 400px;
    justify-content: center;
    flex-direction: column;
}

.settings_header{
  text-transform: uppercase;
  color: #9C9C9C;
  font-size: small;
  font-weight: 600;
}

.container_1{
    margin: 0;
    padding: 0;
}

.container_2{
    margin: 0;
    padding: 0;
}

.selection_block{
    width: 100%;
    padding: 10px;
    display: flex;
    gap: 40px;
    margin-bottom: 20px;
}

.selection_elem{
    list-style-type: none;
    padding-bottom: 10px;
    color: black;
}

.add_button{
  padding: 10px;
  border-radius: 5px;
  background-color: #0091DB;
  color: #FFF;
  border: none;
}

.container_button{
    display: flex;
    justify-content: center;
    text-decoration: none;
}


textarea{
    margin-bottom: 20px;
    height: 20vh;
    resize: none;
}

.inp{
    height: 5vh;
}

</style>