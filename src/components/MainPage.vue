<template>
  <div class="hello">
      siema
      {{ posts}}
  </div>
</template>

<script>
import { ref} from 'vue'
import axios from 'axios'

export default {
  name: 'HelloWorld',



  props: {
    msg: String
  },
  data(){
    return{
      
      posts: ref([]),
      error: ref(null)
    }
  },
  methods:{
      getCocktails()
  {
    axios('https://cocktails.solvro.pl/api/v1/cocktails')
    .then((res) => {
            console.log(res);
            this.posts=res.data;
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
