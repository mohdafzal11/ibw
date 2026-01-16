import Link from 'next/link'
import RegistrationForm from './RegistrationForm'

export default function Footer() {
  return (
    <footer className="themeFooter padder-15">
      <div className="container-lg">
        <div className="footerInner">
          <div className="waterLogo"></div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <ul className="list">
                <li><Link href="#" target="_blank">Speak at IBW2025 Conference</Link></li>
                <li><Link href="#" target="_blank">Sponsor the IBW2025 Conference</Link></li>
                <li><Link href="#" target="_blank">Partner with IBW2025 Conference</Link></li>
                <li><Link href="#" target="_blank">Side Events at IBW2025</Link></li>
                <li><Link href="/ibw-2024" target="_blank">IBW2024</Link></li>
                <li><Link href="/ibw-2023" target="_blank">IBW2023</Link></li>
              </ul>
              <Link href="/terms-and-conditions" className="link me-4" target="_blank">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="link" target="_blank">Terms & Conditions</Link>
            </div>
            <div className="col-lg-4 col-sm-6 text-center mt-3 m-md-0">
              <div className="hostedText">Hosted by</div>
              <div className="hashed">
                <img src="/assets/images/2025/hashed.svg" alt="img" loading="lazy" style={{ maxWidth: '100%', height: 'auto' }} />
              </div>
            </div>
            <div className="col-lg-4 col-12  mt-3 m-lg-0">
              <div className="mb-4">
                <h6 className="smallTitle">Get updates</h6>
                <RegistrationForm />
              </div>
              <div className="mb-4">
                <h6 className="smallTitle">Socials</h6>
                <ul className="socialsList">
                  <li>
                    <Link href="mailto:gm@indiablockchainweek.com">
                      <img src="/assets/images/2025/mail-icon.svg" alt="icon" loading="lazy" />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/ibw.official/?hl=en" target="_blank">
                      <img src="/assets/images/2025/insta-icon.svg" alt="icon" loading="lazy" />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://x.com/IBWofficial" target="_blank">
                      <img src="/assets/images/2025/twitter-icon.svg" alt="icon" loading="lazy" />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/company/ibwofficial/" target="_blank">
                      <img src="/assets/images/2025/linkdin-icon.svg" alt="icon" loading="lazy" />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://t.me/ibw_official" target="_blank">
                      <img src="/assets/images/2025/telegram-icon.svg" alt="icon" loading="lazy" />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://indiablockchainweek.super.site/" target="_blank">
                      <img src="/assets/images/2025/next-icon.svg" alt="icon" loading="lazy" />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.youtube.com/@IBWofficial" target="_blank">
                      <img src="/assets/images/2025/youtube-icon.svg" alt="icon" loading="lazy" />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://warpcast.com/ibwoffical" target="_blank">
                      <img src="/assets/images/2025/word-icon.svg" alt="icon" loading="lazy" />
                    </Link>
                  </li>
                </ul>
                <p className="infoText">© India Blockchain Week 2025 All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
