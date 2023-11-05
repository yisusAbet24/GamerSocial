const { createApp } = Vue

createApp({
    data() {
        return {
            active: 0,
            
        }
    },
    methods: {
        changeScreen(active) {
            this.active = active;
            

        },
    },
    created() {
        
    }


}).mount('#app')