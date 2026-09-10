export type RiskBand = 'low' | 'medium' | 'high'

export type Problem = {
  id: string
  title: string
  category: string
  ward: string
  status: 'reported' | 'under_review' | 'verified' | 'matched' | 'resolved'
  priority: number
  duplicateScore: number
  evidenceCount: number
  slaDays: number
}

export const mockProblems: Problem[] = [
  { id: 'JS-26043', title: 'Open drain beside Kanke Road Primary School', category: 'Sanitation', ward: 'Ward 12 · Ranchi', status: 'under_review', priority: 86, duplicateScore: 12, evidenceCount: 3, slaDays: 2 },
  { id: 'JS-26041', title: 'Street lights out on Bariatu bypass', category: 'Safety', ward: 'Ward 7 · Ranchi', status: 'matched', priority: 74, duplicateScore: 78, evidenceCount: 4, slaDays: 1 },
  { id: 'JS-26029', title: 'Handpump has been dry for three weeks', category: 'Water', ward: 'Dumka · Village Khatangi', status: 'verified', priority: 91, duplicateScore: 18, evidenceCount: 5, slaDays: 0 },
]

export const riskBand = (score: number): RiskBand => score >= 75 ? 'high' : score >= 45 ? 'medium' : 'low'

export function scoreProblem(input: { urgency: number; reach: number; vulnerability: number; evidence: number }) {
  const score = Math.round(input.urgency * 0.35 + input.reach * 0.25 + input.vulnerability * 0.25 + input.evidence * 0.15)
  return { score, band: riskBand(score), rationale: ['urgency', 'citizen reach', 'vulnerability', 'evidence quality'] }
}

export const systemBlueprint = {
  tables: ['users', 'problems', 'evidence', 'risk_scores', 'matches', 'outcomes', 'audit_events'],
  controls: ['human verification gate', 'role-scoped access', 'immutable audit events', 'source-linked evidence', 'PII minimisation'],
  raci: [
    ['Citizen', 'Report signal', 'R', 'A'],
    ['Ward officer', 'Verify and route', 'A/R', 'C'],
    ['University', 'Prototype solution', 'R', 'C'],
    ['CSR / NGO', 'Fund and deliver', 'R', 'I'],
  ],
}
