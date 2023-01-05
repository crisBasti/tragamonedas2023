const creditoDisponible = document.getElementById('credito__disponible');


const caja1 = document.getElementById('linea_1');
const caja2 = document.getElementById('linea_2');
const caja3 = document.getElementById('linea_3');
const caja4 = document.getElementById('linea_4');
const caja5 = document.getElementById('linea_5');
const caja6 = document.getElementById('linea_6');
const caja7 = document.getElementById('linea_7');
const caja8 = document.getElementById('linea_8');
const caja9 = document.getElementById('linea_9');


const porDos = document.getElementById('por__dos');
const porTres = document.getElementById('por__tres');
const porCuatro = document.getElementById('por__cuatro');
const porCinco = document.getElementById('por__cinco');

const apuesta = document.getElementById('apuesta');

const lineas = document.getElementById('lineas');



porDos.addEventListener('click', ()=> {

    var r = Math.floor((Math.random()*3)+1);
    console.log(r)
    caja1.innerHTML=`
    <img src="img/imagen${r}.jpg" style="width:100px;">
    `;

    var s = Math.floor((Math.random()*3)+1);
    console.log(s)
    caja2.innerHTML=`
    <img src="img/imagen${s}.jpg" style="width:100px;">
    `;

    var t = Math.floor((Math.random()*3)+1);
    console.log(t)
    caja3.innerHTML=`
    <img src="img/imagen${t}.jpg" style="width:100px;">
    `;
    
    var u = Math.floor((Math.random()*3)+1);
    console.log(u)
    caja4.innerHTML=`
    <img src="img/imagen${u}.jpg" style="width:100px;">
    `;

    var v = Math.floor((Math.random()*3)+1);
    console.log(v)
    caja5.innerHTML=`
    <img src="img/imagen${v}.jpg" style="width:100px;">
    `;

    var w = Math.floor((Math.random()*3)+1);
    console.log(w)
    caja6.innerHTML=`
    <img src="img/imagen${w}.jpg" style="width:100px;">
    `;

    var x = Math.floor((Math.random()*3)+1);
    console.log(x)
    caja7.innerHTML=`
    <img src="img/imagen${x}.jpg" style="width:100px;">
    `;

    var y = Math.floor((Math.random()*3)+1);
    console.log(y)
    caja8.innerHTML=`
    <img src="img/imagen${y}.jpg" style="width:100px;">
    `;

    var z = Math.floor((Math.random()*3)+1);
    console.log(z)
    caja9.innerHTML=`
    <img src="img/imagen${z}.jpg" style="width:100px;">
    `;

    
    // --------------
    if (r === s && r === t) {
        let premioX2 = apuesta.value * 2;
        console.log(premioX2);
        let resultado = parseInt(creditoDisponible.value) + parseInt(premioX2);
        creditoDisponible.value = resultado;
        console.log(resultado);
    }else {
        let resultado = parseInt(creditoDisponible.value) - parseInt(apuesta.value * 2);
        creditoDisponible.value = resultado;
        console.log(resultado);
        if(apuesta.value > creditoDisponible.value || creditoDisponible.value === 0) {
            creditoDisponible.value = resultado;
            apuesta.value = 0;
           alert('NO TIENES CREDITOS SUFICIENTES!!.. VUELVE A CARGAR PARA SEGUIR JUGANDO');
        }
    }


    if (u === v && u === w) {
        // x2 = parseInt(apuesta.value * 2);
        // console.log(x2);
    }


    if (x === y && x === z) {
        // x2 = parseInt(apuesta.value * 2);
        // console.log(x2);
    }
})

