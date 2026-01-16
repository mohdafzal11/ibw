import Image from 'next/image'

export default function ConfHighlight() {
  return (
    <section className="ibw2024 padder-15" id="IBW2024">
      <div className="container-lg">
        <div className="mainTitle text-center">
          <h2 className="themeTitle">
            Highlights of IBW2024 Conference
            <div className="outerBorder" style={{ display: 'flex', justifyContent: 'center' }}>
              <img src="/assets/images/2025/border-bottom.svg" alt="img" style={{ maxWidth: '100%' }} loading="lazy" />
            </div>
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-6">
            <div className="cardTheme">
              <div className="infoText">
                <h4 className="count">3,500+</h4>
                <h6 className="smallText">Attendees</h6>
              </div>
              <div className="images">
                <Image src="/assets/images/2025/attendees-img.png" alt="img" width={150} height={150} loading="lazy" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="cardTheme">
              <div className="infoText">
                <h4 className="count">100+</h4>
                <h6 className="smallText">Speakers</h6>
              </div>
              <div className="images">
                <Image src="/assets/images/2025/speakers-img.png" alt="img" width={150} height={150} loading="lazy" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="cardTheme">
              <div className="infoText">
                <h4 className="count">40+</h4>
                <h6 className="smallText">Sponsors</h6>
              </div>
              <div className="images">
                <Image src="/assets/images/2025/sponsors-img.png" alt="img" width={150} height={150} loading="lazy" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="cardTheme">
              <div className="infoText">
                <h4 className="count">100+</h4>
                <h6 className="smallText">Side-Events</h6>
              </div>
              <div className="images">
                <Image src="/assets/images/2025/sideevents-img.png" alt="img" width={150} height={150} loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
