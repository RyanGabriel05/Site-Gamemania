$( document ).ready(function() {
    
    $("#barras").click(function() {
    
        if ($("#menu").hasClass("menu-ativo")) {
            $("#menu").removeClass("menu-ativo")
        } else {
            $("#menu").addClass("menu-ativo")
        }
    
    })

    // $('.logo').click(function(e){
    //     e.preventDefault();
    //     $('html, body').animate({
    //         scrollTop: 0
    //     }, 500)
    // });
    
    // Slider
   function slider(sliderName, velocidade) {
	var sliderClass = '.' + sliderName,
			activeClass = 'active',
			rotate = setInterval(rotateSlide, velocidade);
	
	$(sliderClass + ' > :first').addClass(activeClass);

	$(sliderClass).hover(function(){
		clearInterval(rotate);
	}, function() {
		rotate = setInterval(rotateSlide, velocidade);
	});
	
	function rotateSlide() {
		var activeSlide = $(sliderClass + ' > .' + activeClass),
				nextSlide = activeSlide.next();

		if(nextSlide.length == 0) {
			nextSlide = $(sliderClass + ' > :first');
		}
		activeSlide.removeClass(activeClass);
		nextSlide.addClass(activeClass);
	} 
}
slider('introducao', 2000);
        

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

