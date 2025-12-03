import { Project, SkillCategory, SkillDetails } from './types';

export const SKILLS_DATA: SkillDetails[] = [
  {
    id: SkillCategory.AI,
    title: 'هوش مصنوعی برای کسب و کار',
    description: 'به عنوان متخصص هوش مصنوعی، من با بهره‌گیری از مدل‌های زبانی بزرگ (LLMs) و فریم‌ورک‌هایی نظیر LangChain و TensorFlow، راهکارهای هوشمندی خلق می‌کنم که فراتر از یک چت‌بات ساده هستند. تخصص من در طراحی ایجنت‌های خودمختار (Autonomous Agents)، پیاده‌سازی سیستم‌های RAG برای جستجوی هوشمند در اسناد سازمانی و خودکارسازی فرآیندهای پیچیده کسب‌وکار است. من با تحلیل دقیق داده‌های شما، گلوگاه‌های عملیاتی را شناسایی کرده و با جایگزینی هوش مصنوعی، نه تنها هزینه‌ها را تا ۴۰٪ کاهش می‌دهم، بلکه سرعت و دقت تصمیم‌گیری‌های سازمانی را به طرز چشمگیری ارتقا می‌بخشم.',
    iconName: 'Bot',
    tags: ['Automation', 'LLM Engineering', 'Data Mining', 'AI Agents', 'Python']
  },
  {
    id: SkillCategory.WEB,
    title: 'طراحی و توسعه وب',
    description: 'توسعه وب برای من ترکیب هنر و مهندسی است. من با تسلط کامل بر Next.js، React و TypeScript، وب‌سایت‌هایی می‌سازم که در لبه تکنولوژی قرار دارند. تمرکز من بر خلق تجربه‌های کاربری (UX) بی‌نقص، رابط‌های کاربری (UI) خیره‌کننده با استفاده از Tailwind CSS و انیمیشن‌های Framer Motion است. پروژه‌های من کاملاً برای موتورهای جستجو (SEO) بهینه شده‌اند، بالاترین امتیازهای Core Web Vitals را دریافت می‌کنند و به صورت PWA (وب‌اپلیکیشن پیش‌رونده) پیاده‌سازی می‌شوند تا تجربه‌ای مشابه اپلیکیشن‌های بومی را در مرورگر ارائه دهند.',
    iconName: 'Layout',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Performance']
  },
  {
    id: SkillCategory.GRAPHIC,
    title: 'طراحی گرافیک و هویت بصری',
    description: 'طراحی گرافیک زبان بصری برند شماست. من با درک عمیق از روانشناسی رنگ‌ها، تایپوگرافی و اصول گشتالت، هویت بصری یکپارچه‌ای برای شما خلق می‌کنم که در ذهن مخاطب حک شود. خدمات من از طراحی لوگو و اوراق اداری آغاز شده و تا طراحی رابط کاربری (UI) نرم‌افزار، بسته‌بندی محصولات و پوسترهای تبلیغاتی ادامه می‌یابد. من از ابزارهای قدرتمند Adobe Creative Cloud استفاده می‌کنم تا طرح‌هایی خلق کنم که نه تنها زیبا هستند، بلکه پیام برند شما را با شفافیت و قدرت به مخاطب منتقل می‌کنند.',
    iconName: 'Palette',
    tags: ['Adobe Photoshop', 'Illustrator', 'Figma', 'Brand Identity', 'UI Design']
  },
  {
    id: SkillCategory.MARKETING,
    title: 'دیجیتال مارکتینگ و استراتژی',
    description: 'دیجیتال مارکتینگ بدون تحلیل داده، تیری در تاریکی است. من با رویکردی داده‌محور (Data-Driven)، استراتژی‌های بازاریابی ۳۶۰ درجه تدوین می‌کنم که تمام نقاط تماس مشتری (Touchpoints) را پوشش دهد. تخصص من شامل بهینه‌سازی نرخ تبدیل (CRO)، سئو پیشرفته تکنیکال و محتوایی، مدیریت کمپین‌های Google Ads با بودجه‌بندی هوشمند و بازاریابی در شبکه‌های اجتماعی است. من به شما کمک می‌کنم تا با کمترین هزینه جذب مشتری (CAC)، بیشترین ارزش طول عمر مشتری (CLV) را ایجاد کنید و فروشی پایدار داشته باشید.',
    iconName: 'TrendingUp',
    tags: ['SEO/SEM', 'Google Analytics', 'Content Strategy', 'Social Media Ads', 'Growth Hacking']
  }
];

