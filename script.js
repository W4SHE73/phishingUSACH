const form = document.getElementById('form')
const button = document.getElementById('submitButton')

/*const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\. [a-zA-Z0-9-. ]+$/,
    correo2: /([a-zA-Z0-9]+)([_.-{1}])?([a-zA-Z0-9]+)@([a-zA-Z0-9]+)([.])([a-zA-Z.]+)/g
} */

const correo =  document.getElementById('mail')
const nombre =  document.getElementById('password')
const mensaje =  document.getElementById('nickname')

const formIsValid = {
   
    mail: false,
    password: false, 
    nickname: false,
}
const regexEmail = /([a-zA-Z0-9]+)([_.-{1}])?([a-zA-Z0-9]+)@([a-zA-Z0-9]+)([.])([a-zA-Z.]+)/g
const regexName = /^[a-zA-Z] +\s[a-zA-Z]*$/


form.addEventListener('submit', (e)=> {
    e.preventDefault(document.forms['form'].reset())
    /* se valida el envio del formulario*/

    correo.addEventListener('change', (e) => {
        if (!regexEmail.test(e.target.value.trim().length > 0)) formIsValid.mail = true
    //falta por arreglar, falso cuando esta en blanco pero en un formato de NO CORREO igual lo toma
        })

    asunto.addEventListener('change', (e) => {
        if (e.target.value.trim().length > 0) formIsValid.password = true
        })

    mensaje.addEventListener('change', (e) => {
        if (e.target.value.trim().length > 0) formIsValid.nickname = true
        })
    })
