import Link from 'next/link';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const socials = [
  {
    icon: <FaGithub />,
    path: 'https://github.com/Falahyan-104919',
  },
  {
    icon: <FaLinkedinIn />,
    path: 'https://linkedin.com/in/falahyan',
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            href={item.path}
            key={index}
            className={iconStyles}
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
