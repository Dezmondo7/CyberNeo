import { useState } from "react"
import { Github, ExternalLink, Shield, Terminal, Lock, Bug, Cloud } from "lucide-react"
import { ProjectModal } from "../components/project-modal"
import enableRule from "../assets/enable.png"
import networkProtocol from "../assets/networkProtocol.png"
import user from "../assets/user.png"
import john from "../assets/john-loggin.png"
import domain from "../assets/domain.png"
import reconissance from "../assets/reconissance1.png"
import smb from "../assets/attacksmbclient.png"
import cyberplanning from "../assets/cyberplanning.png"
import cyberresearch from "../assets/cyberresearch.png"
import aiclip from "../assets/aiclip.mp4"
import telematicLogging from "../assets/telematiclogging.png"
import aeslog from "../assets/postgreSQLaes.png"
import postgreSQL from "../assets/postgreslogs2.png"
import telematic2 from "../assets/telematicentry2.png"
import loadingstate from "../assets/loadingstate.png"
import aireturned from "../assets/returnedresponse.png"
import structuredfile from "../assets/filstructure.png"



const projects = [
  {
    title: "Cyber Planning Research Paper",
    description: "Technical documentation outlining hardware and software analysis. The research focuses on quantative performance modeling, calculating exact CPU cycle allocation for dynamic web requests. ",
    tech: ["SoC Architecture", "Quad-core", "CPU", "PCI-DSS"],
    github: "https://github.com/Dezmondo7/Technical-Research-Papers",
    live: "#",
    icon: Bug,
    sections: [
      {
        heading: "Overview",
        text: "This repository contains a deep-dive technical planning document centered on the ARM-based hardware architecture (Raspberry Pi 4B) and software powering a LAMP stack. The full paper can be accessed via the source in the GitHub link above.",
        screenshot: cyberplanning,
        screenshotLabel: "VulnScanner - Scan Results",
      },
    ],
  },
  {
    title: "Cyber LAMP Stack Research Paper",
    description: "  Technical analysis of LAMP stack including trade off between open-source and proprietary infrastructure and the secure implications of web-scale deployments.",
    tech: ["Linux", "Apache", "MySQL", "PHP"],
    github: "https://github.com/Dezmondo7/Technical-Research-Papers",
    live: "#",
    icon: Shield,
    sections: [
      {
        heading: "Overview",
        text: "This repository contains a comprehensive technical analysis of the LAMP stack (Linux, Apache, MySQL, PHP). The research explores the underlying software components, evaluates the trade-offs between open-source and proprietary infrastructure (e.g., Linux vs. Windows, MySQL vs. Oracle), and analyzes the security implications of web-scale deployments. The full paper can be accessed via source in the GitHub link above.",
        screenshot: cyberresearch,
        screenshotLabel: "Cyber Security Research Paper",
      },
    ],
  },
  {
    title: "Active Directory Domain Controller Enumeration",
    description: "Simulated real-world Active Directory attacks following enumeration to analyse domain weaknesses and security gaps.",
    tech: ["VMWare", "Active Directory", "NMap", "Kali Linux",],
    github: "https://github.com/Dezmondo7/ActiveDirectoryAttack",
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
        heading: "Active Directory Organisational Unit ",
        text: "I structured Organizational Units (OUs) and domain user accounts within Active Directory to simulate a realistic enterprise environment and prepare for authentication and security testing. On the Domain Controller I opened Server Manager and navigated to Tools -> Active Directory Users and Computers and expanded to domain lab.local which opened the main directory management interface. I then created an Organizational Unit (OU) for better structure management. Steps right click lab.local select New -> Organizational Unit and named the OU User. The reason to use an OU is that it enables Group Policy targeting, allows logical separation of objects, improves manageability and mimics real enterprise structure. ",
        screenshot: user,
        screenshotLabel: "Organisation Unit - User",
      },
      {
        heading: "Weak Password Simulation",
        text: "The next step was to create user accounts with weak passwords. This was done on deliberately to be able to simulate attacks on these later on. Steps, right click New -> User -> First Name -> Last Name -> next. Password configuration -> uncheck User must change password at next logon (for the purpose of this simulation only). I then tested the login on the windows machine by signing out and logging with the details for the user as shown on screen below. ",
        screenshot: john,
        screenshotLabel: "Organisation Unit - User",
      },
      {
        heading: "Joining Windows 10 to DC",
        text: "The reason for joining the Windows 10 machine to the Domain is so that the machine can trust and authenticate against the Domain Controller instead of only itself. This allows Users to login with credentials, Group Policy applies, Kerberos authentication is used and the machine becomes part of the domain security boundary. Behind the scenes when you enter Member of -> Domain -> Lab.local Windows does several things. It creates a Computer Account in Active Directory which looks like this [cn=win10$]. This $ means computer account and it generates its own password, authenticates to the DC like a user would and is stored in AD, effectively the machines are identities too. A secure trust relationship is established and Windows 10 and the DC share a machine password, a secure channel and Kerberos trust, this allows secure logon requests, ticket granting and policy enforcement. Previously the user logged in -> Windows checks local SAM database. The flow no goes User logs in -> Windows contacts DC -> Kerberos ticket issued -> User authenticated centrally.",
        screenshot: domain,
        screenshotLabel: "Organisation Unit - User",
      },
      {
        heading: "Service Enumeration",
        text: "After confirming the connection between Kali and the Domain Controller using [ip a] and using [ping IP ADDRESS] it is time to move on to the first attack, service enumeration. The goal is to identify what services the Domain Controller exposes and what information I can gather. To do this I used Nmap and ran a scan using [sudo nmap -sS -T4 -Pn IP ADRESS], -sS stealth TCP scan, -T4 faster packet sending, -Pn assumes host is up skip ICMP, this scan will show open ports, service names and anything labelled Microsoft Windows Active Directory. The Nmap scan has given me some valuable information. It shows open ports available, port 53 DNS domain naming zone information, 88 Kerberos ticket based auth (roasting attacks), 135 RPC service enumeration, 445 SMB shares (user enumeration and relay attacks), 389 LDAP AD User, group, computer objects & 636 Secure LDAP (still enumerable).",
        screenshot: reconissance,
        screenshotLabel: "Organisation Unit - User",
      },
      {
        heading: "Anonymous SMB Enumeration",
        text: "Phase two of the attack was to commit enumeration of the open SMB port using [smbclient -L //IP ADRESS] -L -> list shares, -N -> no password (anonymous). By running this command I am looking for a response from Domain Controller to see if it accepts anonymous SMB sessions. The response confirms unauthenticated SMB access (null session) was permitted on the Domain Controller, confirming the ability to interact with SMB services without credentials.",
        screenshot:smb,
        screenshotLabel: "SMB Enumeration",
      }     
    ],
  },
  {
    title: "Secure OpenAI Chat GPT4.0 Implementation",
    description: "Secure API Implementation. Engineered a secure 'handshake' between a front-end interface and the OpenAI API integrating asynchronous data flow from user input, loading and response.",
    tech: ["React", "GPT-4", "API", "Express.js"],
    github: "https://github.com/Dezmondo7/KreativeWeb3D/blob/main/src/components/AiCreative.jsx",
    live: "#",
    icon: Cloud,
     sections: [
      {
        heading: "Secure LLM Integration",
        text: "This project implements a production-grade integration with GPT-4o, prioritizing a 'Security-First' architectural pattern. By engineering a custom Node.js/Express backend proxy, I eliminated the risk of client-side credential exposure, ensuring all API interactions are brokered through a secure server-side environment. The system utilizes environment variable management for secret isolation and implements defensive measures against Prompt Injection. The screenshot below shows the loading state which masks a server side request routed through the Express.js middleware, ensuring the client-side never has direct exposure to the OpenAI endpoint.",
        screenshot: loadingstate,
        screenshotLabel: "OpenAI loading repsonse via Express.js middleware",
      },
         {
        heading: "Credential Isolation & Data Sanitization",
        text: "By creating a secure environment and storing secret keys strictly as server-side variables it mitigates the risk of credential harvesting from the browser's network tab. Before the response is rendered data is sanitized ensuring that the AI's output adheres to the application's structured schema without introducing cross-site scripting (XSS) risks.",
        screenshot: aireturned,
        screenshotLabel: "OpenAI loading repsonse via Express.js middleware",
      },
    ],
  },
    {
    title: "Secure Front-End-to-Cloud Data Pipeline ",
    description: "Secure data pipleine from front-end telematic data capture to proxy server and stored in Supabase. Zero trust architecture ensured database remains shielded from public exposure.",
    tech: ["React", "Express.js", "Supabase", "Row-Level-Security"],
    github: "",
    live: "#",
    icon: Cloud,
     sections: [
      {
        heading: "Front-End Telematic Data Capture and Cloud Server Logging",
        text: "Architected and engineered a resilient and secure database proxy server using Express.js for real-time data handling. Focused on end-to-end encryption and the implementation of Row Level Security (RLS) policies with the use of a cloud server (Render) to ensure that even if an API key is intercepted, the data remains scoped and protected. Below is an image of Live user interactions stored as 'Mouse moves' which are then logged via the Express.js server.",
        screenshot: telematicLogging,
        screenshotLabel: "Front-End Telemtic data logged via cloud server",
      },
        {
        heading: "Zero Trust Database Architecture",
        text: "Engineered a high-concurerncy PostgreSQL database via Supabase, architected to recieve real-time telemetry from an Express.js proxy server. The schema is optmimized for high velocity data streams capabale of handling asynchronous requests while maintaining data integrity across 50,000 records. By engineering a client side proxy this ensures that the database remained shielded from direct public exposure, upholding a zero trust architecture.",
        screenshot: telematic2,
        screenshotLabel: "Supabse data logged via cloud server",
      },
    ],
  },
    {
    title: "Supabase Log Analysis",
    description: "To validate the integrity of the data pipeline, I conducted a comprehensive security audit of the Supabase logs.",
    tech: ["Supabase", "SSL", "AES", "SHA-256"],
    github: "",
    live: "#",
    icon: Cloud,
     sections: [
      {
        heading: "AES Encryption Confirmed",
        text: "The below log shows SSL enable (prtocol=TLSv1.3, cipher=TLS_AES_256_GCM_SHA384). This ensures that the data is using 256-bit AES encryption which prevents 'Man-in-the-Middle' (MITM) attacks during data transit. ",
        screenshot: aeslog,
        screenshotLabel: "Telematic Data Logs in Supabase",
      },
        {
        heading: "SHA-256 Authentication",
        text: "Supabase log below outlines (method=scram-sha-256) confirmation of a robust password hashing that uses salted, challenge-response authentication which mitigates against packet sniffing and replay attacks.",
        screenshot: postgreSQL,
        screenshotLabel: "Detailed Log Image in Supabase",
      },
    ],
  },
    {
    title: "Credential Leak Remediation & Environment Hardening ",
    description: "Publishable API credentials were exposed, Row-Level-Security provided a layer of security but in order to harden the environment the follwing steps were taken.",
    tech: ["React", "API", "Node.js", "Row-Level-Security"],
    github: "",
    live: "#",
    icon: Terminal,
     sections: [
      {
        heading: "Containment & Isolation",
        text: "Moved all API keys from the application logic into a root-level .env file. Revoked the exposed legacy JWT keys in the Supabase and EmailJS dashboards. Generated new Publishable (client-side) and Secret (server-side) keys using the modern sb_ prefix format, ensuring a clean break from the compromised credentials. Verified the frontend used the Vite-specific import.meta.env syntax, while the backend utilized Node.js process.env. Confirmed that the 'Kreative' dashboard could successfully log events and interact with the database using the new secure configuration. The screenshot depicts a clean file structure with front-end and back-end sensitive API Keys and database strings stored in .env files with .gitignore ensuring files stay hidden and unpublished mitigating the risk of stolen credentials. Having the variables stored this way is a key principle of Cloud-Native Security.  ",
        screenshot: structuredfile,
        screenshotLabel: "VS Code File Structure for Web Application",
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
