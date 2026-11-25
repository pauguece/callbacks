// PAULINA MICHEL GUEVARA CERVANTES 00000262724

// Ejercicio 1
function principal(callback){
    setTimeout(()=> {
        callback();
    }, 3000);
}

principal(() => {
    console.log("Éxito");
});

// Ejercicio 2
function operacion(n1, n2, callback){
    callback(n1, n2);
}

operacion(1, 2, (n1, n2) =>{
    let result = n1 + n2;
    console.log("SUMA = " + result);
})

operacion(1, 2, (n1, n2) =>{
    let result = n1 - n2;
    console.log("RESTA = " + result);
})

operacion(1, 2, (n1, n2) =>{
    let result = n1 * n2;
    console.log("MULTIPLICACIÓN = " + result);
})

operacion(1, 2, (n1, n2) =>{
    let result = n1 / n2;
    console.log("DIVISIÓN = " + result);
})

// Ejercicio 3
function cortarIngredientes(callback){
    console.log("Cortando ingredientes")
    setTimeout(()=> {
        console.log("Ingredientes cortados");
        callback();
    }, 3000);
}

function cocinar(callback){
    console.log("Cocinando");
    callback();
}

function servirPlato(callback){
    console.log("Sirviendo");
    callback();
}

cortarIngredientes(() => {
    cocinar(() => {
        servirPlato(() => {
            console.log("Receta finalizada");
        });
    });
});