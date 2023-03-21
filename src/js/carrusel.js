
const $left = document.getElementById('left'),
    $right = document.getElementById('right'),
    $carrusel = document.getElementById('carrusel-proyectos');

const div = document.getElementsByClassName('proyecto')
console.log()

let posActual = 0
$left.addEventListener('click', e=>{
    posActual -= d.body.clientWidth
    if (posActual <= 0) posActual = 0
    $carrusel.scrollTo(posActual, 0)
})

$right.addEventListener('click', e=>{
    posActual += d.body.clientWidth
    if (posActual >= (d.body.clientWidth * (div.length - 1))) posActual = d.body.clientWidth * (div.length - 1)
    $carrusel.scrollTo(posActual, 0)
})
