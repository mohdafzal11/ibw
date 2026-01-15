import Link from 'next/link'
import Image from 'next/image'

export default function Tickets() {
  return (
    <section className="tickets padder-15" id="tickets">
      <div className="container-lg">
        <div className="mainTitle text-center">
          <h2 className="themeTitle">Tickets</h2>
          <span className="smallTitle">Secure your spot today!</span>
          <div className="outerBorder">
            <Image src="/assets/images/2025/border-bottom.svg" alt="img" width={200} height={20} />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="cardTheme">
              <div className="cardHeader">
                <h4 className="title">General Pass</h4>
                <h4 className="smallText">INR 3,821</h4>
              </div>
              <div className="ticket__divider">
                <div className="ticket__notch ticket__notch--left"></div>
                <div className="ticket__notch ticket__notch--right"></div>
              </div>
              <div className="cardBody" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <ul className="list">
                  <li><Image src="/assets/images/2025/check-icon.svg" alt="img" width={20} height={20} /> <span>2-day general access to the IBW2025 Conference</span></li>
                  <li><Image src="/assets/images/2025/check-icon.svg" alt="img" width={20} height={20} /> <span>F&B at the IBW2025 Conference</span></li>
                  <li><Image src="/assets/images/2025/check-icon.svg" alt="img" width={20} height={20} /> <span>Access to IBW2025 Afterparty</span></li>
                </ul>
                <Link href="/tickets?pass=general" className="btn btn-primary w-100">
                  <div className="btn-inner">Get Pass</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="cardTheme">
              <div className="cardHeader">
                <h4 className="title">VIP Pass</h4>
                <h4 className="smallText">INR 34,713</h4>
              </div>
              <div className="ticket__divider">
                <div className="ticket__notch ticket__notch--left"></div>
                <div className="ticket__notch ticket__notch--right"></div>
              </div>
              <div className="cardBody" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <ul className="list">
                  <li><Image src="/assets/images/2025/check-icon.svg" alt="img" width={20} height={20} /> <span>2-day premium access to the IBW2025 Conference</span></li>
                  <li><Image src="/assets/images/2025/check-icon.svg" alt="img" width={20} height={20} /> <span>F&B at the IBW2025 Conference</span></li>
                  <li><Image src="/assets/images/2025/check-icon.svg" alt="img" width={20} height={20} /> <span>Access to IBW2025 Afterparty</span></li>
                  <li><Image src="/assets/images/2025/check-icon.svg" alt="img" width={20} height={20} /> <span>1 invite to the IBW2025 VIP Dinner</span></li>
                  <li><Image src="/assets/images/2025/check-icon.svg" alt="img" width={20} height={20} /> <span>Access to the VIP Lounge at the IBW2025 Conference</span></li>
                </ul>
                <Link href="/tickets?pass=vip" className="btn btn-primary w-100">
                  <div className="btn-inner">Get Pass</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="cardTheme">
              <div className="cardHeader">
                <h4 className="title">Students Pass</h4>
                <h4 className="smallText">INR 1,780</h4>
              </div>
              <div className="ticket__divider">
                <div className="ticket__notch ticket__notch--left"></div>
                <div className="ticket__notch ticket__notch--right"></div>
              </div>
              <div className="cardBody" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <ul className="list">
                  <li><Image src="/assets/images/2025/check-icon.svg" alt="img" width={20} height={20} /> <span>2-day general access to the IBW2025 Conference</span></li>
                  <li><Image src="/assets/images/2025/check-icon.svg" alt="img" width={20} height={20} /> <span>F&B at the IBW2025 Conference</span></li>
                  <li><Image src="/assets/images/2025/check-icon.svg" alt="img" width={20} height={20} /> <span>Access to IBW2025 Afterparty</span></li>
                  <li><span></span></li>
                  <li><span></span></li>
                </ul>
                <Link href="https://tally.so/r/3lGDYN" target="_blank" className="btn btn-primary w-100">
                  <div className="btn-inner">Get Pass</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="cardTheme">
              <div className="cardHeader">
                <h4 className="title">Developer Pass</h4>
                <h4 className="smallText">30% Discount</h4>
              </div>
              <div className="ticket__divider">
                <div className="ticket__notch ticket__notch--left"></div>
                <div className="ticket__notch ticket__notch--right"></div>
              </div>
              <div className="cardBody" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <ul className="list">
                  <li><Image src="/assets/images/2025/check-icon.svg" alt="img" width={20} height={20} /> <span>2-day general access to the IBW2025 Conference</span></li>
                  <li><Image src="/assets/images/2025/check-icon.svg" alt="img" width={20} height={20} /> <span>F&B at the IBW2025 Conference</span></li>
                  <li><Image src="/assets/images/2025/check-icon.svg" alt="img" width={20} height={20} /> <span>Access to IBW2025 Afterparty</span></li>
                  <li><Image src="/assets/images/2025/check-icon.svg" alt="img" width={20} height={20} /> <span>Limited passes only, grab yours before they sell out!</span></li>
                  <li><span></span></li>
                  <li><span></span></li>
                </ul>
                <Link href="https://tally.so/r/wQ6jB1" target="_blank" className="btn btn-primary w-100">
                  <div className="btn-inner">Get Pass</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="cardTheme">
              <div className="cardHeader">
                <h4 className="title">IBW X Ledger Bundle</h4>
                <h4 className="smallText">INR 6,230</h4>
              </div>
              <div className="ticket__divider">
                <div className="ticket__notch ticket__notch--left"></div>
                <div className="ticket__notch ticket__notch--right"></div>
              </div>
              <div className="cardBody" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <ul className="list">
                  <li><Image src="/assets/images/2025/check-icon.svg" alt="img" width={20} height={20} /> <span>Ledger Nano S Plus to be picked up at the Conference</span></li>
                  <li><Image src="/assets/images/2025/check-icon.svg" alt="img" width={20} height={20} /> <span>2-day general access to the IBW2025 Conference</span></li>
                  <li><Image src="/assets/images/2025/check-icon.svg" alt="img" width={20} height={20} /> <span>F&B at the IBW2025 Conference</span></li>
                  <li><Image src="/assets/images/2025/check-icon.svg" alt="img" width={20} height={20} /> <span>Access to IBW2025 Afterparty</span></li>
                  <li><Image src="/assets/images/2025/check-icon.svg" alt="img" width={20} height={20} /> <span>Exclusive bundle, only 50 available!</span></li>
                  <li><span></span></li>
                </ul>
                <Link href="/tickets" target="_blank" className="btn btn-primary w-100">
                  <div className="btn-inner">Get Pass</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <p className="smallInfotext">Read the IBW2025 Conference Ticket Policy to understand and accept the terms and conditions of the IBW2025 Conference, prior to purchasing tickets.</p>
        <p className="smallInfotext">Get exclusive discounts on group bookings.</p>
      </div>
    </section>
  )
}
