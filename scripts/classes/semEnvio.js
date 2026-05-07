{
    
    // Classe para impedir o envio pressionando enter nos inputs de texto marcados
    for (const input of document.getElementsByClassName("sem-envio"))
    {

        // Evento ao digitar no input de texto
        input.addEventListener("keypress", function(event) {

            // Previnir envio do formulário
            if (event.key == "Enter") {event.preventDefault();}

        });

    }
    
}