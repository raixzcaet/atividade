let emails = ["aftonmchl@gmail.com", "muzanmigueljeferson@gmail.com"]
let senhas = ["631", "991"]
let usuarios = ["Michael Afton", "Muzan"]
let fotos = ['<img src = "https://assets.pikiran-rakyat.com/crop/33x0:1222x720/x/photo/2023/02/11/436169275.jpg">' , '<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpfG3BTJgGnS859-6tfekE18jRcaChTCt0fWTmmBtSD-D9xIz6aewRiTLSxiuMCJECVw8&usqp=CAU"></img>']

function login (){

    let email = id_email.value
    let senha = id_senha.value
    let auth = false

     for (let contador = 0; contador < emails.length; contador++)
         if (email == emails[contador]){
         if (senha == senhas[contador]){
         auth = true
         alert("Seja Bem Vindo!")
         id_foto.innerHTML = fotos[contador]
       }

    }
 if(auth == false){
    alert ('Email ou senha incorretos. Tente novamente!')
 }



      }




