const $opciones = document.querySelector('#opciones');
const $slideContainer = document.querySelectorAll('.slider-container')

$opciones.addEventListener('change', (e)=>{
    switch (e.target.value) {
        
            case "porPrecioalto":
                fetch('http://localhost:3031/api/products/oddity')
                    .then(res => res.json())
                    .then((data) => {data.forEach((data) => {console.log(data.oddity);})})
             
                $slideContainer.forEach((slide, i) => {
                    console.log(slide.children[i].children[0]);
                })
                break;
        
            case "porPreciobajo":
                console.log("porPreciobajo");
                   
                    break;

            case "MasPopulares":
                console.log("MasPopulares");

                    break;

            case "MenosPopulares":
                console.log("MenosPopulares");
                   
                    break;

            case "MasRaros":
                console.log("MasRaros");
                       
                    break;   
        };
});

// $slideContainer.forEach((slide) => {console.log(slide);})
// post de fetch