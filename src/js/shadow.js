const tech = document.querySelectorAll('.tech'),
face = document.getElementById('face');
// mouth = document.getElementsByClassName('mouth')[0];

let currentColor = "#052633",
    X = 35,  
    Y = 35;

document.addEventListener( "mousemove", (ev) =>{
    let coords = face.getBoundingClientRect()
    let coordX = ev.clientX - coords.x;   
    let coordY = ev.clientY - coords.y;
    // console.log('Coords: ',coords, 'and eventMouseMove: ', ev)
    // console.log('coord.X:', coords.x)
    // console.log('coord.Y:', coords.y)
    // console.log('clientX:', ev.clientX)
    // console.log('clientY:', ev.clientY)
    // console.log('coordX:', coordX)
    // console.log('coordY:', coordY)

    X = coordX;
    Y = coordY;

    let radiusX = -coordX + 100,
        radiusY = -coordY + 100

    if(radiusX < 0 ){
        radiusX = -radiusX;
    }
    if(radiusY < 0 ){
        radiusY = -radiusY;
    }
      
    
    let radius = ( radiusX + radiusY)/10;

    // const $face = document.getElementById('face')
    face.style.boxShadow = (-coordX + 100)+"px "+(-coordY + 100)+"px "+radius+"px #3232327c";
    face.style.background = `radial-gradient(circle at ${X}px ${Y}px, ${currentColor}, #000)`;

    if (ev.target.dataset.color){
        face.style.background = `radial-gradient(circle at ${X}px ${Y}px, ${ev.target.dataset.color == '#000000' ? '#1a1a1a' : ev.target.dataset.color}, #000)`;
        mouth.classList.add('open')
    } else {
        mouth.classList.remove('open')
    }
}); 

tech.forEach(el => {
    // console.log(el.dataset.color)
    el.addEventListener('click', (e)=>{
        try {
            
            face.style.background = `radial-gradient(circle at ${X}px ${Y}px, ${el.dataset.color == '#000000' ? '#1a1a1a' : el.dataset.color}, #000)`

            el.firstElementChild.children[1].setAttribute('fill', el.dataset.color)
            // console.log(el.firstElementChild.children[1])    

            currentColor = el.dataset.color == '#000000' ? '#1a1a1a' : el.dataset.color
        } catch (err) {
            console.log('Error: ', err)
        }
        
    })
});