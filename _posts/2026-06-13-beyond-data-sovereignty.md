---
title: "Beyond Data Sovereignty: The AI Dependency Your Continuity Plan Doesn't Cover"
date: 2026-06-13
categories: [governance]
---

On 12 June 2026, Anthropic disclosed that a U.S. export-control directive forced it to suspend access to two of its frontier models (Fable 5 and Mythos 5) for foreign nationals, and that complying meant switching the models off for affected customers. No breach. No outage. No contract violation. A fully operational, fully paid-for system was withdrawn overnight by a rule its users had no part in writing. Set aside the specifics; the event made concrete what most AI governance frameworks still treat as theoretical.

The systemic impact lands hardest on an enterprise that has embedded this model into a load-bearing process.

Picture a mid-sized financial institution whose fraud-scoring pipeline calls a single extra-EU hosted model. Staff have internalised its reasoning, the workflow is structurally dependent on its outputs, and prompt engineering is calibrated to its specific logic. Access is suspended on a Tuesday morning. Disaster-recovery tooling sees healthy data centres and a live network, so nothing fails over. Instead, transaction-approval latency climbs past anything the runbooks were written for. By midday, the fraud team is manually reviewing flags; by Thursday, the backlog forces a choice between slowing approvals and accepting unscreened risk. Recovery does not require a new server. It requires a substitute model, re-validated outputs, and re-trained staff — none of which were pre-built, because the continuity plan never imagined a vendor that was working perfectly and simply not allowed to serve them.
This is not an isolated event. The same export-control regime that reaches the model also reaches the infrastructure beneath it: U.S. controls have extended to AI accelerators and the semiconductor manufacturing equipment that produces them, constraining the compute available to European organisations and shaping the hardware supply chain under every model. The pattern holds at both layers of the stack; the model and the IT Infrastructure it runs on. Access to the reasoning layer that increasingly drives critical decisions can be governed by legal constraints its users do not control.

Most organisations have not mapped this dependency, and the reason is structural. The legal environment governing your AI vendor can override your operational continuity regardless of your contract, and the controls executives trust to manage third-party risk were never built to see it.

Why data sovereignty doesn't cover this

EU has spent the last decade answering one question: where does data live, and under whose law can it be accessed? GDPR, the Data Act, the post-Schrems transfer mechanisms, and sovereign-cloud initiatives were all built to answer it. That question is about confidentiality, and it has technical answers: encryption, localisation, and access controls that regulators and auditors understand well.

Model sovereignty asks a harder question: who controls the system that produces the recommendation, the triage decision, or the fraud flag, and under what conditions can that system be withdrawn, throttled, or altered without your consent? This is not a confidentiality problem. It is an availability and integrity problem, and it behaves differently. No encryption scheme guarantees that a third party will continue to serve you a model. The only mitigation is architectural: the ability to operate without that specific model on short notice.

The vulnerability also intensifies through silent accumulation. With every passing month, the fine-tuned prompts, the embedded workflows, and the staff's fluency in one model's behaviour raise the practical cost of losing access. The dependency compounds faster than anyone tracks it, which is precisely why it surprises organisations when it finally matters.

The control gap and the function that owns it

Three control areas executives treat as mature are not designed to address this risk.

Business continuity and disaster-recovery planning cover infrastructure failure, not provider withdrawal. They assume a data centre goes down and a failover region comes up. Under DORA and NIS2, regulators now demand operational-resilience testing; yet in my experience, few organisations have ever run a scenario in which a fully operational vendor is compelled to stop serving them by forces outside the contract. As the fraud-scoring case shows, that scenario triggers no technical failover and no alert. It requires a substitute model, workflow, and validated output set, none of which exist unless they were built in advance.
Vendor risk assessments score security and SLAs, not continuity of access. Standard third-party frameworks ask about encryption, breach history, and data residency. They rarely ask under what legal or regulatory conditions a vendor could be required to stop serving you, or how you would know in advance.
AI Act compliance assumes the governed system will keep running. The EU AI Act requires ongoing monitoring, human oversight, and post-market surveillance for high-risk systems — all of which presume the system stays live. If the underlying model can disappear without notice, the deployer's obligations do not pause, but its ability to meet them does.

