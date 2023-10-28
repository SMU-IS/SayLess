import {
  UserIcon,
  ShieldCheckIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/vue/24/solid';

const profileData = [
  {
    id: 1,
    path: '/',
    icon: UserIcon,
    title: 'Personal Info',
  },
  {
    id: 2,
    path: '/rewards',
    icon: ShieldCheckIcon,
    title: 'Rewards',
  },
  {
    id: 3,
    path: '/',
    icon: ShieldCheckIcon,
    title: 'Security',
  },

  {
    id: 4,
    path: '/',
    icon: QuestionMarkCircleIcon,
    title: 'Help Center',
  },
];

export { profileData };
