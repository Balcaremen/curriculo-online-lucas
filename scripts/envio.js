{

    // Padrão de emails
    const emailPrefix = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Padrão de telefones
    const telPrefix = /^[0-9]{10,11}$/;

    const form = document.getElementById("form");
    
    //Campos obrigatórios
    const apresentacao = document.getElementById("apresentacao");
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const telefone = document.getElementById("tel");
    const envio = document.getElementById("envio");

    // Verificação de campos obrigatórios vazios ao digitar
    function campoMudou(event) {

        const tr = event.target.parentElement;
        const spanObrigatorio = tr.lastElementChild;

        // Esconder ou mostrar span de acordo com a verificação usando "display"
        spanObrigatorio.style.opacity = event.target.value != "" ? 0 : 1;

    }

    // Eventos de mudança no valor do input
    apresentacao.addEventListener("input", campoMudou);
    nome.addEventListener("input", campoMudou);
    email.addEventListener("input", campoMudou);
    telefone.addEventListener("input", campoMudou);

    // Evento ao enviar o formulário
    form.addEventListener("submit", function(event) {
        
        // Previnindo limpeza do formulário
        event.preventDefault();

        if (!emailPrefix.test(email.value)) {
            alert("Insira um endereço de e-mail válido");
            email.focus();
            return;
        }

        if (!telPrefix.test(telefone.value)) {
            alert("Insira um número de telefone válido");
            telefone.focus();
            return;
        }

        // Ativa o estado de envio
        envio.disabled = true;
        envio.textContent = "Processando Envio...";
        document.body.classList.add("enviando");

        // Simulação de envio após 2 segundos
        setTimeout(function() {

            // Limpeza do formulário
            form.reset();

            document.body.classList.remove("enviando");
            envio.disabled = false;
            envio.textContent = "Enviar";
            
            // Reseta a data e idioma padrão pós envio
            document.getElementById("data").valueAsDate = new Date();
            document.getElementById("idioma").value = navigator.language;

            alert("Mensagem enviada com sucesso!");
            
        }, 2000);

    });

}