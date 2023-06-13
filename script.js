document.addEventListener('DOMContentLoaded', function() {
    
    const slider = document.querySelector("#slider");
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];

    const buttonLeft = document.querySelector("#left");
    const buttonRight = document.querySelector("#right");

    slider.insertAdjacentElement('afterbegin', sliderSectionLast);


    function Next(){
        let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
        slider.style.marginLeft = "-200%"; 
        slider.style.transition = "all 0.5s";
        setTimeout(function(){
            slider.style.transition = "none";
            slider.insertAdjacentElement('beforeend', sliderSectionFirst);
            slider.style.marginLeft = "-100%";
        }, 500);
    }

    function Previous(){
        let sliderSection = document.querySelectorAll(".slider__section");
        let sliderSectionLast = sliderSection[sliderSection.length -1];
        slider.style.marginLeft = "0%"; 
        slider.style.transition = "all 0.8s";
        setTimeout(function(){
            slider.style.transition = "none";
            slider.insertAdjacentElement('afterbegin', sliderSectionLast);
            slider.style.marginLeft= "-100%";
        }, 1000);
    }

    buttonRight.addEventListener('click', function(){
        Next()
    });

    buttonLeft.addEventListener('click', function(){
        Previous()
    });
    
    const boton = document.querySelector("#boton");
    boton.addEventListener('click',function(){
        let entrada = document.getElementById("entrada");
        let textoEntrada = entrada.value;
        console.log(textoEntrada);
        entrada.value = "";
    });
    
    // Funcion para que el slider se mueva automaticamente
    // setInterval(function(){
    //     Next();
    // }, 3000);
  });

