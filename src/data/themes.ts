/**
 * Theme definitions for the theme switcher.
 * Each theme defines the accent color family; primary (header/button dark) stays consistent.
 */
export type ThemeId =
  | 'gold'
  | 'black'
  | 'blue'
  | 'green'
  | 'purple'
  | 'red'
  | 'teal'

export interface Theme {
  id: ThemeId
  name: string
  /** Main accent hex */
  accent: string
  /** Lighter variant for hovers */
  accentLight: string
  /** Darker variant for text on light */
  accentDark: string
  /** Comma-separated RGB for rgba() in CSS, e.g. "229, 197, 118" */
  accentRgb: string
  /** Optional: header/primary bar color (defaults to --primary from global) */
  primary?: string
  primaryDark?: string
  /** Text/icon color on accent background (e.g. logo icon, CTA button). Default dark; use #fff for dark accents. */
  accentContrast?: string
  /** Footer background (optional) */
  footerBg?: string
}

export const THEMES: Record<ThemeId, Theme> = {
  gold: {
    id: 'gold',
    name: 'Dourado (atual)',
    accent: '#e5c576',
    accentLight: '#f0d590',
    accentDark: '#c9a84e',
    accentRgb: '229, 197, 118',
    footerBg: '#eef2f5',
  },
  black: {
    id: 'black',
    name: 'Preto',
    accent: '#2d2d2d',
    accentLight: '#4a4a4a',
    accentDark: '#1a1a1a',
    accentRgb: '45, 45, 45',
    primary: '#1a1a1a',
    primaryDark: '#0d0d0d',
    accentContrast: '#ffffff',
    footerBg: '#e8e8e8',
  },
  blue: {
    id: 'blue',
    name: 'Azul',
    accent: '#2563eb',
    accentLight: '#3b82f6',
    accentDark: '#1d4ed8',
    accentRgb: '37, 99, 235',
    footerBg: '#eff6ff',
  },
  green: {
    id: 'green',
    name: 'Verde',
    accent: '#059669',
    accentLight: '#10b981',
    accentDark: '#047857',
    accentRgb: '5, 150, 105',
    footerBg: '#ecfdf5',
  },
  purple: {
    id: 'purple',
    name: 'Roxo',
    accent: '#7c3aed',
    accentLight: '#8b5cf6',
    accentDark: '#6d28d9',
    accentRgb: '124, 58, 237',
    footerBg: '#f5f3ff',
  },
  red: {
    id: 'red',
    name: 'Vermelho',
    accent: '#dc2626',
    accentLight: '#ef4444',
    accentDark: '#b91c1c',
    accentRgb: '220, 38, 38',
    footerBg: '#fef2f2',
  },
  teal: {
    id: 'teal',
    name: 'Azul-esverdeado',
    accent: '#0d9488',
    accentLight: '#14b8a6',
    accentDark: '#0f766e',
    accentRgb: '13, 148, 136',
    footerBg: '#f0fdfa',
  },
}

export const THEME_IDS: ThemeId[] = [
  'gold',
  'black',
  'blue',
  'green',
  'purple',
  'red',
  'teal',
]

export const STORAGE_KEY = 'maximo-conceito-theme'
