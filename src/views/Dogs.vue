<template>
  <div class="about">
    <h2>Dogs</h2>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Birth year</th>
                <th>Species</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="dog in dogs" :key="dog">
                <td>{{ dog.name }}</td>
                <td>{{ dog.birthYear }}</td>
                <td>{{ dog.species }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>
<script>
export default {
    name: 'Dogs',
    computed: {
        dogs(){
            return this.$store.getters.dogs;
        }
    }
}
</script>
<style scoped>
    table {
        padding:5px;
        border:none;
        width:50%;
        margin:auto;
        border-radius:5px;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.24);
    }
</style>
