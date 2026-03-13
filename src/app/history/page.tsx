export default function Page() {
  return (
    <main className="wrap">
      <section className="card">
        <h1>History</h1>

        <ul>
          <li>
            <strong>1968:</strong> Founded. The Cicero&apos;s Pizza recipe traces back to Niagara Falls, New York.
          </li>
          <li>
            <strong>1968–2001:</strong> Nunzio Cicero ran the restaurant, later retiring in 2001.
          </li>
          <li>
            <strong>2003:</strong> Moved to <strong>Bollinger Road</strong> (current West San Jose location, just across the Cupertino border).
          </li>
        </ul>

        <p style={{ marginTop: 16 }}>
          Cicero&apos;s is known for its thin, crispy crust and the long-running tagline “The Pizza with the Secret®”. Over the
          decades, the shop moved with the area&apos;s redevelopment—from old Cupertino at Stevens Creek &amp; De Anza, to Stevens
          Creek &amp; Blaney, and eventually to the current West San Jose spot.
        </p>

        <p style={{ marginTop: 10 }}>
          Bob LaVerdi and Rik Jones re-opened and continued the restaurant in the early 2000s, keeping it a local staple for
          generations of families.
        </p>

        <div className="hint">
          Sources:{' '}
          <a href="https://www.linkedin.com/company/ciceros-pizza" target="_blank" rel="noreferrer">
            LinkedIn “About”
          </a>
          {' · '}
          <a
            href="https://www.kqed.org/checkplease/23293/check-please-bay-area-reviews-ciceros-pizza-cafe-soleil-tonys-seafood-restaurant"
            target="_blank"
            rel="noreferrer"
          >
            KQED Check, Please!
          </a>
        </div>
      </section>
    </main>
  );
}
