import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Your translations
const resources = {
  en: {
    translation: {
      "name": "CodeCraft",
      // NavBar
      "home": "Home",
      "aboutus": "About Us", 
      "courses": "Courses",
      "StartingLog_In": "Get Started",

      // HERO
      "title": "Bridging the Digital Divide Across the Arab World Through Accessible Tech Education",
      "tamkeen": "Empowering a Generation",
      "desc" : "The digital world is moving fast, but millions in the Arab world are still left behind. We’re building a platform that empowers learners to become creators — turning digital skills into a right, not a privilege.",
      "count": " Trained Students",

      // LANDING PAGE
       "aboutname": "What is",
       "about_breif": "CodeCraft is a nonprofit platform dedicated to empowering the Arab community with the digital skills necessary to thrive in today’s fast-paced world. Through free, high-quality mentorship and hands-on learning, we aim to bridge the digital skills gap, giving every Arabic speaker the opportunity to excel in technology and innovation — all in their native language.",
       "get_started": "Get Started",

         "aboutCards": [
    {
      "icon": "FaLaptopCode",
      "name": "Arabic-First Learning",
      "detail": "Content Designed Specifically for The Arab Community"
    },
    {
      "icon": "FaProjectDiagram",
      "name": "Project-Based Curriculum",
      "detail": "Learn by Building Real Projects, Not Just Theory",
      "up": true,
    },
    {
      "icon": "FaUsers",
      "name": "Community Driven",
      "detail": "Peer learning and mentor support"
    }
  ],

  // Stats

  "stats": [
    {
       "count": " Trained Students",
       "courses": "6+ Courses Given",
       "volunnters": "10+ Volunnters",
    }
  ],

  // Testimonials
  "testimonials": "Testimonials",
  "reviews": [
    {
      "name": "Alaa",
      "review": "The greatest course I've ever taken",
      "course": "Frontend"
    },
    {
      "name": "Aola",
      "review": "I really enjoyed how the course was given",
      "course": "Graphic Design",
    },
    {
      "name": "Sami",
      "review": "It was the greatest course I've ever taken",
      "course": "Frontend",
    },
    {
      "name": "Solaf",
      "review": "On time courses, and tasks. Really thankful for the expereince!",
      "course": "Frontend"
    },
    {
      "name": "Malik",
      "review": "I really enjoyed it!",
      "course": "Backend"
    },
    {
      "name": "Solar",
      "review": "I recommend the course to everyone",
      "course": "Graphic Design"
    }
  ],
      
      // COURSES
      "enroll": "Enroll Now",
      "continue_learning": "Continue Learning",
      "resume": "Resume",
      "completed": "Completed",
      
      // But you can use simple keys too:
      "welcome": "Welcome back, {{name}}!",
    }
  },
  ar: {
    translation: {
      "name": "مبادرة كود كرافت",
      // NAVIGATION  
         "home": "الرئيسية",
        "aboutus": "من نحن", 
        "courses": "الدورات",
        "StartingLog_In": "ابدأ الآن",
      
        // Hero
     "title": "سد الفجوة الرقمية وتمكين الشباب العربي",
     "tamkeen": "تمكين جيل",
     "desc": "العالم الرقمي يتقدم بسرعة، لكن الملايين في العالم العربي لا يزالون متأخرين. نحن نبني منصة تمكّن المتعلمين من أن يصبحوا صناع محتوى — لتصبح المهارات الرقمية حقًا للجميع، لا امتيازًا.",
     "count": "طالب مدرب",

     // LANDING PAGE
      "aboutname": "ما هي",
      "about_breif": "كود كرافت هي منصة تعليمية غير ربحية تهدف إلى تمكين المجتمع العربي بالمهارات الرقمية اللازمة للنجاح في عالم سريع التغير. من خلال إرشاد مجاني عالي الجودة وتجارب عملية للتعلم، نسعى لسد الفجوة في المهارات الرقمية، ومنح كل متحدث باللغة العربية فرصة للتفوق في مجالات التقنية والابتكار — كل ذلك بلغتهم الأم.",
      "get_started": "ابدأ التعلم",

      "aboutCards": [
        {
          "icon": "FaLaptopCode",
          "name": "التعليم باللغة العربية",
          "detail": "محتوى مصمم خصيصيا للمجتمع العربي"
        },
        {
          "icon": "FaProjectDiagram",
          "name": "منهج قائم على المشاريع",
          "detail": "تعلم من خلال بناء مشاريع حقيقية, وليس النظريات فقط",
          "up": true,
        },
        {
          "icon": "FaUsers",
          "name": "مجتمع كامل",
          "detail": "التعلم الجماعي ودعم مباشر من المدربين"
        }
      ],

      "stats": [
        {
          "count": "طالب مدرب",
          "courses": "6+ دورات مقدمة",
          "volunnters": "10+ متطوعين",
        },
      ],

     "testimonials": "مراجعة الطلاب السابقين",

     "reviews": [
        {
          "name": "علاء",
          "review": "افضل كورس اخذته في حياتي!",
          "course": "تطوير مواقع واجهات امامية",
        },
        {
          "name": "علا",
          "review": "انا جدا استمعت بطريقة اعطاء الكورس",
          "course": "تصميم جرافيكي"
        },
        {
          "name": "سامي",
          "review": "كان افضل كورس اخذته",
          "course": "تطوير مواقع واجهات امامية"
        },
        {
          "name": "ماليك",
          "review": "انا جدا استمعت فيه",
          "course": "تطوير مواقع واجهات خلفية"
        },
        {
          "name": "سولار",
          "review": "انا انصح بهذا الكورس للجميع",
          "course": "Graphic Design"
        }
     ],
      
      
      // COURSES
      "enroll": "سجل الآن",
      "continue_learning": "واصل التعلم", 
      "resume": "استئناف",
      "completed": "مكتمل",
      
      "welcome": "مرحباً بعودتك، {{name}}!",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "ar",
    
    interpolation: {
      escapeValue: false // React already safe from XSS
    }
  });

export default i18n;