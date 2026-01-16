import Link from 'next/link'
import Image from 'next/image'

export default function ApplyForIBW25() {
  return (
    <section className="ibw2025 padder-15" id="apply">
      <div className="container-lg">
        <div className="mainTitle text-center">
          <h2 className="themeTitle">
            Apply For IBW2025
            <div className="outerBorder" style={{ display: 'grid' }}>
              <img src="/assets/images/2025/border-bottom.svg" alt="img" style={{ maxWidth: '100%' }} loading="lazy" />
            </div>
          </h2>
          <div className="outerBorder"></div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="carImg">
                <Image src="/assets/images/2025/speaker-img-1.png" alt="img" width={300} height={200} loading="lazy" />
                <div className="cardInfo">
                  <h6 className="title">Become a speaker</h6>
                  <p className="smallText">Want to be a speaker? Click the button below to fill out the form.</p>
                  <Link href="https://speakerform.indiablockchainweek.com/" target="_blank" className="btn btn-primary">
                    <div className="btn-inner">Apply Now</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="carImg">
                <Image src="/assets/images/2025/speaker-img-2.png" alt="img" width={300} height={200} loading="lazy" />
                <div className="cardInfo">
                  <h6 className="title">Become a sponsor</h6>
                  <p className="smallText">Considering sponsoring IBW2025? Click below to fill out the form and receive the prospectus.</p>
                  <Link href="https://sponsorform.indiablockchainweek.com/" target="_blank" className="btn btn-primary">
                    <div className="btn-inner">Apply Now</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="carImg">
                <Image src="/assets/images/2025/speaker-img-3.png" alt="img" width={300} height={200} loading="lazy" />
                <div className="cardInfo">
                  <h6 className="title">Become a partner</h6>
                  <p className="smallText">Interested in becoming a partner?<br />Click below to apply.</p>
                  <Link href="https://partnershipform.indiablockchainweek.com/" target="_blank" className="btn btn-primary">
                    <div className="btn-inner">Apply Now</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
