{

    let claro = false;

    const btnTema = document.getElementById("tema");
    const classList = document.body.classList;

    function themeToggle() {

        claro = !claro;

        classList.toggle("light-mode",claro);
        classList.toggle("dark-mode",!claro);

        btnTema.textContent = claro ? "☾" : "☀︎"

    }

    classList.add("light-mode");
    classList.add("dark-mode");

    // Ativação inicial para habilitar o light mode

    themeToggle();

}