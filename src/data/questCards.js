import { CheckBadgeIcon } from '@heroicons/vue/24/solid';

const questCards = [
  {
    id: 1,
    questID: 1,
    checked: false,
    icon: CheckBadgeIcon,
    content:
      'Lorem 1 ipsum dolor sit amet consectetur. Vitae consequat ipsum sed pharetra dolor',
    status: 'Start',
    page: '/community',
  },
  {
    id: 2,
    questID: 1,
    checked: true,
    icon: CheckBadgeIcon,
    content:
      'Lorem 2 ipsum dolor sit amet consectetur. Vitae consequat ipsum sed pharetra dolor',
    status: 'In Progress',
    page: `/chat`,
  },
  {
    id: 3,
    questID: 1,
    checked: true,
    icon: CheckBadgeIcon,
    content:
      'Lorem  ipsum dolor sit amet consectetur. Vitae consequat ipsum sed pharetra dolor',
    status: 'Completed',
    page: `/chat`,
  },
];

export { questCards };
