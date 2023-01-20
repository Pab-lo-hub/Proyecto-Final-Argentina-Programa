const { createApp } = Vue;
const url =  'https://randomuser.me/api/';
  createApp({
    data() {
      return {
        email: "",
      }
    },
    mounted() {
      axios
              .get(url)
              .then(response => {
              this.results = response.data
              console.log(this.results.results[0].email);
              this.email = this.results.results[0].email;
              })
    }
  }).mount('#app')
