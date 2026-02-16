window.showToastr = function(type, message)
{
    if(type == "success")
    {
        toastr.success(message);
    }
    if(type == "error")
    {
        toastr.error(message);
    }
}

window.showSwal = function(message)
{
    Swal.fire(message);
    
}