<template>
    <div>
        <h2>{{ petData.name }} ( {{ petData.species }} )</h2>
        <p>{{ petData.birthYear }}</p>
        <img :src="petData.photo" alt="photo">
    </div>
</template>

<script>
    export default {
        name: 'Pet',
        computed: {
            petData(){
                if(this.$route.name == "Dog") return this.$store.getters.dog(this.$route.params.id);
                else if(this.$route.name == "Cat") return this.$store.getters.cat(this.$route.params.id);
                else return 'wrong request';
            }
        }
    }
</script>

<style scoped>
    img{
        width:50%;
    }
</style>