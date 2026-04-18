function CaseStudyFeature() {
  return (
    <section style={csStyles.wrap}>
      <div style={csStyles.inner}>
        <div style={csStyles.left}>
          <div style={csStyles.eyebrow}>CASE STUDY <span style={csStyles.slash}>/</span> NOVA SAAS</div>
          <h2 style={csStyles.h2}>Rebuilt the funnel. Tripled qualified demos.</h2>
          <p style={csStyles.p}>
            We rebuilt Nova's marketing site on a component system, restructured the paid-media mix around
            demo-intent keywords, and launched a creative-testing cadence that kept winners shipping weekly.
          </p>
          <a style={csStyles.cta}>
            READ THE CASE STUDY
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" style={{marginLeft: 8, verticalAlign: 'middle'}}>
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
        <div style={csStyles.right}>
          <div style={csStyles.stat}>
            <div style={csStyles.statN}>3.2x</div>
            <div style={csStyles.statL}>qualified demos<br/>booked per week</div>
          </div>
          <div style={csStyles.stat}>
            <div style={csStyles.statN}>−44%</div>
            <div style={csStyles.statL}>cost per MQL<br/>in 90 days</div>
          </div>
          <div style={csStyles.stat}>
            <div style={csStyles.statN}>+68</div>
            <div style={csStyles.statL}>organic keywords<br/>top-10 ranked</div>
          </div>
          <div style={csStyles.stat}>
            <div style={csStyles.statN}>6wk</div>
            <div style={csStyles.statL}>from kickoff<br/>to launch</div>
          </div>
        </div>
      </div>
    </section>
  );
}

const csStyles = {
  wrap: { background: '#EFEDE6', padding: '110px 40px' },
  inner: { maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 80, alignItems: 'center' },
  left: {},
  eyebrow: {
    fontFamily: 'Barlow Condensed, system-ui, sans-serif',
    fontWeight: 600, fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase',
    color: '#0056B3', marginBottom: 20,
  },
  slash: { color: '#CCFF00', display: 'inline-block', transform: 'skewX(-8deg)', padding: '0 0.2em', fontWeight: 700 },
  h2: {
    fontFamily: 'Barlow Condensed, system-ui, sans-serif',
    fontWeight: 700, fontSize: 'clamp(28px, 3.2vw, 44px)', letterSpacing: '-0.02em',
    color: '#1A1A1B', margin: '0 0 20px', lineHeight: 1.05,
  },
  p: {
    fontFamily: 'Barlow, system-ui, sans-serif',
    fontSize: 16, lineHeight: 1.6, color: '#3D3D40', margin: '0 0 28px', maxWidth: '56ch',
  },
  cta: {
    display: 'inline-flex', alignItems: 'center',
    fontFamily: 'Barlow Condensed, system-ui, sans-serif',
    fontWeight: 700, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase',
    color: '#1A1A1B', borderBottom: '2px solid #CCFF00', paddingBottom: 4, cursor: 'pointer',
  },
  right: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 },
  stat: { background: '#FFFFFF', padding: 28, borderRadius: 12, border: '1px solid #E4E3DE' },
  statN: {
    fontFamily: 'Barlow Condensed, system-ui, sans-serif',
    fontWeight: 700, fontSize: 52, letterSpacing: '-0.03em', color: '#1A1A1B', lineHeight: 1, marginBottom: 10,
  },
  statL: {
    fontFamily: 'Barlow, system-ui, sans-serif',
    fontSize: 13, lineHeight: 1.45, color: '#5A5A5E',
  },
};

window.CaseStudyFeature = CaseStudyFeature;
