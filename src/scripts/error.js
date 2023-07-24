

const backButton = () => {
    const backButton = document.querySelector('.back__button')

    backButton.addEventListener('click', () => {
        localStorage.removeItem("name")
        localStorage.removeItem("login")
        localStorage.removeItem("img")
        location.replace('../../index.html')
    })
}

backButton()