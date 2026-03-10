import { useState } from 'react'
import { Palette } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { THEME_IDS, THEMES, type ThemeId } from '../data/themes'
import '../styles/theme-switcher.css'

export default function ThemeSwitcher() {
  const { themeId, setThemeId } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <div className="theme-switcher">
      <button
        type="button"
        className="theme-switcher-trigger"
        onClick={() => setOpen((o) => !o)}
        aria-label="Alterar tema / cor do site"
        aria-expanded={open}
      >
        <Palette size={18} aria-hidden />
        <span className="theme-switcher-trigger-label">Tema</span>
      </button>
      {open && (
        <>
          <div
            className="theme-switcher-backdrop"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="theme-switcher-dropdown" role="listbox" aria-label="Cores do tema">
            {THEME_IDS.map((id) => {
              const theme = THEMES[id]
              const isSelected = themeId === id
              return (
                <button
                  key={id}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  aria-label={`Tema ${theme.name}`}
                  className={`theme-switcher-option ${isSelected ? 'selected' : ''}`}
                  style={{ '--theme-color': theme.accent } as React.CSSProperties}
                  onClick={() => {
                    setThemeId(id as ThemeId)
                    setOpen(false)
                  }}
                >
                  <span className="theme-switcher-dot" />
                  <span className="theme-switcher-name">{theme.name}</span>
                </button>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
