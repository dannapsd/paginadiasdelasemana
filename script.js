var nombre;

nombre = prompt("Dime tu nombre", "");

alert("Saludos " + nombre + ", lee las instrucciones de la página");

function diasSemana()
{
    var dias = [
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
        "Domingo"
    ];

    var i;

    for(i = 0; i < dias.length; i++)
    {
        document.write("<br>");
        document.write("Día " + (i + 1) + ": " + dias[i]);
    }

    document.write("<br>");
    document.write("<br>");
    document.write("Para volver a iniciar las funciones recarga la página.");
}

function tablaMulti(numero)
{
    var j;

    for(j = 1; j <= 10; j++)
    {
        document.write("<br>");
        document.write(numero + " x " + j + " = " + (numero * j));
    }

    document.write("<br>");
    document.write("<br>");
    document.write("Para volver a iniciar las funciones recarga la página.");
}