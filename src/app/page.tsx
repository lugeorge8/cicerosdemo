export default function Page() {
  return (
    <main className="wrap" aria-label="Cicero's Pizza demo ideas">
      <section className="card">
        <h1>Cicero&apos;s Pizza (San Jose)</h1>
        <p>Blank slate — ideas to build next:</p>
        <ul>
          <li>Menu + daily specials (simple, fast, mobile-first)</li>
          <li>Order-ahead flow (pickup first, delivery later)</li>
          <li>Hours, location, parking notes, and contact</li>
          <li>Photo gallery (pizza, slices, inside vibe)</li>
          <li>Reviews aggregator (Google/Yelp) + featured testimonials</li>
          <li>Loyalty / coupons (SMS or email opt-in)</li>
          <li>Catering page + request form</li>
          <li>Live “busy” indicator + estimated pickup time</li>
        </ul>
        <div className="hint">Edit <code>src/app/page.tsx</code> to replace this list with the next feature set.</div>
      </section>
    </main>
  );
}
