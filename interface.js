class UI {

    
    getSelect(){
        const data = new Data
        data.getName()
        .then(data =>{ 
            const select = document.querySelector('#from')
            const select2 = document.querySelector('#to')
            
            for (let x in data){
                //option creation
                const optionFrom = document.createElement('option');
                optionFrom.className = 'from';
                const optionTo = document.createElement('option');
                optionTo.className = 'to'               
                //get value and text in option
                optionFrom.value = x
                optionFrom.text = data[x]
    
                optionTo.value = x
                optionTo.text = data[x]
                
                //append to select
                select.appendChild(optionFrom)
                select2.appendChild(optionTo)
            }
        })
        
    }
    

    convert(data){
        const rates = data.rates
        //Take all the element to replace result
        const result = document.querySelector('p')
        const resultToReplace = document.createElement('p')
        const div = document.querySelector('.results')
        //take all the element for info button so it can be dynamic
        const infoButton = document.querySelector('#info')
        const newInfoButton = document.createElement('a')
        newInfoButton.textContent = 'INFORMAZIONI SULLA VALUTA SCELTA'
        newInfoButton.id = 'info'
        newInfoButton.style = 'display:block'
        
        
        for (let x in rates){
            //Insert response
            resultToReplace.textContent = `${data.amount} ${data.base} equivale a ${(Math.round(rates[x] * 100) / 100).toFixed(2)} ${x}`
            div.replaceChild(resultToReplace,result)
            newInfoButton.href = `./info.html#${x}`
            div.replaceChild(newInfoButton,infoButton)
        }
        
    }

    //set input for the start page
    setInput(){
        const input = document.querySelector('input')
        input.value = '1'
    }

    //set input after one search
    clearInput(){
        const input = document.querySelector('input')
        input.value = ''
    }

    clearP(){
        const result = document.querySelector('p')
        result.textContent = ''
    }
}