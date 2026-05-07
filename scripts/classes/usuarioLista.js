{
    /*

    Classe customizada para o usuário criar sua própria lista

    1. Primeiro elemento como div
    2. Último elemento como ul vazio
    3. Primeiro elemento do div como input (Para o nome do elemento a ser criado)
    4. Primeiro elemento do div como botão (Para criar o elemento)

    */

    for (const td of document.getElementsByClassName("usuario-lista")) {

        // Array para verificação de elementos repitidos
        let elementos = []

        const div = td.firstElementChild;
        const ul = td.lastElementChild;
        const input = div.firstElementChild;
        const btn = div.lastElementChild;

        function adicionar() {

            const texto = input.value;

            // Verificando se o texto é válido
            if (!texto) {
                alert("Digite um texto antes de adicionar");
                return;
            }

            // Verificando se o texto já foi adicionado
            for (const elemento of elementos) {

                if (texto === elemento) {
                    alert("Já existe o elemento '" + texto + "'' na lista");
                    return;
                }

            }

            // Elemento
            const novoElemento = document.createElement("li");
            novoElemento.innerHTML = texto;

            novoElemento.style.transform = "scale(0.5)";
            novoElemento.style.opacity = 0.5;

            // Aplicar animação no próximo frame
            setTimeout(function() {
                novoElemento.style.transform = "scale(1)";
                novoElemento.style.opacity = 1;
            }, 1)

            // Botão de remoção do elemento
            const removeBtn = document.createElement("button");
            removeBtn.type = "button";
            removeBtn.title = "Remover elemento";
            removeBtn.innerHTML = "X";

            elementos.push(texto);

            // Evento ao clickar para remover
            removeBtn.addEventListener("click", function() {

                const id = elementos.indexOf(texto);
                elementos.splice(id,1);

                novoElemento.style.opacity = 0;

                setTimeout(function() {ul.removeChild(novoElemento);}, 300)

            });

            novoElemento.appendChild(removeBtn);
            ul.appendChild(novoElemento);

            // Limpando valor do input
            input.value = "";
            
        }

        // Adicionar elemento ao pressionar o botão adicionar
        btn.addEventListener("click", adicionar);

        // Adicionar elemento ao pressionar enter
        input.addEventListener("keypress", function(event) {

            if (event.key == "Enter") {adicionar();}

        });

        // Adicionar elemento caso haja um valor padrão
        if (input.value) {adicionar();}

    }
    
}