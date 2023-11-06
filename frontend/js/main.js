const { createApp } = Vue

createApp({
    data() {
        return {
            screen: 0,
            
        }
    },
    methods: {
        changeScreen(screen) {
            this.screen = screen;
            

        },
    },
    created() {
        
    }


}).mount('#app')