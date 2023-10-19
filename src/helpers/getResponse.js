import Swal from 'sweetalert2';

const getResponse = (icon, text) => {
  Swal.fire({
    icon: icon,
    text: text,
    position: 'center',
    padding: '0 0 3rem 0',
    timer: 1500,
    showConfirmButton: false,
    color: '#221E2F',
  });
};

export { getResponse };
