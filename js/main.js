	
(()=> {

    const { createApp } = Vue
    
    createApp({
        created() {
            console.log('Vue Instance is Created');
            //Fetch the remote data here and pass it to the data object

            fetch('./data.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);

                //Push the data into the vue instance
                //The "this" keyword inside of the Vue instance ALWAYS refers to the instance itself
                this.remoteData = data;
            })
            .catch(error => console.error(error));
        },

        data() {
            return {
            welcome: 'Hello Vue!',
            name: 'Your name here',
            profs: ['Joe', 'Jhon', 'Justin', 'Jarrod'],
            remoteData: {}
                }
            },

    methods: {
        logClick() {
            console.log('Clicked!');
        }
    }

    }).mount('#team-section')
    
    
    })();
    