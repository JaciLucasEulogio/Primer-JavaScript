/*Solicitar a un cliente los productos que va a comprar; (1)Leche, (2)Queso, (3)Mantequilla, (4)Pan, (5)Mandarina; ingresar la cantidad de productos de cada tipo. Si el cliente compra más de 10 productos de un tipo, se le asigna un descuento del 20% al precio total del costo de ese único producto. Si el cliente compra más de 50 soles en productos se le asigna un descuento de 25% en el costo total de la compra. Los descuentos se acumulan.*/

let rpta, opc, cantidad=0, subTotal=0, total =0, precio, dejaComprar;

function Menu(){
    return prompt("---------PRODUCTOS--------- \n [1] Leche ------- S/.3.50 \n [2] Queso kg ------- S/7.00  \n [3] Mantequilla ---- S/7.00  \n [4] Pan unid ----------- S/0.20 \n [5] Mandarina kg -------- S/3.00 \n [6] Salir \n [7] Dejar de comprar \n Ingrese el número de producto que desea comprar: ");
}

function mostrarTotal(){
    confirm("El total a pagar es: "+total);
    exit; 
}

function mostrarMenu(){
    do{
        opc= parseInt(Menu());
        switch(opc){
            case 1:{
                precio=3.5;
                do{
                    cantidad= parseInt(prompt("[1] Leche ------- S/.3.50 \n ¿Cuántas leches desea comprar?"));
                }while(!parseInt(cantidad) || cantidad <= 0);
            }break;
            case 2:{
                precio=7;
                do{
                    cantidad= parseInt(prompt("[2] Queso kg ------- S/7.00 \n ¿Cuántos quesos desea comprar?"));
                }while(!parseInt(cantidad) || cantidad <= 0);
            }break;
            case 3:{
                precio=7;
                do{
                    cantidad= parseInt(prompt("[3] Mantequilla ---- S/7.00 \n ¿Cuántas mantequillas desea comprar?"));
                }while(!parseInt(cantidad) || cantidad <= 0);
            }break;
            case 4:{
                precio=0.2;
                do{
                    cantidad= parseInt(prompt("[4] Pan unid ----------- S/0.20 \n ¿Cuántos panes desea comprar?"));
                }while(!parseInt(cantidad) || cantidad <= 0);
            }break;
            case 5:{
                precio=3;
                do{
                    cantidad= parseInt(prompt("[5] Mandarina kg -------- S/3.00 \n ¿Cuántos kg de mandarinas desea comprar"));
                }while(!parseInt(cantidad) || cantidad <= 0);
            }break;
            case 6:{
                confirm("Adios...!!");
                exit;
            }break;
            case 7:{
                do{
                    dejaComprar = parseInt(prompt("¿Realmente desea dejar de comprar? (1:Si/2:No)"));
                }while(!parseInt(dejaComprar) || ( dejaComprar != 2 && dejaComprar != 1 ) );
                if(dejaComprar == 1){
                    mostrarTotal();
                    exit;
                }else if(dejaComprar == 2){
                    mostrarMenu();
                }
            }
            default:{
                confirm("No has ingresado un valor permitido.");
                mostrarMenu();
            }
        }
        subTotal = cantidad * precio;
        if(cantidad > 10){
            subTotal = subTotal-(subTotal*0.2);
        }
        total = total+subTotal;
        confirm("El subTotal hasta ahora es:"+total);
    }while(opc != 6);
}

function comprar (){
    do{
        rpta = parseInt(prompt("--------BIENVENIDO---------- \n ¿Deseas hacer una compra? (1:Si/2:No)"));
    }while(!parseInt(rpta) || ( rpta != 2 && rpta != 1 ) );
    if(rpta == 1){
        mostrarMenu();
    }else if(rpta == 2){
        if(confirm("¿Realmente no deseas hacer una compra?")){
            confirm("Adios...!!");
        }else{
            inicio();
        }
    }
}

comprar();






