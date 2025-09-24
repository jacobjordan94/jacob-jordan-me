import clsx from 'clsx';
import Icon404 from './icons/404Icon';
import DiscordIcon from './icons/DiscordIcon';
import DotsMenuIcon from './icons/DotsMenuIcon';
import DPadIcon from './icons/DPadIcon';
import EnvelopeIcon from './icons/EnvelopeIcon';
import ExperienceIcon from './icons/ExperienceIcon';
import GithubIcon from './icons/GithubIcon';
import HeathcliffIcon from './icons/HeathcliffIcon';
import HomeIcon from './icons/HomeIcon';
import InfoIcon from './icons/InfoIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import LinkIcon from './icons/LinkIcon';
import MenuIcon from './icons/MenuIcon';
import OldPcIcon from './icons/OldPCIcon';
import PaintingIcon from './icons/PaintingIcon';
import PaperAirplaneIcon from './icons/PaperAirplaneIcon';
import PhoneIcon from './icons/PhoneIcon';
import ResumeIcon from './icons/ResumeIcon';
import SkillsIcon from './icons/SkillsIcon';
import SourceCodeHandsIcon from './icons/SourceCodeHandsIcon';
import SourceCodeMagnifyingGlassIcon from './icons/SourceCodeMagnifyingGlassIcon';
import StarIcon from './icons/StarIcon';
import WorldWideWebIcon from './icons/WorldWideWebIcon';
import YouTubeIcon from './icons/YouTubeIcon';

const iconMap = {
  '404': Icon404,
  Discord: DiscordIcon,
  DotsMenu: DotsMenuIcon,
  DPad: DPadIcon,
  Envelope: EnvelopeIcon,
  Experience: ExperienceIcon,
  Github: GithubIcon,
  Heathcliff: HeathcliffIcon,
  Home: HomeIcon,
  Info: InfoIcon,
  LinkedIn: LinkedInIcon,
  Link: LinkIcon,
  Menu: MenuIcon,
  OldPC: OldPcIcon,
  Painting: PaintingIcon,
  PaperAirplane: PaperAirplaneIcon,
  Phone: PhoneIcon,
  Resume: ResumeIcon,
  Skills: SkillsIcon,
  SourceCodeHands: SourceCodeHandsIcon,
  SourceCodeMagnifyingGlass: SourceCodeMagnifyingGlassIcon,
  Star: StarIcon,
  WWW: WorldWideWebIcon,
  Youtube: YouTubeIcon,
};

const Icon = ({ name, size = 24, className = '', ...rest }) => {
  const Component = iconMap[name];
  const sizeProps = { width: size, height: size };

  if (!Component) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }

  return <Component {...sizeProps} className={clsx('text-current', className)} {...rest} />;
};

Object.entries(iconMap).forEach(([key, Comp]) => {
  Icon[key] = (props) => <Icon name={key} {...props} />;
});

export default Icon;
