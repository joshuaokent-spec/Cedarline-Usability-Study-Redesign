# Cedarline Usability Study & Iterative Redesign

A **primary UX research case study in progress** evaluating the existing Cedarline Claim Reporting prototype.

**Moderated usability testing · User interviews · Survey questions · Task analysis · Research synthesis · Iterative redesign**

[**Study overview**](https://joshuaokent-spec.github.io/Cedarline-Usability-Study-Redesign/) · [**Moderator guide**](study/moderator-guide.md) · [**Task scenarios**](study/task-scenarios.md)

> **Study status: research kit complete — participant sessions pending.**
>
> No participant findings, quotes, metrics, or redesign conclusions are claimed until real sessions are completed.

## At a glance

| | |
| --- | --- |
| **Role** | UX Researcher / UX Designer |
| **Prototype under test** | Cedarline Claim Reporting UX |
| **Planned sample** | 5 adult convenience-sample participants |
| **Methods** | Pre-task interview, moderated usability testing, post-task ease ratings, post-study survey, debrief interview |
| **Core deliverable** | Evidence-supported redesign of Project 1 |
| **Research tooling** | Local browser study runner + anonymized JSON export |
| **Privacy** | Raw participant data and recordings are excluded from the public repo |

## Study question

> **Can people report an insurance loss confidently, recover from uncertainty, and review/edit their information before submitting without unnecessary confusion or assistance?**

The prototype under test is:

[**Cedarline Claim Reporting UX**](https://github.com/joshuaokent-spec/cedarline-claim-reporting-ux)

## Why this project exists

Projects 1–5 demonstrate design and implementation breadth. Project 6 exists to produce something the others deliberately do not pretend to have:

**real primary research evidence.**

The study combines three methods in one lightweight session:

### User interview
A brief pre-task interview explores expectations, prior experience, potential stressors, and comfort with web forms. A debrief interview captures reasoning after the tasks.

### Moderated usability test
Participants complete five realistic claim-reporting tasks while behavior, assistance, uncertainty, backtracking, and task outcome are observed.

### Survey
Each task receives a 1–7 ease rating. A short post-study survey captures perceived clarity, confidence, information load, and overall ease.

## Planned participant experience

```text
Consent
  → pre-task interview
  → Task 1: choose policy / loss
  → Task 2: handle unknown information
  → Task 3: safety + defer evidence
  → Task 4: contact preference + review
  → Task 5: edit + submit
  → post-study survey
  → debrief interview
```

The complete scenarios are in [Task Scenarios](study/task-scenarios.md).

## Local study runner

The repository includes `study-runner.html`, a lightweight moderator tool designed for P01–P05 sessions.

It records:

- participant ID;
- device;
- prior claim experience;
- web-form comfort;
- consent status;
- pre-task interview notes;
- task outcome;
- assistance level;
- post-task ease rating;
- observed behavior;
- post-study survey ratings;
- open responses;
- moderator summary;
- critical incidents.

### Privacy behavior

The runner:

- stores the active draft in the local browser;
- exports an anonymized JSON file on demand;
- does not send participant data to a server;
- uses participant IDs rather than names.

The repository's `.gitignore` excludes folders intended for raw research data, recordings, and exports.

## Outcome framework

Each task is marked:

- **Success**
- **Success with assistance**
- **Failure**

Moderator assistance is recorded from:

- **0 — none**
- **1 — neutral prompt**
- **2 — directional hint**
- **3 — explicit instruction**

Participants also provide a **1–7 ease rating** after each task.

See [Metrics & Severity Rubric](study/metrics-and-severity.md).

## Findings are intentionally blank

The [Findings Template](study/findings-template.md) currently says:

- Sessions completed: **0 / 5**
- Findings synthesized: **No**
- Redesign started: **No**

That is intentional.

A credible portfolio case study cannot contain research findings before research occurs.

## Evidence chain

After sessions, the work will follow:

```text
Raw observations
  → anonymized session summaries
  → pattern grouping
  → severity-ranked findings
  → redesign priorities
  → Project 1 revisions
  → before / after evidence
  → limitations
```

See [Synthesis Plan](study/synthesis-plan.md).

## Research materials

- [Study Plan](study/study-plan.md)
- [Recruitment Screener](study/recruitment-screener.md)
- [Participant Consent Script](study/consent-script.md)
- [Moderator Guide](study/moderator-guide.md)
- [Task Scenarios](study/task-scenarios.md)
- [Metrics & Severity Rubric](study/metrics-and-severity.md)
- [Post-Study Survey](study/post-study-survey.md)
- [Synthesis Plan](study/synthesis-plan.md)
- [Findings Template](study/findings-template.md)
- [Redesign Log Template](study/redesign-log-template.md)
- [Limitations Checklist](study/limitations-checklist.md)

## How we complete this project

### 1. Recruit five participants
A small convenience sample is sufficient for this formative portfolio exercise, as long as its limitations are reported accurately.

### 2. Conduct the sessions
Use the moderator guide and study runner. Avoid teaching participants how the interface works.

### 3. Export each session
Use anonymized IDs such as `P01`. Keep raw exports outside the public repository during analysis.

### 4. Synthesize only after several sessions
Do not redesign after every participant unless a critical defect makes continued testing impossible.

### 5. Publish anonymized findings
Replace the placeholders in the findings template with evidence-supported observations.

### 6. Revise Project 1
Every significant redesign should trace back to a finding.

### 7. Document before / after
Explain what changed, why it changed, tradeoffs, and what still needs validation.

## Research integrity

This repo intentionally separates:

**Study materials that exist now**  
from  
**findings that can only exist after real sessions.**

Do not claim:

- five participants before five participants are actually tested;
- quotes that were not captured;
- task-success percentages before sessions;
- interview themes before synthesis;
- a redesign as evidence-based before findings support it;
- statistical generalizability from this small convenience sample.

## Cedarline portfolio

| Project | Primary evidence |
| --- | --- |
| [Project 1 — Claim Reporting](https://github.com/joshuaokent-spec/cedarline-claim-reporting-ux) | Transactional UX |
| [Project 2 — Claims Operations](https://github.com/joshuaokent-spec/Cedarline-Claims-Operations-Dashboard) | Enterprise UX |
| [Project 3 — Policy & Coverage IA](https://github.com/joshuaokent-spec/Cedarline-Policy-Coverage-IA) | Information architecture |
| [Project 4 — Web Design System](https://github.com/joshuaokent-spec/Cedarline-Web-Design-System) | Corporate web standards / design systems |
| [Project 5 — Catastrophe Response Hub](https://github.com/joshuaokent-spec/Cedarline-Catastrophe-Response-Hub) | Visual design / crisis UX |
| **Project 6 — Usability Study & Redesign** | **Primary research / usability testing / interview / survey / iteration** |

## Current status

The repository is **research-ready, not research-complete**.

Once five real sessions are conducted and synthesized, this becomes the project that closes the biggest remaining UX requirement in the portfolio.
