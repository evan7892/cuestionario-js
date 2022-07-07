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
                    break;
                case "2":
                    alert("Está bien, prefieres no decirlo, justo como lo sospeché")
                    break;
                default:
                    alert("Por favor escoge una opción válida")
                    break;
            }
            break;
        case "2":
            alert ("¿Cómo? me parece haber leído mal, ¿me estás diciendo que alguien tan guapo como tú está mal?");
            alert("A ver, intentemos jugar algo, te parece?")
            let case2 = prompt ("\n 1- Si \n 2- No")
            switch (case2) {
                case "1":
                    alert("Perfecto, empezemos esto")
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
            alert ("Bueno, me alegra informarte que he llegado a mejorarte el día?");
            break;
    
        default:
            alert("Por favor, elige una opción válida");
            break;
    }

