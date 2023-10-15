import Swal from 'sweetalert2';

const getResponse = (icon, text) => {
  Swal.fire({
    icon: icon,
    text: text,
    position: 'center',
    timer: 1000,
    showConfirmButton: false,
    color: '#716add',
  });
};

export { getResponse };
