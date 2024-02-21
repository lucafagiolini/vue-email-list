// ******** VUE ********
const { createApp } = Vue;
createApp({
    data() {
        return {
            // tutti i nostri dati
            emailList: [],

            emailCounter: 0,
        }
    },

    mounted() {

        for (let i = 0; i < 30; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {

                this.emailList.push(response.data.response);
                this.emailCounter++;
                console.log(this.emailCounter);
            });
        }
        console.log(this.emailList);

    },

}).mount("#app");
// ******** VUE ********