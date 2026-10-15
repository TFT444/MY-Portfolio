export const profile = {
  name: "Tanvir Farhad",
  title: "Security Engineer",
  tagline: "Building cloud posture, detection engineering, and AI threat tools",
  location: "London, UK",
  email: "tanvirfarhad007@gmail.com",
  github: "https://github.com/TFT444",
  linkedin: "https://linkedin.com/in/tanvir-farhad-466940307",
  bio: "BSc Computing Systems student at Ulster University London. #2 contributor on OpenShield (OWASP-listed Azure CSPM). Founder of RetailShield. Building open-source security tools across cloud posture, detection engineering, and AI threat analysis.",
};

export const officialProjects = [
  {
    name: "OpenShield",
    org: "OWASP",
    role: "AI & Scanner Rules Lead · #2 Contributor",
    description:
      "Open-source Azure Cloud Security Posture Management platform. 144 scanner rules across storage, network, identity, AKS, Key Vault, and post-quantum cryptography. Findings mapped to CIS, NIST CSF, ISO 27001, and SOC 2.",
    stats: ["53 commits", "25+ merged PRs", "51 scanner rules authored", "OWASP-listed"],
    tags: ["Python", "Azure", "CSPM", "OWASP", "CIS", "NIST", "ISO 27001"],
    github: "https://github.com/OWASP/openshield",
    live: "https://openshield-gules.vercel.app",
    highlight: true,
  },
  {
    name: "DUSK",
    org: "ShieldTech-Ltd",
    role: "Founder & Lead Engineer",
    description:
      "Vendor-neutral runtime behavioural detection and policy gating for autonomous AI agent actions. Detects network sweeps mapped to MITRE ATT&CK T1046. Full CI security gating on every commit.",
    stats: ["Apache-2.0", "MITRE ATT&CK T1046", "Full CI gating", "Open-source"],
    tags: ["Python", "AI Security", "MITRE ATT&CK", "Runtime Security", "Open-source"],
    github: "https://github.com/ShieldTech-Ltd/DUSK",
    highlight: true,
  },
  {
    name: "RetailShield",
    org: "TFT444",
    role: "Founder",
    description:
      "Microsoft Sentinel detection and response content pack for UK retail. 19 KQL detection rules covering phishing, POS fraud, ransomware, credential stuffing, and data exfiltration. 8 automated SOAR playbooks. Deployed to a live workspace with a published DOI.",
    stats: ["19 KQL rules", "8 SOAR playbooks", "22.5 min MTTD", "DOI published"],
    tags: ["Microsoft Sentinel", "KQL", "SOAR", "Detection Engineering", "Azure Logic Apps"],
    github: "https://github.com/TFT444/RetailShield",
    doi: "https://doi.org/10.5281/zenodo.20608262",
    highlight: true,
  },
];

