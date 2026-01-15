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
    
    const sponsors = await prisma.sponser.findMany({
      where: {
        year: yearValue
      },
      orderBy: [
        { order: 'asc' },
        { createdAt: 'asc' }
      ]
    })
    
    // Group by category (0: title, 1: platinum, 2: gold, 3: silver)
    const grouped = {
      title: sponsors.filter((s: typeof sponsors[0]) => s.category === 0),
      platinum: sponsors.filter((s: typeof sponsors[0]) => s.category === 1),
      gold: sponsors.filter((s: typeof sponsors[0]) => s.category === 2),
      silver: sponsors.filter((s: typeof sponsors[0]) => s.category === 3)
    }
    
    return NextResponse.json(grouped)
  } catch (error) {
    console.error('Error fetching sponsors:', error)
    return NextResponse.json({ error: 'Failed to fetch sponsors' }, { status: 500 })
  }
}
