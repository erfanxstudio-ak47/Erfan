/* ---------- DATA & RENDERING ---------- */
const palettes = [['#3a2f45','#1b1622'],['#2c3d3a','#111a18'],['#4a2e2e','#1e1010'],['#31394a','#131722'],['#3f3320','#181209'],['#2d3a2c','#101710'],['#452e3f','#1c1119'],['#2e3a45','#0f1620']];

const drops = [
  
   { 
    name: 'DIGITAL DESIGN', 
    meta: 'رابط کاربری و فرانت‌اند', 
    metaEn: 'UI & front-end',
    slides: [
      `<strong>🎬 ادیت حرفه‌ای عکس و ویدیو </strong><br>طراحی طرح‌های گرافیکی، کاورها، ادیت پوستر چاپ روی تیشرت و ویرایش‌های فوتوشاپ حرفه‌ای همراه با ادیت ویدیو جهت ارائه نمونه کارهای باکیفیت.`,

      `<strong>💻 فرانت‌اند و کدنویسی وب</strong><br>توسعه وب‌سایت‌ها و سامانه‌ها با استفاده از HTML5, CSS3, JavaScript و بهینه‌سازی دقیق کدهای فرانت‌اند برای سرعت بالا و نمایش عالی در تمامی دستگاه‌ها.`,
     
      `<strong>🎨 طراحی رابط و تجربه کاربری (UI/UX)</strong><br>طراحی و پیاده‌سازی رابط‌های کاربری مدرن، زیبا و واکنش‌گرا (Responsive) با تمرکز بر تجربه کاربری روان، استاندارد و متناسب با نیاز کاربر.`

    ],
    slidesEn: [
      `<strong>🎬 Professional Photo & Video Editing</strong><br>Graphic design, covers, poster editing, and professional Photoshop work along with video editing to deliver high-quality portfolio pieces.`,

      `<strong>💻 Front-end & Web Coding</strong><br>Building websites and systems with HTML5, CSS3, and JavaScript, with careful front-end optimization for speed and great display on every device.`,

      `<strong>🎨 UI/UX Design</strong><br>Designing and implementing modern, beautiful, responsive user interfaces focused on a smooth, standard experience tailored to the user's needs.`
    ],
    items: 'برای مشاهده توضیحات کلیک کنید',
    itemsEn: 'Click to view details',
    buttons: [
      { text: 'پیج جدید erfanXstudio', textEn: 'New page: erfanXstudio', url: 'https://instagram.com/erfanXstudio' },
      { text: '‌پیج قدیم  erfanXmedia', textEn: 'Older works: erfanXmedia', url: 'https://instagram.com/erfanXmedia' }
    ]
  },
  
  { 
    name: 'GAME EDITING', 
    meta: 'خلق ویژگی جدید در بازی ها', 
    metaEn: 'Creating new features in games',
    slides: [
      `<strong>🎮 اسکریپت‌نویسی اختصاصی
      </strong><br>
      طراحی و توسعه اسکریپت‌های اختصاصی برای
      انواع سرور ، نظیر: FiveM (GTAV)
       خلق ویژگی‌های خفن و جدیدی که با استقبال و محبوبیت عالی بین پلیرها همراه بوده است.<br><br>` +
      
      `<strong>🕹️ توسعه و مدسازی برای سایر بازی‌ها</strong><br>امکان بررسی فنی، امکان‌سنجی بستر بازی‌ها و اعمال ایده‌های نوآورانه جهت خلق ویژگی‌های جدید روی برخی بازی ها و تکمیل صفر تا صد این‌گونه پروژه‌ها.`
    ],
    slidesEn: [
      `<strong>🎮 Custom FiveM (GTA V) Scripting</strong><br>Designing, developing, and professionally editing custom scripts for FiveM (GTA V) servers, creating cool new features that have been extremely well received and popular among players.<br><br>` +

      `<strong>🕹️ Development & Modding for Other Games</strong><br>Technical review and feasibility assessment of game platforms, applying innovative ideas to create new features in various games, and completing such projects from start to finish.`
    ],
    images: [
      'images/ge1.jpg',
      'images/ge2.jpg',
      'images/ge3.jpg',
      'images/ge4.jpg',
    ],
    items: 'برای مشاهده توضیحات کلیک کنید',
    itemsEn: 'Click to view details'
  },
  {
    name: 'TOMAN', 
    meta: '(نرم افزار مدیریت پول تومان)', 
    metaEn: 'Smart Income & Expense Ledger',
    slides: [
      `<strong>📱 درباره پروژه</strong><br>« تومان» یک اپلیکیشن فوق‌العاده سریع، سبک و هوشمند برای مدیریت کامل درآمدها، هزینه‌ها و محاسبه لحظه‌ای موجودی است.<br><br>
      این ابزار بدون نیاز به ثبت‌نام است؛ تنها برای <b>اولین بار و نصب اولیه</b> به اینترنت نیاز دارید و پس از آن، بدون نیاز به اینترنت یا نصب مجدد، به‌صورت کاملاً آفلاین در دسترس خواهد بود
      ، و تمامی اطلاعات مالی شما، ۱۰۰٪ روی همان دستگاه و مرورگرتان با امنیت کامل ذخیره می‌شود.<br><br>• <b>کاملاً رایگان:</b> ابزاری حرفه‌ای که با هوشمندی و سخاوتمندی توسعه دهنده، به صورت کاملاً رایگان تقدیم به تمامی پارسی‌زبانان عزیز شده است.`,

      `<strong>⏳ مسیر توسعه و داستان خلق اثر</strong><br>~ <b>۷ روز تلاش فشرده و بی‌وقفه:</b> پشت ظاهر ساده و روان این برنامه، ۷ روز کار فشرده، شبانه‌روزی و تمرکز بی‌وقفه نهفته است.<br>~ <b>بیش از ۶۰ نسخه به‌روزرسانی (Iteration):</b> اعمال بیش از ۶۰ نسخه آپدیت و رفع باگ (Bug Fix) برای دستیابی به بالاترین سطح سرعت و پایداری.`,

      `<strong>🎨 فلسفه طراحی (Design Philosophy)</strong><br>• <b>زیبایی در عین سادگی (Minimalist Design):</b> حذف کامل منوهای پیچیده؛ امکان ثبت تراکنش تنها در ۳ ثانیه.<br><br>
      • <b>اولیت با حریم خصوصی (Privacy-First & Offline-First):</b> ذخیره‌سازی ۱۰۰٪ امن و محلی بدون ارسال داده به هیچ سروری.<br><br>• <b>
      ارگونومی بصری:</b> پشتیبانی کامل از
      تم‌های روشن و تیره (Light & Dark Mode) جهت جلوگیری از خستگی چشم.`,

      `<strong>💡 تمرکز بر راحتی و تجربه کاربری (۱)</strong><br>• <b>میانبر هوشمند ضرب در ۱۰۰۰:</b> وارد کردن عدد ۵۰ جهت تبدیل خودکار به ۵۰,۰۰۰ تومان و افزایش چندبرابری سرعت ثبت.<br><br>• <b>تعاملات زنده و پویا (Micro-interactions):</b> بهره‌گیری از انیمیشن‌های نرم، پیش‌نمایش زنده مبالغ و افکت‌های بصری جذاب.`,

      `<strong>💡 تمرکز بر راحتی و تجربه کاربری (۲)</strong><br>• <b>پیشنهاد خودکار عناوین (Autocomplete):</b> یادگیری هوشمند عناوین قبلی جهت صرفه‌جویی در زمان.<br><br>• <b>
      (Native-like Experience):</b> عملکرد فوق‌العاده روان و پاسخ‌گویی سریع روی انواع موبایل و تبلت.`,

      `<strong>✨ قابلیت‌ها و امکانات برجسته</strong><br>• <b>تم دوگانه:</b> انتخاب تم محبوب در ورود اولیه و قابلیت سوئیچ سریع بین تم تیره و روشن.<br>• <b>ساعت زنده و تاریخ شمسی:</b> نمایش لحظه‌ای زمان و تاریخ شمسی به همراه پیام‌های احوال‌پرسی پویا (صبح، ظهر، عصر، شب).<br>• <b>ثبت توضیحات تکمیلی:</b> امکان افزودن توضیحات برای هر تراکنش و مشاهده آن در پنجره اختصاصی.<br>• <b>تنظیم زمان دستی و خودکار:</b> ثبت تراکنش در زمان فعلی یا تنظیم دقیق تاریخ شمسی و ساعت.`,

      `<strong>📊 محاسبات، گزارش‌گیری و پشتیبان‌گیری</strong><br>• <b>محاسبه‌گر آنی و مانده حساب:</b> نمایش لحظه‌ای مانده حساب پس از هر تراکنش به همراه خلاصه درآمدها، خرج‌ها و موجودی نهایی.<br>• <b>فیلترهای زمانی:</b> قابلیت مشاهده تراکنش‌ها در بازه‌های زمانی «همه»، «روزانه»، «هفتگی» و «ماهانه».<br>• <b>حالت ویرایش پیشرفته:</b> امکان انتخاب و ویرایش تراکنش‌ها.<br>• <b>پشتیبان‌گیری و بازیابی (Backup & Restore):</b> قابلیت دانلود فایل خروجی JSON و بازیابی آن در دستگاه‌های دیگر.`,

      `<strong>🔮 جادوی سادگی و سرعت</strong><br>«اگر تا به حال مدیریت حساب‌وکتاب برایتان کاری خسته‌کننده یا پیچیده بوده، وقت آن رسیده که با
      نرم افزار «تومان»
      این تجربه را بازتعریف کنید.<br><br>
      وقتی برای اولین بار با این برنامه کار می‌کنید، ریزبینی در ساخت انیمیشن‌های زنده و سرعت فوق‌العاده آن شما را شگفت‌زده خواهد کرد. <br><br><br>
      تنها با یک کلیک این ابزار هوشمند را امتحان کنید!»`
    ],
    slidesEn: [
      `<strong>📱 About the Project</strong><br>"Account Ledger" is an ultra-fast, lightweight, and smart web app for complete management of income, expenses, and real-time balance calculations.<br><br>No registration is required — you only need an internet connection <b>the first time, to load and set it up</b>. After that, it works fully offline with no internet or reinstallation needed, and 100% of your financial data is stored securely, right on your own device and browser.<br><br>• <b>100% Free:</b> A professional tool generously made available entirely free of charge for all Persian speakers.`,

      `<strong>⏳ Development Path & Story</strong><br>~ <b>7 days of intensive development:</b> Behind its clean and smooth interface lies 7 days of non-stop, round-the-clock dedication.<br>~ <b>Over 70 iterations:</b> Refined through more than 70 updates and bug fixes to achieve maximum speed and rock-solid stability.`,

      `<strong>🎨 Design Philosophy</strong><br>• <b>Minimalist Design:</b> Complete elimination of complex menus; log transactions in just 3 seconds.<br>• <b>Privacy-First & Offline-First:</b> Zero data sent to any server; 100% secure local browser storage.<br>• <b>Visual Ergonomics:</b> Full Light & Dark Mode support to prevent eye strain at any hour of the day.`,

      `<strong>💡 Focus on Comfort & User Experience (1)</strong><br>• <b>Smart x1000 Shortcut:</b> Simply type 50 to automatically convert it into 50,000 Tomans for lightning-fast entry.<br><br>• <b>Dynamic Micro-interactions:</b> Smooth animations, live amount previews, and visually engaging edit effects.`,

      `<strong>💡 Focus on Comfort & User Experience (2)</strong><br>• <b>Smart Autocomplete:</b> Learns previously entered transaction titles to save repetitive typing time.<br><br>• <b>Native-like Experience:</b> Exceptionally fluid performance and rapid response on all mobile and tablet devices.`,

      `<strong>✨ Highlighted Features</strong><br>• <b>Dual Theme:</b> Theme selection on initial launch with fast toggling between light and dark modes.<br>• <b>Live Clock & Solar Calendar:</b> Real-time date and time display with dynamic greeting messages.<br>• <b>Transaction Notes:</b> Option to append additional notes to transactions, viewable in a dedicated window.<br>• <b>Manual & Auto Time Settings:</b> Record entries at current time or set custom Solar date and hours.`,

      `<strong>📊 Real-Time Calculations, Reporting & Backup</strong><br>• <b>Instant Calculator & Balance:</b> Real-time balance updates after each entry alongside income, expense, and total summaries.<br>• <b>Time Filters:</b> View transactions across All, Daily, Weekly, and Monthly timeframes.<br>• <b>Advanced Edit Mode:</b> Seamlessly select and edit existing transactions.<br>• <b>Backup & Restore:</b> Export JSON files and effortlessly restore data across different devices.`,

      `<strong>🔮 Experience the Magic of Simplicity</strong><br>"If tracking your finances has ever felt tedious or complex, it's time to redefine that experience with Account Ledger. The subtle attention to detail in live animations and rapid performance will amaze you. Give this smart tool a try with just one click!"`
    ],
    items: 'برای مشاهده توضیحات کلیک کنید',
    itemsEn: 'Click to view details',
    webAppUrl: 'https://toman.erfanxstudio.workers.dev/',
    installUrl: 'https://toman.erfanxstudio.workers.dev/',
    installNameFa: 'تومان'
  },
  {
    name: 'SUNLIGHT SMART', 
    meta: 'نرم‌افزار اختصاصی کارگاه', 
    metaEn: 'Custom workshop software',
    slides: [
      `<strong>🌟 درباره پروژه</strong><br>نرم‌افزار SunLightSmart یک سیستم مدیریت مدرن و حرفه‌ای کدنویسی شده است که با هدف حذف روش‌های سنتی و کاغذی طراحی شده است.<br>این برنامه تمامی مراحل ثبت، پیگیری، اطلاع‌رسانی و تسویه حساب دستگاه‌ها را در یک محیط کاربرپسند، همراه با تجربه‌ای سریع، بدون ابهام و لذت‌بخش را برای کاربر به ارمغان می‌آورد.<br><br><strong>⚠️ نکته:</strong> برخلاف «تومان» که برای عموم کاربران طراحی شده، SunLightSmart یک نرم‌افزار انحصاری و اختصاصی است که تنها برای یک کارگاه ساخته شده و اینجا صرفاً برای نمایش قابلیت‌ها معرفی می‌شود.`,
      
      `<strong>🚀 مسیر توسعه و ارزش مهندسی</strong><br>~ <b>۹ روز توسعه فشرده و بی‌وقفه:</b> کل روند ایده‌پردازی، طراحی UI/UX و توسعه نرم‌افزار تنها در ۹ روز انجام شده است.<br>~ <b>بیش از ۸۰ نسخه به‌روزرسانی (Iteration):</b> نرم‌افزار از نسخه پایه تا محصول نهایی بیش از ۸۰ بار آپدیت و بازبینی شده تا تمامی باگ‌ها برطرف شوند.`,
      
      `<strong>🎯 تمرکز بر راحتی و خلاقیت</strong><br>این مسیر فشرده با اولویت قرار دادن سهولت استفاده کاربر، کاهش کلیک‌های اضافی، در ساده‌ترین حالت ممکن تمام امور تعمیرگاه خود را مدیریت کند.`,
      
      `<strong>🌓 پشتیبانی کامل از حالت تیره و روشن (Dark / Light Mode)</strong><br>امکان تغییر پوسته برنامه متناسب با نور محیط برای جلوگیری از خستگی چشم.<br><br><strong>💡 پیشنهاددهنده هوشمند (Auto-Suggest)</strong><br>ارائه پیشنهادهای خودکار هنگام تایپ نام مشتریان یا برندهای قبلی ثبت‌شده، کاهش چشمگیر نیاز به تایپ تکراری و افزایش سرعت ثبت فاکتورهای جدید.`,
      
      `<strong>🔍 جستجو، فیلتر و گروه‌بندی پیشرفته</strong><br>• <b>جستجوی آنی:</b> قابلیت جستجوی سریع بر اساس نام مشتری یا شماره فاکتور.<br>• <b>فیلتر زمانی:</b> امکان مشاهده فاکتورها بر اساس بازه زمانی (از ۱ تا ۷ روز گذشته).<br>• <b>گروه‌بندی هوشمند:</b> نمایش تمام دستگاه‌های یک مشتری در یک دسته مشخص همراه با محاسبه مجموع هزینه آن‌ها.`,
      
      `<strong>🔔 سیستم اطلاع‌رسانی و ثبت دقیق رویدادها</strong><br>• <b>مدیریت اطلاع‌رسانی به مشتری:</b> امکان ثبت وضعیت اطلاع‌رسانی و ثبت دقیق تاریخ و ساعت دقیق ثبت آن.<br>• <b>ثبت روش پرداخت:</b> تعیین نوع تسویه حساب (کارت به کارت، کارتخوان، ثبت در دفتر یا یادآوری).<br>• <b>پشتیبان‌گیری امن</b>`,
      
      `<strong>💡 فلسفه طراحی</strong><br>«این پروژه حاصل تلفیق خلاقیت در طراحی و دقت در کدنویسی است؛ سعی کرده‌ام نرم‌افزاری بسازم که در عین داشتن امکانات کامل مدیریتی، هیچ‌گونه پیچیدگی اضافی به کاربر فرض نکند و سرعت پاسخ‌دهی بالا را در اولویت قرار دهد.»`
    ],
    slidesEn: [
      `<strong>🌟 About the Project</strong><br>SunLightSmart is a modern, professionally-coded management system designed to eliminate traditional, paper-based methods.<br>It brings every stage of registering, tracking, notifying, and settling device accounts into one user-friendly environment, with a fast, clear, and enjoyable experience.<br><br><strong>⚠️ Note:</strong> Unlike "Toman", which was built for the general public, SunLightSmart is an exclusive, custom-built software made for a single workshop only — it's shown here purely as a showcase of its features.`,

      `<strong>🚀 Development Path & Engineering Value</strong><br>~ <b>9 days of intensive, uninterrupted development:</b> the entire ideation, UI/UX design, and software development process was completed in just 9 days.<br>~ <b>Over 80 iterations:</b> the software went through more than 80 updates and revisions from the base version to the final product to fix every bug.`,

      `<strong>🎯 Focus on Comfort & Creativity</strong><br>This intensive process prioritized ease of use and fewer extra clicks, letting the user manage every part of their workshop in the simplest way possible.`,

      `<strong>🌓 Full Dark / Light Mode Support</strong><br>Switch the app's theme to match ambient light and reduce eye strain.<br><br><strong>💡 Smart Auto-Suggest</strong><br>Automatic suggestions while typing previously registered customer names or brands, drastically cutting repetitive typing and speeding up new invoice entry.`,

      `<strong>🔍 Advanced Search, Filter & Grouping</strong><br>• <b>Instant search:</b> quickly search by customer name or invoice number.<br>• <b>Time filter:</b> view invoices within a date range (from 1 to 7 days back).<br>• <b>Smart grouping:</b> shows all of a customer's devices under one group with their total cost calculated.`,

      `<strong>🔔 Notification System & Precise Event Logging</strong><br>• <b>Customer notification management:</b> log notification status along with the exact date and time it was recorded.<br>• <b>Payment method logging:</b> record the settlement type (card-to-card, card reader, ledger entry, or reminder).<br>• <b>Secure backups</b>`,

      `<strong>💡 Design Philosophy</strong><br>"This project is the result of blending creativity in design with precision in coding; I've tried to build software that, while offering complete management capabilities, never assumes unnecessary complexity for the user and prioritizes fast responsiveness."`
    ],
    items: 'برای مشاهده توضیحات کلیک کنید',
    itemsEn: 'Click to view details',
    webAppUrl: 'https://sunlight.erfanxstudio.workers.dev/'
  },
  { 
    name: 'E.GATE SERVICE', 
    meta: 'تعمیر و سرویس تخصصی درب‌های اتوماتیک', 
    metaEn: 'Automatic Door Repair & Service',
    slides: [      `<strong>⚡ تعمیرات تخصصی درب‌های اتوماتیک
    </strong><br>  سرویس کامل مکانیکی انواع درب‌های اتوماتیک (جک پارکینگ ، کرکره برقی ، درب شیشه ای ، و‌انواع راه بند.`,
`<strong>🛠 عیب‌یابی تخصصی سخت‌افزاری و نرم‌افزاری</strong><br>حل مسائل پیچیده، دیباگ نرم‌افزاری کدهای کنترل‌کننده و بازسازی انواع مدار، جهت رفع تداخل‌های پردازشی و سخت‌افزاری.`

      
    ],
    slidesEn: [
      `<strong>⚡ Specialized Repairs</strong><br>Complete mechanical service for all types of automatic doors (parking barrier arms, electric shutters, glass doors, and all kinds of barrier gates).`,
      `<strong>🛠 Specialized Hardware & Software Troubleshooting</strong><br>Solving complex issues, software debugging of controller code, and rebuilding all kinds of circuits to resolve processing and hardware conflicts.`
    ],
    images: [
      'images/hw1.jpg',
      'images/hw2.jpg',
      'images/hw3.jpg',
      'images/hw4.jpg',
      'images/hw5.jpg'
    ],
    items: 'برای مشاهده توضیحات کلیک کنید',
    itemsEn: 'Click to view details'
  }
];

