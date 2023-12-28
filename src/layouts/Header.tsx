import ModeToggle from '@/components/ModeToggle';

function Header() {
  return (
    <header className="p-4 text-center dark:bg-gray-800 dark:text-white">
      <ul className="flex flex-row justify-end">
        <li className="justify-self-end">
          <ModeToggle />
        </li>
      </ul>
    </header>
  );
}

export default Header;