porTres.addEventListener('click', ()=> {

    let r = Math.floor((Math.random()*3)+1);
    console.log(r)
    caja1.innerHTML=`
    <img src="img/imagen${r}.jpg" style="width:100px;">
    `;

    let s = Math.floor((Math.random()*3)+1);
    console.log(s)
    caja2.innerHTML=`
    <img src="img/imagen${s}.jpg" style="width:100px;">
    `;

    let t = Math.floor((Math.random()*3)+1);
    console.log(t)
    caja3.innerHTML=`
    <img src="img/imagen${t}.jpg" style="width:100px;">
    `;
    
    let u = Math.floor((Math.random()*3)+1);
    console.log(u)
    caja4.innerHTML=`
    <img src="img/imagen${u}.jpg" style="width:100px;">
    `;

    let v = Math.floor((Math.random()*3)+1);
    console.log(v)
    caja5.innerHTML=`
    <img src="img/imagen${v}.jpg" style="width:100px;">
    `;

    let w = Math.floor((Math.random()*3)+1);
    console.log(w)
    caja6.innerHTML=`
    <img src="img/imagen${w}.jpg" style="width:100px;">
    `;

    let x = Math.floor((Math.random()*3)+1);
    console.log(x)
    caja7.innerHTML=`
    <img src="img/imagen${x}.jpg" style="width:100px;">
    `;

    let y = Math.floor((Math.random()*3)+1);
    console.log(y)
    caja8.innerHTML=`
    <img src="img/imagen${y}.jpg" style="width:100px;">
    `;

    let z = Math.floor((Math.random()*3)+1);
    console.log(z)
    caja9.innerHTML=`
    <img src="img/imagen${z}.jpg" style="width:100px;">
    `;


    // --------------

    if (r === s && r === t) {
        let premioX3 = apuesta.value * 3;
        console.log(premioX3);
        let resultado = parseInt(creditoDisponible.value) + parseInt(premioX3);
        creditoDisponible.value = resultado;
        console.log(resultado);
    }else {
        let resultado = parseInt(creditoDisponible.value) - parseInt(apuesta.value * 3);
        creditoDisponible.value = resultado;
        console.log(resultado);
        if(apuesta.value * 3 > creditoDisponible.value || creditoDisponible.value === 0) {
            creditoDisponible.value = resultado;
            apuesta.value = 0;
           alert('NO TIENES CREDITOS SUFICIENTES!!.. VUELVE A CARGAR PARA SEGUIR JUGANDO');
        }
    }

    // --------
})

porCuatro.addEventListener('click', ()=> {
    var r = Math.floor((Math.random()*3)+1);
    console.log(r)
    caja1.innerHTML=`
    <img src="img/imagen${r}.jpg" style="width:100px;">
    `;

    var s = Math.floor((Math.random()*3)+1);
    console.log(s)
    caja2.innerHTML=`
    <img src="img/imagen${s}.jpg" style="width:100px;">
    `;

    var t = Math.floor((Math.random()*3)+1);
    console.log(t)
    caja3.innerHTML=`
    <img src="img/imagen${t}.jpg" style="width:100px;">
    `;
    
    var u = Math.floor((Math.random()*3)+1);
    console.log(u)
    caja4.innerHTML=`
    <img src="img/imagen${u}.jpg" style="width:100px;">
    `;

    var v = Math.floor((Math.random()*3)+1);
    console.log(v)
    caja5.innerHTML=`
    <img src="img/imagen${v}.jpg" style="width:100px;">
    `;

    var w = Math.floor((Math.random()*3)+1);
    console.log(w)
    caja6.innerHTML=`
    <img src="img/imagen${w}.jpg" style="width:100px;">
    `;

    var x = Math.floor((Math.random()*3)+1);
    console.log(x)
    caja7.innerHTML=`
    <img src="img/imagen${x}.jpg" style="width:100px;">
    `;

    var y = Math.floor((Math.random()*3)+1);
    console.log(y)
    caja8.innerHTML=`
    <img src="img/imagen${y}.jpg" style="width:100px;">
    `;

    var z = Math.floor((Math.random()*3)+1);
    console.log(z)
    caja9.innerHTML=`
    <img src="img/imagen${z}.jpg" style="width:100px;">
    `;

    // --------------


    if (r === s && r === t) {
        let premioX4 = apuesta.value * 4;
        console.log(premioX4);
        let resultado = parseInt(creditoDisponible.value) + parseInt(premioX4);
        creditoDisponible.value = resultado;
        console.log(resultado);
    }else {
        let resultado = parseInt(creditoDisponible.value) - parseInt(apuesta.value * 4);
        creditoDisponible.value = resultado;
        console.log(resultado);
        if(apuesta.value > creditoDisponible.value || creditoDisponible.value === 0) {
            creditoDisponible.value = resultado;
            apuesta.value = 0;
           alert('NO TIENES CREDITOS SUFICIENTES!!.. VUELVE A CARGAR PARA SEGUIR JUGANDO');
        }
    }
})

