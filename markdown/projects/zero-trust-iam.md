# Zero Trust IAM for AI Agents

A comprehensive **Zero Trust identity registry and access management system** designed specifically for AI agentic ecosystems. This project addresses critical security vulnerabilities in agentic AI frameworks where overprivileged access leads to security breaches (responsible for 97% of AI security incidents according to IBM). It aligns with Cisco and Microsoft's 2026 Zero Trust for Agentic AI specifications.

## Key Features

* **JWT-Based Identity Registry:** Implements a cryptographically secure registration and authentication mechanism specifically for autonomous AI agents.
* **OPA / Rego Policy Engine:** Integrates Open Policy Agent (OPA) with policies written in Rego to enforce dynamic, granular, context-aware access control.
* **Redis-Backed Just-In-Time (JIT) Broker:** Enforces least privilege by providing temporary, tokenized permissions that expire automatically, minimizing credentials exposure.
* **Behavioral Anomaly Detection:** Incorporates an ML-based detection engine monitoring API calls and actions to flag anomalous behavior.
* **Tamper-Evident Logging:** Maintains audit records and transaction history secured against retrospective tampering.
* **Human-in-the-Loop Gateways:** Introduces validation gates requiring manual verification for high-severity or high-scope tool permissions.

## Technologies Used

* **Languages:** Python, Go
* **Policy Management:** Open Policy Agent (OPA), Rego
* **Infrastructure & Cache:** Redis, Docker Compose
* **Testing & CI/CD:** Pytest, GitHub Actions
