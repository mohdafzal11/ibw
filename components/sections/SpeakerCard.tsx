import Link from 'next/link'
import Image from 'next/image'

interface Speaker {
  id: number
  name: string
  company: string
  position: string | null
  twitter: string | null
  linkedin: string | null
  imageUrl: string | null
}

interface SpeakerCardProps {
  speaker: Speaker
}

export default function SpeakerCard({ speaker }: SpeakerCardProps) {
  // For now, we'll use imageUrl. In production, you'd need to handle Active Storage images
  const imageSrc = speaker.imageUrl || '/assets/images/2025/speaker-1.png'

  return (
    <div className="card">
      <div className="cardInner">
        <div className="speakersImg">
          {speaker.imageUrl ? (
            <Link href={speaker.imageUrl} target="_blank">
              <Image
                src={imageSrc}
                alt={speaker.name}
                width={200}
                height={200}
                style={{ objectFit: 'cover' }}
              />
            </Link>
          ) : (
            <Image
              src={imageSrc}
              alt={speaker.name}
              width={200}
              height={200}
              style={{ objectFit: 'cover' }}
            />
          )}
        </div>
        <div className="speakersDetails">
          <h4 className="name">{speaker.name}</h4>
          <span className="info">
            {speaker.position} | {speaker.company}
          </span>
          <ul className="socialIcons">
            {speaker.twitter && (
              <li>
                <Link href={speaker.twitter} target="_blank">
                  <Image
                    src="/assets/images/2025/twitter-icon.svg"
                    alt="Twitter"
                    width={20}
                    height={20}
                  />
                </Link>
              </li>
            )}
            {speaker.linkedin && (
              <li>
                <Link href={speaker.linkedin} target="_blank">
                  <Image
                    src="/assets/images/2025/linkdin-icon.svg"
                    alt="LinkedIn"
                    width={20}
                    height={20}
                  />
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
