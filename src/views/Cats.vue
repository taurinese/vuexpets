<template>
  <div class="about">
    <h2>Cats</h2>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Birth year</th>
                <th>Species</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="cat in cats" :key="cat">
                <td>{{ cat.name }}</td>
                <td>{{ cat.birthYear }}</td>
                <td>{{ cat.species }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
    name: "Cats",
    computed: {
        cats(){
            return this.$store.getters.cats;
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
