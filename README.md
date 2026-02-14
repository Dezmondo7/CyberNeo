# CyberCert & Lab-Tracker
Professional Certification & Security Laboratory Dashboard
This project is a high-performance, application designed to serve as a centralized hub for tracking professional cyber security certifications and documenting hands-on laboratory experiments. Built with React and Tailwind CSS, the application utilizes a "Zero-Trust" frontend architecture to manage and display complex career data and technical project outcomes.

# Core Functionality
Certification Lifecycle Management: A dedicated CRUD interface to monitor progress, expiry dates, and achievement status for industry-standard certifications (e.g., CompTIA, TryHackMe, Level 4 Cyber Security).

Lab Project Documentation: A structured repository for documenting home lab scenarios, including network topologies, attack/defense simulations (Active Directory, Kali Linux), and mitigation strategies.

Responsive Security UI: A utility-first design approach using Tailwind CSS, providing a clean, "SOC-inspired" dashboard optimized for both desktop audit reviews and mobile viewing.

# Key Technical Features
Dynamic Data Orchestration: Built a custom React-based CRUD engine that handles state transitions for various data types (certifications, labs, badges) without the need for a persistent database, demonstrating efficient client-side resource management.

Zero-Backend Architecture: By eliminating a traditional server-side, the application significantly reduces its attack surface (OWASP Top 10 mitigation), focusing on secure, client-only data handling.

Component-Driven Laboratory Profiles: Designed modular React components to display granular lab details, such as SIEM configuration logs, vulnerability findings, and threat analysis reports.

Interactive Metadata Filtering: Implemented high-speed filtering logic to sort certifications and labs by domain (Offensive, Defensive, Governance), allowing for a quick "at-a-glance" professional assessment.

# Tech Stack
Frontend: React (Vite-optimized for low-latency performance).

Styling: Tailwind CSS (Custom "Cyber" Theme with dark-mode optimization).

Icons & Assets: React Icons for standardized professional branding.

State Management: React Hooks (useState, useMemo) for efficient data sorting and CRUD logic.

# Application Screenshot
The site is live at https://serene-dieffenbachia-53d168.netlify.app/
<img width="800" alt="serene-dieffenbachia-53d168 netlify app_" src="https://github.com/user-attachments/assets/7a637366-01bc-4520-8c48-23b2f7f43fad" />

