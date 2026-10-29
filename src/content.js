/*
  What changed: all public copy lives in this one file.
  Why: the brief says reuse the live site's content and not invent new claims.
  Words below are the existing whatslandlord.com pages, only cleaned for typos
  and reading order. Prices, payment methods, and features are unchanged.
  Related: every page component reads from here.
*/

// The existing "Get Started" and "Login" buttons leave the marketing site
// and open the software. This phase does not rebuild that app.
export const APP_URL = "https://whatslandlord-software.netlify.app/login";

export const company = {
  name: "WhatsLandlord",
  tagline: "Keeping owners and tenants happy",
  phoneDisplay: "(516) 330-8281",
  phoneHref: "tel:+15163308281",
  email: "info@whatslandlord.com",
  street: "1129 Northern Blvd, Suite 404",
  city: "Manhasset, NY 11030",
};

// Header stays short on purpose. About sits in the footer, as on the live site,
// so the top bar does not become a crowded menu.
export const nav = [
  { to: "/features", label: "Features" },
  { to: "/pricing", label: "Pricing" },
  { to: "/portfolios", label: "Portfolios" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
];

export const footerNav = [
  { to: "/about", label: "About" },
  { to: "/features", label: "Features" },
  { to: "/pricing", label: "Pricing" },
  { to: "/portfolios", label: "Portfolios" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
];

// Each picture is a real building or home that matches the feature.
// They are examples of the kind of property, not a claim that WhatsLandlord owns them.
export const features = [
  {
    id: "property",
    number: "01",
    title: "Property management",
    kicker: "Back office",
    summary: "Properties, vendors, and tenants on one platform.",
    body: "Manage properties, vendors, and tenants from one centralized platform.",
    image: "/media/made/desk-backoffice.jpg",
    alt: "A property desk with a floor plan, a key, and a folder",
  },
  {
    id: "tenants",
    number: "02",
    title: "Tenant management",
    kicker: "People",
    summary: "Profiles, leases, rent, and day-to-day tenant activity.",
    body: "Manage tenant profiles, lease information, rental details, communication, and important tenant activities in one place.",
    image: "/media/made/tenant-hands.jpg",
    alt: "Hands arranging a tenant folder and a house key",
  },
  {
    id: "rent",
    number: "03",
    title: "Rent and payments",
    kicker: "Money",
    summary: "Rent, payments, dues, and the financial record.",
    body: "Track rent, payments, outstanding dues, and financial activity while keeping payment records organized across your properties.",
    image: "/media/made/rent-ledger.jpg",
    alt: "An envelope, a pen, a key, and a rent ledger",
  },
  {
    id: "maintenance",
    number: "04",
    title: "Maintenance",
    kicker: "The building",
    summary: "From the first report through to completion.",
    body: "Create, assign, and track maintenance requests from issue reporting through completion. Keep property managers and maintenance teams connected.",
    image: "/media/made/maintenance-craft.jpg",
    alt: "A craftsperson fitting a brass hinge on a door",
  },
  {
    id: "leases",
    number: "05",
    title: "Lease management",
    kicker: "The agreement",
    summary: "Leases, renewals, move-ins, and move-outs.",
    body: "Manage leases, renewals, move-ins, and move-outs in one place.",
    image: "/media/made/lease-keys.jpg",
    alt: "A blank lease, a pen, and two keys on a navy ribbon",
  },
  {
    id: "reports",
    number: "06",
    title: "Reports and insights",
    kicker: "The view",
    summary: "Properties, units, owners, and tenants in one view.",
    body: "See properties, units, owners, and tenants from one centralized platform.",
    image: "/media/made/reports-model.jpg",
    alt: "A tabletop model of houses and an apartment building",
  },
  {
    id: "communications",
    number: "07",
    title: "Communications",
    kicker: "In touch",
    summary: "Phone, SMS, email, and WhatsApp.",
    body: "Communicate with tenants and vendors by phone, SMS, email, and WhatsApp.",
    image: "/media/made/comms-phone.jpg",
    alt: "A telephone, a blank card, and a pen",
  },
  {
    id: "vendors",
    number: "08",
    title: "Vendor management",
    kicker: "The trades",
    summary: "Orders, payments, and the schedule.",
    body: "Track vendor orders, payments, and schedules.",
    image: "/media/made/vendor-trade.jpg",
    alt: "A clipboard, measuring tape, gloves, and copper pipe",
  },
  {
    id: "payments",
    number: "09",
    title: "Payments made easy",
    kicker: "How tenants pay",
    summary: "E-check, card, Zelle, and Cash App.",
    body: "Tenants can pay by e-check, credit card, debit card, Zelle, and Cash App.",
    image: "/media/made/pay-ease.jpg",
    alt: "A plain navy card and a brass key on marble",
  },
  {
    id: "files",
    number: "10",
    title: "File storage",
    kicker: "The record",
    summary: "Leases, work, warranties, and move photos.",
    body: "Keep records of leases, maintenance, appliances, warranties, and move-in and move-out pictures, all in one click.",
    image: "/media/made/files-archive.jpg",
    alt: "Archive boxes, folders, and photographs of rooms",
  },
];

// Shared limits are repeated on every live pricing card.
// Here they are stated once, then the three ways to pay, so the page is easier to compare.
export const sharedTerms = [
  "Unlimited properties",
  "Unlimited buildings",
  "Unlimited units",
];

export const plans = [
  {
    id: "trial",
    name: "14-day free trial",
    price: "Free",
    cadence: "for 14 days",
    note: "No contracts. Pay as you go.",
    emphasized: false,
  },
  {
    id: "yearly",
    name: "Paid yearly",
    price: "$10",
    cadence: "a month, billed yearly",
    note: "Full access for $120 per year. No contracts or hidden fees.",
    emphasized: true,
  },
  {
    id: "monthly",
    name: "Month to month",
    price: "$15",
    cadence: "a month",
    note: "Flexible monthly billing. No contracts or hidden fees.",
    emphasized: false,
  },
];

export const portfolios = [
  {
    id: "residential",
    number: "01",
    title: "Residential",
    image: "/media/living.jpg",
    alt: "A residential living room in daylight",
    lede: "Residential property management, simplified.",
    body: "Manage residential properties from one centralized platform with complete visibility across properties, units, tenants, rent, payments, leases, and maintenance. Keep every important detail organized and make day-to-day property operations easier for owners and property managers.",
    points: [
      "Property and unit management",
      "Tenant and lease tracking",
      "Rent and payment management",
      "Maintenance and service requests",
    ],
  },
  {
    id: "single-family",
    number: "02",
    title: "Single-family",
    image: "/media/made/single-family.jpg",
    alt: "A shingle house with a deep porch and maple trees",
    lede: "Single-family property management made simple.",
    body: "Manage single-family rental properties with a clear and organized view of properties, tenants, leases, rent, payments, and maintenance. Give property owners and managers the tools they need to stay informed, track daily operations, and keep every property running smoothly.",
    points: [
      "Property and unit information",
      "Tenant and lease management",
      "Rent and payment tracking",
      "Maintenance management",
    ],
  },
  {
    id: "multifamily",
    number: "03",
    title: "Multifamily",
    image: "/media/multi.jpg",
    alt: "A multifamily building with rows of balconies",
    lede: "Complete control over multifamily properties.",
    body: "Manage multiple units, tenants, leases, payments, and maintenance activities from one centralized platform. Get a clear view of your multifamily portfolio and keep property operations organized across every building and unit.",
    points: [
      "Multi-unit property management",
      "Tenant and lease tracking",
      "Rent and payment management",
      "Maintenance and operations",
    ],
  },
  {
    id: "mixed-use",
    number: "04",
    title: "Mixed-use",
    image: "/media/made/mixed-use.jpg",
    alt: "A corner building with shops below and windows above",
    lede: "Retail on the ground floor. Apartments above.",
    body: "Manage mixed-use properties that combine ground-floor retail stores with apartments on the upper floors. Keep residential and commercial tenants, leases, rent payments, and maintenance organized in one place.",
    points: [
      "Retail store and residential unit information",
      "Commercial and residential tenant management",
      "Lease and rent payment tracking",
      "Building maintenance and management",
    ],
  },
  {
    id: "commercial",
    number: "05",
    title: "Commercial",
    image: "/media/office.jpg",
    alt: "Commercial towers rising above the street",
    lede: "Commercial property management made simple.",
    body: "Manage commercial properties with an organized view of buildings, business tenants, leases, rent payments, and maintenance. Give property owners and managers the tools they need to manage commercial spaces, maintain tenant relationships, and keep daily operations running smoothly.",
    points: [
      "Commercial property and unit information",
      "Business tenant and lease management",
      "Rent and payment tracking",
      "Property maintenance management",
    ],
  },
  {
    id: "industrial",
    number: "06",
    title: "Industrial",
    image: "/media/warehouse.jpg",
    alt: "The inside of an industrial warehouse",
    lede: "Built for warehouses, plants, and distribution.",
    body: "Manage warehouses, manufacturing facilities, distribution centers, and industrial spaces with better control over tenants, facilities, leases, and operational requirements. Keep property information, occupancy, maintenance, and financial activities organized in one centralized platform.",
    points: [
      "Industrial facility and unit management",
      "Tenant, lease, and occupancy tracking",
      "Rent, billing, and payment management",
      "Maintenance, repairs, and service coordination",
    ],
  },
];

// The live testimonials name a role, not a person, and the portrait photos
// belong to an old template. Roles are kept. Stock faces are not.
export const testimonials = [
  {
    quote:
      "Our platform brings property management, tenant management, payments, and maintenance together in one centralized system, making daily operations easier to manage.",
    role: "Property management",
  },
  {
    quote:
      "Managing maintenance requests becomes much easier when tasks can be assigned, tracked, and updated from one platform.",
    role: "Property management team",
  },
  {
    quote:
      "Having a centralized system makes it easier for different teams to stay connected and manage their assigned property operations.",
    role: "Operations team",
  },
  {
    quote:
      "Having property information, tenant details, leases, and financial activity organized in one place gives our team better visibility and control.",
    role: "Property owner",
  },
  {
    quote:
      "The platform helps keep rental payments, outstanding dues, and financial records organized across our properties.",
    role: "",
  },
  {
    quote:
      "A single platform for properties, tenants, payments, leases, and maintenance makes property operations more organized and efficient.",
    role: "Property management",
  },
];
