# Kestrel: AI Agent Vulnerability Scanner

A full-stack **vulnerability scanner for AI agents** integrating static (SAST) and dynamic (DAST) analysis checks. It maps findings across standard cybersecurity lists including **OWASP Agentic AI, OWASP LLM Top 10, and MITRE ATLAS**.

## Key Features

* **SAST & DAST Scanning:** Conducts automated code analysis and dynamic testing to identify structural vulnerabilities in agent workflows and live execution behavior.
* **Security Threat Surface Mapping:** Successfully mapped and identified severe findings including wildcard tool scopes and hardcoded credentials.
* **High-Performance Scanning Pipeline:** Developed using **FastAPI, Celery, and Redis** to offload heavy scanning tasks asynchronously, achieving a **95% reduction in API response latency**.
* **Interactive Security Dashboard:** Built with a **React-based frontend** to visualize threat severity tiers, view detailed remediation steps, and gate risk factors.
* **CI/CD Risk Gating:** Integrates directly with **GitHub Actions** to automatically run checks and prevent insecure code commits from reaching staging/production environments.

## Technologies Used

* **Backend:** FastAPI, Celery, Redis, PostgreSQL
* **Frontend:** React, TailwindCSS
* **Security Standards:** OWASP Agentic AI, OWASP LLM Top 10, MITRE ATLAS
* **CI/CD:** GitHub Actions