const products = [
  { name: 'ax1', tag: '‌', price: '‌', badge: 'جدید', badgeEn: 'New', img: 'images/p1.jpg' },
  { name: 'ax2', tag: '‌', price: '‌', badge: 'جدید', badgeEn: 'New', img: 'images/p2.jpg' },
  { name: 'ax3', tag: '‌', price: '‌', img: 'images/p3.jpg' },
  { name: 'ax4', tag: '‌', price: '‌', img: 'images/p4.jpg' },
  { name: 'ax5', tag: '‌', price: '‌', img: 'images/p5.jpg' },
  { name: 'ax6', tag: '‌', price: '‌', img: 'images/p6.jpg' },
];

const tickerTrack = document.getElementById('tickerTrack');
const tickerItemsFa = [  
  '<span style="margin: 0 40px;"></span> ERFANXSTUDIO ',
  ' طراح گرافیک // Graphic Designer', 'متخصص هوش مصنوعی // AI Master',
  'برنامه‌نویسی و اسکریپت نویسی // Developer', 'ادیت و ویرایش انواع فایل دیجیتال // Editor',
  'خلق ویژگی های جدید در بازی ها // GAME EDITING',
  '0901 071 7797',
];
const tickerItemsEn = [
  '<span style="margin: 0 40px;"></span> ERFANXSTUDIO ',
  ' Graphic Designer', 'AI Master',
  'Programming & Scripting // Developer', 'Editing all kinds of digital files // Editor',
  'Creating new features in games // GAME EDITING',
  '0901 071 7797',
];
function renderTicker() {
  const items = currentLang === 'en' ? tickerItemsEn : tickerItemsFa;
  tickerTrack.innerHTML = Array(2).fill(items).flat().map(t=>`<span>${t}</span>`).join('');
}
renderTicker();

