function calcular()
{
    let n1=parseInt(document.getElementById("n1").value);
    let n2=parseInt(document.getElementById("n2").value);
    let i=n1+1;
    let qtdePares=0;
    
    if(n1<n2)
    {
        do
        {
            if(i%2==0) // MOD: Calcula o resto da divisão. Ou seja, o resto da divisão de i por 2, se for 0 é par
            {
                qtdePares++;
            }
            i++;
        }while(i<n2);
        document.getElementById("result").innerHTML=qtdePares.toString();
    }
    else
    {
        document.getElementById("result").innerHTML="O primeiro número deve ser menor que o segundo!";
    }

}