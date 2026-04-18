function Footer() {
  const cols = [
    { h: 'Services', items: ['Brand Systems', 'Websites', 'Performance Ads', 'SEO & Content'] },
    { h: 'Studio', items: ['About', 'Approach', 'Careers', 'Journal'] },
    { h: 'Contact', items: ['hello@smartedge.co', '+1 (555) 821-0033', 'Denver · Remote-first'] },
  ];
  return (
    <footer style={ftStyles.wrap}>
      <div style={ftStyles.inner}>
        <div style={ftStyles.top}>
          <div>
            <div style={ftStyles.brand}>SMART<span style={ftStyles.slash}>/</span>EDGE</div>
            <p style={ftStyles.tag}>Where great design clicks.</p>
          </div>
          <div style={ftStyles.cols}>
            {cols.map((c, i) => (
              <div key={i}>
                <div style={ftStyles.h}>{c.h}</div>
                <ul style={ftStyles.ul}>
                  {c.items.map(it => <li key={it} style={ftStyles.li}>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div style={ftStyles.bottom}>
          <span style={ftStyles.fine}>© 2026 SMART/EDGE Digital Marketing. All rights reserved.</span>
          <span style={ftStyles.fine}>Privacy · Terms · Accessibility</span>
        </div>
      </div>
    </footer>
  );
}

const ftStyles = {
  wrap: { background: '#1A1A1B', color: '#F9F8F3', padding: '80px 40px 32px' },
  inner: { maxWidth: 1200, margin: '0 auto' },
  top: { display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 60, paddingBottom: 60, borderBottom: '1px solid #3D3D40' },
  brand: {
    fontFamily: 'Barlow Condensed, system-ui, sans-serif',
    fontWeight: 700, fontSize: 34, letterSpacing: '-0.02em', color: '#F9F8F3', marginBottom: 12,
  },
  slash: { color: '#CCFF00', display: 'inline-block', transform: 'skewX(-8deg)', padding: '0 0.04em' },
  tag: {
    fontFamily: 'Barlow, system-ui, sans-serif',
    fontSize: 15, color: '#A0A0A5', margin: 0,
  },
  cols: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 },
  h: {
    fontFamily: 'Barlow Condensed, system-ui, sans-serif',
    fontWeight: 700, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase',
    color: '#CCFF00', marginBottom: 16,
  },
  ul: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 },
  li: { fontFamily: 'Barlow, system-ui, sans-serif', fontSize: 14, color: '#C7C7CB' },
  bottom: { display: 'flex', justifyContent: 'space-between', paddingTop: 24 },
  fine: { fontFamily: 'JetBrains Mono, ui-monospace, monospace', fontSize: 11, color: '#7A7A7F' },
};

window.Footer = Footer;
