// wait for the page to load
document.addEventListener('DOMContentLoaded', () => {

    // get all elements having either hid-icon or show-icon class
    const hide_icon = document.querySelectorAll('.hide-icon')
    const show_icon = document.querySelectorAll('.show-icon')

    // loop through all the elements having the show-icon class and add an event on each
    show_icon.forEach(icon => {
        icon.addEventListener('click', () => {
            const targetId = icon.getAttribute("data-target")
            const extra_para = document.getElementById(targetId)
            const hideIcon = document.querySelector(`.hide-icon[data-target="${targetId}"]`)

            extra_para.style.display = 'block'
            icon.style.display = "none"
            hideIcon.style.display = 'inline'
        })
    })

    // loop through all the elements having the hide-icon class and add an event on each
    hide_icon.forEach(icon => {
        icon.addEventListener('click', () => {
            const targetId = icon.getAttribute('data-target')
            const extra_para = document.getElementById(targetId)
            const showIcon = document.querySelector(`.show-icon[data-target="${targetId}"]`)

            extra_para.style.display = 'none'
            icon.style.display = "none"
            showIcon.style.display = 'inline'
        })
    })
})