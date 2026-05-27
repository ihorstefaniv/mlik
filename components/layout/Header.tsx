'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { navItems, siteConfig } from '@/lib/config';

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100 }}>
      {/* Top bar */}
      <div style={{
        background: 'linear-gradient(135deg, #3A7B6E 0%, #2d6055 100%)',
        padding: '6px 0',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          {/* Logo — text only */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 700,
              fontSize: '0.95rem',
              color: '#fff',
              letterSpacing: '0.3px',
              lineHeight: 1.2,
            }}>{siteConfig.name}</div>
            <div style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.5px' }}>
              {siteConfig.tagline}
            </div>
          </Link>

          {/* Phone — desktop only */}
          <a href={siteConfig.contact.phoneHref} className="header-phone" style={{
            display: 'flex', alignItems: 'center', gap: 6,
            color: '#fff', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 700,
          }}>
            📞 {siteConfig.contact.phone}
          </a>

          {/* Burger — mobile only */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Меню"
            className="burger-btn"
            style={{
              background: 'rgba(255,255,255,0.15)',
              border: 'none', borderRadius: 6, padding: '6px 8px',
              cursor: 'pointer', flexDirection: 'column', gap: 4,
            }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{ display: 'block', width: 20, height: 2, background: '#fff', borderRadius: 2 }} />
            ))}
          </button>
        </div>
      </div>

      {/* Nav bar — desktop only, centered */}
      <nav style={{
        background: 'var(--color-primary)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }} className="nav-desktop">
        <div className="container">
          <ul style={{
            display: 'flex', listStyle: 'none', padding: 0, margin: 0,
            justifyContent: 'center', flexWrap: 'wrap',
          }}>
            {navItems.map(item => {
              const hasSub = 'submenu' in item && item.submenu.length > 0;
              const active = isActive(item.href);
              return (
                <li key={item.id} style={{ position: 'relative' }}
                  onMouseEnter={() => hasSub && setOpenSubmenu(item.id)}
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  <Link href={item.href} style={{
                    display: 'block',
                    padding: '7px 13px',
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: '0.83rem',
                    fontWeight: active ? 700 : 500,
                    borderBottom: active ? '2px solid rgba(255,255,255,0.85)' : '2px solid transparent',
                    transition: 'background 0.15s',
                    whiteSpace: 'nowrap',
                  }}>
                    {item.title}{hasSub && <span style={{ fontSize: '0.58rem', opacity: 0.75, marginLeft: 3 }}>▼</span>}
                  </Link>
                  {hasSub && openSubmenu === item.id && (
                    <ul style={{
                      position: 'absolute', top: '100%', left: 0,
                      background: '#fff',
                      boxShadow: 'var(--shadow)',
                      borderRadius: '0 0 8px 8px',
                      listStyle: 'none', padding: '4px 0', margin: 0,
                      minWidth: 230, zIndex: 200,
                      border: '1px solid var(--color-border)',
                    }}>
                      {item.submenu.map(sub => (
                        <li key={sub.href}>
                          <Link href={sub.href} style={{
                            display: 'block',
                            padding: '8px 16px',
                            fontSize: '0.8rem',
                            color: 'var(--color-text)',
                            textDecoration: 'none',
                          }}
                          onMouseEnter={e => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.background = 'var(--color-primary)';
                            el.style.color = '#fff';
                          }}
                          onMouseLeave={e => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.background = '';
                            el.style.color = 'var(--color-text)';
                          }}
                          >
                            {sub.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 300, display: 'flex' }}>
          <div onClick={() => setMobileOpen(false)} style={{
            position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)',
          }} />
          <div style={{
            position: 'relative', zIndex: 1,
            background: '#fff', width: 280, maxWidth: '85vw',
            height: '100%', overflowY: 'auto',
            boxShadow: 'var(--shadow-lg)', display: 'flex', flexDirection: 'column',
          }}>
            <div style={{
              background: 'var(--color-primary-dark)', padding: '14px 16px',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem', fontFamily: 'var(--font-serif)' }}>
                {siteConfig.name}
              </span>
              <button onClick={() => setMobileOpen(false)} style={{
                background: 'rgba(255,255,255,0.2)', border: 'none',
                color: '#fff', borderRadius: 6, padding: '4px 8px',
                cursor: 'pointer', fontSize: '1rem',
              }}>✕</button>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
              {navItems.map(item => {
                const hasSub = 'submenu' in item && item.submenu.length > 0;
                return (
                  <li key={item.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <Link href={item.href}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: 'block', padding: '12px 16px',
                        color: isActive(item.href) ? 'var(--color-primary)' : 'var(--color-text)',
                        fontWeight: isActive(item.href) ? 700 : 500,
                        fontSize: '0.9rem', textDecoration: 'none',
                      }}>{item.title}</Link>
                    {hasSub && (
                      <ul style={{ listStyle: 'none', padding: 0, background: '#f8fffe' }}>
                        {item.submenu.map(sub => (
                          <li key={sub.href} style={{ borderTop: '1px solid var(--color-border)' }}>
                            <Link href={sub.href}
                              onClick={() => setMobileOpen(false)}
                              style={{
                                display: 'block', padding: '8px 16px 8px 28px',
                                color: 'var(--color-text-light)',
                                fontSize: '0.82rem', textDecoration: 'none',
                              }}>{sub.title}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
            <div style={{ padding: 16, borderTop: '1px solid var(--color-border)' }}>
              <a href={siteConfig.contact.phoneHref} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'none',
              }}>📞 {siteConfig.contact.phone}</a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .nav-desktop { display: none; }
        .header-phone { display: none; }
        .burger-btn { display: flex; }
        @media (min-width: 768px) {
          .nav-desktop { display: block; }
          .header-phone { display: flex; }
          .burger-btn { display: none; }
        }
      `}</style>
    </header>
  );
}
