import React, { useState } from 'react'
import type { HeaderProps } from '@/types'
import { Button } from '@/components/common/Button'

const NAV_LINKS = [
  { label: 'Mapa', href: '#mapa' },
  { label: 'Dados', href: '#dados' },
  { label: 'Docs', href: '#docs' },
]

export function Header({ title = 'WebGIS', showLogin = true }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-brand-dark text-white h-16 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-yellow rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-brand-dark font-bold text-xl leading-none">✕</span>
          </div>
          <div>
            <h1 className="text-xl font-bold leading-tight">{title}</h1>
            <p className="text-xs text-gray-400 leading-tight">Prefeitura Integrada</p>
          </div>
        </div>

        {/* Nav — desktop */}
        <nav className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-brand-yellow transition-colors duration-200 font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          {showLogin && (
            <Button variant="primary" size="sm">
              Entrar
            </Button>
          )}

          {/* Hamburger — mobile */}
          <button
            className="md:hidden text-gray-300 hover:text-brand-yellow transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-dark border-t border-gray-700 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-brand-yellow transition-colors font-medium"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
