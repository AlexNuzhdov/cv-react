// import {
//     CssSvg,
//     ErrorsSvg,
//     FID,
//     GitHubSvg,
//     GitSvg,
//     GMailSvg,
//     JQuerySvg,
//     JsSvg,
//     LinkedInSvg,
//     ReactSvg,
//     ReduxSvg,
//     RickAndMorty,
//     RoutingSvg,
//     ShopPinkStore,
//     SkillsHTMLSvg,
//     TelegramSvg,
//     TestSvg,
//     UndefSvg,
//     VercelSvg,
//     WindowsSvg,
//   } from '../assets/svg';
import {TelegramSvg } from "../assets/svg/TelegramSvg";
import {LinkedInSvg } from "../assets/svg/LinkedInSvg";
import {GitHubSvg } from "../assets/svg/GitHubSvg";
import {GMailSvg} from "../assets/svg/GMailSvg";



  export const socialMediaData = [
    {
      svg: (isHovered) => (
        <TelegramSvg color={isHovered ? '#c6c6c6' : '#fd40eb'} />
      ),
      href: 'https://t.me/evserbina',
      id: 1,
    },
    {
      svg: (isHovered) => (
        <LinkedInSvg color={isHovered ? '#c6c6c6' : '#fd40eb'} />
      ),
      href: 'https://www.linkedin.com/in/yevheniia-shcherbina-628517259/',
      id: 2,
    },
    {
      svg: (isHovered) => <GitHubSvg color={isHovered ? '#c6c6c6' : '#fd40eb'} />,
      href: 'https://github.com/eserbina652',
      id: 3,
    },
    {
      svg: (isHovered) => <GMailSvg color={isHovered ? '#c6c6c6' : '#fd40eb'} />,
      href: 'mailto:eserbina652@gmail.com',
      id: 4,
    },
  ];