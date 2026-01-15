import Link from 'next/link'
import Image from 'next/image'

export default function Highlights() {
  const highlightImages = Array.from({ length: 15 }, (_, i) => i + 1)

  return (
    <section className="highlightSection padder-15">
      <div className="container-lg position-relative">
        <div className="highlightMain">
          <h4 className="title">HIGH <br />LIGHTS</h4>
        </div>
        <div className="row">
          <div className="col-md-3 d-md-flex d-none flex-column justify-content-center">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="highlightCard">
                <div className="highlightCardInner">
                  <Image
                    src={`/assets/images/2025/highlight-img-${num}.png`}
                    alt={`Highlight ${num}`}
                    width={200}
                    height={150}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-6">
            <div className="row align-items-end">
              <div className="col-6">
                <div className="highlightCard">
                  <div className="highlightCardInner">
                    <Image src="/assets/images/2025/highlight-img-5.png" alt="Highlight 5" width={200} height={150} loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="highlightCard">
                  <div className="highlightCardInner">
                    <Image src="/assets/images/2025/highlight-img-6.png" alt="Highlight 6" width={200} height={150} loading="lazy" />
                  </div>
                </div>
                <div className="highlightCard">
                  <div className="highlightCardInner">
                    <Image src="/assets/images/2025/highlight-img-7.png" alt="Highlight 7" width={200} height={150} loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="highlightCard highlightActive">
                <Link href="https://youtu.be/TIgKjPw3ujs?si=9N9S8yED6DiW2lv-" className="highlightCardInner" target="_blank">
                  <video
                    autoPlay
                    controls
                    muted
                    loop
                    playsInline
                    disablePictureInPicture
                    preload="metadata"
                    style={{ width: '100%', height: '100%' }}
                  >
                    <source src="/assets/images/2025/lighlight_2025.mp4" type="video/mp4" />
                  </video>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="highlightCard">
                  <div className="highlightCardInner">
                    <Image src="/assets/images/2025/highlight-img-8.png" alt="Highlight 8" width={200} height={150} loading="lazy" />
                  </div>
                </div>
                <div className="highlightCard">
                  <div className="highlightCardInner">
                    <Image src="/assets/images/2025/highlight-img-9.png" alt="Highlight 9" width={200} height={150} loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="highlightCard">
                  <div className="highlightCardInner">
                    <Image src="/assets/images/2025/highlight-img-10.png" alt="Highlight 10" width={200} height={150} loading="lazy" />
                  </div>
                </div>
                <div className="highlightCard">
                  <div className="highlightCardInner">
                    <Image src="/assets/images/2025/highlight-img-11.png" alt="Highlight 11" width={200} height={150} loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-md-flex d-none flex-column justify-content-center">
            {[12, 13, 14, 15].map((num) => (
              <div key={num} className="highlightCard">
                <div className="highlightCardInner">
                  <Image
                    src={`/assets/images/2025/highlight-img-${num}.png`}
                    alt={`Highlight ${num}`}
                    width={200}
                    height={150}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12">
          <div className="visitLinks">
            <Link href="https://indiablockchainweek.com/ibw-2023" target="_blank" className="visit-link">
              <span>Revisit IBW2023</span>
            </Link>
            <Link href="https://indiablockchainweek.com/ibw-2024" target="_blank" className="visit-link">
              <span>Revisit IBW2024</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
