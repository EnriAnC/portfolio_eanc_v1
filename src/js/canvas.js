const $dibujarEnCanvas = document.getElementById('dibujarEnCanvas')
        const $canvas = document.getElementById('canvas')
        const canvasWidth = $canvas.width
        const canvasHeight = $canvas.height
        const rectHeigth = 25
        const rectWidth = 50
        d.body.addEventListener('click', e=>{
            randomX = obtenerRandomEntre(0, canvasWidth - rectWidth)
            randomY = obtenerRandomEntre(0, canvasHeight - rectHeigth)
            if ($canvas.getContext){
                // CANVAS 2D
                const ctx = $canvas.getContext('2d')
                // COLOR RADIAL
                const grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
                grd.addColorStop(0, "white");
                grd.addColorStop(0.5, "black");

                // Fill with gradient
                ctx.fillStyle = grd;
                //---
                ctx.fillRect(randomX, randomY, rectWidth, rectHeigth)
            }
        })
        setInterval(() => {
            randomX = obtenerRandomIntEntre(0, canvasWidth - rectWidth)
            randomY = obtenerRandomIntEntre(0, canvasHeight - rectHeigth)
            if ($canvas.getContext){
                const ctx = $canvas.getContext('2d')
                ctx.fillRect(randomX, randomY, rectWidth, rectHeigth)
            }
        }, 3000);
        function obtenerRandomEntre(min, max) {
            return Math.random() * (max - min) + min;
        }
        function obtenerRandomIntEntre(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        }