<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-6">
        <h1>REST API</h1>
        <button @click="getData()">Load Data</button>
      </div>
    </div>
    <div class="row pt-4">
      <div class="col-3" v-for="(post, index) in posts" :key="index">
        <div class="card mb-3">
          <div class="card-header"> {{ post.title }} </div>
          <div class="card-body"> {{ post.body }} </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      posts: [],
    }
  },
  methods: {
    getData(){
      axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
        console.log(response.data)
        this.posts = response.data
      }).catch(error => {
        console.log(error)
      })
    }
  },
  mounted(){
    // this.getData()
  }
}
</script>

<style>

</style>
