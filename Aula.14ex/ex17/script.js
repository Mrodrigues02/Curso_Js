function calcular() {

  let num = document.getElementById("num")
  let res = document.getElementById("res")
  let nu = Number(num.value)
  let con = 0
  
  if(num.value.length == 0){
    window.alert('[ERRO] Faltam dados! Por favor, digite um número.')
  } else {
    res.innerHTML = ''
   while(con <= 10) {
      let item = document.createElement('option')
      item.text = `${nu}x${con}=${con*nu}` 
      res.appendChild(item)
    con++
   }
  }
}
