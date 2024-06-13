document.addEventListener("DOMContentLoaded",() => {
    const userIcon = document.querySelector('#user-icon')
    

    userIcon.addEventListener('mouseover', () => {
        const username = userIcon.getAttribute('data-username')
        userIcon.insertAdjacentHTML('afterend', `<span>${username}</span>`)
    })

    userIcon.addEventListener('mouseout', () => {
        userIcon.nextSibling.textContent = ""
    })
})