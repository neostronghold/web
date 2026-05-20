export const COMPANY = {
  name: "neostronghold",
  tagline: "Intelligent homes, open to everyone.",
  description:
    "Your home's AI operating system. Open-source, local-first, and built for the way you live.",
  company: "NeoParadise",
  location: "Cape Town, South Africa",
  founded: 2026,
  email: "hello@neostronghold.co.za",
  github: "github.com/neoparadise/neostronghold",
} as const

export const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "Hardware", href: "#hardware" },
  { label: "AI Hub", href: "#agent-hub" },
  { label: "Marketplace", href: "#marketplace" },
  { label: "Tesla", href: "#tesla" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "/contact" },
  { label: "Team", href: "#team" },
] as const

export const ROLE_CTA = [
  { role: "Homeowner", href: "#pricing", icon: "Home" },
  { role: "Architect", href: "#architects", icon: "Ruler" },
  { role: "Installer", href: "#tesla", icon: "Wrench" },
  { role: "Investor", href: "#investors", icon: "TrendingUp" },
] as const

export const ROTATING_WORDS = [
  "intelligent.",
  "secure.",
  "effortless.",
  "energy-smart.",
  "open.",
  "yours.",
]

export const PAIN_POINTS = [
  {
    title: "Fragmented Ecosystem",
    description:
      "Dozens of incompatible apps, brands, and protocols. No single system ties your home together.",
    icon: "Grid3X3",
  },
  {
    title: "Cloud Dependency",
    description:
      "Load-shedding or internet goes down, so does your smart home. Local control should be the standard.",
    icon: "CloudOff",
  },
  {
    title: "Luxury Price or DIY",
    description:
      "Control4 starts at R100k+. The alternative? Fumbling with Sonoff and forum posts. Nothing in between.",
    icon: "ZapOff",
  },
  {
    title: "No Local AI",
    description:
      "Google and Alexa don't understand load-shedding, Eskom schedules, or your inverter. South Africa needs a home-grown solution.",
    icon: "Brain",
  },
]

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Choose Your Hub",
    description:
      "Core for cloud-managed simplicity. Pro for full local AI. Both run the same neostronghold OS.",
    icon: "Package",
  },
  {
    step: 2,
    title: "Install & Connect",
    description:
      "Plug in, pair sensors in minutes. Or let our team handle the full installation.",
    icon: "Zap",
  },
  {
    step: 3,
    title: "Your Home, Intelligent",
    description:
      "Meet your AI agent hub. A workspace of autonomous agents managing energy, security, comfort, and more.",
    icon: "Sparkles",
  },
]

export const PRODUCT_CODENAMES: Record<string, string> = {
  Core: "Pulse",
  Pro: "Nexus",
  ProPlus: "Bastion",
  Helios: "Energy Manager",
  Aegis: "Security Guard",
  Oberon: "Concierge",
  Zephyr: "Climate Master",
  Nereus: "Water Keeper",
  Transit: "Vehicle Integrator",
}

export const PRODUCT_ONE_LINERS: Record<string, string> = {
  Pulse: "The heartbeat of your smart home.",
  Nexus: "Every protocol. Every agent. One device.",
  Bastion: "Fortress-grade. Where the grid isn't.",
  Helios: "Your energy. Your terms. Your savings.",
  Aegis: "The shield you don't see. Until you need it.",
  Oberon: "Your home, fully staffed.",
  Zephyr: "Every room, at the perfect temperature.",
  Nereus: "Silent watcher of every pipe and pool.",
  Transit: "Your garage knows before you do.",
}

export const HARDWARE_TIERS = [
  {
    name: "Core",
    brand: "Pulse",
    tagline: "Cloud-managed simplicity",
    price: "R1,499",
    description: "The smart home router. Connects everything, managed through our cloud. Perfect for everyday smart living.",
    badge: "Pulse",
    specs: [
      "Dual-band WiFi 6",
      "Zigbee + Thread + Matter",
      "Cloud-managed AI agent",
      "Remote access included",
      "App + web dashboard",
      "Automatic updates",
    ],
    gradient: "from-primary to-blue-600",
    isPro: false,
  },
  {
    name: "Pro",
    brand: "Nexus",
    tagline: "Local AI sovereignty",
    price: "R5,999",
    description: "Your home's AI brain. Runs every agent locally. Zero cloud dependency. Modular, upgradable, yours.",
    badge: "Nexus",
    specs: [
      "CNC aluminum + translucent glass design",
      "Local AI inference (8GB+ VRAM capable)",
      "Upgradable compute module slot",
      "Runs fully offline",
      "Tesla Fleet API integration",
      "Multi-agent workspace (up to 20 agents)",
      "Custom wake word engine",
      "Streaming voice (0.5s response)",
    ],
    gradient: "from-secondary via-primary to-accent",
    isPro: true,
  },
]

