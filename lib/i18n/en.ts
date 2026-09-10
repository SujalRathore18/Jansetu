export const en = {
  brand: 'JanSetu',
  tagline: "People's bridge",
  login: { welcome: 'Welcome to JanSetu', subtitle: 'Make civic action visible, accountable, and human-led.', signIn: 'Sign in', signUp: 'Create account', email: 'Email address', password: 'Password', phone: 'Phone number', otp: '6-digit OTP', continue: 'Continue', sendOtp: 'Send OTP', verifyOtp: 'Verify OTP', consent: 'I agree to responsible data handling under India’s DPDP Act, 2023.', forgot: 'Forgot password?', reset: 'Send reset link', resetSent: 'Reset link sent. Check your inbox.', wrong: 'We could not verify those details.', chooseRole: 'Choose your role', usePhone: 'Use phone + OTP', useEmail: 'Use email + password', institution: 'Institution / university', department: 'Ward / department', organization: 'Organization name', logout: 'Log out' },
  nav: { home: 'Command centre', verify: 'Verification queue', patterns: 'Pattern detection', matches: 'Matching console', audit: 'Audit trail', blueprint: 'System blueprint', reports: 'My reports', discover: 'Discover', partners: 'Partner directory' },
  settings: 'Settings', help: 'Help centre', language: 'हिं', workspace: 'Workspace', consentHint: 'Your report remains reviewable. JanSetu uses human verification before action.'
} as const
export type Translation = typeof en
