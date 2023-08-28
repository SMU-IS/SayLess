import Swal from 'sweetalert2';

const getResponse = (icon, text) => {
  Swal.fire({
    icon: icon,
    text: text,
    toast: true,
    width: '80%',
    position: 'top',
    timer: 4000,
    showConfirmButton: false,
    timerProgressBar: true,
    padding: '3em',
    color: '#716add',
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });
};

export { getResponse };
