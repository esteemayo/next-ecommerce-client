import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <Link href='/' passHref>Ecommerce</Link>
      <nav>
        <Link href='/' passHref>Home</Link>
        <Link href='/products' passHref>All products</Link>
        <Link href='/categories' passHref>Categories</Link>
        <Link href='/account' passHref>Account</Link>
        <Link href='/cart' passHref>Cart (0)</Link>
      </nav>
    </header>
  );
};

export default Header;
