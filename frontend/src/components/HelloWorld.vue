<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
import { ref } from 'vue'
const data = ref('')
const token = ref('')
const username = ref('')
const password = ref('')

const dashboardData = ref('')

const fetchData = async () => {
  const response = await fetch('http://localhost:3000/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const json = await response.json()
  data.value = json.msg
  console.log(data.value)
}

fetchData()

const postData = async () => {
  const response = await fetch('http://localhost:3000/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ msg: 'BLA BLA BlABLA!' })
  })
  const json = await response.json()
  console.log(json)
}

const login = async () => {
  const response = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username: username.value, password: password.value })
  })
  const json = await response.json()
  token.value = json.token
  localStorage.setItem('token', token.value)

  console.log(json)
}


const getDashboard = async () => {
  const response = await fetch('http://localhost:3000/dashboard', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
  const json = await response.json()
  dashboardData.value = json.data
  console.log(json)
}



</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h2 class="green" >{{ data }}</h2>
    <button @click="postData">Post Data</button>
    <button @click="login">Login</button>



    <form @submit.prevent="login">
      <input type="text" name="username" placeholder="Username" v-model="username">
      <input type="password" name="password" placeholder="Password" v-model="password">
      <button type="submit">Submit</button>
    </form>


    <button @click="getDashboard">Get Dashboard</button>
    <h3>Dashboard data:{{ dashboardData }}</h3>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h2,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
