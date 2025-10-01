import './style.css'

console.warn('// ! Callbacks');
// Una función que se pasa como argumento a otra función

const texto1 = () => {
    console.log("Soy el texto 1")
}

console.log(texto1); //  REFERENCIA FUNCIÓN -> Mostrando la referencia de la función.
texto1() // Ejecutando, invocando, llamando a la función

const prueba = (callback) => {
    console.log(callback) // la referencia de la función texto1
    console.log('Otra cosa')
    console.log('------')
    console.log('------')
    console.log('Otra cosa más')
    callback()
}

//prueba(texto1)

console.warn('// ! EVENTOS');

// ! addEventListener()

const btnClick = document.querySelector('#btn-click')
console.log(btnClick)

// btnClick.addEventListener('<tipo-evento>', callback)
btnClick.addEventListener('click', function() {
    console.log('Hicieron click')
})

btnClick.addEventListener('click', function() {
    console.log('Otro evento. Hicieron click!')
})

// https://developer.mozilla.org/en-US/docs/Web/API/Event

function v1() {
    const btnUno = document.querySelector('#btn-1')
    const btnDos = document.querySelector('#btn-2')
    const btnTres = document.querySelector('#btn-3')
    const btnCuatro = document.querySelector('#btn-4')

    console.log(btnUno)
    console.log(btnDos)
    console.log(btnTres)
    console.log(btnCuatro)

    btnUno.addEventListener('click', () => {
        btnUno.style.backgroundColor = 'crimson'
    })
    btnDos.addEventListener('click', () => {
        btnDos.style.backgroundColor = 'gray'
    })
    btnTres.addEventListener('click', () => {
        btnTres.style.backgroundColor = 'lightgreen'
    })
    btnCuatro.addEventListener('click', () => {
        btnCuatro.style.backgroundColor = '#5f85eb'
    })
}

// v1()

function v2() {
    const botones = document.querySelectorAll('div button')
    
    console.log(botones)

    botones[0].addEventListener('click', () => {
        botones[0].style.backgroundColor = 'crimson'
    })
    botones[1].addEventListener('click', () => {
        botones[1].style.backgroundColor = 'gray'
    })
    botones[2].addEventListener('click', () => {
        botones[2].style.backgroundColor = 'lightgreen'
    })
    botones[3].addEventListener('click', () => {
        botones[3].style.backgroundColor = '#5f85eb'
    })
}

// v2()

function v3() {
    const botones = document.querySelectorAll('div button')
    
    console.log(botones)

    const arrayColores = ['crimson', 'rebeccapurple', 'darkblue', 'darkorange']

    botones.forEach((boton, i) => {
        boton.addEventListener('click', () => {
            boton.style.backgroundColor = arrayColores[i]
        })
    });
}

//v3()

function v4() {

    const botones = document.querySelectorAll('div button')


}

v4()


