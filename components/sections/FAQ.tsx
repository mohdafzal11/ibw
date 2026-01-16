'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'

export default function FAQ() {
  const faqs = [
    {
      id: 'collapse1',
      heading: 'headingOne',
      question: 'When and where is IBW2025?',
      answer: 'IBW2025 is planned for December 2025 at Sheraton Grand, Whitefield, Bangalore, India.'
    },
    {
      id: 'collapse2',
      heading: 'heading2',
      question: 'What is the difference between IBW and the IBW2025 Conference?',
      answer: (
        <>
          India Blockchain Week (IBW) is a series of blockchain and web3 events, spanning from 1-7 December 2025 across Bangalore, India. IBW is a week-long array of 50+ web3 events, including flagship events such as IBW2025 Conference, ETHIndia, Polygon Connect and many other side-events, networking events, workshops, parties etc hosted by Indian & global blockchain industry players.
          <br /><br />
          The IBW2025 Conference is the two-day headline event anchoring India Blockchain Week (IBW) on 2-3 December 2025 at the Sheraton Grand, Bangalore and hosted by Hashed Emergent - a team dedicated to accelerating the mass adoption of web3 in India.
          <br /><br />
          Explore the Schedule section to learn more about all the events happening at IBW.
        </>
      )
    },
    {
      id: 'collapse6',
      heading: 'heading6',
      question: 'Where do I register for IBW and IBW2025 Conference?',
      answer: (
        <>
          You can join IBW2025 by visiting the{' '}
          <Link href="/tickets">ticketing section</Link>
          {' '}to purchase your tickets. For side events, head over to the{' '}
          <Link href="https://ibw.se.ro/" target="_blank">side events page</Link>
          {' '}and register for the sessions you&apos;d like to attend.
        </>
      )
    },
    {
      id: 'collapse4',
      heading: 'heading4',
      question: 'Who are the speakers at the IBW2025 Conference?',
      answer: 'The IBW2025 speaker lineup will be announced soon! Stay tuned for updates on the exciting industry leaders and innovators joining us this year.'
    },
    {
      id: 'collapse5',
      heading: 'heading5',
      question: 'What is the agenda that will be covered at the IBW2025 Conference?',
      answer: 'The agenda for the IBW2025 Conference is still being finalized. Stay tuned for updates on the exciting topics and sessions that will be covered this year!'
    },
    {
      id: 'collapse7',
      heading: 'heading7',
      question: 'What are the processes required for traveling to the IBW2025 Conference?',
      answer: (
        <>
          We understand that travelling to India may require a lot of logistical effort. We would like to simplify this and aid you in your travel booking process.
          <br /><br />
          Please visit our &quot;<Link href="https://indiablockchainweek.super.site/da92cb8edcea4bc7a2bc6aedd76f2286" target="_blank">Travel & Visa Guide</Link>&quot;
          {' '}and our &quot;<Link href="https://indiablockchainweek.super.site/bdb80f7ebdf4442a89724b773aea68c3" target="_blank">Accommodation Guide</Link>&quot;
          {' '}to learn more details regarding visa, travel and accommodation recommendations.
        </>
      )
    },
    {
      id: 'collapse8',
      heading: 'heading8',
      question: 'How can I apply to speak at the IBW2025 Conference?',
      answer: 'Please fill out this form to apply. We cannot guarantee that you will be chosen to speak as we have a rigorous criteria for determining the speakers for the IBW2025 Conference.'
    },
    {
      id: 'collapse9',
      heading: 'heading9',
      question: 'How can I sponsor the IBW2025 Conference?',
      answer: (
        <>
          Please fill out this form to apply.
          If you&apos;d like to reach out to us directly, please email us at{' '}
          <Link href="mailto:sponsor@indiablockchainweek.com">sponsor@indiablockchainweek.com</Link>.
        </>
      )
    },
    {
      id: 'collapse10',
      heading: 'heading10',
      question: 'How can I attend the IBW2025 Conference as Press/Media?',
      answer: (
        <>
          Please fill out this form to apply. If you&apos;d like to reach out to us directly, please email us at{' '}
          <Link href="mailto:gm@indiablockchainweek.com">gm@indiablockchainweek.com</Link>.
        </>
      )
    }
  ]

  useEffect(() => {
    const handleShown = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.classList.contains('accordion-collapse')) {
        target.style.height = 'auto'
        const body = target.querySelector('.accordion-body') as HTMLElement
        if (body) {
          body.style.display = 'block'
          body.style.visibility = 'visible'
          body.style.opacity = '1'
        }
      }
    }

    const accordion = document.getElementById('faqAccordion')
    if (accordion) {
      accordion.addEventListener('shown.bs.collapse', handleShown)
      return () => {
        accordion.removeEventListener('shown.bs.collapse', handleShown)
      }
    }
  }, [])

  return (
    <section className="faqSection padder-15" id="faq">
        <div className="container-lg">
          <div className="mainTitle text-center">
            <h2 className="themeTitle">
              FAQs
              <div className="outerBorder" style={{ display: 'grid' }}>
                <img src="/assets/images/2025/border-bottom.svg" alt="img" style={{ maxWidth: '100%' }} loading="lazy" />
              </div>
            </h2>
          </div>
          <div className="accordion" id="faqAccordion">
          {faqs.map((faq) => (
            <div key={faq.id} className="accordion-item">
              <h2 className="accordion-header" id={faq.heading}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${faq.id}`}
                  aria-expanded="false"
                  aria-controls={faq.id}
                >
                  <div className="innerHeading">{faq.question}</div>
                  <span className="icon">
                    <img src="/assets/images/2025/down-icon.svg" alt="img" width={20} height={20} loading="lazy" />
                  </span>
                </button>
              </h2>
              <div id={faq.id} className="accordion-collapse collapse" aria-labelledby={faq.heading}>
                <div className="accordion-body">
                  <p className="smallText">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
