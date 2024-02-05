let edad;
le
do{
    edad = prompt("Introduce tu edad: ");
    let cadena;

    if (edad > 18)
        cadena = "Con "+edad+" ya puedes conducir.";
    else    
        cadena = "No puedes conducir.";

} while(edad !== null)
