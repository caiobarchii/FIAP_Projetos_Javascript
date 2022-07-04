function calcular()
{
    let preco=parseFloat(document.getElementById("preco").value);
    let qtde=parseFloat(document.getElementById("qtde").value);
    let res=0;

    if(qtde>1){
        res=Math.floor(qtde*preco);
    }
    else{
        res=preco
    }
    document.getElementById("resposta").innerHTML=res.toString();
}

/*let produto=parseInt(prompt("Digite o nome do medicamento:"));
let preço;
let desconto=(Math.floor(preço+preço));

    
switch (produto)
{
    case Aspirina:
            preço="2.36";
            break;
    case Dorflex:
            preço="3.78";
            break;
    case Benegrip:
            preço="1.87";
            break;
    case Loratadina:
            preço="8.84";
            break;
}
alert(desconto)*/