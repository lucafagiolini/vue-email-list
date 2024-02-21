// ******** VUE ********
const { createApp } = Vue;
createApp({
    data() {
        return {
            // tutti i nostri dati
            emailList: [],
        }
    },

    mounted() {

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
            this.emailList = response.data.response;
            console.log(this.emailList);
        });


    },
}).mount("#app");
// ******** VUE ********