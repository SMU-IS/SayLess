import { gsap } from 'gsap';

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

export { pageLoadAnimation };
