<script lang="ts">
export default {
  name: 'TaskListBody'
}

</script>

<template>
    <header>
      <i>Список задач</i>
    </header>
    <main>
      
      <div class="settings">
        <div class="sort_block">

          <p class="settings_header">Сортировка</p>
          <ul class="list">
            <li class="sort_elem"><input type="radio" name="sort" style="transform:scale(1.5);margin-right: 10px;">Новые</li>
            <li class="sort_elem"><input type="radio" name="sort" style="transform:scale(1.5);margin-right: 10px;">Старые</li>
          </ul>

        </div>

        <div class="selection_block">

          <p class="settings_header">Приоритет</p>
          <ul class="list">
            <li class="selection_elem"><input type="checkbox" name="selection_priority" style="transform:scale(1.5);margin-right: 10px;">Low</li>
            <li class="selection_elem"><input type="checkbox" name="selection_priority" style="transform:scale(1.5);margin-right: 10px;">Normal</li>
            <li class="selection_elem"><input type="checkbox" name="selection_priority" style="transform:scale(1.5);margin-right: 10px;">High</li>
          </ul>

          <p class="settings_header">Отметка</p>
          <ul class="list">
            <li class="selection_elem"><input type="checkbox" name="selection_mark" style="transform:scale(1.5);margin-right: 10px;">Research</li>
            <li class="selection_elem"><input type="checkbox" name="selection_mark" style="transform:scale(1.5);margin-right: 10px;">Design</li>
            <li class="selection_elem"><input type="checkbox" name="selection_mark" style="transform:scale(1.5);margin-right: 10px;">Development</li>
          </ul>

        </div>
      </div>

      <div class="tasks">
        <input class="add_button" type="button" value="Добавить задачу">
        <div class="block_task">
          <p>Тестовая задача №1</p> 
          <p>Создано:</p>  
          <p>Приоритет:</p>  
          <p>Отметки:</p>             
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

.block_task{
  padding: 20px;
  box-shadow: -1px -1px 8px rgba(0, 0, 0, 0.1);
}

</style>
