let n1;
let n2;
let n3;
let media;
let nome;

function valorMedia()
{
    nome=document.getElementById("nome").value;
    media=((n1+n2+n3)/3).toFixed(2);


    if(media>=7){
        document.getElementById("mensagem").innerHTML=
        `<font color=#00FF00>O aluno ${nome} foi APROVADO com média ${media.toString()}</font>`
    }

    else if(media>5){
        document.getElementById("mensagem").innerHTML=
        `<font color=#FAD921>O aluno ${nome} está em RECUPERAÇÃO com média ${media.toString()}</font>`
        
    }

    else{
        document.getElementById("mensagem").innerHTML=
        `<font color=#FF0000>O aluno ${nome} foi REPROVADO com média ${media.toString()}</font>`

    }
}

function validarNotas()
{
    n1=parseFloat(document.getElementById("nota1").value);
    n2=parseFloat(document.getElementById("nota2").value);
    n3=parseFloat(document.getElementById("nota3").value);

    if(isNaN(n1) || n1<0 || n1>10){
        document.getElementById("mensagem").innerHTML=`Digite uma nota valida no campo 1`;
        return;
    }

    if(isNaN(n2) || n2<0 || n2>10){
        document.getElementById("mensagem").innerHTML=`Digite uma nota valida no campo 2`;
        return;
    }

    if(isNaN(n3) || n3<0 || n3>10){
        document.getElementById("mensagem").innerHTML=`Digite uma nota valida no campo 3`;
        return;
    }

    valorMedia()

}

/* As variáveis estão fora, ou seja globais.
Sendo assim, a função chamada é a validarNotas, pra saber se tem algo errado.
Caso dê certo, ele chama a função valorMedia. */