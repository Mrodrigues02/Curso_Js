function contar(){
    var ini = document.getElementById("ini")
    var fim = document.getElementById("fim")
    var pas = document.getElementById("pas")
    var res = document.getElementById("res")
  
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(pas.value)

    if(ini.value.length == 0|| fim.value.length == 0 || pas.value.length == 0) {
      window.alert('[ERRO] Faltam dados!')
    } else if(p <= 0) {
      window.alert(`[ERRO] Ignorando o passo 0, utilizando o passo 1. `)
      p = 1
    }

    if(i < f) {
       while(i <= f) {
          res.innerHTML += `👉🏾 ${i} `
          i += p
        }     
    } else {
      for(i; i >= p; i -= p) {
        res.innerHTML += `👉🏾 ${i} `
      }
    }

}
