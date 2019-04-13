$("#btnOk").click(function(){
    let cantLados = $("#ladoInput").val();
    cantLados = parseInt(cantLados, 10);
    calcularCuadrados(cantLados);
});

function calcularCuadrados(cantLados) {
    let contador = cantLados;
    let resultado = 0;
    while(contador > 0) {
        resultado += Math.pow(contador, 2);
        contador--;
    }
    //console.log('resultado: ', resultado);
    $("#resultado").text(resultado);
}