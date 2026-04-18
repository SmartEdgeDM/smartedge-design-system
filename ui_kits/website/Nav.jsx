const { useState } = React;

function Nav() {
  const [active, setActive] = useState('WORK');
  const links = ['WORK', 'SERVICES', 'APPROACH', 'JOURNAL'];
  return (
    <nav style={navStyles.bar}>
      <div style={navStyles.brand}>
        SMART<span style={navStyles.slash}>/</span>EDGE
      </div>
      <div style={navStyles.links}>
        {links.map(l => (
          <a key={l}
             onClick={(e) => { e.preventDefault(); setActive(l); }}
             style={{ ...navStyles.link, ...(active === l ? navStyles.linkActive : {}) }}>
            {l}
          </a>
        ))}
      </div>
      <button style={navStyles.cta}
        onMouseDown={e => e.currentTarget.style.transform = 'translateY(2px)'}
        onMouseUp={e => e.currentTarget.style.transform = 'translateY(0)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
        START A PROJECT
      </button>
    </nav>
  );
}

const navStyles = {
  bar: {
    position: 'sticky', top: 0, zIndex: 10,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '18px 40px',
    background: 'rgba(249,248,243,0.9)',
    backdropFilter: 'saturate(180%) blur(12px)',
    WebkitBackdropFilter: 'saturate(180%) blur(12px)',
    borderBottom: '1px solid #E4E3DE',
  },
  brand: {
    fontFamily: 'Barlow Condensed, system-ui, sans-serif',
    fontWeight: 700, fontSize: 22, letterSpacing: '-0.02em', color: '#1A1A1B',
  },
  slash: { color: '#CCFF00', display: 'inline-block', transform: 'skewX(-8deg)', padding: '0 0.04em' },
  links: { display: 'flex', gap: 30 },
  link: {
    fontFamily: 'Barlow Condensed, system-ui, sans-serif',
    fontWeight: 600, fontSize: 12, letterSpacing: '0.18em',
    textTransform: 'uppercase', color: '#1A1A1B', textDecoration: 'none', cursor: 'pointer',
  },
  linkActive: { color: '#0056B3' },
  cta: {
    fontFamily: 'Barlow Condensed, system-ui, sans-serif',
    fontWeight: 700, fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase',
    padding: '12px 20px', background: '#CCFF00', color: '#1A1A1B',
    border: 'none', borderRadius: 6, boxShadow: '0 4px 0 0 #1A1A1B',
    cursor: 'pointer', transition: 'transform 180ms cubic-bezier(.22,1,.36,1)',
  },
};

window.Nav = Nav;
