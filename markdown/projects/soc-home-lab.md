# SOC Home Lab

A self-hosted **Security Operations Center (SOC) lab environment** configured to ingest event logs from multiple endpoints, perform network monitoring, analyze intrusions, and map attack paths end-to-end.

## Key Features

* **Log Ingestion Pipeline:** Integrates **ELK Stack (Elasticsearch, Logstash, Kibana)** to aggregate Windows Event Logs, Sysmon telemetry, and Linux Auth logs from 3+ nodes, processing **500+ events per day**.
* **Intrusion Detection:** Deployed **Zeek** (formerly Bro) and **Suricata** to monitor network interfaces, capture packets, analyze network traffic, and trigger alerts on malicious actions.
* **Custom Security Rules:** Configured and deployed **15+ custom Sysmon rules** to detect privilege escalation, brute force attempts, and lateral movement.
* **MITRE ATT&CK Mapping:** Simulated full-chain attack scenarios (10+ attack vectors) and mapped them across **5+ MITRE ATT&CK tactics** to test detections and refine alert filters.
* **Custom SIEM Dashboards:** Built operational dashboards in Kibana to triage alerts, visualize network logs, and monitor endpoint telemetry.

## Technologies Used

* **SIEM:** ELK Stack (Elasticsearch, Logstash, Kibana)
* **Telemetry & Logs:** Sysmon, Windows Event Forwarding (WEF), Winlogbeat
* **Network Security Monitoring:** Zeek, Suricata
* **Tactics Framework:** MITRE ATT&CK
