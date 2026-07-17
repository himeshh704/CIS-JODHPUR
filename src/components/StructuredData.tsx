import React from "react";

export function StructuredData() {
  const collegeSchema = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    "name": "CIS Jodhpur (College of Institutional Studies)",
    "alternateName": "Centre for International Studies, Jodhpur",
    "url": "https://cisjodhpur.edu.in",
    "logo": "https://cisjodhpur.edu.in/logo.png",
    "description": "Premier higher education institution in Jodhpur, Rajasthan offering Master of Insurance Business (MIB), Actuarial Sciences, InsurTech AI research, and PGDM leadership programs.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "CIS Sandstone Campus, Institutional Area, NH-62",
      "addressLocality": "Jodhpur",
      "addressRegion": "Rajasthan",
      "postalCode": "342001",
      "addressCountry": "IN"
    },
    "telephone": "+91-291-2801000",
    "email": "admissions@cisjodhpur.edu.in",
    "foundingDate": "1998",
    "sameAs": [
      "https://linkedin.com/school/cisjodhpur",
      "https://twitter.com/cisjodhpur",
      "https://instagram.com/cisjodhpur"
    ],
    "hasCourse": [
      {
        "@type": "Course",
        "name": "Master of Insurance Business (MIB)",
        "description": "Flagship 2-year strategic corporate risk and insurance leadership management track.",
        "provider": {
          "@type": "CollegeOrUniversity",
          "name": "CIS Jodhpur"
        }
      },
      {
        "@type": "Course",
        "name": "B.Sc. / M.Sc. Actuarial Sciences",
        "description": "Rigorous quantitative financial risk modeling degree aligned with IFoA standards.",
        "provider": {
          "@type": "CollegeOrUniversity",
          "name": "CIS Jodhpur"
        }
      },
      {
        "@type": "Course",
        "name": "M.Sc. InsurTech & Clinical Risk AI",
        "description": "Advanced computational risk modeling with machine learning and GPU simulation clusters.",
        "provider": {
          "@type": "CollegeOrUniversity",
          "name": "CIS Jodhpur"
        }
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the admission deadline for the 2026-27 cohort at CIS Jodhpur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Applications for the Class of 2026-27 officially close on March 31, 2026 for early admissions evaluation."
        }
      },
      {
        "@type": "Question",
        "name": "Does CIS Jodhpur offer 100% merit-based tuition waivers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Candidates scoring 98th percentile or above in CAT, XAT, CIS-SAT, or possessing top academic merit indices are eligible for the Dean's Full Merit Scholarship offering a 100% tuition fee waiver."
        }
      },
      {
        "@type": "Question",
        "name": "What are the major placement achievements of CIS Jodhpur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CIS Jodhpur maintains a 95%+ placement record across 500+ global corporate recruiters including Bloomberg, Swiss Re, Allianz, HDFC Life, and leading InsurTech AI firms."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collegeSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