export const AGENT_EXAMPLES = [
  {
    name: "Energy Manager",
    brand: "Helios",
    description: "Your solar, battery, and grid — optimized by AI. Predicts load-shedding. Sells power back at peak.",
    icon: "Sun",
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "Security Guard",
    brand: "Aegis",
    description: "Monitors cameras, gates, motion sensors. Alerts via WhatsApp. Escalates to armed response.",
    icon: "Shield",
    color: "from-cyan-500 to-blue-600",
  },
  {
    name: "Concierge",
    brand: "Oberon",
    description: "Manages deliveries, guest access, schedules. Handles intercom, gate, and visitor management.",
    icon: "Bell",
    color: "from-purple-500 to-violet-600",
  },
  {
    name: "Climate Master",
    brand: "Zephyr",
    description: "Learns your comfort patterns. Pre-conditions rooms. Manages HVAC, blinds, fans, and more.",
    icon: "Thermometer",
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "Water Keeper",
    brand: "Nereus",
    description: "Monitors leaks, manages irrigation, tracks tanks. Alerts on usage anomalies.",
    icon: "Droplets",
    color: "from-sky-500 to-indigo-600",
  },
  {
    name: "Vehicle Integrator",
    brand: "Transit",
    description: "Tesla Fleet API — Powerwall, preconditioning, HomeLink. The car and the home speak the same language.",
    icon: "Car",
    color: "from-red-500 to-rose-600",
  },
]

export const TESLA_FEATURES = [
  {
    title: "Powerwall Integration",
    description: "Monitor state of charge, backup reserve, and power flow. AI optimizes charge/discharge based on weather, tariffs, and your schedule.",
    icon: "Battery",
  },
  {
    title: "Vehicle Preconditioning",
    description: "AI pre-heats or pre-cools your Tesla before departure. Syncs with your calendar and home departure routines.",
    icon: "Car",
  },
  {
    title: "HomeLink Automation",
    description: "Open/close garage door on approach. No tapping your phone. No Homelink button — just drive up and your home knows you're home.",
    icon: "Gauge",
  },
  {
    title: "Storm Watch",
    description: "Integrates with Tesla Storm Watch. Pre-charges Powerwall, secures home, alerts you before bad weather hits.",
    icon: "CloudAlert",
  },
  {
    title: "Energy Trading",
    description: "AI sells Powerwall energy back to the grid at peak prices. Keeps reserve for load-shedding. Maximizes solar ROI.",
    icon: "Zap",
  },
  {
    title: "Fleet Telemetry",
    description: "Real-time vehicle data — location, battery, charging — unified with your home dashboard. One pane of glass for your entire Tesla ecosystem.",
    icon: "Radio",
  },
]

export const MARKETPLACE_CATEGORIES = [
  {
    title: "Energy",
    description: "Solar optimization, battery management, load-shedding automations, Eskom schedule integration.",
    icon: "Sun",
    count: "24 agents",
  },
  {
    title: "Security",
    description: "Camera AI, motion detection, gate control, armed response API, facial recognition.",
    icon: "Shield",
    count: "18 agents",
  },
  {
    title: "Climate",
    description: "Smart thermostat, blind control, humidity management, room-by-room HVAC orchestration.",
    icon: "Thermometer",
    count: "15 agents",
  },
  {
    title: "Comfort",
    description: "Lighting scenes, audio zones, morning routines, goodnight sequences, presence simulation.",
    icon: "Sparkles",
    count: "32 agents",
  },
  {
    title: "Water",
    description: "Leak detection, irrigation scheduling, rainwater harvesting, pool automation.",
    icon: "Droplets",
    count: "12 agents",
  },
  {
    title: "Vehicle",
    description: "Tesla integration, EV charging optimization, garage automation, departure routines.",
    icon: "Car",
    count: "9 agents",
  },
]

