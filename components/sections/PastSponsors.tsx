import Link from 'next/link'
import Image from 'next/image'

export default function PastSponsors() {
  const sponsorImages = Array.from({ length: 24 }, (_, i) => i + 1)

  return (
    <section className="past-sponsors padder-15" id="sponsers">
      <div className="container-lg">
        <div className="mainTitle text-center">
          <h2 className="themeTitle">
            PAST Sponsors
            <div className="outerBorder" style={{ display: 'grid' }}>
            <img src="/assets/images/2025/border-bottom.svg" alt="img" style={{ maxWidth: '100%' }} loading="lazy" />
            </div>
          </h2>
        </div>
        <div className="row">
          {sponsorImages.map((num) => (
            <div key={num} className="col-lg-2 col-md-3 col-6">
              <div className="brandImg">
                <Image
                  src={`/assets/images/2025/sponsors-${num}.png`}
                  alt={`Sponsor ${num}`}
                  width={150}
                  height={100}
                  loading="lazy"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="col-12">
          <div className="visitLinks">
            <Link href="/ibw-2023#sponsors" target="_blank" className="visit-link">
              <span>IBW2023</span>
            </Link>
            <Link href="/ibw-2024#sponsors" target="_blank" className="visit-link">
              <span>IBW2024</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
