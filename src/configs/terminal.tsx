import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hi, this is Jahnavi Saxena. I am a Computer Science (Cybersecurity) student
              at UPES, Dehradun. I build practical security tools, automate engineering
              workflows, and design secure architectures.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content:
          "Cybersecurity / Cloud Security / Blue Team / SOC / GRC / Secure Software Engineering"
      },
      {
        id: "about-goals",
        title: "goals.txt",
        type: "file",
        content:
          "I'm seeking security engineering, SOC analyst, and GRC internships and career opportunities where I can apply my skills in SIEM, Cloud Security, and automation."
      },
      {
        id: "about-skills",
        title: "skills.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div className="font-semibold text-green-300">Technical Skills:</div>
            <ul className="list-disc ml-6">
              <li>
                AI/Agentic Eng: Claude Code, GitHub Copilot, Prompt Eng, Eval/Guardrail
                Design
              </li>
              <li>
                Security & Automation: Python, REST APIs, Bash, Go, PowerShell, Java,
                Docker, Git/CI/CD
              </li>
              <li>Cloud Security: AWS (IAM, VPC, EC2, S3, CloudTrail, GuardDuty)</li>
              <li>
                SIEM & Monitoring: Splunk, ELK Stack, Windows Event Logs, Sysmon, Zeek,
                Suricata, Network Analysis
              </li>
              <li>GRC & Privacy: SOC 2 Type 2, ISO 27001 (Basics), NIST CSF</li>
              <li>DFIR: Incident Response Lifecycle, MITRE ATT&CK</li>
            </ul>
          </div>
        )
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:Jahnavi.119613@stu.upes.ac.in"
                target="_blank"
                rel="noreferrer"
              >
                Jahnavi.119613@stu.upes.ac.in
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/jahnavisaxena"
                target="_blank"
                rel="noreferrer"
              >
                @jahnavisaxena
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/jahnavi-saxena-1318a6286/"
                target="_blank"
                rel="noreferrer"
              >
                jahnavisaxena
              </a>
            </li>
            <li>
              TryHackMe:{" "}
              <a
                className="text-blue-300"
                href="https://tryhackme.com/p/jahnavisaxena"
                target="_blank"
                rel="noreferrer"
              >
                jahnavisaxena
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "threat-hunt",
    title: "threat-hunt.py",
    type: "file",
    content: (
      <div className="py-1 font-mono">
        <div>
          <span className="text-yellow-400">import</span> sysmon, alert_manager
        </div>
        <div className="mt-1">
          <span className="text-yellow-400">def</span>{" "}
          <span className="text-blue-400">monitor_traffic</span>():
        </div>
        <div>
          <span className="text-purple-400 ml-6">while</span>{" "}
          <span className="text-blue-400">True</span>:
        </div>
        <div>
          <span className="ml-12 text-zinc-400">log = sysmon.scan_events()</span>
        </div>
        <div>
          <span className="text-purple-400 ml-12">if</span> log.has_anomaly(){" "}
          <span className="text-purple-400">or</span> log.matches_mitre_tactic():
        </div>
        <div>
          <span className="ml-18 text-red-400">
            alert_manager.trigger_incident(log.severity)
          </span>
        </div>
        <div className="mt-1">monitor_traffic()</div>
      </div>
    )
  }
];

export default terminal;
