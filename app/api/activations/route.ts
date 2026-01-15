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
    
    const activations = await prisma.activation.findMany({
      where: {
        year: yearValue
      },
      include: {
        companyImages: true
      },
      orderBy: [
        { order: 'asc' },
        { createdAt: 'asc' }
      ]
    })
    
    // Group by activation_event
    const grouped = activations.reduce((acc: any, activation: typeof activations[0]) => {
      const eventKey = activation.activationEvent || 0
      if (!acc[eventKey]) {
        acc[eventKey] = []
      }
      acc[eventKey].push(activation)
      return acc
    }, {} as Record<number, typeof activations>)
    
    return NextResponse.json(grouped)
  } catch (error) {
    console.error('Error fetching activations:', error)
    return NextResponse.json({ error: 'Failed to fetch activations' }, { status: 500 })
  }
}
