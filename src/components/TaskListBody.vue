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
      
      <div class="settings_list">
        <div class="block_sort">

          <p class="settings_header">Сортировка</p>
          <ul class="sort">
            <li class="sort_elem"><input type="radio" name="sort" style="transform:scale(1.5);margin-right: 10px;">Новые</li>
            <li class="sort_elem"><input type="radio" name="sort" style="transform:scale(1.5);margin-right: 10px;">Старые</li>
          </ul>

        </div>
      </div>

      <div class="tasks_list">
        <button>hi</button>
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
  gap: 20px;
}

.settings_header{
  text-transform: uppercase;
  color: #9C9C9C;
  font-size: small;
  font-weight: 600;
}

.sort{
  margin: 0;
  padding: 0;
}

.sort_elem{
  list-style-type: none;
  padding-bottom: 10px;
}

.settings_list{
  width: 20%;
  display: flex; 
}

.tasks_list{
  background: #ccd;
  width: 80%; 
}

.block_sort{
  width: 100%;
  padding: 20px;
  box-shadow: -1px -1px 8px rgba(0, 0, 0, 0.1);
}


</style>
