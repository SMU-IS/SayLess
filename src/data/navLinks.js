import {
  ClipboardDocumentListIcon,
  HomeIcon,
  UserIcon,
} from '@heroicons/vue/24/outline';
import { PlusCircleIcon } from '@heroicons/vue/24/solid';

const navLinks = [
  {
    id: 1,
    path: '/',
    icon: HomeIcon,
  },
  {
    id: 2,
    path: '/profile',
    icon: UserIcon,
  },
  {
    id: 3,
    path: '/add-item',
    icon: PlusCircleIcon,
  },
  {
    id: 4,
    path: '/get-recipe',
    icon: ClipboardDocumentListIcon,
  },
  {
    id: 5,
    path: '/profile',
    icon: UserIcon,
  },
];

export { navLinks };
