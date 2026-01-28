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
  Facebook: 'bg-facebook',
  Twitter: 'bg-twitter',
  Instagram: 'bg-instagram-gradient',
  Youtube: 'bg-youtube'
}



export const OverviewCard = ({user, audienceType, audience, network}) => {  

  return (
    <article className="bg-light-grayish-blue w-81.5 h-54 mb-4 rounded-[5px] mx-auto overflow-hidden ">
        <div className={`${networkColors[network]} h-1`}></div>
        <div className='flex items-center place-content-center gap-2 mb-7'>
            <img src={networkLogos[network]} alt={`logo ${network}`} />
            <p>{user}</p>
        </div>
        <p>{audience}</p>
        <p>{audienceType}</p>
    </article>
  )
}