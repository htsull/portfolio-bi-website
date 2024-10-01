import { GraduationCap, LucideIcon, Briefcase } from 'lucide-react'

export type timelineDataTypes = {
  id: number
  period: string
  title?: string
  detail: object
  icon?: any
  button?: boolean // Optional
  buttonText?: string // Optional
  href?: string
  location?: string
  company: string
}

export const timelineData: timelineDataTypes[] = [
  {
    id: 1,
    period: 'Mars 2023 – Present',
    title: 'Data analyst',
    detail: {
      1: 'Identify and address data analysis needs for various business units within the company.',
      2: 'GConceptualize and implement analytical tools to evaluate marketing campaigns in a challenging economic context using Python, SQL, and Power BI.',
      3: "Define key performance indicators (KPIs) to measure companies' return on investment (ROI).",
      4: 'Develop interactive dashboards using Power BI to track performance indicators and improve decision-making within the organization.',
      5: 'Serve as a data expert for internal teams to analyze, interpret, and model marketing data using statistical analysis techniques with Python.',
      6: 'Implement complementary data collection tools, such as surveys and user tests, to enrich the existing database.',
      7: 'Monitor data quality and consistency by collaborating with teams using Data Build Tool (dbt) for the ELT (Extract, Load, Transform) process.',
      8: 'Participate in data transformation using Data Build Tool and SQL, optimizing transformation models to ensure data quality and accessibility.',
      9: 'Collaborate with development and data engineering teams to automate data pipelines and improve analytical workflows using Python and SQL.'
    },
    icon: Briefcase,
    button: true,
    buttonText: 'Learn more',
    href: 'https://haitibrand.co/',
    location: 'Montreal, Canada',
    company: 'HaitiBrand'
  },
  {
    id: 2,
    period: 'November 2022',
    title: '',
    detail: {
      1: 'Master’s degree in Information Processing andData science in Business (TIDE)'
    },
    icon: GraduationCap,
    button: true,
    buttonText: 'Learn more',
    href: 'https://formations.pantheonsorbonne.fr/fr/catalogue-des-formations/master-M/master-econometrie-statistiques-KBURDRPJ/master-parcours-traitement-de-l-information-et-data-science-en-entreprise-tide-formation-initiale-et-apprentissage-KBUREJV4.html',
    location: 'Paris, France',
    company: 'Paris 1 Panthéon—Sorbonne University'
  },
  {
    id: 3,
    period: 'May 2022 – November 2022',
    title: 'Data Analyst — Consultant',
    detail: {
      1: "Conducted in-depth analysis to evaluate and enhance debt recovery methods, significantly improving the department's performance.",
      2: 'Designed and implemented performance metrics using SAS and dashboards, facilitating data-driven decision-making.',
      3: 'Optimized reporting processes to improve decision-making using Excel and Power BI.'
    },
    icon: Briefcase,
    button: true,
    buttonText: 'Learn more',
    href: 'https://www.arval.com/',
    location: 'Rueil-Malmaison, France',
    company: 'Arval France'
  },
  {
    id: 4,
    period: 'May 2022 – November 2022',
    title: 'Data Scientist Intern',
    detail: {
      1: 'Played a pivotal role in the collaborative development of a deep learning model that successfully predicted Indira Ampiot from Guadeloupe as the Miss France 2023 winner.',
      2: 'Leveraged advanced data analytics and machine learning techniques to analyze and interpret complex datasets, enabling the team to identify key predictive factors with high accuracy.',
      3: 'This project exemplified my ability to apply innovative AI solutions to real-world challenges, demonstrating both technical proficiency and strong team collaboration skills.'
    },
    icon: Briefcase,
    button: true,
    buttonText: 'Learn more',
    href: 'https://www.avisia.fr/',
    location: 'Paris, France',
    company: 'AVISIA SAS'
  },
  {
    id: 5,
    period: 'February 2021 — August 2021',
    title: 'Data Analyst — Monitoring and Evaluation',
    detail: {
      1: 'Designed data collection instruments, establishing robust measures to assess project progress and impact across multiple areas of intervention.',
      2: 'Managed the entire data lifecycle, ensuring accurate collection, analysis, and presentation of critical project data to stakeholders.',
      3: 'Developed and updated a dynamic Power BI dashboard, providing real-period insights into project outcomes and facilitating strategic adjustments.'
    },
    icon: Briefcase,
    button: true,
    buttonText: 'Learn more',
    href: 'https://www.crs.org/',
    location: 'Port-au-Prince, Haiti',
    company: 'Catholic Relief Services'
  },
  {
    id: 6,
    period: 'January 2020 - February 2021',
    title: 'Research, Evaluation, and Data Analysis Specialist',
    detail: {
      1: 'Conducted comprehensive research and evaluations for health projects funded by the Global Fund, applying advanced statistical methods to assess program effectiveness.',
      2: 'Supervised data collection efforts in the field, ensuring data integrity and adherence to study protocols',
      3: 'Analyzed and disseminated results to donors and partners, contributing to informed decision-making and strategic planning.'
    },
    icon: Briefcase,
    button: true,
    buttonText: 'Learn more',
    href: 'https://www.psi.org/',
    location: 'Port-au-Prince, Haiti',
    company: 'Population Services International'
  },
  {
    id: 7,
    period: 'September 2018 — January 2020',
    title: 'Monitoring, Evaluation, and Data Analysis Officer',
    detail: {
      1: ' Designed monitoring and evaluation frameworks, enhancing the organization’s ability to track program impact and make data-driven improvements.',
      2: 'Developed and implemented innovative data collection methodologies, improving the accuracy and relevance of program data.',
      3: 'Collaborated closely with international partners to harmonize data collection efforts and evaluation methods, ensuring consistency and reliability of project outcomes.'
    },
    icon: Briefcase,
    button: true,
    buttonText: 'Learn more',
    href: 'https://www.mercycorps.org/',
    location: 'Port-au-Prince, Haiti',
    company: 'Mercy Corps'
  },
  {
    id: 8,
    period: 'August 2018',
    title: '',
    detail: {
      1: "Bachelor's degree in Applied Economics and Statistics."
    },
    icon: GraduationCap,
    button: true,
    buttonText: 'Learn more',
    href: 'https://ctpea.ht/',
    location: 'Port-au-Prince, Haiti',
    company: 'Applied Economics and Plannig Center'
  }
]
