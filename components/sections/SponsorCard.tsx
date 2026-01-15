import Link from 'next/link'
import Image from 'next/image'

interface Sponsor {
  id: number
  title: string | null
  description: string | null
  websiteUrl: string | null
}

interface SponsorCardProps {
  sponsor: Sponsor
}

export default function SponsorCard({ sponsor }: SponsorCardProps) {
  // Note: In Rails, this uses Active Storage. You'll need to handle image URLs properly
  // For now, using a placeholder. You'll need to map sponsor images from Active Storage
  const imageSrc = `/assets/images/2025/sponsors-${sponsor.id || 1}.png`

  const content = (
    <div className="brandImg">
      <Image
        src={imageSrc}
        alt={sponsor.title || 'Sponsor'}
        width={200}
        height={100}
        loading="lazy"
        style={{ objectFit: 'contain' }}
      />
    </div>
  )

  if (sponsor.websiteUrl) {
    return (
      <div className="col-lg-2 col-md-3 col-6">
        <Link href={sponsor.websiteUrl} target="_blank">
          {content}
        </Link>
      </div>
    )
  }

  return (
    <div className="col-lg-2 col-md-3 col-6">
      <Link href="javascript:void(0)">
        {content}
      </Link>
    </div>
  )
}
