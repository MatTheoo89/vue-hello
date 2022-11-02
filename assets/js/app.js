console.log('collegato ok');

const { createApp } = Vue;

createApp({
    data() {
        return {
            msg: 'Ciao Vue!',
            formatText:'format-text',
            path: 'assets/img/',
            nameImage:'you_and_me.jpg',
            isView: true,
        }
    },
    methods: {
        changeImg(newImg){
            if(newImg === this.nameImage){
                this.nameImage = 'you_and_me.jpg';
            }
            else{
                this.nameImage = newImg;
            }
        },
    },
}).mount('#app');
