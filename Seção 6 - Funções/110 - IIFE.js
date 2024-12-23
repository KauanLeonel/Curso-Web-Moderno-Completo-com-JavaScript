// IIFE -> function expression que é imediatamente invocada

(function(){
    console.log('Será executada na hora');
    console.log('Foge do escopo global');
    // Mas claro que dá para acessar var do escopo global, tipo o window
})() // Para ela ser chamada deve-se usar o parenteses no final