const app = Vue.createApp({
    data() {
        return {
            showbook: true,
            books: [
                { title: "In Search of Lost Time ", auther: "Marcel Proust", isfav: true, img: "imm/im1.jpg" },
                { title: " Ulysses ", auther: "James Joyce", isfav: false, img: "imm/im2.jpg" },
                { title: " Don Quixote ", auther: "Miguel de Cervantes", isfav: true, img: "imm/im3.jpg" },
                { title: " One Hundred Years of Solitude ", auther: "Gabriel Garcia Marquez", isfav: false, img: "imm/im4.jpg" },
            ],
            url: "https://www.facebook.com/"
        }
    },
    methods: {
        toglefav(book) {
            book.isfav = !book.isfav
        }
    },
    computed: {
        filterbooks() {
            return this.books.filter((book) => !book.isfav)
        }
    }
})
app.mount('#app ')