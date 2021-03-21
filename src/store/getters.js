export const dogs = (state) => {
    return state.pets.filter(pet => {
        if(pet.species == "Dog") return pet;
    }) ;
}

export const cats = (state) => {
    return state.pets.filter(pet => {
        if(pet.species == "Cat") return pet;
    }) ;
}

export const petsCount = (state) => {
    return state.pets.length;
} ;

export const pets = (state) => {
    return state.pets;
}

export const dog = (state, getters) => (id) => {
    return getters.dogs[id];
}

export const cat = (state, getters) => (id) => {
    return getters.cats[id];
}