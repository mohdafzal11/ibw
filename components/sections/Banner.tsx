import Image from 'next/image'
import Link from 'next/link'

export default function Banner() {
  return (
    <section className="themeBanner" style={{ width: '100%', position: 'relative', height: '100svh' }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        data-wf-ignore="true"
        data-object-fit="cover"
        disablePictureInPicture
        className="banner-video"
        style={{
          objectFit: 'cover',
          zIndex: -100,
          backgroundPosition: '50%',
          backgroundSize: 'cover',
          width: '100%',
          height: '100%',
          margin: 'auto',
          position: 'absolute',
          top: '-100%',
          right: '-100%',
          bottom: '-100%',
          left: '-100%'
        }}
      >
        <source src="/assets/images/2025/banner-video.mp4" type="video/mp4" />
        <source src="/assets/images/2025/banner-video.ogg" type="video/ogg" />
      </video>
      
      {/* Gradient overlay - CSS will handle this via ::after, but adding fallback */}
      <div 
        style={{
          content: '',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/assets/images/2025/banner-shadow.png)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />

      <div className="banner-content">
        <div className="container-lg">
          <div className="row align-items-end">
            <div className="col-lg-8 col-md-7">
              <div className="main-title">
                <Image
                  src="/assets/images/2025/banner-title.svg"
                  alt="img"
                  width={600}
                  height={200}
                  loading="lazy"
                />
                <div className="edition">
                  <Image
                    src="/assets/images/2025/3rd-edition.svg"
                    alt="img"
                    width={300}
                    height={100}
                    loading="lazy"
                  />
                  <div className="border-shadow">
                    <Image
                      src="/assets/images/2025/elipse-icn.png"
                      alt="img"
                      width={100}
                      height={100}
                      loading="lazy"
                      className="elipse-animation"
                    />
                    <Image
                      src="/assets/images/2025/border-bottom-sec.svg"
                      alt="img"
                      width={300}
                      height={50}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5">
              <div className="countdown" style={{ display: 'none' }}>
                <div className="innerCount">
                  <span id="days">76</span>
                  <div className="label">DAYS</div>
                </div>
                <div className="innerCount dot">:</div>
                <div className="innerCount">
                  <span id="hours">11</span>
                  <div className="label">HOURS</div>
                </div>
                <div className="innerCount dot">:</div>
                <div className="innerCount">
                  <span id="minutes">32</span>
                  <div className="label">MINS</div>
                </div>
              </div>
              <div className="countdown">
                <div className="innerCount">
                  <span style={{ fontSize: '20px' }}>Thank you for being a part of IBW2025.See you again soon!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
