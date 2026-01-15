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

export const dynamic = 'force-dynamic'

export default async function Home() {
  // Fetch all data in parallel using direct Prisma queries
  // This is the correct pattern for Server Components in Next.js
  let speakers_2025: any[] = []
  let past_speakers: any[] = []
  let sponsers: any = {}
  let partners: any = {}
  let activations: any = {}

  try {
    const yearValue = 3 // 2025
    
    // Fetch all data in parallel using direct database queries
    const [speakersData, pastSpeakersData, sponsorsData, partnersData, activationsData] = await Promise.all([
      // Current year speakers (not past speakers, not for demoday)
      prisma.speaker.findMany({
        where: {
          year: yearValue,
          pastSpeaker: false,
          addToDemodayPage: false
        },
        orderBy: [
          { order: 'asc' },
          { createdAt: 'asc' }
        ]
      }),
      // Past speakers
      prisma.speaker.findMany({
        where: {
          year: yearValue,
          pastSpeaker: true
        },
        orderBy: [
          { order: 'asc' },
          { createdAt: 'asc' }
        ]
      }),
      // Sponsors
      prisma.sponser.findMany({
        where: {
          year: yearValue
        },
        orderBy: [
          { order: 'asc' },
          { createdAt: 'asc' }
        ]
      }),
      // Partners
      prisma.partner.findMany({
        where: {
          year: yearValue
        },
        orderBy: [
          { order: 'asc' },
          { createdAt: 'asc' }
        ]
      }),
      // Activations
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

    speakers_2025 = speakersData || []
    past_speakers = pastSpeakersData || []
    
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
