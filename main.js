let myFormularioCampus = document.querySelector("#myFormularioCampus");
let myFormularioCampers = document.querySelector("#myFormularioCampers");
let myFormularioInicioA = document.querySelector("#myFormularioInicioA");
let myFormularioAsignatura = document.querySelector("#myFormularioAsignatura");
let Rol = document.querySelector("[name='Rol']");
let campus = {};
let Asigna = {}; /* Objeto libre*/

myFormularioCampus.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let consultaSede = document.querySelector("#ConsultaSede");
    campus[`${data.nombreSede}`] = {Camper: [], Trainers: [], Contacto:[]};
    campus[`${data.nombreSede}`]["Contacto"].unshift(data);
    let = nombreSede = data.nombreSede
    let telSede = campus[`${data.nombreSede}`]["Contacto"][0].telefonoSede;
    let dirSede = campus[`${data.nombreSede}`]["Contacto"][0].direccionSede;
    consultaSede.insertAdjacentHTML("beforeend", `
            <tr>
                <td>"${nombreSede}"</td>
                <td>"${telSede}"</td>
                <td>"${dirSede}"</td><br>
            </tr>
            `);
    listaSedes();
    myFormularioCampus.reset();
});


let listaSedes = ()=>{
    let opciones = document.querySelector("[name='sede']");
    opciones.innerHTML = null;
    for (let [val, id] of Object.entries(campus)) {
        opciones.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `);
    }
}



Rol.addEventListener("change", (e)=>{
    let oficio = e.target.value;
    let CamperTimer = document.querySelector("#CamperTimer");
    let TrainerTimer = document.querySelector("#TrainerTimer");
    let CamperDC= document.querySelector("#CamperDC");
    let consultas = document.querySelector("#ConsultaDatos");
    let ConsultaCamper = document.querySelector("#ConsultaCamper");
    if (oficio == "camper"){
        TrainerTimer.classList.add("div_hide");
        CamperTimer.classList.remove("div_hide");
        CamperDC.classList.remove("div_hide");
        consultas.classList.add("div_hide");
        ConsultaCamper.classList.remove("div_hide");
    }if (oficio == "trainer"){
        CamperTimer.classList.add("div_hide");
        TrainerTimer.classList.remove("div_hide");
        CamperDC.classList.add("div_hide");
        consultas.classList.remove("div_hide");
        ConsultaCamper.classList.add("div_hide");
    }

});

myFormularioCampers.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let sede = data.sede;
    let nombre = data.nombre;
    let Modalidad =  data.Modalidad;
    let Salon = data.Salon;
    let rol = data.Rol;

    if(rol == "camper"){
        campus[`${sede}`]["Camper"].unshift(data);
        let ConsultaCamper = document.querySelector("#ConsultaCamper");
            ConsultaCamper.insertAdjacentHTML("beforeend", `
            <tr>
                <td>"${nombre}"</td>
                <td>"${Salon}"</td>
            </tr>
            `);
    }if (rol == "trainer"){
        campus[`${sede}`]["Trainers"].unshift(data);
        let consultas = document.querySelector("#ConsultaDatos");
            consultas.insertAdjacentHTML("beforeend", `
            <tr>
                <td>"${nombre}"</td>
                <td>"${Modalidad}"</td><br>
            </tr>
            `); 
    }
    let consultasTecno = document.querySelector("#ConsultaTecno");
            consultasTecno.insertAdjacentHTML("beforeend", `
            <tr>
                <td>"${data.sandBoxtecnologia}"</td>
                <td>"${data.preRequisito}"</td>
                <td>"${data.Creditos}"</td><br>
            </tr>
            `);
    console.log(campus);
    myFormularioCampers.reset();
})


myFormularioInicioA.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    Asigna[`${data.Asignatura}`] = {Notas: []};
    listaInicioA();
    myFormularioCampus.reset();
});


let listaInicioA = ()=>{
    let Materia = document.querySelector("[name='MATERIA']");
    Materia.innerHTML = null;
    for (let [val, id] of Object.entries(Asigna)) {
        Materia.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `);
    }
}

myFormularioAsignatura.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    Asigna[`${data.MATERIA}`]["Notas"].unshift(data);
    console.log(Asigna);
    myFormularioCampers.reset();
})