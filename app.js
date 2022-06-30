//Start page
const ui = new UI 
ui.getSelect()
ui.setInput()

//conversion

document.querySelector('button').addEventListener('click', convert)

function convert(e){
    const data = new Data
    const ui = new UI
    data.getCurrent()
    .then(data => {
        ui.convert(data)
        ui.clearInput()
    })
    .catch (err =>{
            ui.clearP()
            const div = document.createElement('div')
            const result = document.querySelector('.results')
            div.className = 'error'
            div.innerHTML =
            `
            <p>
                ci scusiamo per l'inconveniente provi a selezionare 2 valute differenti
                o inserire un numero da convertire
                se sono gia selezionate potrebbe esserci un problema con il server
            </p>
            `
            result.appendChild(div)
        
            setTimeout(() => {
                div.remove()
            }, 7000);
            console.log(err)
    })
    e.preventDefault()
}

