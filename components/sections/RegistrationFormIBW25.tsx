'use client'

import Link from 'next/link'

export default function RegistrationFormIBW25() {
  return (
    <form className="formCustom row">
      <div className="col-md-6">
        <div className="input-btn">
          <Link href="/tickets" className="btn btn-primary me-2">
            <div className="btn-inner">Buy Ticket</div>
          </Link>
          <Link href="https://insidr.indiablockchainweek.com/" className="btn btn-primary me-2" target="_blank">
            <div className="btn-inner">Side events</div>
          </Link>
        </div>
      </div>
    </form>
  )
}
