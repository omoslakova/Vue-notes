Vue.createApp({
    data() {
        return {
            placeholderString: 'Введите название заметки',
            title: 'Заметки',
            inputValue: '',
            notes: ['Заметка 1', 'Заметка 2']
        }
    },
    methods: {
        addNewNote() {
            if (this.inputValue!== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        removeNote(index) {
            this.notes.splice(index, 1)
        }
    }
}).mount('#app')

