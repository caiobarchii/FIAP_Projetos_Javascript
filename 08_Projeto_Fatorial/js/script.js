function fatorial()
{
    let num=parseInt(document.getElementById("valor").value);
    let fat=1;
    let i=1;

    while (i<=num){
        fat=fat*i;
        i++;
    }
    
    document.getElementById("fat").innerHTML=fat.toString();
}

