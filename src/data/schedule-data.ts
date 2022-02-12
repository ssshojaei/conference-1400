import miladMoafi from "assets/images/speakers/milad-moafi.png";
import miladAzami from "assets/images/speakers/milad-azami.png";
import amirAliGholi from "assets/images/speakers/amirali-gholi.png";
import mohammadRezaAla from "assets/images/speakers/mohammadreza_ala.jpg";
import sobhanAminNejad from "assets/images/speakers/sobhan.jpg";
import mohammadMahmoodi from "assets/images/speakers/mohammad_mahmoodi.jpg";
import speaker3 from "assets/images/speakers/speaker-3.jpg";

export const itemsData: item[] = [
  {
    time: "9:00",
    type: "management",
    title: "پذیرش مهمان‌ها",
  },
  {
    time: "10:00",
    type: "management",
    title: "مقدمه و معرفی همایش",
  },
  {
    time: "10:30",
    type: "presentation",
    title: "سفر در زمان (بازگشت به دوران سایت‌های استاتیک)",
    showByDefault: true,
    expandable: true,
    content:
      "در اولین بخش امیرعلی تجربیاتش رو درباره‌ چالش‌ها، مشکلات و راه حل‌های راه‌اندازی یک وبلاگ استاتیک در سطح تجاری با ما به اشتراک میذاره.",
    speaker: {
      name: "امیرعلی قلی",
      avatar: amirAliGholi,
      links: {
        linkedin: "https://www.linkedin.com/in/gholi-dev",
        github: "https://github.com/gholi-dev",
      },
    },
  },
  {
    time: "11:00",
    type: "presentation",
    title: "واقعیت های دنیای برنامه نویسی",
    showByDefault: true,
    expandable: true,
    content:
      "یادگیری برنامه نویسی چقدر طول میکشه؟ پیدا کردن کار راحته؟ تو شهرستان هم میتونم کار بکنم؟ اصلا حقوق برنامه نویسی چقدره؟",
    speaker: {
      name: "میلاد اعظمی",
      avatar: miladAzami,
      links: {
        linkedin: "https://www.linkedin.com/in/milad-azami-b226631b5/",
        instagram: "https://www.instagram.com/javascript.front/",
      },
    },
  },
  {
    time: "11:30",
    type: "presentation",
    title: "چطور یک پروژه مقیاس‌پذیر رو شروع کنیم",
    showByDefault: true,
    expandable: true,
    content: "تجربه‌های ری‌فکتور کردن و نگهداری از یک پروژه تجاری با میلیون‌ها کاربر",
    speaker: {
      name: "میلاد معافی",
      avatar: miladMoafi,
      links: {
        linkedin: "https://www.linkedin.com/in/milixov",
        twitter: "https://twitter.com/milixof/",
      },
    },
  },
  {
    time: "11:50",
    type: "break",
    title: "پذیرایی و استراحت ظهر",
  },
  {
    time: "12:30",
    type: "talk",
    title: "پنل گفت‌وگو مشارک تیمی در شرکت‌های بزرگ با مشارکت میهمانان",
    expandable: true,
    content:
      "شرکت‌های بزرگ فناوری مثل دیوار و اسنپ و باسلام از تجربه‌هاشون درمورد اینکه تیم‌های نامتمرکز توی یک شرکت چطوری با هم دیگه کار می‌کنند و کارها چطوری تقسیم میشه و پیش میره برامون میگن و ما هم هر پرسشی داشتیم در این مورد باهاشون مطرح می‌کنیم",
    speaker: {
      name: "مجری پنل",
      avatar: speaker3,
      links: {
        twitter: "",
        linkedin: "",
      },
    },
  },
  {
    time: "13:30",
    type: "management",
    title: "معرفی مسابقه",
    expandable: true,
    content:
      "با همکاری کوئرا یک مسابقه‌ی جذاب طراحی کردیم که با برنده شدن داخلش علاوه بر گرفتن هدیه‌های یادبود، به شرکت‌های بزرگ فناوری ایران هم توسط کوئرا برای استخدام معرفی می‌شوید",
  },
  {
    time: "14:00",
    type: "break",
    title: "نهار و استراحت",
    expandable: true,
    content:
      "برای صرف نهار و استراحت بین دو نیمه به سالن لادن میریم و نهار رو کنار هم هستیم. منوی نهار برای علاقه‌مندان به شرح زیر است:" +
      "\n" +
      "سبزی پلو با گوشت گوساله / سالاد فصل / نوشابه قوطی و دوغ / آب معدنی / خورش مرغ با آلوچه وحشی و اناردون و برنج سفید",
  },
  {
    time: "15:30",
    type: "management",
    title: "اعلام برنده‌ی مسابقه و توییت برتر",
  },
  {
    time: "16:00",
    type: "presentation",
    title: "پرفورمنس در وب اپ اسنپ",
    showByDefault: true,
    expandable: true,
    content:
      "محمدرضا از شگردهایی که طراحی کردند برای بهتر شدن پرفورمنس وب اپ اسنپ رو باهامون به اشتراک میگذاره و از تجربه‌هاش در این زمینه برامون میگه",
    speaker: {
      name: "محمدرضا اعلا",
      avatar: mohammadRezaAla,
      links: {
        twitter: "https://twitter.com",
        facebook: "https://facebook.com",
        mastodon: "https://mastodon.social",
      },
    },
  },
  // {
  //   time: "16:20",
  //   type: "management",
  //   title: "میان برنامه‌ی سوم",
  // },
  {
    time: "16:30",
    type: "presentation",
    title: "پرفورمنس وب",
    showByDefault: true,
    expandable: true,
    content: "نکاتی درمورد web vitals و بهینه‌سازی عملکرد وب",
    speaker: {
      name: "محمد محمودی",
      avatar: mohammadMahmoodi,
      links: {
        twitter: "https://twitter.com",
        facebook: "https://facebook.com",
        mastodon: "https://mastodon.social",
      },
    },
  },
  {
    time: "16:50",
    type: "break",
    title: "پذیرایی و استراحت عصر",
  },
  {
    time: "17:30",
    type: "talk",
    title: "ورک‌شاپ تخصصی زیر کاپوت جاوااسکریپت",
    showByDefault: true,
    expandable: true,
    content:
      "سبحان به صورت کامل از زیر کاپوت جاوااسکریپت و انجین‌هایی که جاوااسکریپت رو اجرا میکنن بهمون میگه و درک دقیق‌تری از اینکه جاوااسکریپت واقعا چطوری داره کار میکنه بهمون میده",
    speaker: {
      name: "سبحان امین‌نژاد",
      avatar: sobhanAminNejad,
      links: {
        twitter: "https://twitter.com",
        facebook: "https://facebook.com",
        mastodon: "https://mastodon.social",
      },
    },
  },
  {
    time: "18:30",
    type: "management",
    title: "اهدای جوایز و اختتامیه",
  },
];

export interface item {
  time: string;
  type: keyof typeof planIcons;
  title: string;
  /**
   * shown in summary view
   */
  showByDefault?: boolean;
  expandable?: boolean;
  content?: string;
  speaker?: {
    name: string;
    avatar: StaticImageData;
    links?: links;
  };
}

export type links = {
  [key in keyof typeof socialMediaIcons]?: string;
};

export const planIcons = {
  management: "ri-flag-fill",
  break: "ri-restaurant-2-fill",
  presentation: "ri-slideshow-2-fill",
  talk: "ri-mic-2-fill",
};

export const socialMediaIcons = {
  github: "ri-github-fill",
  twitter: "ri-twitter-fill",
  linkedin: "ri-linkedin-fill",
  instagram: "ri-instagram-fill",
  facebook: "ri-facebook-fill",
  website: "ri-earth-fill",
  mastodon: "ri-mastodon-fill",
};
