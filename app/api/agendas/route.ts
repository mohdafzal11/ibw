import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const year = searchParams.get('year') || '2025'
    const addToHome = searchParams.get('add_to_home')
    
    const yearMap: { [key: string]: number } = {
      '2023': 1,
      '2024': 2,
      '2025': 3
    }
    
    const yearValue = yearMap[year] || 3
    
    const where: any = {
      year: yearValue
    }
    
    if (addToHome !== null) {
      where.addToHome = addToHome === 'true'
    }
    
    const agendas = await prisma.agenda.findMany({
      where,
      orderBy: [
        { agendaDate: 'asc' },
        { startTime: 'asc' }
      ]
    })
    
    return NextResponse.json(agendas)
  } catch (error) {
    console.error('Error fetching agendas:', error)
    return NextResponse.json({ error: 'Failed to fetch agendas' }, { status: 500 })
  }
}
