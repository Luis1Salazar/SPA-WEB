document.querySelector("#btn-save").addEventListener("click", saveRegistro);

imprimirtabla();


function saveRegistro(){
    var sCedula = document.querySelector('#txtCedula').value,
    sNombre = document.querySelector("#txtNombre").value,
    sApellido = document.querySelector("#txtApellido").value,
    sDomicilio = document.querySelector("#txtDomicilio").value,
    sTelefono = document.querySelector("#txtTelefono").value,
    sEmail = document.querySelector("#txtEmail").value,
    sServicio = document.querySelector("#txtServicios").value;
    sPrecio = document.querySelector("#txtPrecio").value;

    addRegistroToSystem(sCedula, sNombre, sApellido, sDomicilio, sTelefono, sEmail, sServicio, sPrecio);
    imprimirtabla();
}

function imprimirtabla(){
    var lista = getLista_registro(),
    tbody = document.querySelector("#table tbody");
    tbody.innerHTML='';
    

    for(var i = 0; i < lista.length; i++){
        var row = tbody.insertRow(i),
            cedulaCell = row.insertCell(0), 
            nombreCell = row.insertCell(1), 
            apellidoCell = row.insertCell(2),
            domicilioCell = row.insertCell(3), 
            telefonoCell = row.insertCell(4),
            emailCell = row.insertCell(5),
            servicioCell = row.insertCell(6),
            precioCell = row.insertCell(7),
        selectCell = row.insertCell(8);

        cedulaCell.innerHTML = lista[i].cedula;
        nombreCell.innerHTML = lista[i].nombre;
        apellidoCell.innerHTML = lista[i].apellido;
        domicilioCell.innerHTML = lista[i].domicilio;
        telefonoCell.innerHTML = lista[i].telefono;
        emailCell.innerHTML = lista[i].email;
        servicioCell.innerHTML = lista[i].servicios;
        precioCell.innerHTML = lista[i].precio;
        
        var inputSelect = document.createElement("input");
        inputSelect.type = "radio";
        inputSelect.value = lista[i].cedula;
        inputSelect.name="rbFriend"
        selectCell.appendChild(inputSelect);



        tbody.appendChild(row);
    }

}