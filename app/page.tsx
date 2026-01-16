import Banner from '@/components/sections/Banner'
import Conference from '@/components/sections/Conference'
import Speakers from '@/components/sections/Speakers'
import Sponsors from '@/components/sections/Sponsors'
import Partners from '@/components/sections/Partners'
import Tickets from '@/components/sections/Tickets'
import ConfHighlight from '@/components/sections/ConfHighlight'
import Highlights from '@/components/sections/Highlights'
import Activations from '@/components/sections/Activations'
import Overview from '@/components/sections/Overview'
import PastSpeakers from '@/components/sections/PastSpeakers'
import PastSponsors from '@/components/sections/PastSponsors'
import ApplyForIBW25 from '@/components/sections/ApplyForIBW25'
import FAQ from '@/components/sections/FAQ'
import { prisma } from '@/lib/prisma'
import { headers } from 'next/headers'

export const dynamic = 'force-dynamic'
// Ensure this page runs on Node.js runtime (not edge) since Prisma requires Node.js
export const runtime = 'nodejs'

export default async function Home() {
  // Fetch all data in parallel - using API for speakers, direct Prisma for others
  // TODO: In future, can change to use API endpoints for all data
  let speakers_2025: any[] = []
  let past_speakers: any[] = []
  let sponsers: any = {}
  let partners: any = {}
  let activations: any = {}

  try {
    const yearValue = 3 // 2025
    
    // Fetch speakers from API endpoint
    // Get base URL from headers or environment variable
    const headersList = await headers()
    const host = headersList.get('host') || 'localhost:3000'
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || `${protocol}://${host}`
    
    const [speakersResponse, pastSpeakersResponse, sponsorsData, partnersData, activationsData] = await Promise.all([
      // Current year speakers (not past speakers, not for demoday) - using API
      fetch(`${baseUrl}/api/speakers?year=2025&past_speaker=false&add_to_demoday=false`, {
        cache: 'no-store'
      })
        .then(res => res.ok ? res.json() : [])
        .catch(() => []),
      // Past speakers - using API
      fetch(`${baseUrl}/api/speakers?year=2025&past_speaker=true`, {
        cache: 'no-store'
      })
        .then(res => res.ok ? res.json() : [])
        .catch(() => []),
      // Sponsors - still using direct Prisma (can change to API later)
      prisma.sponser.findMany({
        where: {
          year: yearValue
        },
        orderBy: [
          { order: 'asc' },
          { createdAt: 'asc' }
        ]
      }),
      // Partners - still using direct Prisma (can change to API later)
      prisma.partner.findMany({
        where: {
          year: yearValue
        },
        orderBy: [
          { order: 'asc' },
          { createdAt: 'asc' }
        ]
      }),
      // Activations - still using direct Prisma (can change to API later)
      prisma.activation.findMany({
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
    ])

    speakers_2025 = Array.isArray(speakersResponse) ? speakersResponse : []
    past_speakers = Array.isArray(pastSpeakersResponse) ? pastSpeakersResponse : []
    
    // Group sponsors by category (0: title, 1: platinum, 2: gold, 3: silver)
    sponsers = {
      title: sponsorsData.filter((s: any) => s.category === 0),
      platinum: sponsorsData.filter((s: any) => s.category === 1),
      gold: sponsorsData.filter((s: any) => s.category === 2),
      silver: sponsorsData.filter((s: any) => s.category === 3)
    }
    
    // Group partners by category and highlighter
    partners = partnersData.reduce((acc: any, partner: any) => {
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
    }, {} as Record<number, Record<string, any>>)
    
    // Group activations by activation_event
    activations = activationsData.reduce((acc: any, activation: any) => {
      const eventKey = activation.activationEvent || 0
      if (!acc[eventKey]) {
        acc[eventKey] = []
      }
      acc[eventKey].push(activation)
      return acc
    }, {} as Record<number, any>)
  } catch (error) {
    console.error('Error fetching data:', error)
    // Gracefully handle errors - return empty data instead of crashing
  }

  return (
    <main>
      <Banner />
      <Conference />
      <Speakers speakers={speakers_2025} />
      <Sponsors sponsers={sponsers} />
      <Partners partners={partners} />
      <Tickets />
      <ConfHighlight />
      <Highlights />
      <Activations activations={activations} />
      <Overview />
      <PastSpeakers speakers={past_speakers} />
      <PastSponsors />
      <ApplyForIBW25 />
      <FAQ />
    </main>
  )
}
