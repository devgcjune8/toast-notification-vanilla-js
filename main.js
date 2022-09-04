const BTN = document.querySelector('.btn');
const TOASTS = document.querySelector('.toasts')

const MSGS = [
    'Hello',
    'Lmao',
    'Hi',
    'Thank You',
    'Okay',
    'Alright',
    'Soon',
    'Wassup',
    'He gone',
    "Let's Go",
    'Oof'
]

BTN.addEventListener('click', () => createNotif())

const createNotif = () => {
    const NOTIF = document.createElement('div');
    NOTIF.classList.add('toast')

    NOTIF.innerText = getRandomMessage()

    TOASTS.appendChild(NOTIF)

    setTimeout(() => {
        NOTIF.remove()
    }, 2000)
}

const getRandomMessage = () => {
    return MSGS[Math.floor(Math.random() * MSGS.length)]
}

