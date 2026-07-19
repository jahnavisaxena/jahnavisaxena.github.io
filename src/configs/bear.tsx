import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-ri:user-line",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-ri:user-line",
        excerpt: "Who I am, my journey, and my passion for cybersecurity..."
      },
      {
        id: "education",
        title: "Education",
        file: "markdown/education.md",
        icon: "i-ri:book-open-line",
        excerpt: "Academic background and education history..."
      },
      {
        id: "experience",
        title: "Experience",
        file: "markdown/experience.md",
        icon: "i-ri:briefcase-line",
        excerpt: "Professional internships, leadership roles, and volunteer work..."
      },
      {
        id: "skills",
        title: "Skills",
        file: "markdown/skills.md",
        icon: "i-ri:tools-line",
        excerpt: "My technical skills categorized by domain..."
      },
      {
        id: "achievements",
        title: "Achievements",
        file: "markdown/achievements.md",
        icon: "i-ri:award-line",
        excerpt: "Hackathons, certifications, and awards..."
      },
      {
        id: "leetcode-stats",
        title: "LeetCode Stats",
        file: "markdown/leetcode-stats.md",
        icon: "i-ri:code-box-line",
        excerpt: "My LeetCode solving progress and statistics..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: "i-octicon:browser",
        excerpt: "Technical details of how this portfolio simulator is built..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "zero-trust-iam",
        title: "Zero Trust IAM",
        file: "markdown/projects/zero-trust-iam.md",
        icon: "i-ri:shield-keyhole-line",
        excerpt:
          "Zero Trust identity registry and just-in-time access broker for AI agents.",
        link: "https://github.com/jahnavisaxena/Zero-Trust-AI-Agent"
      },
      {
        id: "kestrel",
        title: "Kestrel Scanner",
        file: "markdown/projects/kestrel.md",
        icon: "i-ri:scan-2-line",
        excerpt:
          "Full-stack AI agent vulnerability scanner integrating SAST and DAST checks.",
        link: "https://github.com/jahnavisaxena/kestrel-agent-scanner"
      },
      {
        id: "soc-home-lab",
        title: "SOC Home Lab",
        file: "markdown/projects/soc-home-lab.md",
        icon: "i-ri:terminal-box-line",
        excerpt: "Self-hosted SOC lab with ELK-based SIEM, Zeek, and Suricata.",
        link: "https://github.com/jahnavisaxena/SIEM-home-lab-project"
      },
      {
        id: "securing-5g",
        title: "5G Cloud Security",
        file: "markdown/projects/securing-5g.md",
        icon: "i-ri:signal-tower-line",
        excerpt: "Research paper on multi-layered zero-trust security framework in 5G.",
        link: "https://lnkd.in/gNhMHund"
      }
    ]
  }
];

export default bear;
