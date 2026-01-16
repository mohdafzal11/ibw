import Image from 'next/image'

export default function Overview() {
  return (
    <section className="ibw2024-overview padder-15" id="IBW2024">
      <div className="container-lg">
        <div className="mainTitle text-center">
          <h2 className="themeTitle">
            IBW2024 Overview
            <div className="outerBorder" style={{ display: 'grid' }}>
              <img src="/assets/images/2025/border-bottom.svg" alt="img" style={{ maxWidth: '100%' }} loading="lazy" />
            </div>
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="row first-card">
              {[
                { count: '100+', text: 'Kols attended' },
                { count: '75+', text: 'Sessions' },
                { count: '40+', text: 'Booths' },
                { count: '5', text: 'Stages' }
              ].map((item, idx) => (
                <div key={idx} className="col-md-3 col-6">
                  <div className="cardTheme">
                    <div className="card-body">
                      <div className="count">{item.count}</div>
                      <div className="small-text">{item.text}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4 sec-card">
            <div className="cardTheme">
              <div className="card-body">
                <div className="mainTitle text-center">
                  <h2 className="themeTitle">
                    Demo day
                    <div className="outerBorder">
                      <img src="/assets/images/2025/border-bottom.svg" alt="img" style={{ maxWidth: '100%' }} loading="lazy" />
                    </div>
                  </h2>
                </div>
                <ul>
                  {[1, 2, 3].map((num) => (
                    <li key={num}>
                      <img src={`/assets/images/2025/overview-logo-${num}.svg`} alt="img" loading="lazy" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 thired-card">
            <div className="cardTheme">
              <div className="card-body">
                <div className="mainTitle text-center">
                  <h2 className="themeTitle">
                    Podcast Stations
                    <div className="outerBorder">
                      <img src="/assets/images/2025/border-bottom.svg" alt="img" style={{ maxWidth: '100%' }} loading="lazy" />
                    </div>
                  </h2>
                </div>
                <ul>
                  <li>
                    <img src="/assets/images/2025/overview-logo-7.png" alt="img" loading="lazy" />
                  </li>
                  <li>
                    <img src="/assets/images/2025/overview-logo-4.svg" alt="img" loading="lazy" />
                  </li>
                  <li>
                    <img src="/assets/images/2025/overview-logo-5.svg" alt="img" loading="lazy" />
                  </li>
                  <li>
                    <img src="/assets/images/2025/overview-logo-6.svg" alt="img" loading="lazy" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 thired-card">
            <div className="cardTheme">
              <div className="card-body">
                <div className="mainTitle text-center">
                  <h2 className="themeTitle">
                    Other Stage Events
                    <div className="outerBorder">
                      <img src="/assets/images/2025/border-bottom.svg" alt="img" style={{ maxWidth: '100%' }} loading="lazy" />
                    </div>
                  </h2>
                </div>
                <ul>
                  <li>
                    <img src="/assets/images/2025/overview-logo-8.svg" alt="img" loading="lazy" />
                  </li>
                  <li>
                    <img src="/assets/images/2025/overview-logo-9.svg" alt="img" loading="lazy" />
                  </li>
                  <li>
                    <img src="/assets/images/2025/overview-logo-10.svg" alt="img" loading="lazy" />
                  </li>
                  <li>
                    <img src="/assets/images/2025/overview-logo-10.png" alt="img" loading="lazy" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 four-card">
            <div className="cardTheme">
              <div className="card-body">
                <div className="mainTitle text-center">
                  <h2 className="themeTitle">
                    Workshop and pitch stage
                    <div className="outerBorder">
                      <img src="/assets/images/2025/border-bottom.svg" alt="img" style={{ maxWidth: '100%' }} loading="lazy" />
                    </div>
                  </h2>
                </div>
                <ul>
                  {[11, 12, 13, 14, 15, 16, 17, 18].map((num) => (
                    <li key={num}>
                      <img src={`/assets/images/2025/overview-logo-${num}.svg`} alt="img" loading="lazy" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 thired-card">
            <div className="cardTheme">
              <div className="card-body">
                <div className="mainTitle text-center">
                  <h2 className="themeTitle">
                    Other experiences
                    <div className="outerBorder">
                      <img src="/assets/images/2025/border-bottom.svg" alt="img" style={{ maxWidth: '100%' }} loading="lazy" />
                    </div>
                  </h2>
                </div>
                <ul>
                  <li>
                    <img src="/assets/images/2025/overview-logo-8.svg" alt="img" loading="lazy" />
                  </li>
                  <li>
                    <img src="/assets/images/2025/overview-logo-19.svg" alt="img" loading="lazy" />
                  </li>
                  <li>
                    <img src="/assets/images/2025/overview-logo-20.svg" alt="img" loading="lazy" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 thired-card">
            <div className="cardTheme">
              <div className="card-body">
                <div className="mainTitle text-center">
                  <h2 className="themeTitle">
                    Lounges
                    <div className="outerBorder">
                      <img src="/assets/images/2025/border-bottom.svg" alt="img" style={{ maxWidth: '100%' }} loading="lazy" />
                    </div>
                  </h2>
                </div>
                <ul>
                  <li>
                    <img src="/assets/images/2025/overview-logo-10.png" alt="img" loading="lazy" />
                  </li>
                  <li>
                    <img src="/assets/images/2025/overview-logo-21.svg" alt="img" loading="lazy" />
                  </li>
                  <li>
                    <img src="/assets/images/2025/overview-logo-22.svg" alt="img" loading="lazy" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 four-card five-card">
            <div className="cardTheme">
              <div className="card-body d-flex flex-column flex-md-row align-items-center justify-content-center">
                <div className="mainTitle mb-0 me-md-4 text-md-center">
                  <h2 className="themeTitle">Aggrave ibw afterparty</h2>
                </div>
                <ul className="w-auto">
                  <li>
                    <img src="/assets/images/2025/overview-logo-23.svg" alt="img" loading="lazy" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
