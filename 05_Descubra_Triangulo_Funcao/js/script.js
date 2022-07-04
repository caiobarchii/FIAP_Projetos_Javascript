/*function triangulo(){
    
    let x=parseFloat(document.getElementById("lado1").value);
    let y=parseFloat(document.getElementById("lado2").value);
    let z=parseFloat(document.getElementById("lado3").value);

    let xy=(x+y);
    let xz=(x+z);
    let yz=(y+z);
    
    if ((x<yz) && (y<xz) && (z<xy))
    {
        if ((x==y) && (x==z) && (y==z)){
        document.getElementById("equilatero").innerHTML=("O triângulo é Equilátero");
        }

        else if ((x!=y) && (y!=z) && (x!=z)){
        document.getElementById("escaleno").innerHTML=("O triângulo é Escaleno");
        }   

        else{
        document.getElementById("isoceles").innerHTML=("O triângulo é Isóceles");
        }
    }
    else{
    document.getElementById("nada").innerHTML=("Não é um triângulo");
    }

}*/



let x=parseFloat(document.getElementById("lado1").value);
let y=parseFloat(document.getElementById("lado2").value);
let z=parseFloat(document.getElementById("lado3").value);
alert (verificarTriangulo(x,y,z));

function verificarTriangulo(x,y,z)
{
    if (x<yz && y<xz && z<xy)
    {
        if ((x==y) && (x==z) && (y==z)){
        return "Triângulo Equilátero.";
        }

        else if (x!=y && y!=z && x!=z){
        return "Triângulo Escaleno.";
        }   

        else{
        return "Triângulo Isóceles.";
        }
    }
    else{
    return "Não é um triângulo.";
    }
}