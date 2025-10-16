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

//Carrega o áudio reproduzido ao concluir uma tarefa
const audioConcluir = new Audio('sound/gmae.wav');
// -----------------------------------------------------------
// 2. FUNÇOES DE LÓGICA
// -----------------------------------------------------------

function iniciaToDo() {
    //alert("Olá mundo!");
    
    // Associa função "adicionarTarefa()" ao evento de clcicar  no botão de "Adicionar" nova tarefa
    btn_nova_tarefa.addEventListener("clcik", adicionarTarefa);
    // Associa funçao "adicionarTarefaEnter()" ao evento de pressionar a tecla qualquer tecla
    // no campo de "Adicionar tarefa"
    txt_nova_tarefa.addEventListener("keypress", adicionarTarefaEnter)
    
    // Associa funçao ao evento clicar no botão de "Adicionar" nova tarefa
    btn_nova_tarefa.addEventListener("click", adicionarTarefa);
    
}

function adicionarTarefa() {
    // Se a caixa de texto "adicionar tarefa" não está vazia
    // .trim() remove espaços em branco do começo e fim do valor do campo
    if (txt_nova_tarefa.value.trim() !== "") {
        const btn_item = `
    <div>
    <button class="btn btn-success btn-sm me-2" onclick="concluirTarefa(this)">Concluir</button>
    <button class="btn btn-danger btn-sm">Excluir</button>
    </div>
    `;
        
        // Cria um novo item de lista
        const item = document.createElement("li");
        item.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        // Adiciona o texto digitado na caixa de texto e os botões para concluir e excluir a tarefa.
        // "span" permite aplicar formatações em linha
        // "w-75" limita o nome da tarefa à 75% da largura da linha, deixando 25% do tamanho restante para os botões
        //"text-truncate" corta e adiciona reticências (três pontos...) em nomes de tarefas que exedem 75% do tamanho da linha
        item.innerHTML = "<span class='w-75 text-truncate'>" + txt_nova_tarefa.value + "</span>" + btn_item;
        
        // Adiciona o item a lista de tarefas
        lista_tarefas.append(item);
        
    }
    // Limpa o campo de texto "adicionar nova tarefa" após adicionar a tarefa a lista
    txt_nova_tarefa.value = "";
    // Seleciona o campo "adicionar nova tarefa" após adicionar a tarefa a lista
    txt_nova_tarefa.focus();
}

function adicionarTarefaEnter(evento) {
    if (evento.key == "Enter") {
        // Chama a função JavaScript "adicionarTarefa()"
        adicionarTarefa();
        
    }
}

function concluirTarefa(elemento) {
    // Reproduz o áudio ao clicar no botão de "Concluir"
    audioConcluir.play();

    // Joga 200 confettis
    for(let i = 0; i <= 200; i++) {
    confetti(); 
    }
    
}

// -----------------------------------------------------------
// 3. ESCUTADORES DE EVENTOS E INÍCIO 
// -----------------------------------------------------------

iniciaToDo();