/* مدیریت و اسلاید ورق‌زدن بخش پروژه های من */
let currentSlideIndices = {};

function changeSlide(dropIndex, direction, event) {
  if (event) event.stopPropagation();
  const drop = drops[dropIndex];
  if (!drop) return;
  const slidesArr = currentLang === 'en' ? (drop.slidesEn || drop.slides) : drop.slides;
  if (!slidesArr) return;

  if (currentSlideIndices[dropIndex] === undefined) {
    currentSlideIndices[dropIndex] = 0;
  }

  let currentIndex = currentSlideIndices[dropIndex];
  let newIndex = currentIndex + direction;

  if (newIndex < 0) {
    newIndex = slidesArr.length - 1;
  } else if (newIndex >= slidesArr.length) {
    newIndex = 0;
  }

  currentSlideIndices[dropIndex] = newIndex;

  const slideTextEl = document.getElementById(`slide-text-${dropIndex}`);
  const counterEl = document.getElementById(`slide-counter-${dropIndex}`);

  if (slideTextEl) {
    slideTextEl.className = 'slide-text';
    void slideTextEl.offsetWidth;
    slideTextEl.innerHTML = slidesArr[newIndex];
    slideTextEl.classList.add(direction > 0 ? 'fade-next' : 'fade-prev');
  }

  if (counterEl) {
    const numLocale = currentLang === 'en' ? 'en-US' : 'fa-IR';
    const idxStr = new Intl.NumberFormat(numLocale).format(newIndex + 1);
    const totalStr = new Intl.NumberFormat(numLocale).format(slidesArr.length);
    counterEl.textContent = currentLang === 'en' ? `${idxStr} of ${totalStr}` : `${idxStr} از ${totalStr}`;
    counterEl.style.direction = currentLang === 'en' ? 'ltr' : 'rtl';
  }
}