export const labProjects = [
  {
    name: "Active Directory Attack & Detection Lab",
    description:
      "Executed 5 real adversary techniques (password spraying, Kerberoasting, NTDS hash dump, SMB lateral movement, pass-the-hash) in an isolated lab, then built the detection to catch every one. 4,354+ events captured via Sysmon into Splunk.",
    stats: ["5 ATT&CK techniques", "4,354+ events", "Splunk SIEM", "Kali Linux"],
    tags: ["Active Directory", "Splunk", "MITRE ATT&CK", "Kerberoasting", "Impacket"],
    github: "https://github.com/TFT444/Active-Directory-Attack-Detection-Lab",
  },
  {
    name: "SOC Simulation: Phishing Threat Detection",
    description:
      "Triaged 36 live Microsoft Sentinel alerts end to end across phishing, credential abuse, and lateral movement scenarios. Achieved 87% true-positive and 96% false-positive identification.",
    stats: ["36 alerts triaged", "87% true-positive rate", "96% false-positive rate"],
    tags: ["Microsoft Sentinel", "KQL", "Incident Response", "TryHackMe"],
    github: "https://github.com/TFT444/SOC-Simulation-Phishing-Threat-Detection-TryHackMe-Microsoft-Sentinel-",
  },
  {
    name: "Sentinel SOAR Automation",
    description:
      "Automated SOAR enrichment pipeline triggered by Microsoft Sentinel detections. Automates triage, enrichment, and containment workflows.",
    tags: ["Microsoft Sentinel", "SOAR", "Azure Logic Apps", "Automation"],
    github: "https://github.com/TFT444/sentinel-soar-automation",
  },
  {
    name: "Azure Sentinel Threat Intel Detection",
    description:
      "Built a Microsoft Sentinel SIEM lab to detect suspicious Azure Storage activity using KQL, Threat Intelligence indicators, and MITRE ATT&CK mapping with automated incident response.",
    tags: ["Microsoft Sentinel", "KQL", "Threat Intelligence", "MITRE ATT&CK"],
    github: "https://github.com/TFT444/azure-sentinel-threat-intel-detection",
  },
  {
    name: "Azure Sentinel SIEM Lab",
    description:
      "End-to-end threat detection and response lab using Microsoft Sentinel as the primary SIEM. Covers log ingestion, alert rules, and incident investigation.",
    tags: ["Microsoft Sentinel", "SIEM", "Azure", "Detection Engineering"],
    github: "https://github.com/TFT444/azure-sentinel-siem-lab",
  },
  {
    name: "AWS SIEM Lab: Cloud Threat Detection",
    description:
      "Hands-on AWS SIEM project detecting suspicious EC2 activity and security misconfigurations using CloudTrail and CloudWatch Logs Insights.",
    tags: ["AWS", "CloudTrail", "CloudWatch", "SIEM", "EC2"],
    github: "https://github.com/TFT444/AWS-SIEM-Lab-Cloud-Threat-Detection-Monitoring",
  },
  {
    name: "AWS Cloud SOC Lab",
    description:
      "Detection of suspicious activity using AWS CloudTrail. Simulates real SOC workflows for cloud-native threat hunting.",
    tags: ["AWS", "CloudTrail", "SOC", "Threat Hunting"],
    github: "https://github.com/TFT444/aws-cloud-soc-lab",
  },
  {
    name: "Lumma Stealer Traffic Analysis",
    description:
      "Real-world SOC investigation using Wireshark to analyse malicious network traffic associated with Lumma Stealer malware. Full PCAP analysis and IOC extraction.",
    tags: ["Wireshark", "PCAP", "Malware Analysis", "SOC", "Network Forensics"],
    github: "https://github.com/TFT444/lumma-stealer-traffic-analysis",
  },
  {
    name: "Malware Traffic Analysis: NetSupport RAT",
    description:
      "SOC investigation of malware traffic using Wireshark covering the NetSupport RAT scenario. Covers C2 traffic identification and network-based detection.",
    tags: ["Wireshark", "PCAP", "RAT", "C2 Detection", "SOC"],
    github: "https://github.com/TFT444/malware-traffic-analysis-wireshark",
  },
  {
    name: "TLS/SSL Traffic Analysis",
    description:
      "SSL/TLS traffic analysis using Wireshark. Covers TLS handshake analysis including Client Hello, Server Hello, Certificate, Key Exchange, and Change Cipher Spec with real packet inspection.",
    tags: ["Wireshark", "TLS", "SSL", "Network Security", "PCAP"],
    github: "https://github.com/TFT444/tls-wireshark-analysis",
  },
  {
    name: "WebStrike PCAP Attack Investigation",
    description:
      "Blue Team investigation using PCAP analysis in Wireshark. Covers web-based attack traffic identification and forensic analysis.",
    tags: ["Wireshark", "PCAP", "Blue Team", "Web Security", "Forensics"],
    github: "https://github.com/TFT444/webstrike-pcap-Attack-Investigation",
  },
];

export const certifications = [
  {
    name: "AI-Driven Cybersecurity Analyst",
    issuer: "LinkedIn Learning",
    year: "2026",
  },
  {
    name: "Cybersecurity with Cloud Computing",
    issuer: "LinkedIn Learning",
    year: "2026",
  },
  {
    name: "Cyber Defence Infrastructure & Mitigating Cyber Risks",
    issuer: "LinkedIn Learning",
    year: "2026",
  },
  {
    name: "Cisco Networking Foundations: Switching & Routing",
    issuer: "LinkedIn Learning",
    year: "2026",
  },
  {
    name: "AI Security",
    issuer: "Certificate",
    year: "2026",
    file: "/certificates/AI-Security-Certificate.pdf",
  },
];

export const skills = {
  "Cloud Security": ["Microsoft Azure", "Azure CSPM", "Entra ID", "Key Vault", "AKS", "AWS IAM/EC2"],
  "Detection & SIEM": ["Microsoft Sentinel", "KQL", "Splunk", "SPL", "SOAR", "Azure Logic Apps", "MITRE ATT&CK"],
  "Security Engineering": ["Python", "REST APIs", "Azure SDK", "HMAC-SHA256", "Rate Limiting", "Input Validation"],
  "Offensive Security": ["Active Directory Attacks", "Kerberoasting", "Pass-the-Hash", "Kali Linux", "Impacket", "Wireshark"],
  "SAST & Vulnerability": ["CodeQL", "Semgrep", "Bandit", "pip-audit", "Trivy", "Gitleaks"],
  "Frameworks": ["CIS Benchmarks", "NIST CSF", "ISO 27001", "SOC 2", "OWASP", "MITRE ATT&CK"],
};

export const publications = [
  {
    title: "RetailShield: A Sentinel-Native Detection and Response Content Pack for UK Retail",
    author: "Farhad, T.",
    year: "2026",
    publisher: "Zenodo",
    doi: "https://doi.org/10.5281/zenodo.20608262",
  },
];
