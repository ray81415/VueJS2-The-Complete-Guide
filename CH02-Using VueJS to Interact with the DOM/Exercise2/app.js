new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        showAlert(){
            alert('Show alert!');
        },
        storeValue(event){
            this.value = event.target.value;
        }
    }
});