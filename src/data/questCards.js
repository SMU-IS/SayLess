import { CheckBadgeIcon } from '@heroicons/vue/24/solid';

const questCards = [
  {
    id: 1,
    questID: 1,
    checked: false,
    icon: CheckBadgeIcon,
    content:
      'Lorem 1 ipsum dolor sit amet consectetur. Vitae consequat ipsum sed pharetra dolor',
    status: 'Not Started',
  },
  {
    id: 2,
    questID: 1,
    checked: true,
    icon: CheckBadgeIcon,
    content:
      'Lorem 1 ipsum dolor sit amet consectetur. Vitae consequat ipsum sed pharetra dolor',
    status: 'In Progress',
  },
  {
    id: 3,
    questID: 1,
    checked: true,
    icon: CheckBadgeIcon,
    content:
      'Lorem 1 ipsum dolor sit amet consectetur. Vitae consequat ipsum sed pharetra dolor',
    status: 'Completed',
  },
];

export { questCards };
