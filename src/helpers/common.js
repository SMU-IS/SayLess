const goHome = (router) => {
  router.push('/');
};

const scrollToTop = () => {
  const options = {
    top: 0,
    behavior: 'smooth',
  };
  window.scrollTo(options);
};

const openModal = () => {
  document.getElementById('my_modal_2').showModal();
};

// const openDrawer = () => {
//   document.getElementById('my_drawer_4').showModal();
// };

export { goHome, scrollToTop, openModal };
