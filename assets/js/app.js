console.log('collegato ok');

const { createApp } = Vue;

createApp({
    data() {
        return {
            msg: 'Ciao Vue!',
            formatText:'format-text',
        }
    },
    methods: {
    },
}).mount('#app');