import Swal from "sweetalert2";

export const alertYesNo = async () => {
  let results = await Swal.fire({
    title: "Estas seguro?",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#667eea",
    cancelButtonColor: "#a0aec0",
    confirmButtonText: "Si, continuar!",
    cancelButtonText: "No",
  });
  return results;
};

export const alertError = (message) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Algo salió mal!",
    confirmButtonColor: "#667eea",
    footer: message,
  });
};

export const alertSaved = (message, timer) => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: message,
    confirmButtonColor: "#667eea",
    timer,
  });
};

// Modal window position, can be 'top', 'top-start', 'top-end', 'center', 'center-start', 'center-end', 'bottom', 'bottom-start', or 'bottom-end'.

// Icon: success, error, warning, info, question
export const alertMixin = (icon, position, title) => {
  const Toast = Swal.mixin({
    toast: true,
    position,
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon,
    title,
  });
};
