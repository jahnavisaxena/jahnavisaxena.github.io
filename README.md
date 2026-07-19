# Jahnavi's Portfolio

My portfolio website simulating macOS's GUI, showcasing my work in cybersecurity and agentic AI: https://jahnavisaxena.github.io/playground-macos/

Built on top of the excellent [playground-macos](https://github.com/Renovamen/playground-macos) template by [Xiaohan Zou](https://github.com/Renovamen), personalized with my own profile, projects, and content.

Powered by [React](https://reactjs.org/) + [Zustand](https://zustand-demo.pmnd.rs/) + [UnoCSS](https://uno.antfu.me/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vitejs.dev/).

![light mode](./public/screenshots/light.png)
![dark mode](./public/screenshots/dark.png)

&nbsp;

## About Me

I'm Jahnavi Saxena, a B.Tech Computer Science (Cybersecurity) student at UPES, interested in Blue Team, Cloud Security, SOC, GRC, and Secure Software Engineering. I've interned as an AI Engineer at Xebia and a Cybersecurity Analyst at Infera Technologies, and I build practical security tooling and agentic AI projects.

- **GitHub:** [jahnavisaxena](https://github.com/jahnavisaxena)
- **LinkedIn:** [jahnavi-saxena](https://www.linkedin.com/in/jahnavi-saxena-1318a6286/)
- **TryHackMe:** [jahnavisaxena](https://tryhackme.com/p/jahnavisaxena)
- **Email:** Jahnavi.119613@stu.upes.ac.in

&nbsp;

## Featured Projects

- **Zero Trust IAM for AI Agents** — JWT-based identity registry with an OPA policy engine, just-in-time access, and tamper-evident audit logging.
- **Kestrel** — AI agent vulnerability scanner combining SAST & DAST, mapped to OWASP Agentic AI risks, with a Celery task queue and React dashboard.
- **SOC Home Lab** — ELK stack + Sysmon + Zeek + Suricata setup for log analysis and detection, mapped to MITRE ATT&CK.
- **Securing Edge-Cloud Computing in 5G** — Zero Trust framework with ML-based anomaly detection for 5G edge-cloud environments.

Explore each project in the portfolio's Bear notes app, or check out the repos directly on my [GitHub](https://github.com/jahnavisaxena).

&nbsp;

## Usage

Clone the repo and install dependencies:

```bash
npm install
```

Start dev server (with hot reloading):

```bash
npm run dev
```

Build for production with minification to the `dist` folder:

```bash
npm run build
```

&nbsp;

## Deployment

This site deploys automatically to GitHub Pages via GitHub Actions (`.github/workflows/deploy.yaml`) on every push to `main`. Live at: https://jahnavisaxena.github.io/playground-macos/

&nbsp;

## Credits

This portfolio is a personalized fork of [Renovamen/playground-macos](https://github.com/Renovamen/playground-macos) — huge thanks to the original author for the beautiful macOS simulation.

- macOS
  - [Monterey](https://www.apple.com/macos/monterey/)
  - [Catalina](https://www.apple.com/bw/macos/catalina/)
- [macOS Icon Gallery](https://www.macosicongallery.com/)
- [sindresorhus/file-icon-cli](https://github.com/sindresorhus/file-icon-cli)
- [vivek9patel.github.io](https://github.com/vivek9patel/vivek9patel.github.io)

&nbsp;

## License

[MIT](MIT)
