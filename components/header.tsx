import React from 'react';
import Link from 'next/link';
import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from '@nextui-org/navbar';
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import { Spacer } from '@nextui-org/spacer';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem
} from '@nextui-org/dropdown';

import { ChevronDown } from './icons';


export default function Header() {

  const icons = {
    chevron: <ChevronDown fill='currentColor' size={16} />,
  };

  return (
    <Navbar isBordered shouldHideOnScroll>
      <NavbarBrand>
        <Link color='foreground' href='/'>
          <div className='flex'>
            <Image
              src='/static/racket-cross.svg'
              width={25}
              height={25}
              alt='Racket Cross'
            />
            <Spacer />
            <p className='font-bold text-inherit'>LeagueTracker</p>
          </div>
        </Link>
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem>
          <Link color="foreground" href="/create-game">
            <Button variant='faded' color='primary'>
              Create Game
            </Button>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/create-league">
            <Button variant='faded' color='primary'>
              Create League
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <Link href='#'>Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color='primary' href='#' variant='flat'>
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
