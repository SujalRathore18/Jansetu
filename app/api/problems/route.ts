import { NextResponse } from 'next/server'
import { mockProblems, scoreProblem } from '@/lib/jansetu/domain'

export async function GET() {
  return NextResponse.json({ data: mockProblems, count: mockProblems.length, source: 'JanSetu demo adapter' })
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  if (!body?.title || !body?.category || !body?.ward) return NextResponse.json({ error: 'title, category, and ward are required' }, { status: 400 })
  const triage = scoreProblem({ urgency: Number(body.urgency ?? 60), reach: Number(body.reach ?? 50), vulnerability: Number(body.vulnerability ?? 50), evidence: Number(body.evidence ?? 50) })
  return NextResponse.json({ id: `JS-${Date.now().toString().slice(-5)}`, status: 'under_review', triage })
}
