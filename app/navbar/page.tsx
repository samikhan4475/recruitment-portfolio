'use client'

import { Button, Flex, Text } from '@radix-ui/themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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

  return (
    <Flex justify="between" className="my-5">
      <Link href="/" className="no-underline">
        <Text className="text-xl font-bold text-[#1e2761]">
          Freelance Recruitment Specialist
        </Text>
      </Link>

      <Flex gap="7" align="center">
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
    </Flex>
  )
}

export default NavbarSection