

const getItens = async () => {
    const login = localStorage.getItem("login")
    const resposta = await fetch(`https://api.github.com/users/${login}/repos`)
        .then(res => {
            return res.json()
        })

        .then(data => {
            return data
        })

    return resposta
}


const render = async () => {
    const sectionPrincipal = document.querySelector('section')
    const mainConteiner = document.querySelector(".conteiner")
    const mainList = document.querySelector(".main__list")

    

    let img = localStorage.getItem("img")
    let user = localStorage.getItem("name")

    const conteinerTitle = document.createElement('div')
    const imgUser = document.createElement('img')
    const userName = document.createElement("h2")
    const trocarUsuario = document.createElement("button")

    trocarUsuario.addEventListener('click', () =>{
        localStorage.removeItem("name")
        localStorage.removeItem("login")
        localStorage.removeItem("img")
        location.replace('../../index.html')
    })

    trocarUsuario.innerText = "Trocar de usuário"

    conteinerTitle.classList.add('conteiner__title')



    imgUser.src = img
    imgUser.alt = user
    userName.innerText = user

    conteinerTitle.append(imgUser, userName)
    mainConteiner.append( mainList,conteinerTitle, trocarUsuario)
    sectionPrincipal.append(mainConteiner, mainList)

    const resposta = await getItens()
    
    

    resposta.forEach(repos => {
        const card = creatCard(repos)
        mainList.appendChild(card)
    })

}

const creatCard = (repos) => {
    const reposItem = document.createElement('li')
    const reposTitle = document.createElement('h2')
    const reposDescription = document.createElement('p')
    const reposLink = document.createElement('a')

    reposTitle.innerText = repos.name
    reposDescription.innerText = repos.description
    reposLink.href = repos.html_url
    reposLink.innerText = "Repositorio"

    reposItem.append(reposTitle, reposDescription, reposLink)

    return reposItem


}

render()



getItens()
