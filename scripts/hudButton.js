{
    
    // Redefinindo o topo da navegação para mostrar / ocultar barra de navegação
    var show = true;

    const hud = document.getElementById("hud");
    const btn = document.getElementById("hudButton");

    function hudToggle() {

        show = !show;

        if (show) {

            hud.style.top = "0px";
            btn.innerHTML = "^";

        } else {

            hud.style.top = "-60px";
            btn.innerHTML = "v";

        }

    }
    
}