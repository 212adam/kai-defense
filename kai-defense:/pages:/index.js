export default function Home() {
  return (
    <div className="container">
      <main className="main">
        <h1 className="title">KAI DEFENSE</h1>
        <p className="tagline">LET FREEDOM WHISPER.</p>
        <p className="subtitle">Firearms Technology Research & Development</p>
      </main>

      <footer className="footer">
        <p>© 2026 KAI DEFENSE LLC | All Rights Reserved</p>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          background: #000000;
          color: #ffffff;
          display: flex;
          flex-direction: column;
        }

        .main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 2rem;
          text-align: center;
        }

        .title {
          font-size: clamp(3.5rem, 10vw, 6.5rem);
          font-weight: 700;
          letter-spacing: 0.02em;
          margin: 0;
          margin-bottom: 1.5rem;
          line-height: 1;
        }

        .tagline {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 400;
          letter-spacing: 0.1em;
          margin: 0;
          margin-bottom: 2rem;
        }

        .subtitle {
          font-size: clamp(1rem, 2vw, 1.125rem);
          font-weight: 300;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }

        .footer {
          padding: 2rem;
          text-align: center;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .footer p {
          margin: 0;
        }

        @media (max-width: 768px) {
          .title {
            margin-bottom: 1rem;
          }
          .tagline {
            margin-bottom: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
