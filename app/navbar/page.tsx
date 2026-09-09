'use client'

import { Button, Flex, Text } from '@radix-ui/themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const NavLinks = [
  {
    title: 'Home',
    href: '/home',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Services',
    href: '/services',
  },
  {
    title: 'Industries',
    href: '/industries',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
]

const NavbarSection = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Flex
      direction="column"
      className="my-5 w-full"
    >
      {/* Navbar Header */}
      <Flex
        justify="between"
        align="center"
        className="w-full"
      >
        {/* Logo */}
        <Link href="/" className="no-underline">
          <Text className="font-bold text-[#1e2761] sm:text-xl md:text-base lg:text-xl">
            Freelance Recruitment Specialist
          </Text>
        </Link>

        {/* Desktop Menu */}
        <Flex
          gap="7"
          align="center"
          className="hidden! md:flex!"
        >
          <Flex className="gap-6">
            {NavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className={`text-[14px] ${
                  pathname === link.href
                    ? 'text-black'
                    : 'text-gray-500'
                }`}
              >
                {link.title}
              </Link>
            ))}
          </Flex>

          <Button className="bg-[#1E2761]! text-white!">
            Hire Me
          </Button>
        </Flex>

        {/* Mobile Burger */}
        <Button
          variant="soft"
          className="flex! md:hidden!"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </Button>
      </Flex>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <Flex
          direction="column"
          className="flex! mt-4 gap-4 border-t pt-4 md:hidden!"
        >
          {NavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-[14px] ${
                pathname === link.href
                  ? 'font-semibold text-black'
                  : 'text-gray-500'
              }`}
            >
              {link.title}
            </Link>
          ))}

          <Button className="w-full bg-[#1E2761]! text-white!">
            Hire Me
          </Button>
        </Flex>
      )}
    </Flex>
  )
}

export default NavbarSection