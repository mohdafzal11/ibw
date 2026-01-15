import Link from 'next/link'
import Image from 'next/image'
import SponsorCard from './SponsorCard'

interface Partner {
  id: number
  name: string | null
  companyName: string | null
  category: number | null
  websiteUrl: string | null
  highlighter: boolean | null
}

interface PartnersProps {
  partners: {
    [key: string]: {
      highlighter?: Partner[]
      normal?: Partner[]
    }
  }
}

export default function Partners({ partners }: PartnersProps) {
  if (!partners || Object.keys(partners).length === 0) return null

  // Map category numbers to names (0: media, 1: community, 2: special, 3: others)
  const categoryMap: { [key: number]: string } = {
    0: 'media',
    1: 'community',
    2: 'special',
    3: 'others'
  }

  return (
    <section className="past-sponsors sponsors padder-15" id="partners">
      <div className="container-lg">
        <div className="mainTitle text-center">
          <h2 className="themeTitle">
            Partners
            <div className="outerBorder">
              <Image
                src="/assets/images/2025/border-bottom.svg"
                alt="img"
                width={200}
                height={20}
                loading="lazy"
              />
            </div>
          </h2>
        </div>

        {Object.keys(partners).map((catKey) => {
          const category = parseInt(catKey)
          const categoryName = categoryMap[category] || 'others'
          const categoryData = partners[catKey]

          if (!categoryData || (!categoryData.highlighter?.length && !categoryData.normal?.length)) {
            return null
          }

          const allPartners = [
            ...(categoryData.highlighter || []),
            ...(categoryData.normal || [])
          ]

          if (categoryName === 'special') {
            return (
              <div key={catKey} className="sponsors-card">
                <div className="sponsors-title four-title">
                  <h4 className="title">SPECIAL PARTNERS</h4>
                </div>
                <div className="row justify-content-center">
                  {allPartners.map((partner) => (
                    <div key={partner.id} className="col-md-3 col-6">
                      {partner.websiteUrl ? (
                        <Link href={partner.websiteUrl} target="_blank" className="brandImg partnersImg">
                          <Image
                            src={`/assets/images/2025/partners-${partner.id}.png`}
                            alt={partner.companyName || 'Partner'}
                            width={150}
                            height={100}
                            loading="lazy"
                          />
                        </Link>
                      ) : (
                        <Link href="javascript:void(0)" className="brandImg partnersImg">
                          <Image
                            src={`/assets/images/2025/partners-${partner.id}.png`}
                            alt={partner.companyName || 'Partner'}
                            width={150}
                            height={100}
                            loading="lazy"
                          />
                        </Link>
                      )}
                      <span className="small-text">{partner.companyName}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          }

          const titleMap: { [key: string]: string } = {
            media: 'MEDIA PARTNER',
            community: 'Community PARTNER',
            others: 'OTHERS PARTNER'
          }

          return (
            <div key={catKey} className="sponsors-card">
              <div className="sponsors-title four-title">
                <h4 className="title">{titleMap[categoryName] || 'PARTNER'}</h4>
              </div>
              <div className="row justify-content-center">
                {allPartners.map((partner) => (
                  <SponsorCard key={partner.id} sponsor={partner as any} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
