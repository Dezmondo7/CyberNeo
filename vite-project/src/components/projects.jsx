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
    description: "DAY 1 Creating the environment. I set up three machines within the VMWare workstation environment, I already have a Windows 10 machine installed from a previous project. That left me with installing Windows Server 2022 as the base for Active Directory and Kali Linux as the attack machine. Both ISO's were installed without too much trouble. For both I had to do a custom installation and chose the option to install the operating system later to avoid licensing issues, specifically for the Windows Server ISO. The next step is to make sure that each machine is able to communicate with each. This was done by making sure that three machines are on the same network type. Once on the Windows 10 machine I used 'ipconfig' to check the IP address. On Klai I issued the command 'ip a' to gather the IP and then test the connection between the two machines. I ran 'ping [KALI IP]' to test the connection and the request timed out. This meant that somewhere along the lines the ping was sending requests but they were not being recieved. To fix this I opened Windows Defender Firewall and Enabled Rule the File and Printer Sharing (Echo Request -ICMPv4-In). I did the same for the Windows Server. Then I moved on to ACtive Directory, the fist step is to open Server Manager and chage the name of the computer which I did to DC01 and then followed the instrcutions to reboot. The next step is to set a static IP via the Control Panel. Network and Internet -> Network and Sharing Center -> Chnage adapter settings, Ethernet -> Properties -> Internet Protocol Version 4 (IPv4) -> Properties and set the addresses to the following: IP address: [] Subnet mask: [] Default gateway: [] Preferred DNS:[] The IP Address must be a static address so that it is the fixed identity of the Domain Controller and is the authentication authoritory for the domain. It is predicatble self reliant and can be discoered by other machines and you must ensure that it is a private internal network. This IP ensures that other domains can join, kerberous, LDAP will not break and attack and detections will not fail. If a server provides a service then it must have a static IP. The Subnet Mask defines who is considerred 'local' on the network meanding no routing between two lab machines. Default Gateway and is for traffic that is not on the local network. Preferred DNS 127.0.0.1. creates a loopback address so the computer can talk to itself, this is useful as the DC uses the itself for the DNS. Active Directory heavily relies on DNS records _ldap.tcp _kerberos._tcp & Domain SRV records. By pointing DNS to itself AD Services register correctly, DC can resolve its own domain and authentication does not break. IP = who am I. Subnet = who is local. Default Gateway = how do I leave. DNS = how I find names. Active Directory is DNS + authentication. After confirming that the network is working and packets are delivered I started setting up Active Directory within Server Manager. I clicked Add Roles and Features, chose DC01 and then selected Active Directory Domain Services and installed. Before joining the domain, I validated Layer 3 connectivity and DNS resolution between the client and the Domain Controller, ensuring the client could resolve domain services correctly. Verified successful domain join via System Properties and command‑line validation.",
    tech: ["Rust", "AES-256", "SQLite", "WebAssembly"],
    github: "#",
    live: "#",
    icon: Lock,
    sections: [
      {
        heading: "Setting up the Environment",
        text: "I set up three machines within the VMWare workstation using ISO's including a Windows 10 machine installed from a previous project. That left installing Windows Server 2022 as the base for Active Directory and Kali Linux as the attack machine. They required custom installations and I chose the option to install the operating system later to avoid licensing issues, specifically for the Windoews Server ISO. The next step is to check that each machine is able to communicate with each other. This was done by making sure that three machines are on the same network type. Using Windows 10 machine I used 'ipconfig' to check the IP address. On Kali I issued the command 'ip a' to gather the IP and then test the connection between the two machines. I ran 'ping [KALI IP]' to test the connection and the request timed out. This meant that somewhere within the connection the ping was sending requests but they were not being received. To fix this I opened Windows Defender Firewall and Enabled Rule - File and Printer Sharing (Echo Request -ICMPv4-In). I did the same for the Windows Server. Then I moved on to Active Directory, the fist step is to open Server Manager and chage the name of the computer which I did to DC01 and then followed the instructions to reboot. The next step is to set a static IP via the Control Panel. Network and Internet -> Network and Sharing Center -> Chnage adapter settings, Ethernet -> Properties -> Internet Protocol Version 4 (IPv4) -> Properties and set the addresses to the following: IP address: [] Subnet mask: [] Default gateway: [] Preferred DNS:[] The IP Address must be a static address so that it is the fixed identity of the Domain Controller and is the authentication authority for the domain. It is predictable self reliant and can be discoered by other machines and you must ensure that it is a private internal network. This IP ensures that other domains can join, kerberous, LDAP will not break and attack and detections will not fail. If a server provides a service then it must have a static IP. The Subnet Mask defines who is considered 'local' on the network meaning no routing between two lab machines. Default Gateway and is for traffic that is not on the local network. Preferred DNS 127.0.0.1. creates a loopback address so the computer can talk to itself, this is useful as the DC uses the itself for the DNS. Active Directory heavily relies on DNS records _ldap.tcp _kerberos._tcp & Domain SRV records. By pointing DNS to itself AD Services register correctly, DC can resolve its own domain and authentication does not break. IP = who am I. Subnet = who is local. Default Gateway = how do I leave. DNS = how I find names. Active Directory is DNS + authentication. After confirming that the network is working and packets are delivered I started setting up Active Directory within Server Manager. I clicked Add Roles and Features, chose DC01 and then selected Active Directory Domain Services and installed. Before joining the domain, I validated Layer 3 connectivity and DNS resolution between the client and the Domain Controller, ensuring the client could resolve domain services correctly. Verified successful domain join via System Properties and command‑line validation.",
        screenshot: enableRule,
        screenshotLabel: "enable rule within Windows Firewall",
      },
      {
        heading: "Network Configuration for a Windows Domain Controller",
        text: "The fist step is to open Server Manager and change the name of the computer which I did to DC01 and then followed the instrcutions to reboot. The next step is to set a static IP via the Control Panel. Network and Internet -> Network and Sharing Center -> Chnage adapter settings, Ethernet -> Properties -> Internet Protocol Version 4 (IPv4) -> Properties and set the addresses to the following: IP address: [] Subnet mask: [] Default gateway: [] Preferred DNS:[] The IP Address must be a static address so that it is the fixed identity of the Domain Controller and is the authentication authoritory for the domain. It is predicatble self reliant and can be discovered by other machines and you must ensure that it is a private internal network. This IP ensures that other domains can join, kerberos, LDAP will not break and attack and detections will not fail. If a server provides a service then it must have a static IP. The Subnet Mask defines who is considerred 'local' on the network meanding no routing between two lab machines. Default Gateway and is for traffic that is not on the local network. Preferred DNS 127.0.0.1. creates a loopback address so the computer can talk to itself, this is useful as the DC uses the itself for the DNS. Active Directory heavily relies on DNS records _ldap.tcp _kerberos._tcp & Domain SRV records. By pointing DNS to itself AD Services register correctly, DC can resolve its own domain and authentication does not break. IP = who am I. Subnet = who is local. Default Gateway = how do I leave. DNS = how I find names. Active Directory is DNS + authentication",
        screenshot: networkProtocol,
        screenshotLabel: "Windows Network Configuration",
      },
      {
        heading: "Breach Monitoring",
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