porCinco.addEventListener('click', ()=> {
    var r = Math.floor((Math.random()*3)+1);
    console.log(r)
    caja1.innerHTML=`
    <img src="img/imagen${r}.jpg" style="width:100px;">
    `;

    var s = Math.floor((Math.random()*3)+1);
    console.log(s)
    caja2.innerHTML=`
    <img src="img/imagen${s}.jpg" style="width:100px;">
    `;

    var t = Math.floor((Math.random()*3)+1);
    console.log(t)
    caja3.innerHTML=`
    <img src="img/imagen${t}.jpg" style="width:100px;">
    `;
    // -----------------
    var u = Math.floor((Math.random()*3)+1);
    console.log(u)
    caja4.innerHTML=`
    <img src="img/imagen${u}.jpg" style="width:100px;">
    `;

    var v = Math.floor((Math.random()*3)+1);
    console.log(v)
    caja5.innerHTML=`
    <img src="img/imagen${v}.jpg" style="width:100px;">
    `;

    var w = Math.floor((Math.random()*3)+1);
    console.log(w)
    caja6.innerHTML=`
    <img src="img/imagen${w}.jpg" style="width:100px;">
    `;

    var x = Math.floor((Math.random()*3)+1);
    console.log(x)
    caja7.innerHTML=`
    <img src="img/imagen${x}.jpg" style="width:100px;">
    `;

    var y = Math.floor((Math.random()*3)+1);
    console.log(y)
    caja8.innerHTML=`
    <img src="img/imagen${y}.jpg" style="width:100px;">
    `;

    var z = Math.floor((Math.random()*3)+1);
    console.log(z)
    caja9.innerHTML=`
    <img src="img/imagen${z}.jpg" style="width:100px;">
    `;

    // --------------


    if (r === s && r === t) {
        let premioX5 = apuesta.value * 5;
        console.log(premioX5);
        let resultado = parseInt(creditoDisponible.value) + parseInt(premioX5);
        creditoDisponible.value = resultado;
        console.log(resultado);
    }else {
        let resultado = parseInt(creditoDisponible.value) - parseInt(apuesta.value * 5);
        creditoDisponible.value = resultado;
        console.log(resultado);
        if(apuesta.value > creditoDisponible.value || creditoDisponible.value === 0) {
            creditoDisponible.value = resultado;
            apuesta.value = 0;
           alert('NO TIENES CREDITOS SUFICIENTES!!.. VUELVE A CARGAR PARA SEGUIR JUGANDO');
        }
    }

    // --------
})

function imgRandom() {

    var r = Math.floor((Math.random()*3)+1);
    console.log(r)
    caja1.innerHTML=`
    <img src="img/imagen${r}.jpg" style="width:100px;">
    `;

    var s = Math.floor((Math.random()*3)+1);
    console.log(s)
    caja2.innerHTML=`
    <img src="img/imagen${s}.jpg" style="width:100px;">
    `;

    var t = Math.floor((Math.random()*3)+1);
    console.log(t)
    caja3.innerHTML=`
    <img src="img/imagen${t}.jpg" style="width:100px;">
    `;
    // -----------------
    var u = Math.floor((Math.random()*3)+1);
    console.log(u)
    caja4.innerHTML=`
    <img src="img/imagen${u}.jpg" style="width:100px;">
    `;

    var v = Math.floor((Math.random()*3)+1);
    console.log(v)
    caja5.innerHTML=`
    <img src="img/imagen${v}.jpg" style="width:100px;">
    `;

    var w = Math.floor((Math.random()*3)+1);
    console.log(w)
    caja6.innerHTML=`
    <img src="img/imagen${w}.jpg" style="width:100px;">
    `;


    // -------------------
    var x = Math.floor((Math.random()*3)+1);
    console.log(x)
    caja7.innerHTML=`
    <img src="img/imagen${x}.jpg" style="width:100px;">
    `;

    var y = Math.floor((Math.random()*3)+1);
    console.log(y)
    caja8.innerHTML=`
    <img src="img/imagen${y}.jpg" style="width:100px;">
    `;

    var z = Math.floor((Math.random()*3)+1);
    console.log(z)
    caja9.innerHTML=`
    <img src="img/imagen${z}.jpg" style="width:100px;">
    `;

    if (r === s && r === t) {
        alert("combinacion en linea 1...")
    }

    if (u === v && u === w) {
        alert("Combinacion en linea 2");
        alert('ganaste premio mayor!...')
    }

    if (x === y && x === z) {
        alert("Combinacion en linea 3...")
    }
}


// -------otro codigo
// const symbols = ['🍎', '🍊', '🍐', '🍋', '🍉'];

// // Función que simula la tirada de la máquina tragamonedas
// function spin() {
    //   const result = [];
//   for (let i = 0; i < 3; i++) {
//     result.push(symbols[Math.floor(Math.random() * symbols.length)]);
//   }
//   return result;
// }

// // Tirada de prueba
// console.log(spin()); // puede imprimir por ejemplo ['🍎', '🍎', '🍐']
// -------otro codigo





// -------otro codigo
// function numRandon() {
//     const numeroX = Math.floor(Math.random()*37);
//     caja1.value = numeroX;
//     caja1.innerHTML = numeroX;
//     console.log(numeroX);
// }
// const numeroX = Math.floor(Math.random()*37);

// let btn_Tirar = document.querySelector(".btn_Tirar");
// btn_Tirar.addEventListener('click', ()=>{
    // caja1.innerHTML = numRandon();
    // caja1.innerHTML = numeroX;
    // caja1.value = "X";
    // console.log(caja1.value);

    // caja2.textContent = numRandon();
    // caja3.textContent = numRandon();
// })
// -------otro codigo