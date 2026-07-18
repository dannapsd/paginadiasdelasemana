var nombre;
nombre = prompt('Dime tu nombre ', '');
alert("Saludos " + nombre + ", lee las instrucciones de la pagina");

function meses ()
{
    var meses = ["enero", "febrero", "marzo", "abril", "mayo", 
    "junio", "julio", "agosto",  "septiembre", "octubre", 
    "noviembre", "diciembre"];
    var i;

    for(i=0;i<=11;i++)
    {
        document.write('<br>');
        document.write("mes " + (i+1) + ": "+meses[i]);
    }
    document.write('<br>');
    document.write('<br>');
    document.write("para volver a iniciar las funciones recarga la pagina");
}

function tablaMulti (numero)
{
    var j;

    for(j=1;j<=10;j++)
    {
        document.write('<br>');
        document.write(numero + " x " + j + " = "+ numero*j);
    }
    document.write('<br>');
    document.write('<br>');
    document.write("para volver a iniciar las funciones recarga la pagina")
}