export const PROJECTS: Project[] = [
  // AI Projects
  { 
    id: 1, 
    title: 'چت‌بات هوشمند پشتیبانی مشتریان', 
    category: SkillCategory.AI, 
    imageUrl: 'https://picsum.photos/id/1/800/600', 
    description: 'سیستم پاسخگویی خودکار ۲۴ ساعته.',
    longDescription: 'طراحی و توسعه یک چت‌بات هوشمند مبتنی بر GPT-4 برای یک فروشگاه زنجیره‌ای بزرگ. این سیستم قادر است به سوالات متداول مشتریان در مورد وضعیت سفارش، موجودی محصولات و شرایط گارانتی پاسخ دهد. با اتصال به پایگاه داده داخلی شرکت، این بات اطلاعات را به صورت لحظه‌ای فراخوانی می‌کند و حجم تیکت‌های پشتیبانی انسانی را تا ۶۵٪ کاهش داده است.',
    client: 'فروشگاه زنجیره‌ای افق',
    year: '۱۴۰۲',
    tools: ['OpenAI API', 'Python', 'LangChain', 'PostgreSQL']
  },
  { 
    id: 2, 
    title: 'داشبورد پیش‌بینی فروش', 
    category: SkillCategory.AI, 
    imageUrl: 'https://picsum.photos/id/20/800/600', 
    description: 'پیش‌بینی تقاضا با یادگیری ماشین.',
    longDescription: 'توسعه یک داشبورد تحلیلی برای مدیران فروش که با استفاده از الگوریتم‌های سری زمانی (Time Series)، میزان فروش محصولات را در ماه‌های آینده پیش‌بینی می‌کند. این پروژه به شرکت کمک کرد تا مدیریت انبار خود را بهینه کرده و از خواب سرمایه جلوگیری کند.',
    client: 'تولیدی صنعتی پارس',
    year: '۱۴۰۱',
    tools: ['TensorFlow', 'React', 'D3.js', 'FastAPI']
  },
  { 
    id: 3, 
    title: 'تولید محتوای خودکار بلاگ', 
    category: SkillCategory.AI, 
    imageUrl: 'https://picsum.photos/id/3/800/600', 
    description: 'سیستم تولید مقالات سئو شده.',
    longDescription: 'ساخت یک پایپ‌لاین تولید محتوا که کلمات کلیدی را دریافت کرده و مقالات جامع، یونیک و سئو شده تولید می‌کند. این سیستم شامل مراحل تحقیق، نگارش، و ویراستاری خودکار است و تصاویر مرتبط را نیز پیشنهاد می‌دهد.',
    client: 'آژانس دیجیتال مارکتینگ نوین',
    year: '۱۴۰۲',
    tools: ['Python', 'SEO Tools', 'Stable Diffusion', 'Django']
  },
  { 
    id: 4, 
    title: 'دستیار صوتی جلسات', 
    category: SkillCategory.AI, 
    imageUrl: 'https://picsum.photos/id/4/800/600', 
    description: 'تبدیل گفتار به متن و خلاصه‌سازی.',
    longDescription: 'اپلیکیشنی برای ضبط جلسات کاری، تبدیل خودکار صحبت‌ها به متن (Transcribe) و استخراج مصوبات و وظایف هر شخص با استفاده از هوش مصنوعی. این ابزار به مدیران کمک می‌کند تا هیچ نکته‌ای را از دست ندهند.',
    client: 'استارتاپ مدیریتی تسک‌لو',
    year: '۱۴۰۳',
    tools: ['Whisper AI', 'React Native', 'Node.js']
  },
  { 
    id: 5, 
    title: 'کنترل کیفیت خط تولید', 
    category: SkillCategory.AI, 
    imageUrl: 'https://picsum.photos/id/60/800/600', 
    description: 'تشخیص عیوب با بینایی ماشین.',
    longDescription: 'پیاده‌سازی سیستم بینایی ماشین (Computer Vision) در خط تولید قطعات خودرو. دوربین‌های نصب شده تصاویر قطعات را اسکن کرده و با دقت ۹۹.۵٪ قطعات معیوب را شناسایی و از خط خارج می‌کنند.',
    client: 'گروه صنعتی سایپا',
    year: '۱۴۰۱',
    tools: ['OpenCV', 'YOLOv8', 'Python', 'Industrial IoT']
  },

  // Web Design Projects
  { 
    id: 6, 
    title: 'پلتفرم آموزش آنلاین', 
    category: SkillCategory.WEB, 
    imageUrl: 'https://picsum.photos/id/6/800/600', 
    description: 'LMS اختصاصی با قابلیت آزمون.',
    longDescription: 'طراحی کامل یک پلتفرم آموزشی مشابه یودمی با قابلیت‌هایی نظیر پخش ویدیو امن، برگزاری آزمون آنلاین، صدور مدرک دیجیتال و پنل مدرسین. رابط کاربری با تمرکز بر سهولت یادگیری طراحی شده است.',
    client: 'آکادمی رشد',
    year: '۱۴۰۲',
    tools: ['Next.js', 'Tailwind', 'Supabase', 'Stripe']
  },
  { 
    id: 7, 
    title: 'فروشگاه لباس لاکچری', 
    category: SkillCategory.WEB, 
    imageUrl: 'https://picsum.photos/id/7/800/600', 
    description: 'تجربه خرید تعاملی سه بعدی.',
    longDescription: 'یک وب‌سایت ای‌کامرس مدرن برای برند لباس لوکس. استفاده از مدل‌های سه بعدی برای نمایش لباس‌ها، انیمیشن‌های اسکرول نرم و فرآیند خرید تک‌مرحله‌ای از ویژگی‌های بارز این پروژه است.',
    client: 'برند مد و پوشاک زاگرس',
    year: '۱۴۰۳',
    tools: ['React', 'Three.js', 'GSAP', 'Shopify Headless']
  },
  { 
    id: 8, 
    title: 'سایت شرکتی هلدینگ مالی', 
    category: SkillCategory.WEB, 
    imageUrl: 'https://picsum.photos/id/8/800/600', 
    description: 'طراحی مینیمال و رسمی.',
    longDescription: 'بازطراحی کامل وب‌سایت یک شرکت سرمایه‌گذاری. هدف اصلی ایجاد حس اعتماد و حرفه‌ای بودن بود. استفاده از تایپوگرافی دقیق و فضای سفید مناسب، خوانایی گزارش‌های مالی را افزایش داده است.',
    client: 'هلدینگ سرمایه‌گذاری آتیه',
    year: '۱۴۰۱',
    tools: ['Gatsby', 'Styled Components', 'Contentful CMS']
  },
  { 
    id: 9, 
    title: 'پنل مدیریت CRM', 
    category: SkillCategory.WEB, 
    imageUrl: 'https://picsum.photos/id/180/800/600', 
    description: 'داشبورد مدیریتی جامع.',
    longDescription: 'طراحی و توسعه فرانت‌اند یک سیستم مدیریت ارتباط با مشتری (CRM). این پنل شامل نمودارهای تحلیلی، مدیریت پایپ‌لاین فروش و سیستم تیکتینگ است که کاملاً واکنش‌گرا پیاده‌سازی شده است.',
    client: 'شرکت نرم‌افزاری پارت',
    year: '۱۴۰۲',
    tools: ['React', 'Material UI', 'Redux Toolkit', 'Chart.js']
  },
  { 
    id: 10, 
    title: 'لندینگ پیج جشنواره نوروزی', 
    category: SkillCategory.WEB, 
    imageUrl: 'https://picsum.photos/id/10/800/600', 
    description: 'صفحه فرود با نرخ تبدیل بالا.',
    longDescription: 'طراحی یک لندینگ پیج اختصاصی برای کمپین فروش ویژه نوروز. استفاده از المان‌های گیمیفیکیشن (گردونه شانس) و تایمر معکوس باعث افزایش ۳۵ درصدی نرخ تبدیل نسبت به سال گذشته شد.',
    client: 'دیجی‌کالا (کمپین)',
    year: '۱۴۰۲',
    tools: ['Vue.js', 'Tailwind', 'Firebase']
  },

  // Graphic Design Projects
  { 
    id: 11, 
    title: 'ری‌برندینگ استارتاپ فین‌تک', 
    category: SkillCategory.GRAPHIC, 
    imageUrl: 'https://picsum.photos/id/11/800/600', 
    description: 'طراحی لوگو و هویت بصری کامل.',
    longDescription: 'پروژه بازآفرینی هویت بصری یک استارتاپ حوزه مالی. شامل طراحی لوگو جدید با مفهوم امنیت و سرعت، انتخاب پالت رنگی مدرن، طراحی ست اداری، کارت ویزیت و راهنمای جامع برند (Brand Guidelines).',
    client: 'پی‌منت ۲۴',
    year: '۱۴۰۲',
    tools: ['Adobe Illustrator', 'Photoshop', 'Indesign']
  },
  { 
    id: 12, 
    title: 'قالب‌های اینستاگرام', 
    category: SkillCategory.GRAPHIC, 
    imageUrl: 'https://picsum.photos/id/12/800/600', 
    description: 'پک ۳۰ عددی پست و استوری.',
    longDescription: 'طراحی مجموعه‌ای از قالب‌های گرافیکی لایه باز برای پیج اینستاگرام یک مجله آنلاین. این قالب‌ها به ادمین پیج کمک می‌کند تا با سرعت بالا محتوای بصری هماهنگ و جذاب تولید کند.',
    client: 'مجله تکنولوژی تک‌تایم',
    year: '۱۴۰۳',
    tools: ['Figma', 'Canva', 'Photoshop']
  },
  { 
    id: 13, 
    title: 'بیلبورد تبلیغاتی شهری', 
    category: SkillCategory.GRAPHIC, 
    imageUrl: 'https://picsum.photos/id/13/800/600', 
    description: 'کمپین محیطی برند نوشیدنی.',
    longDescription: 'ایده‌پردازی و طراحی گرافیکی برای بیلبوردهای اتوبان‌های تهران. استفاده از تکنیک فتومونتاژ برای نشان دادن حس تازگی و خنکی محصول در گرمای تابستان.',
    client: 'نوشیدنی‌های انرژی‌زا اکسیر',
    year: '۱۴۰۱',
    tools: ['Photoshop', 'Cinema 4D']
  },
  { 
    id: 14, 
    title: 'بسته‌بندی محصولات آرایشی', 
    category: SkillCategory.GRAPHIC, 
    imageUrl: 'https://picsum.photos/id/250/800/600', 
    description: 'طراحی جعبه و لیبل لوکس.',
    longDescription: 'طراحی پکیجینگ برای خط تولید جدید کرم‌های گیاهی. استفاده از کاغذهای بافت‌دار و چاپ طلاکوب برای القای حس لوکس و ارگانیک بودن محصول به مشتری.',
    client: 'برند آرایشی ناتورا',
    year: '۱۴۰۲',
    tools: ['Illustrator', 'Dimension', 'Packaging Design']
  },
  { 
    id: 15, 
    title: 'کاتالوگ دیجیتال صنعتی', 
    category: SkillCategory.GRAPHIC, 
    imageUrl: 'https://picsum.photos/id/15/800/600', 
    description: 'معرفی محصولات با اینفوگرافیک.',
    longDescription: 'طراحی کاتالوگ ۵۰ صفحه‌ای برای معرفی تجهیزات سنگین صنعتی. تبدیل اطلاعات فنی پیچیده به اینفوگرافیک‌های قابل فهم و جذاب بصری برای ارائه در نمایشگاه‌های بین‌المللی.',
    client: 'گروه صنعتی مپنا',
    year: '۱۴۰۱',
    tools: ['Indesign', 'Illustrator', 'Acrobat Pro']
  },

  // Marketing Projects
  { 
    id: 16, 
    title: 'استراتژی جامع سئو', 
    category: SkillCategory.MARKETING, 
    imageUrl: 'https://picsum.photos/id/16/800/600', 
    description: 'رشد ۳۰۰٪ ترافیک در ۶ ماه.',
    longDescription: 'تدوین و اجرای استراتژی سئو برای یک سایت گردشگری. شامل تحقیق کلمات کلیدی، سئو تکنیکال، لینک‌سازی خارجی و بهینه‌سازی محتوا که منجر به رسیدن به رتبه ۱ گوگل در کلمات کلیدی اصلی شد.',
    client: 'آژانس مسافرتی سفررو',
    year: '۱۴۰۲',
    tools: ['Semrush', 'Ahrefs', 'Google Search Console', 'Screaming Frog']
  },
  { 
    id: 17, 
    title: 'کمپین گوگل ادز', 
    category: SkillCategory.MARKETING, 
    imageUrl: 'https://picsum.photos/id/17/800/600', 
    description: 'کاهش ۴۰٪ هزینه جذب مشتری (CAC).',
    longDescription: 'مدیریت حساب گوگل ادز یک فروشگاه آنلاین. با بهینه‌سازی نمره کیفیت (Quality Score) و هدف‌گیری دقیق مخاطبان، هزینه هر کلیک کاهش و نرخ تبدیل فروش افزایش یافت.',
    client: 'موبایل شاپ',
    year: '۱۴۰۳',
    tools: ['Google Ads', 'Google Tag Manager', 'Google Analytics 4']
  },
  { 
    id: 18, 
    title: 'پرسونال برندینگ لینکدین', 
    category: SkillCategory.MARKETING, 
    imageUrl: 'https://picsum.photos/id/18/800/600', 
    description: 'افزایش ۱۰ برابری ایمپرشن.',
    longDescription: 'مشاوره و مدیریت اکانت لینکدین مدیرعامل یک شرکت تکنولوژی. تدوین تقویم محتوایی، نگارش پست‌های ویروسی و تعامل استراتژیک که باعث شد پروفایل ایشان به عنوان "Top Voice" در صنعت شناخته شود.',
    client: 'شخصی',
    year: '۱۴۰۲',
    tools: ['LinkedIn Analytics', 'Shield App', 'Content Calendar']
  },
  { 
    id: 19, 
    title: 'ایمیل مارکتینگ و اتوماسیون', 
    category: SkillCategory.MARKETING, 
    imageUrl: 'https://picsum.photos/id/19/800/600', 
    description: 'نرخ باز شدن (Open Rate) ۲۵٪.',
    longDescription: 'طراحی سفر مشتری (Customer Journey) و پیاده‌سازی سیستم ایمیل مارکتینگ خودکار. ارسال ایمیل‌های خوش‌آمدگویی، رها کردن سبد خرید و پیشنهادات ویژه بر اساس رفتار کاربر.',
    client: 'فروشگاه کتاب آنلاین',
    year: '۱۴۰۱',
    tools: ['Mailchimp', 'HubSpot', 'Copywriting']
  },
  { 
    id: 20, 
    title: 'تحلیل بازار و رقبا', 
    category: SkillCategory.MARKETING, 
    imageUrl: 'https://picsum.photos/id/20/800/600', 
    description: 'گزارش استراتژیک ورود به بازار.',
    longDescription: 'انجام تحقیقات بازار جامع برای ورود یک برند خارجی به بازار ایران. تحلیل نقاط قوت و ضعف رقبا (SWOT)، بررسی قیمت‌گذاری‌ها و شناسایی فرصت‌های بکر بازار.',
    client: 'برند لوازم خانگی خارجی',
    year: '۱۴۰۲',
    tools: ['Market Research', 'Excel', 'Power BI']
  },
];