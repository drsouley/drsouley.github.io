---
title: "When the Breach Comes Through the Front Door Someone Else Holds Open"
date: 2026-06-10
categories: [cybersecurity]
---

A board member once told me: "We spent millions on cybersecurity, but no one warned us the real threat might be outside the building." That line resurfaces every time a major breach hits the news.

- **American Express (2024)** — breached through a third-party payment processor.
- **AT&T (2023)** — a cloud vendor exposed customer data.
- **Target (2013)** — attackers entered through an HVAC contractor's credentials, with ~$300M in eventual costs.

The pattern isn't that vendors are careless. It's that we run sophisticated vetting programs that answer the wrong question. We ask: is this vendor trustworthy? The question that matters operationally is: what happens to us when this vendor is compromised — and can we detect and contain it fast enough?

Most third-party programs invest heavily in the first question and almost nothing in the second. Contracts get signed. Access is granted. Then the relationship goes dark, and the next time anyone looks closely is during the incident call.

If you own security in a serious organisation, four things move the needle:

1. **Due diligence is a process, not a PDF.** An ISO 27001 certificate tells you a vendor passed an audit on one day. It tells you nothing about how access is managed in their daily operations. Ask *how*, not *whether*.
2. **Contracts must carry teeth.** Specify encryption standards, MFA, audit rights, and a breach-notification window measured in hours, not "promptly." If it isn't contractual, it's a conversation you'll lose during a crisis.
3. **Monitor access, don't assume integrity.** A vendor secure in 2023 may be exposed today. The biggest gap in most programs isn't vetting — it's that without real-time monitoring of vendor access, a compromise can run for weeks before anyone notices.
4. **Put third parties in your incident response plan.** When a vendor is breached, you need to already know who to call, what you can shut off, and what you're legally required to say. Discovering this mid-breach is how a containable incident becomes a public one.

The deeper issue is accountability. Vendor risk usually sits with IT, but the residual risk — reputational, regulatory, financial — lands on the business. Until someone senior owns that gap, vendor security stays advisory.

After 20+ years across IT operations and security, I've sat on both sides: the protected and the exposed. The difference is rarely the size of the security budget. It's whether anyone can answer three questions on demand:

- Who can reach our data right now?
- What proof did we demand — and when did we last check it?
- If they're breached tonight, do we find out in minutes or in months?
