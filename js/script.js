$( document ).ready(function() {

    $("#barras").click(function() {

        if ($("#menu").hasClass("menu-ativo")) {
            $("#menu").removeClass("menu-ativo")
        } else {
            $("#menu").addClass("menu-ativo")
        }

    })

})



let email = document.getElementById("campo-email");

function enviarEmail() {
    let emailDigitado = email.value;
    console.log(emailDigitado)
}

// function renderizarProdutos() {
//     let espaco = document.getElementById("espaco-produtos");

//     let listaProdutos = [
//         {
//             titulo: "Notebook"
//         },
//         {
//             titulo: "Notebook"
//         },
//         {
//             titulo: "Notebook"
//         },
//         {
//             titulo: "Notebook"
//         },
//         {
//             titulo: "Notebook"
//         },
//         {
//             titulo: "Notebook"
//         },
//         {
//             titulo: "Notebook"
//         },
//         {
//             titulo: "Notebook"
//         },
//         {
//             titulo: "Notebook"
//         },
//         {
//             titulo: "Notebook"
//         },
//         {
//             titulo: "Notebook"
//         },
//         {
//             titulo: "Notebook"
//         },
//     ]
    
//     let template = "";

//     for (let index = 0; index < listaProdutos.length; index++) {
//         const element = listaProdutos[index];

//         console.log("Produtos")

//         template += `<ul class="produtos-item">
//             <li>
//                 <img src="img/imagemdosprodutos/notprodutos1.png" alt="">
//                 <p>Notebook Gamer asus</p>
//                 <a href="">comprar</a>
//         </li>`
       
//         espaco.innerHTML = template
//     }

// }


// {
//     p: "Notebook"
// },
// {
//     p: "Notebook"
// },
// {
//     p: "Notebook"
// },
// {
//     p: "Notebook"
// },
// {
//     p: "Notebook"
// },
// {
//     p: "Notebook"
// },
// {
//     p: "Notebook"
// },
// {
//     p: "Notebook"
// },
// {
//     p: "Notebook"
// },
// {
//     p: "Notebook"
// },
// {
//     p: "Notebook"
// },
// {
//     p: "Notebook"
// },

