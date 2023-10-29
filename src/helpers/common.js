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

const calculateTimeSincePosted = (date) => {
  const targetDate = new Date(date);
  const differenceMs = new Date() - targetDate;

  const minutesAgo = Math.floor(differenceMs / (1000 * 60));
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);

  let result = '';

  if (daysAgo >= 1) {
    result = `${daysAgo} day${daysAgo > 1 ? 's' : ''} ago`;
  } else if (hoursAgo >= 1) {
    result = `${hoursAgo} hour${hoursAgo > 1 ? 's' : ''} ago`;
  } else {
    result = `${minutesAgo} min${minutesAgo > 1 ? 's' : ''} ago`;
  }

  return result;
};

const sortByState = (arr) => {
  let filterArr = [...arr];
  return filterArr.sort((a, b) =>
    a.status === 'Completed' && b.status !== 'Completed'
      ? -1
      : a.status !== 'Completed' && b.status === 'Completed'
      ? 1
      : 0,
  );
};

export {
  goHome,
  scrollToTop,
  openModal,
  closeModal,
  toggleDrawer,
  pageLoadAnimation,
  calculateTimeSincePosted,
  sortByState,
};
