const d = document;

const $hamburguer = d.getElementById('hamburguer-menu'),
    $menu = d.getElementById('menu'),
    $main = d.getElementsByClassName('main')[0],
    $html = d.getElementById('html'),
    $inicio = d.getElementById('inicio'),
    $habilidades = d.getElementById('habilidades'),
    $trabajos = d.getElementById('trabajos'),
    $contacto = d.getElementById('contacto'),
    $tech = d.getElementsByClassName('tech');

d.addEventListener('click', e=>{
    if (e.target.id == 'hamburguer-menu' || e.target.parentElement.id == 'hamburguer-menu'){
        $hamburguer.classList.toggle('on');
        $menu.classList.toggle('on');
        $main.classList.toggle('off');
    }
    if (e.target.matches('.alink')){
        e.preventDefault()
        $hamburguer.classList.remove('on');
        $menu.classList.toggle('on');
        $main.classList.toggle('off');
        if(e.target.textContent == 'Inicio'){
            window.scrollTo(0, $inicio.clientTop)
        }
        if(e.target.textContent == 'Habilidades'){
            window.scrollTo(0, $habilidades.offsetTop)
        }
        if(e.target.textContent == 'Trabajos'){
            window.scrollTo(0, $trabajos.offsetTop)
        }
        if(e.target.textContent == 'Contacto'){
            window.scrollTo(0, $contacto.offsetTop)
        }
    }
    

    if($menu.classList.contains('on')){
        disableScroll()
    } else {
        enableScroll()
    }
})

function disableScroll(){  
    var x = window.scrollX;
    var y = window.scrollY;
    // console.log(x,y)
    window.onscroll = function(){ window.scrollTo(x, y) };
}

function enableScroll(){  
    window.onscroll = null;
}