import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const year = searchParams.get('year') || '2025'
    
    const yearMap: { [key: string]: number } = {
      '2023': 1,
      '2024': 2,
      '2025': 3
    }
    
    const yearValue = yearMap[year] || 3
    
    const partners = await prisma.partner.findMany({
      where: {
        year: yearValue
      },
      orderBy: [
        { order: 'asc' },
        { createdAt: 'asc' }
      ]
    })
    
    // Group by category and highlighter
    const grouped = partners.reduce((acc: any, partner: typeof partners[0]) => {
      const catKey = partner.category || 0
      if (!acc[catKey]) {
        acc[catKey] = {}
      }
      const highlighterKey = partner.highlighter ? 'highlighter' : 'normal'
      if (!acc[catKey][highlighterKey]) {
        acc[catKey][highlighterKey] = []
      }
      acc[catKey][highlighterKey].push(partner)
      return acc
    }, {} as Record<number, Record<string, typeof partners>>)
    
    return NextResponse.json(grouped)
  } catch (error) {
    console.error('Error fetching partners:', error)
    return NextResponse.json({ error: 'Failed to fetch partners' }, { status: 500 })
  }
}
