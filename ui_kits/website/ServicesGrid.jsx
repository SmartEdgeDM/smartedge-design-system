function ServicesGrid() {
  const services = [
    { icon: <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"/>,
      title: 'Brand Systems',
      body: 'Identities engineered for clarity across every surface — logo, type, voice, motion.' },
    { icon: <><rect x="3" y="5" width="18" height="14" rx="1"/><path d="M3 9h18M8 14h8"/></>,
      title: 'Websites',
      body: 'Fast, accessible, CMS-backed sites that convert on the first scroll.' },
    { icon: <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/>,
      title: 'Performance Ads',
      body: 'Creative tuned to the metric that matters. Test, learn, scale the winners.' },
    { icon: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
      title: 'SEO &amp; Content',
      body: 'Structured content engineered for rank, readability, and repeat traffic.' },
  ];
  return (
    <section style={svcStyles.wrap}>
      <div style={svcStyles.head}>
        <div style={svcStyles.eyebrow}>WHAT WE DO</div>
        <h2 style={svcStyles.h2}>Four disciplines.<br/>One sharpened edge.</h2>
      </div>
      <div style={svcStyles.grid}>
        {services.map((s, i) => (
          <article key={i} style={svcStyles.card}>
            <div style={svcStyles.icoWrap}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                {s.icon}
              </svg>
            </div>
            <h3 style={svcStyles.h3}>{s.title}</h3>
            <p style={svcStyles.p} dangerouslySetInnerHTML={{__html: s.body}}/>
            <a style={svcStyles.link}>LEARN MORE &rarr;</a>
          </article>
        ))}
      </div>
    </section>
  );
}

const svcStyles = {
  wrap: { background: '#F9F8F3', padding: '110px 40px' },
  head: { maxWidth: 1200, margin: '0 auto 56px' },
  eyebrow: {
    fontFamily: 'Barlow Condensed, system-ui, sans-serif',
    fontWeight: 600, fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase',
    color: '#0056B3', marginBottom: 16,
  },
  h2: {
    fontFamily: 'Barlow Condensed, system-ui, sans-serif',
    fontWeight: 700, fontSize: 'clamp(32px, 4vw, 56px)', letterSpacing: '-0.02em',
    color: '#0056B3', margin: 0, lineHeight: 1.0,
  },
  grid: { maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 },
  card: {
    background: '#FFFFFF', border: '1px solid #E4E3DE', borderRadius: 12, padding: 28,
    display: 'flex', flexDirection: 'column',
  },
  icoWrap: {
    width: 44, height: 44, borderRadius: 8,
    background: '#F0EBFA', color: '#B19CD9',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22,
  },
  h3: {
    fontFamily: 'Barlow Condensed, system-ui, sans-serif',
    fontWeight: 700, fontSize: 20, color: '#0056B3', letterSpacing: '-0.01em', margin: '0 0 10px',
  },
  p: {
    fontFamily: 'Barlow, system-ui, sans-serif',
    fontSize: 14, lineHeight: 1.55, color: '#3D3D40', margin: '0 0 22px', flex: 1,
  },
  link: {
    fontFamily: 'Barlow Condensed, system-ui, sans-serif',
    fontWeight: 700, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
    color: '#1A1A1B', cursor: 'pointer',
  },
};

window.ServicesGrid = ServicesGrid;
