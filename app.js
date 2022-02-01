const app = Vue.createApp({
    data() {
        return {
            firstName: 'Yoshitake',
            lastName: 'Shiraishi',
            email: 'loveSisterMiyazawa@gmail.com',
            gender: 'male',
            picture: 'https://blog-imgs-135.fc2.com/c/d/4/cd4c7240tiwp/17d8db45c87b5e949e80.jpg',
        }
    },
    methods: {
        async getUser() {
            // const res = await fetch('https://randomuser.me/api')
            // const { results } = await res.json()
            // console.log(results)

            // this.firstName = results[0].name.first
            // this.lastName = results[0].name.last
            // this.email = results[0].email
            // this.gender = results[0].gender
            // this.picture = results[0].picture.large

            this.firstName = 'Ashiripa'
            this.lastName = 'Osoma'
            this.email = 'loveBrain@gmail.com'
            this.gender = 'female'
            this.picture = 'https://cdn-ak.f.st-hatena.com/images/fotolife/c/chocomotan/20180619/20180619021604.png'
        },
    },
})

app.mount('#app')