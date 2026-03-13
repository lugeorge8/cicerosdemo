import Image from 'next/image';

export default function Page() {
  return (
    <main className="wrap">
      <section className="card">
        <h1>Menu</h1>
        <p>Photo menu:</p>
        <div style={{ marginTop: 12 }}>
          <Image
            src="/images/menu-beer-wine.jpg"
            alt="Cicero's Pizza menu (beer & wine)"
            width={1200}
            height={1600}
            style={{ width: '100%', height: 'auto', borderRadius: 12, border: '1px solid rgba(11, 15, 20, 0.12)' }}
            priority
          />
        </div>
      </section>
    </main>
  );
}
