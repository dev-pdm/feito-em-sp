//Autor: Caique Sousa
import './cronometro'
import './modernizr-custom'
import '../estilo/index'

//Busca de CEP
$(function ($) {
    $("#inputCep").change(function () {
        var cep_code = $(this).val();
        if (cep_code.length <= 0) return;
        $.get("https://apps.widenet.com.br/busca-cep/api/cep.json", {
                code: cep_code
            },
            function (result) {
                if (result.status != 1) {
                    alert(result.message || "Houve um erro desconhecido");
                    return;
                }
                $("input#inputCep").val(result.code);
                $("input#inputCep2").val(result.code);
                // $("input#estado").val(result.state);
                // $("input#cidade").val(result.city);
                // $("input#inputCidadeMacrorregiao").val(result.district);
                $("input#inputCidadeMacrorregiao").val(result.city);
                $("input#inputCidadeMacrorregiao2").val(result.city);
                $("input#inputEnderecoEstabelecimento").val(result.address);
                $("input#inputEnderecoEstabelecimento2").val(result.address);
                // $("input#estado").val(result.state);
            });
    });
});

// Validação do Form
// Exemplo de JavaScript inicial para desativar envios de formulário, se houver campos inválidos.
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Pega todos os formulários que nós queremos aplicar estilos de validação Bootstrap personalizados.
        var forms = document.getElementsByClassName('needs-validation');
        // Faz um loop neles e evita o envio
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

//recupera o arquivo buscado 
var file1 = document.getElementById("inputFile1");
file1.onchange = function () {
    if (file1.files.length > 0) {
        document.getElementById('filename1').innerHTML = file1.files[0].name;
    }
};

var file2 = document.getElementById("inputFile2");
file2.onchange = function () {
    if (file2.files.length > 0) {
        document.getElementById('filename2').innerHTML = file2.files[0].name;
    }
};