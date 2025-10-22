<template>
  <div class="hello">
  <div class="container mt-5">
    
    <ul class="list-group">
      <li 
        v-for="cocktail in cocktailsList" 
        :key="cocktail.id" 
        class="list-group-item d-flex justify-content-between align-items-center shadow-sm mb-2"
  
      >
        <img :src="cocktail.imageUrl">
        <div>{{ cocktail.imageUrl }}</div>
      </li>
    </ul>

    <div>{{ cocktailsList }}</div>
  </div>

  </div>
</template>

<script>
import { ref} from 'vue'
import axios from 'axios'

export default {
  name: 'HelloWorld',



  data(){
    return{
      
      cocktailsList: ref([]),
      error: ref(null)
    }
  },
  methods:{
      getCocktails()
  {
    axios('https://cocktails.solvro.pl/api/v1/cocktails')
    .then((res) => {
            console.log(res);
            this.cocktailsList=res.data.data;
        })
        .catch((error) => {
          console.error(error);
        });
  }
  },

  created()
  {
  this.getCocktails();
  },
}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  height: 7rem;
  width: 7rem;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
