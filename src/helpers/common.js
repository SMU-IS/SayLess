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

const toggleDrawer = (drawerId) => {
  document.getElementById(drawerId).click();
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

const getCurrentDate = () => {
  const date = new Date();
  const year = date.toLocaleString('default', { year: 'numeric' });
  const month = date.toLocaleString('default', {
    month: '2-digit',
  });
  const day = date.toLocaleString('default', { day: '2-digit' });

  return [year, month, day].join('-');
};

const randomUniqueId = () => {
  const timeStamp = Date.now().toString(36);
  const randomString = Math.random().toString(36);
  return timeStamp + randomString + Math.floor(Math.random() * 999);
};

export {
  goHome,
  scrollToTop,
  openModal,
  closeModal,
  toggleDrawer,
  pageLoadAnimation,
  getCurrentDate,
  randomUniqueId,
};
