function Hero() {
  return (
    <section style={heroStyles.wrap}>
      <div style={heroStyles.inner}>
        <div style={heroStyles.eyebrow}>
          DIGITAL MARKETING <span style={heroStyles.dot}>/</span> EST. 2019
        </div>
        <h1 style={heroStyles.h1}>
          Where great design<br/>
          <span style={heroStyles.clicks}>clicks<span style={heroStyles.period}>.</span></span>
        </h1>
        <p style={heroStyles.lede}>
          We build brand systems, websites, and ad creative engineered to convert.
          No fluff &mdash; just the work that moves the number.
        </p>
        <div style={heroStyles.row}>
          <button style={heroStyles.primary}>
            START A PROJECT
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" style={{marginLeft: 10}}>
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </button>
          <button style={heroStyles.secondary}>SEE OUR WORK</button>
        </div>
        <div style={heroStyles.metrics}>
          <div style={heroStyles.metric}><span style={heroStyles.metricN}>+142%</span><span style={heroStyles.metricL}>avg. lift in CTR</span></div>
          <div style={heroStyles.metric}><span style={heroStyles.metricN}>−38%</span><span style={heroStyles.metricL}>cost per acquisition</span></div>
          <div style={heroStyles.metric}><span style={heroStyles.metricN}>6.2x</span><span style={heroStyles.metricL}>return on ad spend</span></div>
        </div>
      </div>
    </section>
  );
}

const heroStyles = {
  wrap: { background: '#1A1A1B', color: '#F9F8F3', padding: '120px 40px 140px' },
  inner: { maxWidth: 1200, margin: '0 auto' },
  eyebrow: {
    fontFamily: 'Barlow Condensed, system-ui, sans-serif',
    fontWeight: 600, fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase',
    color: '#CCFF00', marginBottom: 28,
  },
  dot: { color: '#CCFF00', padding: '0 0.3em', display: 'inline-block' },
  h1: {
    fontFamily: 'Barlow Condensed, system-ui, sans-serif',
    fontWeight: 700, fontSize: 'clamp(56px, 8vw, 128px)', lineHeight: 0.92,
    letterSpacing: '-0.035em', margin: '0 0 28px', color: '#F9F8F3',
  },
  clicks: { display: 'inline-block' },
  period: { color: '#CCFF00', display: 'inline-block', transform: 'skewX(-8deg)', paddingLeft: 2 },
  lede: {
    fontFamily: 'Barlow, system-ui, sans-serif',
    fontSize: 20, lineHeight: 1.5, color: '#C7C7CB', maxWidth: 560, margin: '0 0 40px',
  },
  row: { display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 80 },
  primary: {
    display: 'inline-flex', alignItems: 'center',
    fontFamily: 'Barlow Condensed, system-ui, sans-serif',
    fontWeight: 700, fontSize: 14, letterSpacing: '0.14em', textTransform: 'uppercase',
    padding: '18px 26px', background: '#CCFF00', color: '#1A1A1B',
    border: 'none', borderRadius: 8, boxShadow: '0 6px 0 0 #F9F8F3', cursor: 'pointer',
  },
  secondary: {
    fontFamily: 'Barlow Condensed, system-ui, sans-serif',
    fontWeight: 700, fontSize: 14, letterSpacing: '0.14em', textTransform: 'uppercase',
    padding: '16px 26px', background: 'transparent', color: '#F9F8F3',
    border: '2px solid #F9F8F3', borderRadius: 8, cursor: 'pointer',
  },
  metrics: {
    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40,
    paddingTop: 36, borderTop: '1px solid #3D3D40',
  },
  metric: { display: 'flex', flexDirection: 'column', gap: 8 },
  metricN: {
    fontFamily: 'Barlow Condensed, system-ui, sans-serif',
    fontWeight: 700, fontSize: 44, letterSpacing: '-0.02em', color: '#F9F8F3', lineHeight: 1,
  },
  metricL: {
    fontFamily: 'Barlow, system-ui, sans-serif',
    fontSize: 13, color: '#A0A0A5', letterSpacing: '0.02em',
  },
};

window.Hero = Hero;
