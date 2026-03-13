import Link from 'next/link';

const items = [
  { href: '/', label: 'Home' },
  { href: '/one', label: 'One' },
  { href: '/two', label: 'Two' },
  { href: '/three', label: 'Three' },
  { href: '/four', label: 'Four' },
];

export function NavBar() {
  return (
    <header className="nav">
      <nav className="navInner" aria-label="Primary">
        <div className="brand">Cicero&apos;s Pizza</div>
        <div className="links">
          {items.map((it) => (
            <Link key={it.href} href={it.href} className="link">
              {it.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
