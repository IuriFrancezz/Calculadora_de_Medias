function confirmarNota (nota1, nota2, nota3, nota4, media, total) {
    var nota1 = document.getElementById("nota1").value;
    var nota2 = document.getElementById("nota2").value;
    var nota3 = document.getElementById("nota3").value;
    var nota4 = document.getElementById("nota4").value;

    var media = document.getElementById("media").value;

    media = 4;
    total = (nota1 * nota2 * nota3 * nota4) / media;

    document.getElementById("media").innerHTML = "A Média da tua Nota é: " + total + "%";
  }