function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fAno = document.getElementById("txtano")
   var res = document.getElementById("res")
    if(fAno.value.length == 0 || fAno.value > ano){
       window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fAno.value)
      var gênero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
          gênero = 'Homen'
          if (idade >= 0 && idade < 10){
            //Criança
            img.setAttribute('src','menino.png')
          } else if (idade < 21) {
              //Jovem
              img.setAttribute('src', 'jovem-homen.png')
          } else if (idade < 50) {
              //Adulto
              img.setAttribute('src', 'adulto-homen.png')
          } else {
            //Idoso
            img.setAttribute('src', 'Idoso.png')
          }
        
        } else if (fsex[1].checked) {
          gênero = 'Mulher'
          if (idade >= 0 && idade < 10){
            //Criança
            img.setAttribute('src', 'menina.png')
          } else if (idade < 21) {
              //Jovem
              img.setAttribute('src', 'jovem-mulher.png')
          } else if (idade < 50) {
              //Adulto
              img.setAttribute('src', 'adulto-mulher.png')
          } else {
            //Idoso
            img.setAttribute('src', 'Idosa.png')
          }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}