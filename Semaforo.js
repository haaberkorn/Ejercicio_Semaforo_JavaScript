let color= prompt(
    `Eligie un color del semaforo 🚦
    1) verde
    2) amarillo
    3) rojo`
).toLowerCase();

if(color === "verde"){
    let accion = +prompt(
        `El semaforo esta de color ${color} ¿Que desea hacer?
            1) Pasar normalmente
            2) Acelerar
            3) Esperar`            
        );
switch(accion){
    case 1:
        alert("Bien hecho!, pasaste en el momento adecuado ✅, ¡Has ganado! 😁");
        break;
    case 2:
        alert("Oh no!, Aceleraste demasiado y chocaste 💥, ¡Has perdido! 😞");
        break;
    case 3:
        alert("Oh no!, Creaste un bloqueo y los demas conductores estan furiosos 🤬, ¡Has Perdido! ❌");
        break;
    default:
        alert("Respuesta invalida.");   
}
}
else if(color === "amarillo"){
    let accion = +prompt(
        `El semaforo esta de color ${color} ¿Que desea hacer?
            1) Pasar normalmente
            2) Acelerar
            3) Esperar`            
        );
        switch(accion){
            case 1:
                alert("Oh no!, No aceleraste lo suficiente y te han chocado 💥, ¡Has perdido! ❌");
                break;
            case 2:
                alert("Bien hecho!, pasaste en el momento justo ✅, ¡Has ganado! 😁");
                break;
            case 3:
                alert("Oh no!, Creaste un bloqueo y los demas conductores estan furiosos 🤬, ¡Has Perdido! 😞");
                break;
            default:
                alert("Respuesta invalida.");   
        }        
}
else if(color === "rojo"){
    let accion = +prompt(
        `El semaforo esta de color ${color} ¿Que desea hacer?
            1) Pasar normalmente
            2) Acelerar
            3) Esperar`            
        );
        switch(accion){
            case 1:
                alert("Oh no!, Pasaste en el momento indebido ❌, ¡Has perdido! 😞");
                break;
            case 2:
                alert("Oh no!, Crusaste mientras autos en otra direccion pasaban y chocaste 💥, ¡Has Perdido! ❌");
                break;
            case 3:
                alert("Bien hecho!, Esperaste en el momento adecuado ✅, ¡Has ganado! 😁");
                break;
            default:
                alert("Respuesta invalida.");   
        }        
}else{
    alert("Opcion invalida, elige un color del semaforo porfavor 😊😊");
}

