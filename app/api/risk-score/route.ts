import { NextResponse } from 'next/server'
import { scoreProblem } from '@/lib/jansetu/domain'

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  if (!body || ['urgency', 'reach', 'vulnerability', 'evidence'].some((key) => typeof body[key] !== 'number')) {
    return NextResponse.json({ error: 'urgency, reach, vulnerability, and evidence are required numbers' }, { status: 400 })
  }
  return NextResponse.json(scoreProblem(body))
}
