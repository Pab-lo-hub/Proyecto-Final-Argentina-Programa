/**
$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function (data) {
    console.log(data);
    let persona = data.results[0];
    console.log(persona);
  }
});
*/


const app = Vue.createApp({
  data() {
    return {
      email: "HARDCODEADO",
    }
  },
  methods: {
    getDataFromRandomUser: function () {
      $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function (data) {
          console.log(data);
          let persona = data.results[0];
          console.log(persona);
          this.email = persona.email;
        }
      });
    }
  }
})

const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        email: "HARDCODEADO",
      }
    },
    methods: {
      getDataFromRandomUser: function () {
        $.ajax({
          url: 'https://randomuser.me/api/',
          dataType: 'json',
          success: function (data) {
            console.log(data);
            let persona = data.results[0];
            console.log(persona);
            email = persona.email;
          }
        });
      }
    }
  }).mount('#app2')
