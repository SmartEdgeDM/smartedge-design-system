function CtaBand() {
  return (
    <section style={ctaStyles.wrap}>
      <div style={ctaStyles.inner}>
        <div>
          <div style={ctaStyles.eyebrow}>READY TO SHIP?</div>
          <h2 style={ctaStyles.h2}>Let's sharpen<br/>your edge.</h2>
        </div>
        <div style={ctaStyles.right}>
          <p style={ctaStyles.p}>
            Kickoff in two weeks. First creative live in four. Full rebuilds in six.
          </p>
          <button style={ctaStyles.btn}>
            START A PROJECT
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" style={{marginLeft: 10}}>
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

const ctaStyles = {
  wrap: { background: '#CCFF00', padding: '90px 40px' },
  inner: {
    maxWidth: 1200, margin: '0 auto',
    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center',
  },
  eyebrow: {
    fontFamily: 'Barlow Condensed, system-ui, sans-serif',
    fontWeight: 700, fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase',
    color: '#1A1A1B', marginBottom: 14, opacity: 0.65,
  },
  h2: {
    fontFamily: 'Barlow Condensed, system-ui, sans-serif',
    fontWeight: 700, fontSize: 'clamp(40px, 5vw, 72px)', letterSpacing: '-0.03em',
    color: '#1A1A1B', margin: 0, lineHeight: 0.95,
  },
  right: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 24 },
  p: {
    fontFamily: 'Barlow, system-ui, sans-serif',
    fontSize: 18, lineHeight: 1.5, color: '#1A1A1B', margin: 0, maxWidth: '42ch',
  },
  btn: {
    display: 'inline-flex', alignItems: 'center',
    fontFamily: 'Barlow Condensed, system-ui, sans-serif',
    fontWeight: 700, fontSize: 14, letterSpacing: '0.14em', textTransform: 'uppercase',
    padding: '18px 26px', background: '#1A1A1B', color: '#CCFF00',
    border: 'none', borderRadius: 8, boxShadow: '0 6px 0 0 rgba(26,26,27,0.25)',
    cursor: 'pointer',
  },
};

window.CtaBand = CtaBand;
