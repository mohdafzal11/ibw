import Link from 'next/link'
import Image from 'next/image'
import SpeakerCard from './SpeakerCard'

interface Speaker {
  id: number
  name: string
  company: string
  position: string | null
  twitter: string | null
  linkedin: string | null
  imageUrl: string | null
}

interface PastSpeakersProps {
  speakers: Speaker[]
}

export default function PastSpeakers({ speakers }: PastSpeakersProps) {
  if (!speakers || speakers.length === 0) return null

  return (
    <section className="speakersSection padder-15">
      <div className="container-lg">
        <div className="mainTitle text-center">
          <h2 className="themeTitle">
            Past Speakers
            <div className="outerBorder" style={{ display: 'grid' }}>
              <Image src="/assets/images/2025/border-bottom.svg" alt="img" width={200} height={20} loading="lazy" />
            </div>
          </h2>
        </div>
      </div>
      <div className="slider speakersSlider pastSpeakersSliderSlick">
        {speakers.map((speaker) => (
          <SpeakerCard key={speaker.id} speaker={speaker} />
        ))}
      </div>
      <div className="col-12">
        <div className="visitLinks">
          <Link href="/ibw-2023#speakers" target="_blank" className="visit-link">
            <span>IBW2023</span>
          </Link>
          <Link href="/ibw-2024#speakers" target="_blank" className="visit-link">
            <span>IBW2024</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
