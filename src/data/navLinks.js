import { ClipboardDocumentListIcon, HomeIcon } from '@heroicons/vue/24/outline';
import { PlusCircleIcon } from '@heroicons/vue/24/solid';

const navLinks = [
  {
    id: 1,
    path: '/',
    icon: HomeIcon,
  },
  {
    id: 2,
    path: '/add-food',
    icon: PlusCircleIcon,
  },
  {
    id: 3,
    path: '/get-recipe',
    icon: ClipboardDocumentListIcon,
  },
];

export { navLinks };
