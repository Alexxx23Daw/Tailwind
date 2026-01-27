import facebookLogo from '../assets/images/icon-facebook.svg'
import twitterLogo from '../assets/images/icon-twitter.svg'
import instagramLogo from '../assets/images/icon-instagram.svg'
import youtubeLogo from '../assets/images/icon-youtube.svg'

const networkLogos = {
  Facebook: facebookLogo,
  Twitter: twitterLogo,
  Instagram: instagramLogo,
  Youtube: youtubeLogo
}

const networkColors = {
  Facebook: 'bg-Facebook',
  Twitter: 'bg-Twitter',
  Instagram: 'bg-Instagram-gradient',
  Youtube: 'bg-YouTube'
}

export const OverviewCard = ({user, audienceType, audience, network}) => {  

  return (
    <article className="bg-light-grayish-blue w-[326px] h-[216px] mb-4 rounded-[5px] mx-auto overflow-hidden ">
        <div className='{`${networkColors[network]} h-[4px]`}'></div>
        <div className='flex items-center place-content-center gap-2 mb-[28px]'>
            <img src={networkLogos[network]} alt={`logo ${network}`} />
            <p>{user}</p>
        </div>
        <p>{audience}</p>
        <p>{audienceType}</p>
    </article>
  )
}