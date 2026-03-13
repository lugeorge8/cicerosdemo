import Image from 'next/image';

export default function Page() {
  return (
    <main className="wrap">
      <section className="card">
        <h1>One</h1>
        <p>Reference image:</p>
        <div style={{ marginTop: 12 }}>
          <Image
            src="/images/page-one.png"
            alt="Reference screenshot"
            width={768}
            height={1536}
            style={{ width: '100%', height: 'auto', borderRadius: 12, border: '1px solid rgba(11, 15, 20, 0.12)' }}
            priority
          />
        </div>
      </section>
    </main>
  );
}
