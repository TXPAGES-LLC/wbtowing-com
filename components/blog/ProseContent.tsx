interface ProseContentProps {
  html: string
}

/**
 * Renders already-sanitized contentHtml with full prose styling
 * that matches the site's dark theme and design tokens.
 */
export default function ProseContent({ html }: ProseContentProps) {
  return (
    <>
      <style>{`
        .wbt-prose { max-width: 70ch; }
        .wbt-prose p {
          color: #cfd4dc;
          line-height: 1.8;
          margin-top: 0;
          margin-bottom: 1.25rem;
        }
        .wbt-prose h1,
        .wbt-prose h2,
        .wbt-prose h3,
        .wbt-prose h4,
        .wbt-prose h5,
        .wbt-prose h6 {
          font-family: var(--font-display, 'Barlow Condensed', sans-serif);
          font-weight: 800;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          line-height: 1.15;
        }
        .wbt-prose h1 { font-size: 2rem;   margin: 2.5rem 0 1rem; }
        .wbt-prose h2 { font-size: 1.6rem; margin: 2.25rem 0 0.875rem; }
        .wbt-prose h3 { font-size: 1.3rem; margin: 2rem 0 0.75rem; }
        .wbt-prose h4 { font-size: 1.1rem; margin: 1.75rem 0 0.625rem; }
        .wbt-prose h5,
        .wbt-prose h6 { font-size: 1rem;   margin: 1.5rem 0 0.5rem; }
        .wbt-prose a {
          color: #f2c118;
          text-decoration: none;
        }
        .wbt-prose a:hover { text-decoration: underline; }
        .wbt-prose strong, .wbt-prose b { font-weight: 700; color: #eef1f5; }
        .wbt-prose em, .wbt-prose i { font-style: italic; }
        .wbt-prose ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-bottom: 1.25rem;
          color: #cfd4dc;
        }
        .wbt-prose ol {
          list-style-type: decimal;
          padding-left: 1.5rem;
          margin-bottom: 1.25rem;
          color: #cfd4dc;
        }
        .wbt-prose li {
          margin-bottom: 0.5rem;
          line-height: 1.75;
        }
        .wbt-prose blockquote {
          border-left: 4px solid #f2c118;
          padding-left: 1.25rem;
          margin: 1.5rem 0;
          font-style: italic;
          color: #a3acbb;
        }
        .wbt-prose code {
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          background: #14294a;
          color: #9aa5b1;
          font-size: 0.875em;
          padding: 0.15em 0.4em;
          border-radius: 4px;
        }
        .wbt-prose pre {
          background: #14294a;
          border: 1px solid #1c3350;
          border-radius: 8px;
          padding: 1.25rem;
          overflow-x: auto;
          margin-bottom: 1.25rem;
        }
        .wbt-prose pre code {
          background: transparent;
          padding: 0;
          font-size: 0.875rem;
          color: #cfd4dc;
        }
        .wbt-prose img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 1.5rem auto;
          display: block;
        }
        .wbt-prose hr {
          border: none;
          border-top: 1px solid #1c3350;
          margin: 2rem 0;
        }
        .wbt-prose table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 1.25rem;
          font-size: 0.9rem;
          color: #cfd4dc;
        }
        .wbt-prose th {
          background: #14294a;
          color: #eef1f5;
          font-weight: 700;
          text-align: left;
          padding: 0.625rem 0.875rem;
          border-bottom: 1px solid #1c3350;
        }
        .wbt-prose td {
          padding: 0.625rem 0.875rem;
          border-bottom: 1px solid #1c3350;
        }
        .wbt-prose tr:last-child td { border-bottom: none; }
      `}</style>
      <div
        className="wbt-prose"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  )
}
