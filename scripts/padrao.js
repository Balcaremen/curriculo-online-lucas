{
    // Mudando o valor padrão de Data de Nascimento para a data atual
    document.getElementById("data").valueAsDate = new Date();

    // Mudando o valor padrão de Idioma para o idioma do navegador
    document.getElementById("idioma").value = navigator.language;
}