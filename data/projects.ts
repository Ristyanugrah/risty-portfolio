
const projects = [
  // =====================================
  // DATA ANALYTICS & BUSINESS INTELLIGENCE
  // =====================================

  {
    title: "Interactive Sales Dashboard",
    category: "Data Analytics",
    description:
      "An interactive sales dashboard developed using Microsoft Excel to monitor KPIs, analyze sales trends, identify top-performing products, and support business decision-making.",
    image: "/projects/data-analytics/images/interactive-sales-dashboard.png",
    tech: [
      "Microsoft Excel",
      "Pivot Table",
      "Pivot Chart",
      "Slicer",
      "KPI Analysis",
      "Data Visualization",
    ],
    presentation: "/projects/data-analytics/Interactive Sales Dashboard.pdf",
    presentationType: "pdf",
  },

  {
    title: "AdventureWorks Sales Insights & Analytics Dashboard",
    category: "Data Analytics",
    description:
      "An interactive Power BI dashboard analyzing sales performance, product performance, customer insights, and regional trends.",
    image: "/projects/data-analytics/images/adventureworks-dashboard.png",
    tech: [
      "Power BI",
      "Power Query",
      "DAX",
      "Data Modeling",
      "KPI Dashboard",
      "Data Visualization",
    ],
    presentation: "/projects/data-analytics/AdventureWorks Sales Insights & Analytics Dashboard.pdf",
    presentationType: "pdf",
  },

  {
    title: "Customer RFM Analysis",
    category: "Data Analytics",
    description:
      "A customer segmentation project based on Recency, Frequency, and Monetary value to identify customer groups and support targeted marketing strategies.",
    image: "/projects/data-analytics/images/customer-rfm-analysis.png",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "RFM Analysis",
      "Customer Segmentation",
      "Data Visualization",
    ],
    presentation: "/projects/data-analytics/PPT_Customer_RFM_Analysis_Portofolio_Risty.pdf",
    presentationType: "pdf",
  },

  {
    title: "Customer Satisfaction & Sentiment Analysis",
    category: "Data Analytics",
    description:
      "An analytical project exploring customer satisfaction, sentiment, feedback patterns, and service improvement opportunities.",
    image: "/projects/data-analytics/images/customer-satisfaction-analysis.png",
    tech: [
      "Python",
      "Pandas",
      "Exploratory Data Analysis",
      "Sentiment Analysis",
      "Customer Satisfaction",
      "Data Visualization",
    ],
    presentation: "/projects/data-analytics/Customer_Satisfaction_Analysis_Portofolio_Risty.pdf",
    presentationType: "pdf",
  },

  {
    title: "Marketing Channel Performance Analysis",
    category: "Data Analytics",
    description:
      "An analysis of marketing channel performance, campaign effectiveness, and channel contributions to support marketing decisions.",
    image: "/projects/data-analytics/images/marketing-channel-analysis.png",
    tech: [
      "Python",
      "Pandas",
      "Microsoft Excel",
      "Marketing Analytics",
      "Performance Analysis",
      "Data Visualization",
    ],
    presentation: "/projects/data-analytics/Portofolio_Analisis_Performa_Marketing_Channel_Bahasa_Indonesia.pdf",
    presentationType: "pdf",
  },

  {
    title: "Social Media Engagement Analysis",
    category: "Data Analytics",
    description:
      "An analytical project examining social media engagement, content performance, audience interactions, and engagement patterns.",
    image: "/projects/data-analytics/images/social-media-analysis.png",
    tech: [
      "Python",
      "Pandas",
      "Exploratory Data Analysis",
      "Engagement Analysis",
      "Content Performance",
      "Data Visualization",
    ],
    presentation: "/projects/data-analytics/Analisis_Keterlibatan_Media_Sosial_Portofolio_ID.pdf",
    presentationType: "pdf",
  },

  {
    title: "Food Delivery Performance Analysis",
    category: "Data Analytics",
    description:
      "An analysis of delivery time, distance, weather, traffic conditions, and operational efficiency to identify factors affecting delivery performance.",
    image: "/projects/data-analytics/images/food-delivery-analysis.png",
    tech: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Tableau",
      "Exploratory Data Analysis",
      "Statistical Analysis",
    ],
    presentation: "/projects/data-analytics/Food_Delivery_Performance_Data_Analyst_Portfolio.pdf",
    presentationType: "pdf",
  },

  {
    title: "Olist Sales & Revenue Analysis",
    category: "Data Analytics",
    description:
      "A business analysis project exploring sales performance, revenue trends, profitability, and business insights using the Olist dataset.",
    image: "/projects/data-analytics/images/olist-sales-analysis.png",
    tech: [
      "SQL",
      "PostgreSQL",
      "Power BI",
      "DAX",
      "Power Query",
      "Business Analysis",
    ],
    presentation: "/projects/data-analytics/Olist_Sales_Revenue_Analysis_Data_Analyst_Revised.pdf",
    presentationType: "pdf",
  },

  // =====================================
  // WEB DEVELOPMENT & INFORMATION SYSTEMS
  // =====================================

  {
    title: "Internship Registration Management System",
    category: "Web Development",
    description:
      "A web-based system for managing internship registration, applicant information, and administrative data.",
    image: "/projects/web-development/images/internship-registration.png",
    tech: [
      "PHP",
      "Laravel",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "Database Management",
    ],
    presentation: "/projects/web-development/Project_1_Sistem_Manajemen_Pendaftaran_Magang.pdf",
    presentationType: "pdf",
  },

  {
    title: "Digital Guestbook System",
    category: "Web Development",
    description:
      "A digital guestbook application for visitor registration, QR code-based access, photo uploads, and guest data management.",
    image: "/projects/web-development/images/digital-guestbook.png",
    tech: [
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "QR Code",
      "Database Management",
    ],
    presentation: "/projects/web-development/Project_2_Sistem_Buku_Tamu_Digital_Revisi_Portofolio_Tanpa_Garis.pdf",
    presentationType: "pdf",
  },

  {
    title: "BBPVP Guestbook Application",
    category: "Web Development",
    description:
      "A guestbook application supporting visitor registration, attendance recording, and administrative data management.",
    image: "/projects/web-development/images/bbpvp-guestbook.png",
    tech: [
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "System Analysis",
      "Database Management",
    ],
    presentation: "/projects/web-development/Project_3_Aplikasi_Buku_Tamu_BBPVP.pdf",
    presentationType: "pdf",
  },

  {
    title: "Sundara Trans Bus Ticket Booking System",
    category: "Web Development",
    description:
      "A web-based bus ticket booking system for passenger reservations, ticket information, and booking data management.",
    image: "/projects/web-development/images/bus-ticket-booking.png",
    tech: [
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "Database Management",
      "Web Development",
    ],
    presentation: "/projects/web-development/Project_4_Sistem_Pemesanan_Tiket_Bus_Sundara_Trans.pdf",
    presentationType: "pdf",
  },

  {
    title: "Inventory Management System - UD. Diamond Hill",
    category: "Web Development",
    description:
      "An inventory management system using Economic Order Quantity (EOQ), Reorder Point (ROP), and ABC Analysis methods.",
    image: "/projects/web-development/images/inventory-management.png",
    tech: [
      "PHP",
      "Laravel",
      "MySQL",
      "HTML",
      "CSS",
      "EOQ",
      "ROP",
      "ABC Analysis",
    ],
    presentation: "/projects/web-development/Project_5_Sistem_Manajemen_Persediaan_UD_Diamond_Hill.pdf",
    presentationType: "pdf",
  },

  {
    title: "Indonesia Nature Tourism Blog Website",
    category: "Web Development",
    description:
      "A website presenting information about Indonesian natural tourism destinations through an informative and user-friendly interface.",
    image: "/projects/web-development/images/nature-tourism-website.png",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Web Design",
      "Web Development",
    ],
    presentation: "/projects/web-development/Project_6_Website_Blog_Wisata_Alam_Indonesia.pdf",
    presentationType: "pdf",
  },
];

export default projects;