export const DIASPORA_MARKETS = [
  {
    country: "United Kingdom",
    cities: "London, Surrey, Wimbledon",
    community: "235,000+ SA-born",
    gap: "Highest security gap — no armed response, 15-60min police response",
    tier: "Tier 1",
    gradient: "from-blue-600 to-indigo-700",
  },
  {
    country: "Australia",
    cities: "Perth, Sydney, Melbourne",
    community: "224,000+ SA-born",
    gap: "Council restrictions on walls/fences — smart tech is the alternative",
    tier: "Tier 2",
    gradient: "from-red-600 to-rose-700",
  },
  {
    country: "Portugal",
    cities: "Algarve, Cascais, Lisbon",
    community: "12,000+ and growing",
    gap: "Golden Visa wave — SA families renovating with SA-level specs",
    tier: "Tier 3",
    gradient: "from-green-600 to-emerald-700",
  },
  {
    country: "UAE / Dubai",
    cities: "Dubai, Abu Dhabi",
    community: "100,000+ SA expats",
    gap: "Villa communities — SA expats with tax-free income, high security standards",
    tier: "Tier 3",
    gradient: "from-amber-600 to-yellow-700",
  },
]

export const ARCHITECT_PROGRAM = {
  headline: "The system architects choose for their own homes.",
  benefits: [
    "CPD-accredited training on smart home specification",
    "Priority technical support for your projects",
    "Trade partner discount (declared, transparent)",
    "Custom spec sheets for your project documentation",
    "BIM objects for Revit integration",
    "Client referral program with finder's fee",
  ],
  cpdTitle: "Specifying Smart Home Technology in Luxury Residential",
  cpdDescription:
    "A 1-hour CPD-accredited course covering: technology selection at concept stage, infrastructure planning, lighting control integration, security system specification, and future-proofing for AI.",
}

export const FEATURES = [
  {
    title: "neostronghold Pro",
    description:
      "The brain of your intelligent home. CNC aluminum, translucent design, upgradable compute. Runs 20+ AI agents locally. Zero cloud dependency.",
    icon: "Cpu",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Agent Workspace",
    description:
      "A tmux-like interface for your home's AI. Each agent is a panel you can spawn, monitor, and control. You're the sysadmin of your home.",
    icon: "Layout",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    title: "Tesla Fleet Integration",
    description:
      "Direct Powerwall + vehicle integration via Tesla Fleet API. Energy management, preconditioning, HomeLink. The car and home speak the same language.",
    icon: "Car",
    gradient: "from-red-500 to-rose-600",
  },
  {
    title: "Agent Marketplace",
    description:
      "Hundreds of community-built agents. Browse, install, run. Or build your own with our agent SDK. Your home's capabilities grow every day.",
    icon: "Store",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Solar & Energy AI",
    description:
      "One-click Sunsynk, Victron, GoodWe integration. AI optimizes battery, predicts load-shedding, and sells power back at peak pricing.",
    icon: "Sun",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "Open-Source Core",
    description:
      "Apache 2.0. No lock-in. Contribute back. Based on Home Assistant, extending for a premium agent-based experience.",
    icon: "Code2",
    gradient: "from-pink-500 to-rose-600",
  },
]

export const PRICING_TIERS = [
  {
    name: "Plus",
    price: "R189/mo",
    description: "For daily smart home users.",
    features: [
      "10 AI agents",
      "Cloud + local AI",
      "Energy dashboard",
      "Remote access included",
      "WhatsApp integration",
      "Agent Marketplace (install)",
    ],
    highlighted: false,
    ai: true,
  },
  {
    name: "Pro",
    price: "R349/mo",
    description: "For power users and whole-home automation.",
    features: [
      "Unlimited AI agents",
      "Camera AI (local inference)",
      "Agent builder toolkit",
      "Family sharing (5 users)",
      "Tesla Fleet API integration",
      "Priority support",
      "Agent Marketplace (publish)",
    ],
    highlighted: true,
    ai: true,
  },
  {
    name: "Installer",
    price: "Custom",
    description: "For professionals managing client homes.",
    features: [
      "Multi-client fleet dashboard",
      "White-label branding",
      "Predictive maintenance AI",
      "API access + webhooks",
      "Client billing integration",
      "Dedicated account manager",
    ],
    highlighted: false,
    ai: true,
    custom: true,
  },
]

export const MARKET_STATS = [
  { label: "SA Smart Home Market (2024)", value: "$1.2–2.1B", suffix: "" },
  { label: "Annual Growth Rate", value: "17–31", suffix: "% CAGR" },
  { label: "Target LTV:CAC", value: "22", suffix: ":1" },
  { label: "Addressable Households", value: "4–5M", suffix: "" },
  { label: "Solar Adoption (2022–2025)", value: "7.3", suffix: "x growth" },
  { label: "Homes Planning Solar", value: "82", suffix: "%" },
]

