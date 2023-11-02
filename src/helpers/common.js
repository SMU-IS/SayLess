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

const processImage = (file, callback) => {
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.onload = () => {
      const MAX_WIDTH = 800;
      const MAX_HEIGHT = 600;

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
      }

      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);

      const compressedImageUrl = canvas.toDataURL('image/jpeg', 0.7);

      callback(compressedImageUrl);
    };

    img.src = reader.result;
  };

  reader.readAsDataURL(file);
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
  getCurrentDate,
  randomUniqueId,
  processImage,
};
