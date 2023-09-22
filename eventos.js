
const form   = document.getElementById('form')
const campos = document.querySelectorAll('.enter')
const errorText  = document.querySelectorAll('.erro')

//EmailRegex "Regex que censegue validar um email, pra ver se existe estrutura de um email ou não"
const emailRegex= /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

// Accôes a Cumprir
function setError(index){
    campos[index].style.border = '2px solid #e63636'
    errorText[index].style.display = 'block'
}

function RemoveError(index){
    campos[index].style.border = ''
    errorText[index].style.display = 'none'
}

//Validar nome
function ValidarNome(){
    if (campos[0].value.length < 4){
        setError(0)
    }
    else{
        RemoveError(0)
    }
}

//Validar email
function ValidarEmail(){
    if (emailRegex.test(campos[2].value)){
        RemoveError(2)

    }
    else{
        setError(2)
        
    }
}

function ValidarSobrenome(){
    if (campos[1].value.length < 4){
        setError(1)
    }
    else{
        RemoveError(1)
    }
}
function ValidarSenha(){
    if(campos[3].value.length < 8){
        setError(3)
    }
    else{
        RemoveError(3)
    }
}
function ValidarSenha2(){
    if(campos[4].value <8 || campos[4].value != campos[3].value){
        setError(4)
    }
    else{
        RemoveError(4)
    }
}

form.addEventListener('submit', (Interromper) =>{
    Interromper.preventDefault()
        ValidarNome()
        ValidarEmail()
        ValidarSobrenome()
        ValidarSenha()
        ValidarSenha2()
})


