<template>
  <div>
    <div>
      <h2>Dashboard</h2>
      <div class="dashboard">
        <ul>
          <li>{{ petsCount }} pets in database.</li>
          <li>{{ dogs }} dog{{ dogs > 1 ? 's' : ''}}.</li>
          <li>{{ cats }} cat{{ cats > 1 ? 's' : ''}}.</li>
        </ul>
        <button class="add" @click="activeForm = !activeForm">{{ !activeForm ? "Add a new pet" : "Hide form" }}</button>
      </div>
      <div class="form" v-if="activeForm">
        <label for="name">Name</label> <br>
        <input type="text" name="name" v-model="pet.name"> <br>
        <label for="species">Species</label> <br>
        <select name="species" v-model="pet.species">
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
        </select> <br> 
        <label for="birthYear">Year of birth</label> <br>
        <input type="number" name="birthYear"  v-model="pet.birthYear"> <br>
        <button class="add" @click="addPet">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      activeForm: false,
      pet: {
        name: '',
        species: '',
        birthYear: 0,
      }
    }
  },
  computed: {
    petsCount(){
      return this.$store.getters.petsCount;
    },
    dogs(){
      return this.$store.getters.dogs.length;
    },
    cats(){
      return this.$store.getters.cats.length;
    }
  },
  methods: {
    addPet(){
      this.$store.commit('add', {'name': this.pet.name, 'species': this.pet.species, 'birthYear': this.pet.birthYear});
      this.pet.name = '';
      this.pet.species = '';
      this.pet.birthYear = 0;
      this.activeForm = false;
      console.log(this.pet);
      console.log(this.$store.getters.pets);
    }
  },
}
</script>
<style lang="css" scoped>
  .dashboard {
    padding:5px;
    border:none;
    width:50%;
    margin:auto;
    border-radius:5px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.24);
  }
  ul {
    list-style:none;
  }
  .add {
    margin-bottom:12px;
    width:80%;
    color:white;
    background-color:blue;
    border-radius:5px;
    border:none;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.24);
    padding:5px;
    font-weight:500;
  }
  .form {
    padding:5px;
    border:none;
    width:50%;
    margin:auto;
    border-radius:5px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.24);
    margin-top:5%;
  }
  input, select {
    border-radius:5px;
    border:none;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.24);
    padding:5px;
    outline:none;
    margin-bottom:12px;
    width:40%;
  }
</style>
