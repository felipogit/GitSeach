

export const getProfiles = () => {
    const button = document.querySelector('.perfil__button')
    const user = document.querySelector('.input__velue')


    button.addEventListener('click', async ()=> {
        const userName = user.value
        
        const url  = `https://api.github.com/users/${userName}`
        
        const resposta = await fetch(url)
        .then(res => {
            if(res.ok){
                return res.json()
            }else{
                throw new Error('Usuário não encontrado')
            }
        })

        .then(data => {
            localStorage.setItem("name", data.name)
            localStorage.setItem("login", data.login)
            localStorage.setItem("img", data.avatar_url)

            location.href = 'src/pages/profile.html'
        })
        .catch(() => {
            location.href = 'src/pages/error.html'

            
        })
        
        return resposta
        
    })
}

getProfiles()

