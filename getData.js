class Data{
    constructor(){
        this.host = 'api.frankfurter.app'
        this.from = document.querySelector('#from').value
        this.to = document.querySelector('#to').value
        this.amount = document.querySelector('input').value
    }

    //get the value to make the option in select
    async getName(){
        const res = await fetch(`https://${this.host}/currencies`);
        const data = await res.json()
        return data
    }

    //API converter
    async getCurrent(){
        const res = await fetch (`https://${this.host}/latest?amount=${this.amount}&from=${this.from}&to=${this.to}`)
        const data = await res.json()
        return data
        
        
    }
}