document.addEventListener("keydown", function(event) {
    if (event.key === "p") {
        showSection("caixa");
    } else if (event.key === "o") {
        showSection("codigo_inteiro");
    } else if (event.key === "i") {
        showSection("contas_receber");
    }else if (event.key === "u") {
        showSection("digitar_cpf");
    }
    else if (event.key === "y") {
        showSection("excluir_produto");
    }
    else if (event.key === "t") {
        showSection("excluir_venda");
    }
    else if (event.key === "r") {
        showSection("finalizar_compra");
    }
    else if (event.key === "e") {
        showSection("forma_pagamento");
    }
    else if (event.key === "w") {
        showSection("imprimir_nota");
    }
    else if (event.key === "q") {
        showSection("inserir_quantidade");
    }
    else if (event.key === "a") {
        showSection("nova_venda");
    }
    else if (event.key === "s") {
        showSection("pesquisar_preco");
    }
    else if (event.key === "d") {
        showSection("pesquisar_produto");
    }
    else if (event.key === "f") {
        showSection("pesquisar_venda");
    }
    else if (event.key === "g") {
        showSection("sair_compra");
    }
    else if (event.key === "h") {
        showSection("tela_login");
    }
    else if (event.key === "j") {
        showSection("tela_caixa");
    }
});

function showSection(sectionId) {
    // Esconder todas as seções
    document.getElementById("caixa").style.display = "none";
    document.getElementById("codigo_inteiro").style.display = "none";
    document.getElementById("contas_receber").style.display = "none";
    document.getElementById("digitar_cpf").style.display = "none";
    document.getElementById("excluir_produto").style.display = "none";
    document.getElementById("excluir_venda").style.display = "none";
    document.getElementById("finalizar_compra").style.display = "none";
    document.getElementById("forma_pagamento").style.display = "none";
    document.getElementById("imprimir_nota").style.display = "none";
    document.getElementById("inserir_quantidade").style.display = "none";
    document.getElementById("nova_venda").style.display = "none";
    document.getElementById("pesquisar_preco").style.display = "none";
    document.getElementById("pesquisar_produto").style.display = "none";
    document.getElementById("pesquisar_venda").style.display = "none";
    document.getElementById("sair_compra").style.display = "none";
    document.getElementById("tela_login").style.display = "none";
    document.getElementById("tela_caixa").style.display = "none";

    // Mostrar a seção específica
    document.getElementById(sectionId).style.display = "block";
}