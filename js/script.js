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

        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {

                this.emailList.push(response.data.response);
            });
        }
        console.log(this.emailList);




    },
}).mount("#app");
// ******** VUE ********