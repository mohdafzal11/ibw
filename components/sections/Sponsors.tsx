import Image from 'next/image'
import SponsorCard from './SponsorCard'

interface Sponsor {
  id: number
  title: string | null
  description: string | null
  category: number | null
  websiteUrl: string | null
}

interface SponsorsProps {
  sponsers: {
    title?: Sponsor[]
    platinum?: Sponsor[]
    gold?: Sponsor[]
    silver?: Sponsor[]
  }
}

export default function Sponsors({ sponsers }: SponsorsProps) {
  if (!sponsers || Object.keys(sponsers).length === 0) return null

  return (
    <section className="past-sponsors sponsors padder-15" id="sponsors">
      <div className="container-lg">
        <div className="mainTitle text-center">
          <h2 className="themeTitle">
            Sponsors
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

        {sponsers.title && sponsers.title.length > 0 && (
          <div className="sponsors-card">
            <div className="sponsors-title first-title">
              <h4 className="title">TITLE SPONSOR</h4>
            </div>
            <div className="row justify-content-center">
              {sponsers.title.map((sponsor) => (
                <SponsorCard key={sponsor.id} sponsor={sponsor} />
              ))}
            </div>
          </div>
        )}

        {sponsers.platinum && sponsers.platinum.length > 0 && (
          <div className="sponsors-card">
            <div className="sponsors-title platinum-sponsors">
              <h4 className="title">PLATINUM SPONSOR</h4>
            </div>
            <div className="row justify-content-center">
              {sponsers.platinum.map((sponsor) => (
                <SponsorCard key={sponsor.id} sponsor={sponsor} />
              ))}
            </div>
          </div>
        )}

        {sponsers.gold && sponsers.gold.length > 0 && (
          <div className="sponsors-card">
            <div className="sponsors-title sec-title">
              <h4 className="title">GOLD SPONSOR</h4>
            </div>
            <div className="row justify-content-center">
              {sponsers.gold.map((sponsor) => (
                <SponsorCard key={sponsor.id} sponsor={sponsor} />
              ))}
            </div>
          </div>
        )}

        {sponsers.silver && sponsers.silver.length > 0 && (
          <div className="sponsors-card">
            <div className="sponsors-title three-title">
              <h4 className="title">SILVER SPONSOR</h4>
            </div>
            <div className="row justify-content-center">
              {sponsers.silver.map((sponsor) => (
                <SponsorCard key={sponsor.id} sponsor={sponsor} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