export const HARDWARE_PRICES = [
  {
    name: "Core",
    price: "R1,499",
    subscription: "Plus included (1 year)",
    badge: null,
  },
  {
    name: "Pro",
    price: "R5,999",
    subscription: "Pro included (1 year)",
    badge: "Recommended",
  },
]

export const ROADMAP_ITEMS = [
  {
    phase: "Alpha",
    timeframe: "Months 1–3",
    items: [
      "neostronghold Pro prototype (3D printed)",
      "Neighbor alpha testers (5 homes)",
      "Basic agent workspace (3 agent types)",
      "Tesla Fleet API integration (Powerwall)",
      "WhatsApp agent interface",
    ],
    active: true,
  },
  {
    phase: "Beta",
    timeframe: "Months 4–9",
    items: [
      "CNC aluminum Pro enclosure (500 units)",
      "Core router design finalised",
      "Agent Marketplace v1 (10 agents)",
      "Sunsynk/Victron official integration",
      "YC Winter 2027 application",
      "CPD course for architects",
    ],
    active: false,
  },
  {
    phase: "Launch",
    timeframe: "Months 10–18",
    items: [
      "Core + Pro manufacturing run (2000 units)",
      "Agent Marketplace v2 (100+ agents)",
      "SA diaspora launch (UK + Aus)",
      "Rubicon distribution partnership",
      "1000+ installs, 500+ subscribers",
      "CPD course running monthly",
    ],
    active: false,
  },
  {
    phase: "Scale",
    timeframe: "Year 2+",
    items: [
      "National SA expansion",
      "UK market entry (London/Surrey)",
      "Installer white-label program",
      "Enterprise / estate developer B2B",
      "10,000+ subscribers",
    ],
    active: false,
  },
]

export const TEAM_MEMBERS = [
  {
    name: "Annekin Meyburgh",
    role: "Founder & CEO",
    description:
      "Full-stack developer and smart home enthusiast. Building and managing his own smart home for years. Deep expertise in the Home Assistant ecosystem and vision to bring premium smart homes to every South African.",
    initials: "AM",
  },
  {
    name: "Corrie Meyburgh",
    role: "Head of Installation",
    description:
      "Smart home enthusiast with deep electrical expertise. Co-manages the family smart home alongside Annekin. Hands-on lead for every installation project.",
    initials: "CM",
  },
]

export const ALPHA_TESTERS = [
  {
    quote: "I just wanted lights I could turn off from bed. Now my house knows when I'm coming home, preps my coffee, and tells me if I left the garage open. It's like living in the future.",
    name: "Neighbour 1",
    location: "Cape Town",
    initials: "N1",
  },
  {
    quote: "The AI agent handled load-shedding better than I could. Battery kicked in, non-essentials shed, lights stayed on. I didn't even notice until Eskom stage 4 hit.",
    name: "Neighbour 2",
    location: "Cape Town",
    initials: "N2",
  },
]

export const INVESTOR_HIGHLIGHTS = {
  market: "SA smart home: $1.2-2.1B, growing 17-31% CAGR",
  ltvCac: "22:1 LTV:CAC ratio",
  tam: "4-5M target households (LSM 8-10)",
  arr: "Target R1.98M Year 1, R7.72M Year 2, R22.16M Year 3",
  funding: "Seeking R1.5-2M seed (or YC S500K equivalent)",
  traction: "5 alpha homes live, 20+ neighbours on waitlist",
}

export const CTA_CONTENT = {
  heading: "Your home is ready. Are you?",
  description:
    "Whether you're building, renovating, or just tired of your home not knowing who you are — we'll help you every step of the way. Based in Cape Town, serving the world.",
  buttonText: "Get Started",
  secondaryText: "See the code on GitHub",
}

export const FOOTER_LINKS = [
  {
    title: "Product",
    links: [
      { label: "Core Hub", href: "#hardware" },
      { label: "Pro Hub", href: "#hardware" },
      { label: "Agent Hub", href: "#agent-hub" },
      { label: "Marketplace", href: "#marketplace" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Team", href: "#team" },
      { label: "Investors", href: "#investors" },
      { label: "GitHub", href: "#" },
    ],
  },
  {
    title: "Partners",
    links: [
      { label: "Architects & Designers", href: "#architects" },
      { label: "Solar Installers", href: "#tesla" },
      { label: "SA Diaspora", href: "#diaspora" },
      { label: "CPD Training", href: "#architects" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Contact", href: "#cta" },
      { label: "FAQ", href: "#" },
    ],
  },
]
