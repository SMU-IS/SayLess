import { gsap } from 'gsap';

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

const openModal = (modalId) => {
  document.getElementById(modalId).showModal();
};

const closeModal = (modalId) => {
  document.getElementById(modalId).close();
};

// const openDrawer = () => {
//   document.getElementById('my_drawer_4').showModal();
// };

const closeDrawer = () => {
  document.getElementById('my_drawer').close();
};

const pageLoadAnimation = (elementIds) => {
  const timeline = gsap.timeline();
  elementIds.forEach((elementId, i) => {
    timeline.from(
      elementId,
      i === 0
        ? { y: 0, opacity: 0, ease: 'power1.out' }
        : { y: 50, opacity: 0, ease: 'power1.out' },
      '>-0.2',
    );
  });

  timeline.play();
};

export {
  goHome,
  scrollToTop,
  openModal,
  closeModal,
  closeDrawer,
  pageLoadAnimation,
};
