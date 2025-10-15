// -----------------------------------------------------------
// 1. VARIÁVEIS GLOBAIS 
// São acessíveis àq partir de qualquer função JavaScript.
// -----------------------------------------------------------

// Procura pelo elemnto com ID "txt-nova-tarefa" no documento HTML
const txt_nova_tarefa = document.querySelector("#txt-nova-tarefa");
// Procura pelo elemento com ID "btn-nova-tarefa" no documento HTML
const btn_nova_tarefa = document.querySelector("#btn-nova-tarefa");
// Procura pelo elemento com ID "lista-tarefas" no documento HTML
const lista_tarefas = document.querySelector("#lista-tarefas");

// -----------------------------------------------------------
// 2. FUNÇOES DE LÓGICA
// -----------------------------------------------------------

function iniciaToDo() {
    //alert("Olá mundo!");

    // Associa funçao ao evento clicar no botão de "Adicionar" nova tarefa
    btn_nova_tarefa.addEventListener("click", adicionarTarefa);

}

function adicionarTarefa() {
    alert("Olá tarefa!");
}

// -----------------------------------------------------------
// 3. ESCUTADORES DE EVENTOS E INÍCIO 
// -----------------------------------------------------------

iniciaToDo();
