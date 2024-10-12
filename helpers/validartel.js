const countryCodes = [
    {
        "codigo" : "+569",
        "pais" : "chile",
        "longitud" : 8
    },
    {
        "codigo" : "+591",
        "pais" : "bolivia",
        "longitud" : 3
    }
]


const validarTel = (nuevoCountryCode, nuevoNumero) => {

    const cod = countryCodes.find(pais => pais.codigo === nuevoCountryCode)

    if(!cod){
        return {
            valido : false,
            mensaje: "codigo De Pais No Valido"
        }
    }

    const esValido = nuevoNumero.length == cod.longitud

    return {
        valido: esValido,
        mensaje: esValido ? "Número válido" : `Teléfono de ${cod.pais} debe tener ${cod.longitud} dígitos`
      };
}



export default validarTel