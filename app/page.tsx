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

export default async function Home() {
  // Fetch all data in parallel
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  
  let speakers_2025: any[] = []
  let past_speakers: any[] = []
  let sponsers: any = {}
  let partners: any = {}
  let activations: any = {}

  try {
    const [speakersRes, pastSpeakersRes, sponsorsRes, partnersRes, activationsRes] = await Promise.all([
      fetch(`${baseUrl}/api/speakers?year=2025&past_speaker=false&add_to_demoday=false`, { cache: 'no-store' }).catch(() => ({ ok: false, json: async () => [] })),
      fetch(`${baseUrl}/api/speakers?year=2025&past_speaker=true`, { cache: 'no-store' }).catch(() => ({ ok: false, json: async () => [] })),
      fetch(`${baseUrl}/api/sponsors?year=2025`, { cache: 'no-store' }).catch(() => ({ ok: false, json: async () => ({}) })),
      fetch(`${baseUrl}/api/partners?year=2025`, { cache: 'no-store' }).catch(() => ({ ok: false, json: async () => ({}) })),
      fetch(`${baseUrl}/api/activations?year=2025`, { cache: 'no-store' }).catch(() => ({ ok: false, json: async () => ({}) })),
    ])

    speakers_2025 = speakersRes.ok ? await speakersRes.json() : []
    past_speakers = pastSpeakersRes.ok ? await pastSpeakersRes.json() : []
    sponsers = sponsorsRes.ok ? await sponsorsRes.json() : {}
    partners = partnersRes.ok ? await partnersRes.json() : {}
    activations = activationsRes.ok ? await activationsRes.json() : {}
  } catch (error) {
    console.error('Error fetching data:', error)
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
