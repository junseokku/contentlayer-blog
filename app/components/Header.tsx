import { ToggleDarkMode } from 'app/components/ToggleDarkMode';
import Link from 'next/link';

const MENU_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Posts', href: '/posts' },
];

export function Header() {
  return (
    <header className="flex flex-row gap-2 justify-end">
      <nav className="flex flex-row  gap-4">
        {MENU_ITEMS.map(({ name, href }) => (
          <Link key={name} href={href}>
            {name}
          </Link>
        ))}
        <ToggleDarkMode />
      </nav>
    </header>
  );
}
