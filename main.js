const messagem = 'Hello world' 

console.log(messagem)

var data = new Date('2014, 11, 12');
var data2 = new Date ('2015, 10, 09');
//console.log(data, data2);

function dataMaior(data, data2) {
  
  if (data > data2){
      return data;
  } else {
      return data2;
  }

}
var resultado = dataMaior(data, data2);
console.log(resultado);

function diferencaData (data, data2){
     var diferenca = data - data2;
      
     return diferenca;
}

var subtracao = diferencaData(data, data2);
console.log(subtracao);

function dataAtual(){
  
  var dataHoje = new Date();
  
  dataHoje.getTime();
  
  return dataHoje;
}

var hoje = dataAtual();
console.log(` Hoje é ${hoje.getHours()}:${hoje.getMinutes()}, de
 ${hoje.getDay()}/${hoje.getMonth()}/${hoje.getFullYear()}`);