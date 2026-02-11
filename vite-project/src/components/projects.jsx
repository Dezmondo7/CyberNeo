import { useState } from "react"
import { Github, ExternalLink, Shield, Terminal, Lock, Bug } from "lucide-react"
import { ProjectModal } from "../components/project-modal"
import enableRule from "../assets/enable.png"
import networkProtocol from "../assets/networkProtocol.png"

const projects = [
  {
    title: "VulnScanner Pro",
    description: "An automated vulnerability scanning tool that identifies common web application security flaws including SQL injection, XSS, and CSRF vulnerabilities.",
    tech: ["Python", "Selenium", "BeautifulSoup", "PostgreSQL"],
    github: "#",
    live: "#",
    icon: Bug,
    sections: [
      {
        heading: "Overview",
        text: "VulnScanner Pro is a comprehensive automated vulnerability scanning tool designed to help security professionals identify common web application security flaws. It performs deep crawling and testing against OWASP Top 10 vulnerabilities including SQL injection, XSS, and CSRF.",
        screenshot: null,
        screenshotLabel: "VulnScanner - Dashboard",
      },
      {
        heading: "How It Works",
        text: "The scanner uses a multi-threaded crawling engine built with Selenium to navigate web applications like a real user. It then injects payloads and analyzes responses to detect vulnerabilities. Results are stored in PostgreSQL for tracking and reporting over time.",
        screenshot: null,
        screenshotLabel: "VulnScanner - Scan Results",
      },
      {
        heading: "Key Features",
        text: "Features include customizable scan profiles, scheduled automated scans, PDF report generation, integration with Jira for ticket creation, and a risk scoring system that prioritizes findings by severity and exploitability.",
        screenshot: null,
        screenshotLabel: "VulnScanner - Report View",
      },
    ],
  },
  {
    title: "ThreatMap Dashboard",
    description: "Real-time threat intelligence dashboard that aggregates data from multiple sources and visualizes attack patterns and threat actor activities.",
    tech: ["React", "D3.js", "Node.js", "Elasticsearch"],
    github: "#",
    live: "#",
    icon: Shield,
    sections: [
      {
        heading: "Overview",
        text: "ThreatMap Dashboard provides real-time visibility into the global threat landscape. It aggregates intelligence feeds from over 20 sources and presents actionable insights through interactive maps, timelines, and relationship graphs.",
        screenshot: null,
        screenshotLabel: "ThreatMap - Global View",
      },
      {
        heading: "Data Pipeline",
        text: "The backend ingests threat data using Node.js workers that normalize and enrich indicators of compromise (IOCs). Elasticsearch powers the search and analytics engine, enabling sub-second queries across millions of threat events.",
        screenshot: null,
        screenshotLabel: "ThreatMap - Data Flow",
      },
      {
        heading: "Visualization",
        text: "D3.js powers the interactive visualizations including a geo-mapped attack surface, threat actor relationship graphs, and temporal attack pattern analysis. Users can drill down into any data point for detailed threat intelligence.",
        screenshot: null,
        screenshotLabel: "ThreatMap - Analytics",
      },
    ],
  },
  {
    title: "Active Directory Attack & Defence lab",
    description: "Overview here TBA",
    tech: ["Active Directory", "Winsows Server 2022", "Windows 10", "Kali Linux", "WMWare Worksation"],
    github: "#",
    live: "#",
    icon: Lock,
    sections: [
      {
        heading: "Setting up the OS Environment",
        text: "I set up three machines within the VMWare workstation using ISO's including a Windows 10 machine installed from a previous project. That left installing Windows Server 2022 as the base for Active Directory and Kali Linux as the attack machine. They required custom installations and I chose the option to install the operating system later to avoid licensing issues, specifically for the Windows Server ISO. The next step is to make sure that each machine is able to communicate with each. This was done by making sure that three machines are on the same network type. Using Windows 10 machine I used 'ipconfig' to check the IP address. On Kali I issued the command 'ip a' to gather the IP and then test the connection between the two machines. I ran 'ping [KALI IP]' to test the connection and the request timed out. This meant that somewhere within the connection the ping was sending requests but they were not being received. To fix this I opened Windows Defender Firewall and Enabled Rule - File and Printer Sharing (Echo Request -ICMPv4-In). I did the same for the Windows Server. Ping requests from each machine both returned successful replies.",
        screenshot: enableRule,
        screenshotLabel: "Enable rule within Windows Firewall",
      },
      {
        heading: "Network Configuration for a Windows Domain Controller",
        text: "Once network connectivity between the lab machines was confirmed, I began configuring the Windows Server 2022 Domain Controller. The first step was renaming the server to DC01 via Server Manager, followed by a reboot to apply the change. Naming the server clearly helps identify its role within the environment. Next I configured a static IP Address through Control Panel -> Network and Internet -> Network and Sharing Center -> Change adapter settings, Ethernet -> Properties -> Internet Protocol Version 4 (IPv4) -> Properties and set the addresses to the following: IP address: [] Subnet mask: [] Default gateway: [] Preferred DNS:[] The IP Address must be a static address so that it is the fixed identity of the Domain Controller and is the authentication authority for the domain. It is predictable self reliant and can be discovered by other machines and you must ensure that it is a private internal network. This IP ensures that domains can trust other domains, kerberos (port 88), LDAP (port 389), DNS (53) and SMB (445) depend on a consistent and predictable address. If a server provides a service then it must have a static IP, if the IP were dynamic, authentication, and directory services could fail. The Subnet Mask defines who is considered 'local' on the network meaning no routing between two lab machines. The preferred DNS was configured to point to the Domain controller itself, ensuring proper registration of critical Active Directory SRV records such as _Idap._tcp & _kerberos._tcp. Active Directory heavily relies on DNS records _ldap.tcp _kerberos._tcp & Domain SRV records. By pointing DNS to itself AD Services register correctly, DC can resolve its own domain and authentication does not break.The subnet mask defines which hosts are considered local to the network. IP = who am I. Subnet = who is local. Default Gateway = how do I leave. DNS = how I find names. Active Directory is DNS + authentication. To validate DNS functionality, I used [nslookup lab.local] & [ping lab.local]. Both commands correctly resolved to the Domain Controller's IP address. Firstly, I joined the Windows 10 client to the machine by navigating to System Properties → Advanced System Settings → Computer Name → Change → Member of → Domain. I entered lab.local and provided the Domain Administrator credentials. After rebooting, the Windows 10 machine successfully authenticated against the Domain Controller. This confirmed that DNS, authentication, and domain services were functioning correctly.",
        screenshot: networkProtocol,
        screenshotLabel: "Windows Network Configuration",
      },
      {
        heading: "Active Directory ",
        text: "CryptoVault continuously monitors known breach databases using k-anonymity to check compromised credentials without exposing user data. Users receive instant alerts if any stored credentials appear in new data breaches.",
        screenshot: null,
        screenshotLabel: "CryptoVault - Alerts",
      },
    ],
  },
  {
    title: "NetRecon",
    description: "Network reconnaissance toolkit for authorized penetration testing. Includes port scanning, service enumeration, and OS fingerprinting.",
    tech: ["Go", "Nmap", "Docker", "gRPC"],
    github: "#",
    live: "#",
    icon: Terminal,
     sections: [
      {
        heading: "Overview",
        text: "NetRecon is a high-performance network reconnaissance toolkit designed for authorized penetration testers. Written in Go for speed and concurrency, it combines multiple scanning techniques into a unified workflow with structured output.",
        screenshot: null,
        screenshotLabel: "NetRecon - Terminal Output",
      },
      {
        heading: "Scanning Engine",
        text: "The scanning engine leverages Go's goroutines for massively parallel port scanning and service enumeration. It integrates with Nmap for advanced OS fingerprinting and supports custom NSE scripts for targeted service detection.",
        screenshot: null,
        screenshotLabel: "NetRecon - Scan Config",
      },
      {
        heading: "Deployment & Integration",
        text: "NetRecon ships as a Docker container for easy deployment and reproducible environments. It exposes a gRPC API for integration with other tools and CI/CD pipelines, enabling automated security testing in DevSecOps workflows.",
        screenshot: null,
        screenshotLabel: "NetRecon - Docker Setup",
      },
    ],
  },
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="px-6 lg:px-16 py-24 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="h-px w-12 bg-primary" />
          <span className="text-primary font-mono text-sm tracking-wider">PROJECTS</span>
          <div className="h-px w-12 bg-primary" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setSelectedProject(project)}
              className="group p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors text-left cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <project.icon className="w-10 h-10 text-primary" />
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground group-hover:text-primary transition-colors">
                    <Github className="w-5 h-5" />
                  </span>
                  <span className="text-muted-foreground group-hover:text-primary transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="text-xs font-mono text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
