import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import {
  THEMES,
  THEME_IDS,
  STORAGE_KEY,
  type ThemeId,
  type Theme,
} from '../data/themes'

interface ThemeContextValue {
  themeId: ThemeId
  theme: Theme
  setThemeId: (id: ThemeId) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

const defaultPrimary = '#444545'
const defaultPrimaryDark = '#32373c'

function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.style.setProperty('--accent', theme.accent)
  root.style.setProperty('--accent-light', theme.accentLight)
  root.style.setProperty('--accent-dark', theme.accentDark)
  root.style.setProperty('--accent-rgb', theme.accentRgb)
  root.style.setProperty(
    '--gradient-accent',
    `linear-gradient(135deg, ${theme.accent}, ${theme.accentDark})`
  )
  root.style.setProperty(
    '--gradient-hero',
    `linear-gradient(135deg, rgba(${theme.accentRgb}, 0.08) 0%, rgba(255, 255, 255, 0.95) 50%)`
  )
  root.style.setProperty(
    '--shadow-glow',
    `0 0 20px rgba(${theme.accentRgb}, 0.25)`
  )
  if (theme.primary != null) {
    root.style.setProperty('--primary', theme.primary)
    root.style.setProperty('--primary-dark', theme.primaryDark ?? theme.primary)
  } else {
    root.style.setProperty('--primary', defaultPrimary)
    root.style.setProperty('--primary-dark', defaultPrimaryDark)
  }
  if (theme.footerBg != null) {
    root.style.setProperty('--footer-bg', theme.footerBg)
  } else {
    root.style.setProperty('--footer-bg', '#eef2f5')
  }
  root.style.setProperty(
    '--accent-contrast',
    theme.accentContrast ?? defaultPrimaryDark
  )
}

function getStoredThemeId(): ThemeId {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored && THEME_IDS.includes(stored as ThemeId)) return stored as ThemeId
  } catch {
    // ignore
  }
  return 'gold'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeIdState] = useState<ThemeId>(() => {
    const id = getStoredThemeId()
    applyTheme(THEMES[id])
    return id
  })
  const theme = THEMES[themeId]

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const setThemeId = (id: ThemeId) => {
    setThemeIdState(id)
    try {
      localStorage.setItem(STORAGE_KEY, id)
    } catch {
      // ignore
    }
  }

  return (
    <ThemeContext.Provider
      value={{ themeId, theme, setThemeId }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
