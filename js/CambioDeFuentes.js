window.onload = cambiarFuente;

function cambiarFuente() {

    var c = 1;

    var boton = document.getElementById("FuenteDislexia");
    boton.addEventListener("click", function () {

        if (c == 1) {

            document.body.style.fontFamily = 'OpenDyslexic';
            boton.textContent = "Fuente Normal";
            c = 2;
        }
        else if (c == 2) {

            document.body.style.fontFamily = 'Arial';
            boton.textContent = "Fuente para Dislexia";
            c = 1;
        }
    });
}