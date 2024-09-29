'use client';

import { useReducer } from 'react';

import Hamburger from '../../../public/assets/icons/Hamburger.svg';
import MenuDrawer from './MenuDrawer';

interface MenuButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  pathname: string;
}

const MenuButton = ({ className, pathname, ...props }: MenuButtonProps) => {
  const [isOpen, toggle] = useReducer((prev) => !prev, false);

  return (
    <div {...props} className={className}>
      <Hamburger className="h-6 w-6 cursor-pointer" onClick={toggle} />
      <MenuDrawer isOpen={isOpen} onClose={toggle} pathname={pathname} />
    </div>
  );
};

export default MenuButton;
