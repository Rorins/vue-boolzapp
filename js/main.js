const app = new Vue({
    el: "#app",
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            }, {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],

            },
        ],
        //Contatore
        currentPerson: 0,
        message: "",
        typing:"",
    },
    //Setto la chat rendendo il contatore uguale al mio parametro
    //che sar?? la posizione della mia lista
    methods: {
        setChat(personIndex) {
            this.currentPerson = personIndex;
        },
        sendMessage() {
            if (this.message !== "") {
                this.contacts[this.currentPerson].messages.push({
                    date: '10/01/2020 15:30:55',
                    text: this.message,
                    status: 'sent'
                },
                );
            //Puliamo lo spazio
            this.message = "";

            setTimeout(() => {
                this.contacts[this.currentPerson].messages.push({
                date: '10/01/2020 15:30:55',
                text: "Mi sa che hai sbagliato numero",
                status: 'received'
            });
            }, 1000);
            }
            
        },
        searching(){
            for(let i=0; i<this.contacts.length; i++){
            if(this.contacts[i].name.toLowerCase().includes(this.typing.toLowerCase())){
                this.contacts[i].visible = true}
            else{this.contacts[i].visible = false}
             }},

        menu(){
            this.$refs["dropdownMenu"].classList.toggle('d-none')
        }
    },
})