function renderDrops() {
  const dropsGrid = document.getElementById('dropsGrid');
  if (!dropsGrid) return;

  dropsGrid.innerHTML = drops.map((drop, index) => {
    const meta = currentLang === 'en' ? (drop.metaEn || drop.meta) : drop.meta;
    const slidesArr = currentLang === 'en' ? (drop.slidesEn || drop.slides) : drop.slides;
    const slideIndex = currentSlideIndices[index] || 0;
    const currentSlideContent = slidesArr[slideIndex] || slidesArr[0];

    const numLocale = currentLang === 'en' ? 'en-US' : 'fa-IR';
    const idxStr = new Intl.NumberFormat(numLocale).format(slideIndex + 1);
    const totalStr = new Intl.NumberFormat(numLocale).format(slidesArr.length);
    const counterText = currentLang === 'en' ? `${idxStr} of ${totalStr}` : `${idxStr} از ${totalStr}`;
    const counterDir = currentLang === 'en' ? 'ltr' : 'rtl';

    let actionButtons = '';
    if (drop.webAppUrl) {
      const btnText = currentLang === 'en' ? 'Live Demo' : 'تست نرم‌افزار';
      actionButtons += `<button class="btn-test-app" onclick="event.stopPropagation(); openWebApp('${drop.webAppUrl}', '${drop.name}')">${btnText}</button>`;
    }
    if (drop.buttons) {
      drop.buttons.forEach(btn => {
        const bText = currentLang === 'en' ? btn.textEn : btn.text;
        actionButtons += `<a href="${btn.url}" target="_blank" rel="noopener noreferrer" class="btn-test-app" onclick="event.stopPropagation()">${bText}</a>`;
      });
    }
    if (drop.images) {
      const btnText = currentLang === 'en' ? 'View Gallery' : 'مشاهده تصاویر';
      actionButtons += `<button class="btn-test-app" onclick="event.stopPropagation(); openGalleryModal(${JSON.stringify(drop.images).replace(/"/g, '&quot;')}, '${drop.name}')">${btnText}</button>`;
    }
    if (drop.installUrl) {
      const installText = currentLang === 'en' ? 'Install' : 'نصب';
      actionButtons += `<button class="btn-test-app btn-install-app" onclick="event.stopPropagation(); openInstallGuideModal('${drop.installUrl}', '${drop.installNameFa || drop.name}')">📲 ${installText}</button>`;
    }

    const prevBtnText = currentLang === 'en' ? 'Back' : 'قبلی';
    const nextBtnText = currentLang === 'en' ? 'Next' : 'بعدی';

    return `
      <div class="drop-card">
        <div class="drop-card-head" style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
          <div>
            <div class="drop-name">${drop.name}</div>
            <div class="drop-meta">${meta}</div>
          </div>
          <div class="drop-arrow" onclick="event.stopPropagation(); toggleDropCardActive(this.closest('.drop-card'))">↓</div>
        </div>

        <div class="drop-body">
          <div class="slider-wrapper" onclick="event.stopPropagation()">
            <div class="slider-content-box">
              <div class="slide-text" id="slide-text-${index}">${currentSlideContent}</div>
            </div>
            <div class="slider-controls">
              <button class="slider-btn" onclick="changeSlide(${index}, -1, event)">${prevBtnText}</button>
              <span class="slider-counter" id="slide-counter-${index}" style="direction: ${counterDir}; unicode-bidi: isolate;">${counterText}</span>
              <button class="slider-btn" onclick="changeSlide(${index}, 1, event)">${nextBtnText}</button>
            </div>
          </div>

          <div class="drop-footer">
            <div class="drop-btn-group">
              ${actionButtons}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  grid.innerHTML = products.map((p, idx) => {
    const badgeText = currentLang === 'en' ? (p.badgeEn || p.badge) : p.badge;
    const badgeHtml = badgeText ? `<span class="badge">${badgeText}</span>` : '';
    const quickAddText = currentLang === 'en' ? 'View Image' : 'مشاهده تصویر';

    return `
      <div class="card" onclick="handleGalleryCardClick(this, ['${p.img}'], '${p.name}')">
        <div class="card-img" style="--c1:${palettes[idx % palettes.length][0]}; --c2:${palettes[idx % palettes.length][1]};">
          <img src="${p.img}" alt="${p.name}" loading="lazy">
          ${badgeHtml}
          <div class="quickadd">${quickAddText}</div>
        </div>
      </div>
    `;
  }).join('');
}

/* ---------- LANGUAGE TOGGLE FUNCTION ---------- */
/* اندازه هر کارت را بر اساس بلندترین اسلاید همان کارت، ثابت می‌کند تا با کلیک قبلی/بعدی تغییر اندازه ندهد */
function fixDropCardHeights() {
  const cards = document.querySelectorAll('.drop-card');
  cards.forEach((card, index) => {
    const contentBox = card.querySelector('.slider-content-box');
    const slideTextEl = card.querySelector('.slide-text');
    const drop = drops[index];
    if (!contentBox || !slideTextEl || !drop) return;

    const slidesArr = currentLang === 'en' ? (drop.slidesEn || drop.slides) : drop.slides;
    if (!slidesArr || !slidesArr.length) return;

    const originalHTML = slideTextEl.innerHTML;
    contentBox.style.minHeight = '0px';
    let maxH = 0;
    slidesArr.forEach(s => {
      slideTextEl.innerHTML = s;
      const h = slideTextEl.scrollHeight;
      if (h > maxH) maxH = h;
    });
    slideTextEl.innerHTML = originalHTML;
    contentBox.style.minHeight = maxH + 'px';
  });
}

function toggleLang() {
  currentLang = currentLang === 'fa' ? 'en' : 'fa';

  const btnDesktop = document.getElementById('langToggleDesktop');
  const btnMobile = document.getElementById('langToggleMobile');
  if (btnDesktop) btnDesktop.textContent = currentLang === 'en' ? 'FA' : 'EN';
  if (btnMobile) btnMobile.textContent = currentLang === 'en' ? 'FA' : 'EN';

  if (currentLang === 'en') {
    document.body.classList.add('lang-en');
  } else {
    document.body.classList.remove('lang-en');
  }

  const heroTagline = document.getElementById('heroTagline');
  if (heroTagline) {
    if (currentLang === 'en') {
      heroTagline.style.direction = 'ltr';
      heroTagline.innerHTML = `
        <span style="color: var(--acid); font-size: 10px; margin: 0 4px;">//</span> Smart Management System 
        <span style="color: var(--acid); font-size: 10px; margin: 0 4px;">//</span> Coding <br>
        <span style="color: var(--acid); font-size: 10px; margin: 0 4px;">//</span> Artificial Intelligence
        <span style="color: var(--acid); font-size: 10px; margin: 0 4px;">//</span> Graphic Design
      `;
    } else {
      heroTagline.style.direction = 'rtl';
      heroTagline.innerHTML = `
        <span style="color: var(--acid); font-size: 10px; margin: 0 4px;">//</span> سیستم مدیریت هوشمند 
        <span style="color: var(--acid); font-size: 10px; margin: 0 4px;">//</span> کدنویسی <br>
        <span style="color: var(--acid); font-size: 10px; margin: 0 4px;">//</span> هوش مصنوعی
        <span style="color: var(--acid); font-size: 10px; margin: 0 4px;">//</span> طراحی گرافیک
      `;
    }
  }

  document.querySelectorAll('[data-en]').forEach(el => {
    if (!el.dataset.fa) {
      el.dataset.fa = el.textContent.trim();
    }
    el.textContent = currentLang === 'en' ? el.dataset.en : el.dataset.fa;
  });

  document.querySelectorAll('[data-en-title]').forEach(el => {
    if (!el.dataset.faTitle) {
      el.dataset.faTitle = el.getAttribute('title') || '';
    }
    el.setAttribute('title', currentLang === 'en' ? el.dataset.enTitle : el.dataset.faTitle);
  });

  document.querySelectorAll('[data-en-placeholder]').forEach(el => {
    if (!el.dataset.faPlaceholder) {
      el.dataset.faPlaceholder = el.getAttribute('placeholder') || '';
    }
    el.setAttribute('placeholder', currentLang === 'en' ? el.dataset.enPlaceholder : el.dataset.faPlaceholder);
  });

  document.querySelectorAll('[data-en-aria]').forEach(el => {
    if (!el.dataset.faAria) {
      el.dataset.faAria = el.getAttribute('aria-label') || '';
    }
    el.setAttribute('aria-label', currentLang === 'en' ? el.dataset.enAria : el.dataset.faAria);
  });

  const footerCopy = document.getElementById('footerCopyright');
  if (footerCopy) {
    if (currentLang === 'en') {
      footerCopy.innerHTML = `©All rights reserved for erfanXstudio.`;
    } else {
      footerCopy.innerHTML = `© All Rights Reserved <br><span>تمام حقوق برای erfanXstudio محفوظ است.</span>`;
    }
  }

  restartTypewriter();
  updateIranTime();
  renderTicker();
  renderDrops();
  renderProducts();
  fixDropCardHeights();
  populateAgeSelectors();

  const modal = document.getElementById('webAppModal');
  if (modal && modal.classList.contains('show')) {
    updateGalleryView();
  }
}

/* رندر اولیه */
renderDrops();
renderProducts();
fixDropCardHeights();
populateAgeSelectors();

let dropHeightResizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(dropHeightResizeTimer);
  dropHeightResizeTimer = setTimeout(fixDropCardHeights, 200);
});

document.addEventListener('click', function(e){
  if (!e.target.closest('.card')) {
    document.querySelectorAll('.card.active').forEach(c => c.classList.remove('active'));
  }
});

/* ---------- فینگر اسلاید بین عکس‌های گالری ---------- */
(function initGallerySwipe() {
  const wrapper = document.getElementById('webAppImgWrapper');
  if (!wrapper) return;

  let touchStartX = 0;
  let touchStartY = 0;
  let isTouching = false;

  wrapper.addEventListener('touchstart', (e) => {
    if (e.touches.length !== 1) return;
    isTouching = true;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  wrapper.addEventListener('touchend', (e) => {
    if (!isTouching) return;
    isTouching = false;
    const touch = e.changedTouches[0];
    const dx = touch.clientX - touchStartX;
    const dy = touch.clientY - touchStartY;

    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      const isRTL = (typeof currentLang !== 'undefined' && currentLang !== 'en');
      const swipedLeft = dx < 0;
      const goNext = isRTL ? !swipedLeft : swipedLeft;
      if (goNext) {
        nextGalleryImage();
      } else {
        prevGalleryImage();
      }
    }
  }, { passive: true });
})();

