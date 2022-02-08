<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-6">
        <h1>Hello World</h1>
        <form class="form-group" @submit.prevent="submitForm()">
          <input type="text" v-model="formData.text" class="form-control">
        </form>
        <ul>
          <li v-for="item in itemsList" :key="item.id">
            {{ item.text }}
            <button @click="removeItem(item.id)">Remove</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        text: '',
      },
      itemsList: [
        {
          id: 1,
          text: 'text 1'
        },
        {
          id: 2,
          text: 'text 2 '
        }
      ]
    }
  },
  methods: {
    submitForm(){
      if(this.formData.text == ''){
        console.log('please write something before submit')
        return;
      }

      this.itemsList.push({
        id: this.itemsList.length + 1,
        text: this.formData.text
      })

      localStorage.setItem('shoppingList', JSON.stringify(this.itemsList))

      this.formData.text = '';
    },
    removeItem(itemId){
      let items = this.itemsList.filter(item => item.id != itemId);

      this.itemsList = items
      localStorage.setItem('shoppingList', JSON.stringify(items))
    }
  },
  created(){
    const items = localStorage.getItem('shoppingList');

    if(items){
      this.itemsList = JSON.parse(items)
    }
  }
}
</script>

<style>

</style>
