window.showToastr = function (type, message) {
    if (type == "success") {
        toastr.success(message)
    }
    if (type == "error") {
        toastr.error(message)
    }
}

window.showSweetalert = function (type, message) {
    if (type === "success") {
        Swal.fire({
            title: "Good Job!",
            text: message,
            icon: "success"
        });
    }
    if (type === "error") {
        Swal.fire({
            title: "Something went wronge!",
            text: message,
            icon: "error"
        });
    }
}