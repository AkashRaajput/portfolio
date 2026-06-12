export default function ResumePrintLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        header,
        footer,
        .skip-link,
        .noise {
          display: none !important;
        }

        main {
          padding: 0 !important;
        }

        body {
          background: #ffffff !important;
        }
      `}</style>
      {children}
    </>
  );
}
