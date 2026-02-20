export const projects = [
  {
    title: 'Idaho SIF',
    subtitle: 'User Administration Tool',
    description: 'Designed and implemented an internal user administration system with role based access control and secure permission modeling.',
    tags: ['Spring Boot', 'React', 'AWS', 'Relational Databases', 'RBAC', 'Enterprise Systems'],
    details: {
      overview: [
        `I worked as an associate software engineer intern on an internal User Administration Tool used to manage users, roles, and permissions across the organization.`,
        `My focus was building secure, maintainable backend functionality while translating business and compliance requirements into concrete access control rules.`,
      ],
      sections: [
        {
          title: 'System Architecture',
          bullets: [
            'Spring Boot backend exposing REST endpoints for user and role management',
            'Relational database model for users, roles, permissions, and assignments',
            'Admin focused workflows designed for reliability and clarity',
          ],
          body: [
            `The tool centralized user provisioning and access control into a single system, reducing manual steps and enabling consistent permission enforcement.`,
            `Role based access control was implemented to support granular permissions while keeping administration workflows simple for internal users.`,
          ],
        },
        {
          title: 'Security and Access Control',
          bullets: [
            'Role based access control with explicit permission checks',
            'Least privilege mindset for administrative actions',
            'Validation and guardrails for sensitive user changes',
          ],
          body: [
            `I implemented RBAC focused authorization logic so that administrative actions are allowed only when the actor’s assigned roles permit it.`,
            `I prioritized safe defaults and defensive validation to prevent accidental privilege escalation and to make risky operations intentional.`,
          ],
        },
        {
          title: 'Engineering Practices',
          bullets: [
            'Translated analyst and compliance requirements into backend rules',
            'Used AI assisted workflows with human validation and code review',
            'Collaborated with engineers and analysts to iterate on requirements',
          ],
          body: [
            `A big part of the work was converting real world policy into a clean permission model and predictable API behavior.`,
            `I used AI assisted development to accelerate implementation while still treating security logic as review heavy and testable code.`,
          ],
        },
        {
          title: 'Impact',
          bullets: [
            'Streamlined internal user management workflows',
            'Improved consistency of role and permission assignment',
            'Reduced risk by centralizing access control decisions',
          ],
          body: [
            `The result was a more reliable and scalable approach to internal user administration, with clearer workflows and stronger access control guarantees.`,
          ],
        },
      ],
    },
  },
  {
    title: 'FORWARD',
    subtitle: 'Curriculum Delivery Platform',
    description: 'Built a secure curriculum delivery platform supporting authentication, content tracking, and role based access for youth in alternative education settings.',
    tags: ['Django', 'AWS', 'Docker', 'Relational Databases'],
    details: {
      overview: [
        `I served as the primary backend engineer on a full stack curriculum delivery platform designed to support structured lesson sequencing, interactive activities, and per user progress tracking.`,
        `The system enables non technical curriculum authors to create and manage heterogeneous lesson content while maintaining strong access control and data integrity.`,
      ],
      sections: [
        {
          title: 'System Architecture',
          bullets: [
            'React single page application frontend',
            'Django REST API backend',
            'PostgreSQL relational database',
            'AWS S3 backed media storage',
          ],
          body: [
            `The backend supports fifteen distinct activity types, including quizzes, writing responses, drag and drop interactions, embedded media, and custom HTML content.`,
            `Rather than using generic foreign keys, I designed a registry driven activity system that maps each activity model to its corresponding response model and service layer. This allowed new activity types to be introduced with minimal API changes while maintaining concrete database relationships and efficient queries.`,
            `All response submissions are handled through a unified API pipeline with transactional logic to enforce scoring rules, completion tracking, and per user constraints.`,
          ],
        },
        {
          title: 'Security and Access Control',
          bullets: [
            'Session based authentication with CSRF protection',
            'Authorization enforced with DRF permission classes',
            'Facility scoped access rules for instructors and admins',
            'Presigned S3 URLs for time limited media access',
          ],
          body: [
            `Authentication is session based with CSRF protection. Authorization is enforced at the API layer using Django REST Framework permission classes and facility scoped access rules.`,
            `Administrative tooling includes role aware restrictions so instructors can only manage users within their assigned facility.`,
          ],
        },
        {
          title: 'Infrastructure and Deployment',
          bullets: [
            'Owned AWS configuration and deployment',
            'S3 media storage and delivery via presigned URLs',
            'Docker for development and production',
            'Reverse proxy with TLS termination and static asset serving',
          ],
          body: [
            `I was responsible for AWS configuration and production deployment.`,
            `The system is containerized using Docker for both development and production environments. Static assets are served behind a reverse proxy with TLS termination, and media storage is handled via S3 with environment driven configuration.`,
          ],
        },
        {
          title: 'Engineering Focus',
          bullets: [
            'Extensibility for new activity types',
            'Clear separation between models, services, and API layers',
            'Maintainability without frequent schema or API redesign',
          ],
          body: [
            `This project emphasized extensibility, separation of concerns, and long term maintainability. My goal was to build a backend architecture that could scale in complexity without requiring API redesign or schema overhauls.`,
          ],
        },
      ],
    },
  },
  {
    title: 'HP Capstone',
    subtitle: 'Magma Test Framework Modernization',
    description:
      'Modernizing a legacy test framework into a portable, scalable Pytest based system with Docker and K3s orchestration.',
    type: 'modal',
    tags: ['Python', 'Pytest', 'Docker', 'K3s', 'CI'],
    details: {
      overview: [
        `Capstone project sponsored by HP to build the first phase of Magma, a next generation Python based testing framework designed to modernize a decades old validation system.`,
        `The goal is to preserve critical lab capabilities while introducing modern engineering practices like containerization, OS agnostic deployment, and distributed execution.`,
        `This project is actively in development, with an emphasis on establishing a clean core architecture and a reliable execution path before expanding into device lifecycle management and migration tooling.`,
      ],
      sections: [
        {
          title: 'Problem and Goals',
          bullets: [
            'Replace legacy complexity with a modular, maintainable architecture',
            'Run tests consistently across machines and lab environments',
            'Scale execution across multiple nodes to reduce validation cycle time',
            'Improve observability with clear output and accessible logs',
          ],
          body: [
            `HP’s existing validation environments involve multiple layers of firmware interacting with hardware, and the legacy framework has accumulated decades of complexity.`,
            `Magma focuses on creating a simple, resilient foundation that supports long term extensibility without frequent redesign.`,
          ],
        },
        {
          title: 'Core Capabilities In Progress',
          bullets: [
            'Docker containerization for consistent, portable execution',
            'CLI entry point that invokes Pytest end to end with standard exit codes',
            'Framework self testing using simulated targets to validate behavior without real hardware',
            'Clear per run logs and test output across local and distributed modes',
          ],
          body: [
            `Current work centers on establishing a reliable execution pipeline: container builds, smoke tests, framework initialization checks, and predictable reporting.`,
            `We are building the framework so new tests can be added cleanly, without embedding infrastructure logic inside test code.`,
          ],
        },
        {
          title: 'Scalable Execution and Resource Awareness',
          bullets: [
            'Distributed test execution using K3s with Kubernetes Jobs',
            'Configurable concurrency limits to protect lab resources',
            'Failure isolation so one job does not disrupt others',
            'Repeatable runs through versioned container environments',
          ],
          body: [
            `Magma is designed to scale from a single developer machine to a multi node lab environment.`,
            `Distributed execution is planned around job based isolation with explicit resource limits and clear result collection per job.`,
          ],
        },
        {
          title: 'Engineering Practices',
          bullets: [
            'Consistent repository structure with src layout and tests folder',
            'CI runs Pytest on every pull request to protect the framework',
            'Quickstart documentation for local and Docker usage',
            'Designed with extensibility and a migration path in mind',
          ],
          body: [
            `We are treating the framework itself as a product: testable, documented, and built to support incremental adoption from the legacy system.`,
            `Longer term work includes device lifecycle management, extension loading, and a defined migration strategy for existing tests.`,
          ],
        },
        {
          title: 'Status',
          bullets: [
            'Active development with HP sponsorship',
            'Currently focused on core execution, containerization, CLI, and observability',
            'Scaling, lifecycle management, and migration are planned next phases',
          ],
          body: [],
        },
      ],
    },
  },
  {
    title: 'Planly',
    description: 'A full-stack organization management platform using Spring Boot and React with real-time updates.',
    tags: ['React', 'Spring Boot', 'REST API'],
    link: 'https://github.com/andkob/Planly',
  }
]