The deeper issue is not that any one of these controls is weak. It is that the risk lives in the seam between three functions and is owned by none of them. Security sees breach and confidentiality risk. Procurement sees commercial and SLA risk. The export-control exposure that can switch off your reasoning layer sits in trade-compliance and regulatory territory; a function rarely in the room when a model is selected, integrated, and made load-bearing. No one owns the seam, so no one maps the dependency. That accountability vacuum, not ignorance of the threat, is why the exposure accumulates unseen until the morning it matters.

The competitiveness stakes, and the wrong response

The instinctive reaction is "build everything in Europe," and it is worth setting aside directly. Confining European organisations to domestically built models, when the strongest models may be built elsewhere, trades dependency risk for a capability gap — a gap that carries its own competitiveness cost.

The sharper frame is optionality, not substitution. An economy whose critical-sector AI runs on infrastructure that can be shut down by forces outside the contract has a single point of failure, much like an economy dependent on one energy supplier. The answer to energy dependency was never to refuse cheaper imported energy; it was to maintain enough alternative capacity that no single supplier could dictate terms. The same logic applies here, and it applies to the hardware layer as much as the model layer — compute access constrained by export controls is the same dependency one level down. Investment in European model development and sovereign AI infrastructure is an insurance policy and a negotiating asset, not a replacement for best-in-class tools. Organisations that maintain a credible fallback negotiate from strength. Those that don't negotiate from dependency, and pay for it in contract terms, pricing, and resilience long before any disruption occurs.

What to do starting Monday

This is not a five-year infrastructure program. It is a set of governance and architecture decisions that can begin immediately.

Add a provider-withdrawal scenario to your continuity plan. Run the tabletop: our primary model becomes unavailable tomorrow morning, for reasons outside our control — what breaks, who notices first, what is our recovery time? If the honest answer is "we don't know," that is your starting point.
Extend vendor due diligence to continuity of access. Add one explicit question: under what legal or regulatory conditions could this vendor be required to suspend service to us, and what notice, if any, would we receive? Most vendors will not have a polished answer. That, in itself, is useful information.
Assign an owner for the seam. Decide now whether continuity-of-access risk sits with security, procurement, or a named risk owner who can pull in trade-compliance. The dependency goes unmapped because no function owns it; close that gap before the architecture decisions, not after.
Design for model portability from day one. Build an abstraction layer between your applications and the underlying model: standardised prompts, documented evaluation suites, and integration points that don't hardcode a single provider's API. This is the architectural equivalent of multi-sourcing a critical component — not abandoning your preferred supplier, but being able to switch in days rather than years.
Validate a fallback model now, not during a crisis. Choose a second model, ideally under a different provider and jurisdiction, and run your highest-risk workflows against it periodically, even if it never touches production. A fallback that has not been tested is not a fallback; it is an assumption.
Document the risk in your AI Act compliance file. For high-risk systems, name provider withdrawal as a continuity risk with a defined mitigation, rather than leaving it as an unstated assumption that the model will always be there.

The decision this forces

The question for any executive responsible for AI strategy is not "which model is best?" It is this: if our primary model became unavailable tomorrow, for reasons entirely outside our control, how long would recovery take — and is that timeline one we are willing to accept?

For most organisations today, the honest answer is "we don't know," or "longer than we'd like." That gap — not the choice of model — is the governance failure. The 2026 model and chip restrictions did not create the risk; they revealed it. And they revealed something sharper: the exposure persists because no single function owns it. Closing it does not require waiting for Europe to build frontier models. It requires giving continuity-of-access risk a named owner and treating LLM dependency with the same discipline organisations already apply to single-supplier risk in every other critical input — before the access is gone, not after.



The author is a senior GRC and cybersecurity governance specialist with extensive experience advising UN, EU institutions and regulated entities on NIS2, DORA, and cloud compliance frameworks. His doctoral research focus on AI Gouvernance and LLMOps Resilience.
