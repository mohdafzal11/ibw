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

interface SpeakersProps {
  speakers: Speaker[]
}

export default function Speakers({ speakers }: SpeakersProps) {
  if (!speakers || speakers.length === 0) return null

  return (
    <section className="speakersSection padder-15" id="speakers">
      <div className="container-lg">
        <div className="mainTitle text-center">
          <h2 className="themeTitle">
            IBW2025 Speakers
            <div className="outerBorder" style={{ display: 'grid' }}>
              <Image
                src="/assets/images/2025/border-bottom.svg"
                alt="img"
                width={200}
                height={20}
                loading="lazy"
              />
            </div>
          </h2>
        </div>
      </div>
      <div className="slider speakersSlider speakersSliderSlick">
        {speakers.map((speaker) => (
          <SpeakerCard key={speaker.id} speaker={speaker} />
        ))}
      </div>
      <div className="col-12 mt-5 text-center">
        <Link href="/ibw_2025/speakers" className="btn btn-primary">
          <div className="btn-inner">View All Speakers</div>
        </Link>
      </div>
    </section>
  )
}
