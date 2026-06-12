'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { navItems, siteConfig } from '@/lib/config';

// TODO: замінити на реальний URL Doctor Eleks
const BOOKING_URL = '#';

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100 }}>
      {/* Top bar */}
      <div style={{ background: 'linear-gradient(135deg, #3A7B6E 0%, #2d6055 100%)', padding: '6px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
            <div style={{ background: '#fff', borderRadius: 7, padding: '3px 7px', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
              <Image src="/logo.png" alt={siteConfig.name} width={110} height={34} style={{ display: 'block', objectFit: 'contain' }} priority className="logo-img" />
            </div>
            <div className="logo-text">
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>
                {siteConfig.name}
              </div>
              <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.65)', letterSpacing: '0.5px', marginTop: 2 }}>
                {siteConfig.tagline}
              </div>
            </div>
          </Link>

          {/* Desktop right */}
          <div className="header-right" style={{ alignItems: 'center', gap: 12 }}>
            <a href={siteConfig.contact.phoneHref} style={{ color: '#fff', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 700 }}>
              {siteConfig.contact.phone}
            </a>
            <a href={BOOKING_URL} style={{
              background: '#fff', color: 'var(--color-primary-dark)',
              padding: '6px 14px', borderRadius: 6,
              fontSize: '0.8rem', fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap',
            }}>
              Записатися на прийом
            </a>
          </div>

          {/* Mobile: phone + burger */}
          <div className="mobile-actions" style={{ alignItems: 'center', gap: 8, flexShrink: 0 }}>
            <a href={siteConfig.contact.phoneHref} className="mobile-phone" style={{
              color: '#fff', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 700,
            }}>
              {siteConfig.contact.phone}
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Меню" className="burger-btn" style={{
              background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: 6,
              padding: '7px 8px', cursor: 'pointer', flexDirection: 'column', gap: 4,
            }}>
              {[0, 1, 2].map(i => (
                <span key={i} style={{ display: 'block', width: 20, height: 2, background: '#fff', borderRadius: 2 }} />
              ))}
            </button>
          </div>
        </div>
      </div>

      {/* Nav bar — desktop */}
      <nav style={{ background: 'var(--color-primary)', borderBottom: '1px solid rgba(255,255,255,0.1)' }} className="nav-desktop">
        <div className="container">
          <ul style={{ display: 'flex', listStyle: 'none', padding: 0, margin: 0, justifyContent: 'center', flexWrap: 'wrap' }}>
            {navItems.map(item => {
              const hasSub = 'submenu' in item && item.submenu.length > 0;
              const active = isActive(item.href);
              return (
                <li key={item.id} style={{ position: 'relative' }}
                  onMouseEnter={() => hasSub && setOpenSubmenu(item.id)}
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  <Link href={item.href} style={{
                    display: 'block', padding: '7px 13px', color: '#fff', textDecoration: 'none',
                    fontSize: '0.83rem', fontWeight: active ? 700 : 500, whiteSpace: 'nowrap',
                    borderBottom: active ? '2px solid rgba(255,255,255,0.85)' : '2px solid transparent',
                    transition: 'background 0.15s',
                  }}>
                    {item.title}{hasSub && <span style={{ fontSize: '0.58rem', opacity: 0.75, marginLeft: 3 }}>▼</span>}
                  </Link>
                  {hasSub && openSubmenu === item.id && (
                    <ul style={{
                      position: 'absolute', top: '100%', left: 0, background: '#fff',
                      boxShadow: 'var(--shadow)', borderRadius: '0 0 8px 8px',
                      listStyle: 'none', padding: '4px 0', margin: 0,
                      minWidth: 230, zIndex: 200, border: '1px solid var(--color-border)',
                    }}>
                      {item.submenu.map(sub => (
                        <li key={sub.href}>
                          <Link href={sub.href} style={{ display: 'block', padding: '8px 16px', fontSize: '0.8rem', color: 'var(--color-text)', textDecoration: 'none' }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--color-primary)'; (e.currentTarget as HTMLElement).style.color = '#fff'; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = ''; (e.currentTarget as HTMLElement).style.color = 'var(--color-text)'; }}
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
          <div onClick={() => setMobileOpen(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)' }} />
          <div style={{
            position: 'relative', zIndex: 1, background: '#fff',
            width: 280, maxWidth: '85vw', height: '100%', overflowY: 'auto',
            boxShadow: 'var(--shadow-lg)', display: 'flex', flexDirection: 'column',
          }}>
            <div style={{ background: 'var(--color-primary-dark)', padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ background: '#fff', borderRadius: 6, padding: '2px 8px' }}>
                <Image src="/logo.png" alt={siteConfig.name} width={90} height={30} style={{ display: 'block', objectFit: 'contain' }} />
              </div>
              <button onClick={() => setMobileOpen(false)} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff', borderRadius: 6, padding: '4px 8px', cursor: 'pointer', fontSize: '1rem' }}>✕</button>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
              {navItems.map(item => {
                const hasSub = 'submenu' in item && item.submenu.length > 0;
                return (
                  <li key={item.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <Link href={item.href} onClick={() => setMobileOpen(false)} style={{
                      display: 'block', padding: '12px 16px',
                      color: isActive(item.href) ? 'var(--color-primary)' : 'var(--color-text)',
                      fontWeight: isActive(item.href) ? 700 : 500,
                      fontSize: '0.9rem', textDecoration: 'none',
                    }}>{item.title}</Link>
                    {hasSub && (
                      <ul style={{ listStyle: 'none', padding: 0, background: '#f8fffe' }}>
                        {item.submenu.map(sub => (
                          <li key={sub.href} style={{ borderTop: '1px solid var(--color-border)' }}>
                            <Link href={sub.href} onClick={() => setMobileOpen(false)} style={{
                              display: 'block', padding: '8px 16px 8px 28px',
                              color: 'var(--color-text-light)', fontSize: '0.82rem', textDecoration: 'none',
                            }}>{sub.title}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
            <div style={{ padding: 16, borderTop: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href={siteConfig.contact.phoneHref} style={{ color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem' }}>
                {siteConfig.contact.phone}
              </a>
              <a href={BOOKING_URL} style={{
                display: 'block', textAlign: 'center',
                background: 'var(--color-primary)', color: '#fff',
                padding: '9px 16px', borderRadius: 6,
                fontSize: '0.875rem', fontWeight: 700, textDecoration: 'none',
              }}>Записатися на прийом</a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .nav-desktop    { display: none; }
        .header-right   { display: none; align-items: center; gap: 12px; }
        .logo-text      { display: none; }
        .mobile-phone   { display: none; }
        .burger-btn     { display: flex; }
        .mobile-actions { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }

        @media (min-width: 480px) {
          .mobile-phone { display: inline; }
        }
        @media (min-width: 640px) {
          .logo-text { display: block; }
          .mobile-phone { display: none; }
        }
        @media (min-width: 768px) {
          .nav-desktop    { display: block; }
          .header-right   { display: flex; }
          .mobile-actions { display: none; }
        }
      `}</style>
    </header>
  );
}
