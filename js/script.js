let nombreGuardado = prompt ("Ingresa tu nombre querido tutor/a");

alert("Hola querido "+nombreGuardado+ " ¿Cómo la estás pasando hoy?");

let respuesta = prompt("Coméntame cómo te ha ido hoy " +nombreGuardado+ " \n 1- Bien \n 2- Mal \n 3- Maso maso")
    switch (respuesta) {
        case "1":
            alert ("Me alegra que estés Bien, acá todo joya!");
            let respuestaCase1 = prompt (" Quisiera saber más de ti, ¿puedo? \n Escoge solo una\n 1- Si \n 2- No")
            switch (respuestaCase1) {
                case "1":
                    alert("Perfecto, vamos allá")
                let color1 = prompt ("¿Me puedes decir tu color favorito?");
                alert ("QUEEE??? No te lo creo si el "+color1+ " también es mi color favorito" );
                let peli1 = prompt ("Espero que en esta no coincidamos, \n ¿Me puedes decir cual es tu pelicula favorita?")
                alert ("Es increible si " +peli1+ " la veo desde que era pequeño");
                alert ("Mejor nos vemos al rato " +nombreGuardado+ " me empiezas a asustar")
                    break;
                case "2":
                    alert("Está bien, prefieres no decirlo, justo como lo sospeché \n Espero verte en una próxima ocasión " +nombreGuardado);
                    break;
                default:
                    alert("Por favor escoge una opción válida");
                    break;
            }
            break;
        case "2":
            alert ("¿Cómo? me parece haber leído mal, ¿me estás diciendo que alguien tan guapo como tú está mal?");
            alert("A ver, intentemos jugar algo, te parece?")
            let case2 = prompt ("\n 1- Si \n 2- No")
            switch (case2) {
                case "1":
                    alert("Perfecto, empezemos esto");
                let mate2 = prompt ("¿Te gustan las matematicas? \n 1 - Si \n 2 - No")
                switch (mate2) {
                    case "1":
                        alert("Perfecto, haremos unas cuantas operaciones muy sencillas, no te asustes.");
                        alert ("Ponte cómodo que empezamos con sumas muy fáciles");
                    let ingresarNumeroSuma = parseInt(prompt("Ingresa un número, menor o igual a 1000"))
                    for (let i = ingresarNumeroSuma; i<=1050; i= i+50){
                    let resultadoSuma = i + 50 ;
                    alert("A " +ingresarNumeroSuma+ " sumale 50 más") 
                     let resultadoOperacion= prompt("Ingresa el resultado de la operación anterior") 
                        if (resultadoSuma==resultadoOperacion){ 
                            alert("Correcto, lo hiciste muy bien")
                     }
                     else{
                        alert("Ese no es el resultado, intentalo nuevamente")
                     }
                     break;
                 }
                        break;
                    case "2":
                            alert("No pasa nada jaja, hoy las empezarás a querer con esto tan sencillo.");
                            alert ("Ponte cómodo que empezamos con sumas muy fáciles");
                    let ingresarNumeroSuma2 = parseInt(prompt("Ingresa un número, menor o igual a 1000"))
                    for (let i = ingresarNumeroSuma2; i<=1050; i= i+100){
                    let resultadoSuma = i + 100 ;
                    alert("A " +ingresarNumeroSuma2+ " sumale 100 más") 
                     let resultadoOperacion= prompt("Ingresa el resultado de la operación anterior") 
                        if (resultadoSuma==resultadoOperacion){ 
                            alert("Correcto, lo hiciste muy bien")
                     }
                     else{
                        alert("Ese no es el resultado, intentalo nuevamente")
                     }
                     break;
                 }
                            break;
                    default:
                        break;
                }
                    break;
                case "2":
                        alert("Ánimate, sé que te va a encantar, no seas malo :(")
                        let respuestaCase2 = prompt ("\n 1- Me animo \n 2- No, gracias así estoy bien")
                        switch (respuestaCase2) {
                            case "1":
                                alert ("Házme caso, no te arrepentirás")
                                break;
                            
                            case "2":
                                alert ("Está bien, no te molesto más :(")
                                break;
                        
                            default:
                                break;
                        }
                        break;
                default:
                    break;
            }
            break;
        case "3" :
            alert ("Bueno, me alegra informarte que he llegado a mejorarte el día!");
            alert("Te voy a contar un pequeño chiste \n ¿Sabes que es un terapeuta? 1024 gigapeutas xdd")
            let respuestaChiste = prompt("¿Quieres otro chiste? \n 1 - Si \n 2 - No")
            switch (respuestaChiste) {
                case "1":
                    alert("Perfecto, aquí te va otro \n ¿Qué le dice un .GIF a un .JPEG? Ánimate viejo!")
                    alert("Jajajaja, hasta aquí mis chistes un saludito bro!")
                break;
                case "2":
                    alert("Está bien, pero te apuesto a que no sabías sobre este dato curioso: \n – Si los zombies llegan a la tercera edad…, ¿zombiejitos…?")
                    alert("Jajajaja, hasta aquí mis chistes un saludito bro!")
                break;
                default:
                    break;
            }
            break;
    
        default:
            alert("Por favor, elige una opción válida");
            break;
    }

