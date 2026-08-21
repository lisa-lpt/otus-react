import { Flex } from '@mantine/core';
import { NavLink } from 'react-router';

const data = [
  { label: 'Home page', href: '/' },
  { label: 'Book catalog', href: '/books' },
  { label: 'Author catalog', href: '/authors' },
  { label: 'Read later list', href: '/readlater' },
];

export function Header() {
  return (
    <Flex gap="md" justify="center" align="center" direction="row" wrap="wrap">
      {data.map((item) => (
        <NavLink
          to={item.href}
          key={item.label}
          style={({ isActive }) => ({
            color: isActive ? 'darkgreen' : 'green',
            fontWeight: isActive ? 'bold' : 'normal',
          })}
        >
          {item.label}
        </NavLink>
      ))}
    </Flex>
  );
}
