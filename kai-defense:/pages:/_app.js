export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html,
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif;
          -webkit-font-smoothing: antialiased;
        }
      `}</style>
    </>
  );
}
