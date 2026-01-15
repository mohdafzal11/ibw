import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const year = searchParams.get('year') || '2025'
    const pastSpeaker = searchParams.get('past_speaker')
    const addToDemoday = searchParams.get('add_to_demoday')
    
    const yearMap: { [key: string]: number } = {
      '2023': 1,
      '2024': 2,
      '2025': 3
    }
    
    const yearValue = yearMap[year] || 3
    
    const where: any = {
      year: yearValue
    }
    
    if (pastSpeaker !== null) {
      where.pastSpeaker = pastSpeaker === 'true'
    }
    
    if (addToDemoday !== null) {
      where.addToDemodayPage = addToDemoday === 'true'
    }
    
    const speakers = await prisma.speaker.findMany({
      where,
      orderBy: [
        { order: 'asc' },
        { createdAt: 'asc' }
      ]
    })
    
    return NextResponse.json(speakers)
  } catch (error) {
    console.error('Error fetching speakers:', error)
    return NextResponse.json({ error: 'Failed to fetch speakers' }, { status: 500 })
  }
}
