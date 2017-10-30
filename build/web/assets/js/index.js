var mostrarMensagem = function (msg) {
    alert(msg);
};

var adicionarOptionComboCidade = function (id, nome) {
    $("#comboCidade").append(new Option(nome, id));
};

var mostrarCidades = function (result) {
    var lst = "Lista de Capitais:";
    $.each(result, function (index, obj) {
        lst += "\n" + obj.nome;
    });
    alert(lst);
};

var atualizarComboBoxCidade = function (result) {
    var combo = $("#comboCidade");
    combo.empty();
    $.each(result, function (index, obj) {
        combo.append(new Option(obj.name, obj.id));
    });
};

$(document).ready(function () {

    $("#comboCidade").change(function () {
        var combo = $("#comboCidade");
        var selectedId = combo.val();
        var selectedText = combo.find(":selected").text();
        alert("id=" + selectedId + " text=" + selectedText);
    });

    $("#btnAtualizarCidade").click(function () {
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: 'ajax/cidade/listar',
            data: 'param1=23&param2=67',
            cache: false,
            success: function (result) {
                //mostrarCidades(result);
                atualizarComboBoxCidade(result);
            },
            error: function () {
                alert("Não consegui fazer a chamada Ajax para /ajax/cidade/listar!");
            }
        });
    });
   
    adicionarOptionComboCidade("op3", "Guaramirin");
    adicionarOptionComboCidade("op4", "Schroeder");
    //mostrarMensagem("Montei todos objetos!");

});

$(document).ajaxSend(function (event, request, settings) {
    $('#loading-indicator').show();
});

$(document).ajaxComplete(function (event, request, settings) {
    $('#loading-indicator').hide();
});