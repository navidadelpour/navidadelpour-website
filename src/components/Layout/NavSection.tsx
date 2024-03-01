"use client";

import React from "react";
import { usePathname } from "next/navigation";

import { HEADER_LINKS } from "@/consts/links";
import { LinkData } from "@/consts/types";

import Logo from "@/components/Logo";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";

export default function NavSection() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  function isLinkActive(link: LinkData) {
    return pathname === link.url;
  }

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
      shouldHideOnScroll
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {HEADER_LINKS.map((link) => {
          const isActive = isLinkActive(link);

          return (
            <NavbarItem key={link.title} isActive={isActive}>
              <Link
                color={isActive ? "primary" : "foreground"}
                href={link.url}
                aria-current={isActive ? "page" : undefined}
              >
                {link.title}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarMenu>
        {HEADER_LINKS.map((link) => {
          const isActive = isLinkActive(link);
          return (
            <NavbarMenuItem key={link.title}>
              <Link
                color={isActive ? "primary" : "foreground"}
                className="w-full"
                href={link.url}
                size="lg"
              >
                {link.title}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
}
