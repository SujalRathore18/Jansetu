export type AppRole = 'citizen' | 'student' | 'partner' | 'admin' | 'demo'

export type AppScreen = 'home' | 'reports' | 'discover' | 'partners' | 'verify' | 'patterns' | 'matches' | 'audit' | 'blueprint'

export const permissions: Record<AppRole, readonly AppScreen[]> = {
  citizen: ['home', 'reports', 'discover'],
  student: ['home', 'discover', 'matches', 'audit'],
  partner: ['home', 'discover', 'partners', 'audit'],
  admin: ['home', 'verify', 'patterns', 'matches', 'audit', 'blueprint'],
  demo: ['home', 'reports', 'discover', 'partners', 'verify', 'patterns', 'matches', 'audit', 'blueprint'],
}

export function canAccess(role: AppRole, screen: AppScreen) {
  return permissions[role].includes(screen)
}

export function defaultScreen(role: AppRole): AppScreen {
  return 'home'
}

export function isDemoRole(role: AppRole) {
  return role === 'demo'
}
