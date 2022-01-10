var lista_registro = [];


function addRegistroToSystem(pcedula, pnombre, papellido, pdomicilio, ptelefono, pemail, pservicios, pprecio, pselect){
    var newRegistro = {
        cedula : pcedula,
        nombre : pnombre,
        apellido : papellido,
        domicilio : pdomicilio,
        telefono : ptelefono,
        email : pemail,
        servicios : pservicios,
        select : pselect,
        precio : pprecio
    };
    console.log(newRegistro);
    lista_registro.push(newRegistro);
    localStorageRegistro(lista_registro);
    window.alert("Registro exitoso.");
    
}

function getLista_registro(){
    var storedList = localStorage.getItem("localRegistroList")
    if(storedList == null){
        lista_registro = [];
    }
    else {
        lista_registro = JSON.parse(storedList);
    }
    return lista_registro;
}

function localStorageRegistro(plist){
    localStorage.setItem("localRegistroList", JSON.stringify(plist));
}

