import { gsap } from 'gsap';

const pageLoadAnimation = () => {
  let tl = gsap.timeline();
  let tween = tl
    .from('#tl1', { y: 0, opacity: 0, ease: 'power1.out' })
    .from('#tl2', { y: 50, opacity: 0, ease: 'power1.out' }, '>-0.2')
    .from('#tl3', { y: 50, opacity: 0, ease: 'power1.out' }, '>-0.2');

  tween.play();
};

export { pageLoadAnimation };
