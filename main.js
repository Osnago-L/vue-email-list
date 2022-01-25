let app = new Vue({
    el: '#app',
    data: {
      email: [],
    },
    methods:{
        getNewData: function(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((risposta) => {
                    this.email.push(risposta.data.response);
                    
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
            });
        }
    },
    created: function(){
        for (let index = 0; index < 10; index++) {
            this.getNewData()      
        }
        console.log(this.email);
    }
  })