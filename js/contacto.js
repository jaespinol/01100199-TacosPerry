function txtNombre_blur() {
    if ($("#nombre").val() != '') {
        $("#nombre").removeClass("is-invalid");
    } else {
        $("#nombre").addClass("is-invalid");
    }
}

function txtApePat_blur() {
    if ($("#apellido").val() != '') {
        $("#apellido").removeClass("is-invalid");
    } else {
        $("#apellido").addClass("is-invalid");
    }
}

