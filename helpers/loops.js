export function calcularAños(limit) {
    var anoActual = (new Date()).getFullYear()
    for (var i = anoActual; i >= limit; i--){
        console.log(i)
    };
};



export function calcularDias(limit) {
    var dia = 1
    for (var i = dia; i <= limit; i++){
        console.log(i)
    };
};

calcularDias(31)