# Architecture & Collaboration Diagrams

## 11. Multi-Team Collaboration Topology (Detailed)
*How the platform maps connections between disparate engineering units.*

```mermaid
graph TD
    subgraph "Team Alpha (Core)"
        A1[Developer 1]
        A2[Developer 2]
    end
    subgraph "Team Beta (Feature)"
        B1[Developer 3]
        B2[Developer 4]
    end
    subgraph "InnerSource Engine"
        Analysis[Graph Analysis]
        Leaderboard[Leaderboard]
    end
    A1 -->|Contributes| B_Repo[Beta Repository]
    B2 -->|Reviews| A_Repo[Alpha Repository]
    B_Repo & A_Repo --> Analysis
    Analysis --> Leaderboard
```

## 13. Repository Onboarding Workflow
```mermaid
graph LR
    New[New Repository] --> Scan[Maturity Scan]
    Scan --> Playbook{Has Playbook?}
    Playbook -- Yes --> Featured[Featured in Catalog]
    Playbook -- No --> Guide[Provide Setup Guide]
```

## 20. Recognition & Reward Cycle
```mermaid
stateDiagram-v2
    Contribution --> Validation: Merge PR
    Validation --> Score: Calculate Impact
    Score --> Badge: Award Achievement
    Badge --> Profile: Update DX Profile
```
