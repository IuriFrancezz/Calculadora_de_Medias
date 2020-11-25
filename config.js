function confirmarNota (nota1, nota2, nota3, nota4, media) {
    var nota1 = document.getElementById("nota1").value;
    var nota2 = document.getElementById("nota2").value;
    var nota3 = document.getElementById("nota3").value;
    var nota4 = document.getElementById("nota4").value;


    media = (nota1 + nota2 + nota3 + nota4) / 4;

    if( media < 10) {
      mensagem = "A Média da tua Nota é " + media + " \n\n-> Reprovas";
      }
      else if (media >= 10 && media < 14) {
      mensagem = "A Média da tua Nota é " + media + " \n\n-> Vai a exame";
      }
      else {
      mensagem = "A Média da tua Nota é " + media + " \n\n-> Dispensa de exame";
      }
      
      alert(mensagem);

    document.getElementById("media").innerHTML = "A Média da tua Nota é: " + media + "%";
  }