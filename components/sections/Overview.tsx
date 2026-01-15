import Image from 'next/image'

export default function Overview() {
  return (
    <section className="ibw2024-overview padder-15" id="IBW2024">
      <div className="container-lg">
        <div className="mainTitle text-center">
          <h2 className="themeTitle">
            IBW2024 Overview
            <div className="outerBorder" style={{ display: 'grid' }}>
              <Image src="/assets/images/2025/border-bottom.svg" alt="img" width={200} height={20} loading="lazy" />
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
                      <Image src="/assets/images/2025/border-bottom.svg" alt="img" width={200} height={20} loading="lazy" />
                    </div>
                  </h2>
                </div>
                <ul>
                  {[1, 2, 3].map((num) => (
                    <li key={num}>
                      <Image src={`/assets/images/2025/overview-logo-${num}.svg`} alt={`Logo ${num}`} width={100} height={50} loading="lazy" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Add more overview sections as needed */}
        </div>
      </div>
    </section>
  )
}
