const PDF_URL = 'https://cicerospizza.com/employmentapp.pdf';

export default function Page() {
  return (
    <main className="wrap">
      <section className="card">
        <h1>Jobs</h1>
        <p>
          Download the employment application:{' '}
          <a href={PDF_URL} target="_blank" rel="noreferrer">
            employmentapp.pdf
          </a>
        </p>

        <div style={{ marginTop: 12, border: '1px solid rgba(11, 15, 20, 0.12)', borderRadius: 12, overflow: 'hidden' }}>
          <iframe
            title="Cicero's Pizza Employment Application"
            src={PDF_URL}
            style={{ width: '100%', height: '75vh', border: 0 }}
          />
        </div>

        <div className="hint" style={{ marginTop: 12 }}>
          If the PDF doesn&apos;t display in your browser, use the download link above.
        </div>
      </section>
    </main>
  );
}
