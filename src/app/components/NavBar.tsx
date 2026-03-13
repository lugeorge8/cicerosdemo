import Link from 'next/link';

const items = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/jobs', label: 'Jobs' },
  { href: '/press', label: 'Press' },
  { href: '/maps', label: 'Maps' },
  { href: '/history', label: 'History' },
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
