function cadastrar() {
    fetch('https://api.site.com/veiculos', {
        method: 'POST',
    });
}

function listar() {
    fetch('https://api.site.com/veiculos', {
        method: 'GET',
    });
}

function editar() {
    fetch('https://api.site.com/veiculos', {
        method: 'PUT',
    });
}

function excluir() {
    fetch('https://api.site.com/veiculos', {
        method: 'DELETE',
    });
}