function carregar() {
    // let data = new Date()
   // let hora = data.getHours()
    let hora = 6
    if (hora >= 5 && hora < 12 ) {
        document.body.style.background  = 'linear-gradient(rgba(82, 137, 220),rgba(243, 206, 188))'
    } else if(hora >= 12 && hora < 18 ){
        document.body.style.background = 'linear-gradient(rgba(24,91,169),rgba(200, 131, 130))'
    }else {
        document.body.style.background = 'linear-gradient(rgba(15, 33, 81),rgba(41, 83, 131))'
    }
}

async function saopaulo() {
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=S%C3%A3o%20Paulo,br&APPID=c19b7aa4924e8a413f70e35c14bab9e0&units=metric'
    try{
        const resposta = await fetch (url)//aguarda o carregamento da url
        const dados = await resposta.json()//aguarda a variavel resposta e converte em json
        return dados.main.temp
    }
    catch (erro){
        console.error('erro ao buscar a temperatura',erro)//retorna algum erro que ocorra no try
        throw erro
    }
}
async function atualizarInterfaceSP(){
    const resultado = document.getElementById("tempsp")
    const msgatt = document.getElementById('atualizar1')
    msgatt.textContent = 'buscando temperatura..'

    try{
        const temp = await saopaulo()//espera requisição da função acima
        resultado.textContent = `${temp}°C`
        msgatt.textContent = 'dados atualizados com sucesso!'
    }
    catch(erro){
        msgatt.textContent = `Erro ao buscar a temperatura`
    }
}
document.getElementById('saopaulo').addEventListener("click", atualizarInterfaceSP)


async function riodejaneiro() {
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=Rio%20de%20Janeiro,br&APPID=c19b7aa4924e8a413f70e35c14bab9e0&units=metric'
    try{
        const resposta = await fetch (url)
        const dados = await resposta.json()
        return dados.main.temp
    }
    catch (erro){
        console.error ('erro ao biscar a temperatura', erro)
        throw erro
    }
}
async function atualizarInterfaceRJ(){
    const resultado = document.getElementById('temprj')
    const msgatt2 = document.getElementById('atualizar2')
    msgatt2.textContent = 'buscando temperatura...'
    try{
        const temp = await riodejaneiro()
        resultado.textContent = `${temp}°C`
        msgatt2.textContent = 'dados atualizados com sucesso!'
    }
    catch (erro){
         msgatt2.textContent = `erro ao buscar a temperatura`
    }
       
}
document.getElementById('riodejaneiro').addEventListener("click", atualizarInterfaceRJ)