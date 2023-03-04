
const $left = document.getElementById('left'),
    $right = document.getElementById('right'),
    $carrusel = document.getElementById('carrusel-proyectos'),
    $proyA = document.getElementById('proy-1'),
    $proyB = document.getElementById('proy-2');


// [$left, $right].forEach(arrow=>{
//     arrow.addEventListener('click', e=>{
//         console.log(e)
//     })
// })


$left.addEventListener('click', e=>{
    console.log(e)
    console.log($proyA.getBoundingClientRect().x)
    $carrusel.scrollTo(-d.body.clientWidth, 0)
})

$right.addEventListener('click', e=>{
    console.log(e)
    console.log($proyB.getBoundingClientRect().x)
    $carrusel.scrollTo(d.body.clientWidth, 0)
})
