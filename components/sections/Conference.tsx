import Link from 'next/link'
import Image from 'next/image'
import RegistrationFormIBW25 from './RegistrationFormIBW25'

export default function Conference() {
  return (
    <section className="pt-0 padder-15 ibw2025Conference" id="ibw2025Conference">
      <div className="container-lg">
        <div className="theme-card">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-lg-4 left-side">
                <Image
                  src="/assets/images/2025/ibw-conference.svg"
                  alt="img"
                  width={300}
                  height={200}
                  loading="lazy"
                />
                <div className="date"><span>2-3 December</span></div>
                <div className="small-text">SHERATON GRAND, WHITEFIELD, BANGALORE</div>
              </div>
              <div className="col-lg-8 right-side">
                <p className="small-text">
                  India&apos;s flagship web3 conference hosted by <Link href="https://www.hashedem.com/" target="_blank" className="small-text">Hashed Emergent.</Link>
                  {' '}Talks, networking, activities, and parties. Learn from global influential leaders,
                  connect with like-minded peers, and shape the future of the web3 industry.
                </p>
                <RegistrationFormIBW25 />
              </div>
            </div>
          </div>
        </div>
        <div className="row indiaBlockchain">
          <div className="col-lg-8">
            <Link href="https://youtu.be/BvEz7VJoH64" className="videoCard" target="_blank" style={{ display: 'block', position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
              <video
                autoPlay
                controls
                muted
                loop
                playsInline
                disablePictureInPicture
                preload="metadata"
                style={{ 
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              >
                <source src="/assets/images/2025/lunch_2025.mp4" type="video/mp4" />
              </video>
            </Link>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <p className="infoText text-start">
                  The India Blockchain Week (IBW) is India&apos;s premier series of blockchain and web3 events,
                  held from December 1-7, 2025. It&apos;s a weeklong celebration of decentralization in India,
                  featuring global web3 gatherings by ETHIndia, Aptos, Polygon, Filecoin, Polkadot and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
