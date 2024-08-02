const clientes = require ("./clientes.json");

function filtrarApartamentosSemComplemento(clientes){
    return clientes.filter((cliente) => {
        return(
            cliente.endereco.apartamento &&
            !cliente.endereco.hasOwnProperty("complento")
        )
    });
};

const filtrados = filtrarApartamentosSemComplemento(clientes);

console.log(filtrados)
 