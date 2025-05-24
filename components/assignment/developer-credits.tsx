import { Card, CardContent } from "@/components/ui/card"
import { Github as GithubIcon, Linkedin as LinkedinIcon, Facebook as FacebookIcon, ExternalLink as ExternalLinkIcon } from "lucide-react"
import { SocialLink } from "@/types/form"

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/TajwarSaiyeed",
    icon: GithubIcon,
    color: "text-gray-800 hover:text-gray-600",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/tajwarsaiyeed/",
    icon: LinkedinIcon,
    color: "text-blue-600 hover:text-blue-500",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/tajwar.saiyeed.abid",
    icon: FacebookIcon,
    color: "text-blue-700 hover:text-blue-600",
  },
  {
    name: "Portfolio",
    url: "https://portfolio-tsa.vercel.app/home",
    icon: ExternalLinkIcon,
    color: "text-purple-600 hover:text-purple-500",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/TajwarSaiyeed/",
    icon: ExternalLinkIcon,
    color: "text-orange-600 hover:text-orange-500",
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/tajwarsaiyeed",
    icon: ExternalLinkIcon,
    color: "text-brown-600 hover:text-brown-500",
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/tajwarsaiyeed",
    icon: ExternalLinkIcon,
    color: "text-red-600 hover:text-red-500",
  },
]

export default function DeveloperCredits() {
  return (
    <Card className="print:hidden bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
      <CardContent className="p-6">
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Developed by Tajwar Saiyeed</h3>
          <p className="text-gray-600 mb-6">
            Computer Science & Engineering Student at BGC Trust University Bangladesh
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => {
              const IconComponent = link.icon
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 hover:shadow-md ${link.color}`}
                  title={link.name}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-medium">{link.name}</span>
                </a>
              )
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
