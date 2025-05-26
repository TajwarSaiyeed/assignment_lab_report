import {
  Github as GithubIcon,
  Linkedin as LinkedinIcon,
  Facebook as FacebookIcon,
  ExternalLink as ExternalLinkIcon,
} from "lucide-react";
import { SiCodechef, SiCodeforces, SiLeetcode } from "react-icons/si";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/TajwarSaiyeed",
    icon: GithubIcon,
    color: "hover:text-gray-800",
  },
  {
    name: "LinkedIn", 
    url: "https://www.linkedin.com/in/tajwarsaiyeed/",
    icon: LinkedinIcon,
    color: "hover:text-blue-600",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/tajwar.saiyeed.abid",
    icon: FacebookIcon,
    color: "hover:text-blue-700",
  },
  {
    name: "Portfolio",
    url: "https://portfolio-tsa.vercel.app/home",
    icon: ExternalLinkIcon,
    color: "hover:text-purple-600",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/TajwarSaiyeed/",
    icon: SiLeetcode,
    color: "hover:text-orange-600",
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/tajwarsaiyeed",
    icon: SiCodechef,
    color: "hover:text-brown-600",
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/tajwarsaiyeed",
    icon: SiCodeforces,
    color: "hover:text-red-600",
  },
];

export default function DeveloperCredits() {
  return (
    <footer className="print:hidden mt-8 py-4 border-t border-gray-200">
      <div className="text-center">
        <p className="text-sm text-gray-700 mb-2">
          Developed by <span className="font-medium">Tajwar Saiyeed</span>
        </p>
        <p className="text-xs text-gray-500 mb-3">
          CSE Student at BGC Trust University Bangladesh
        </p>
        <div className="flex justify-center gap-3">
          {socialLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-500 ${link.color} transition-colors duration-200`}
                title={link.name}
              >
                <IconComponent className="w-4 h-4" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
