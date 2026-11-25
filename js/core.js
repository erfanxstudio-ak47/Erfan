/* ---------- MODAL SCROLL LOCK ---------- */
let openModalCount = 0;
let scrollLockY = 0;
function lockBodyScroll() {
  openModalCount++;
  if (openModalCount > 1) return;
  scrollLockY = window.scrollY || window.pageYOffset || 0;
  document.body.style.position = 'fixed';
  document.body.style.top = -scrollLockY + 'px';
  document.body.style.left = '0';
  document.body.style.right = '0';
  document.body.style.width = '100%';
}
function unlockBodyScroll() {
  if (openModalCount === 0) return;
  openModalCount--;
  if (openModalCount > 0) return;
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.left = '';
  document.body.style.right = '';
  document.body.style.width = '';
  const prevBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = 'auto';
  window.scrollTo(0, scrollLockY);
  document.documentElement.style.scrollBehavior = prevBehavior;
}

/* ---------- LANGUAGE STATE ---------- */
let currentLang = 'fa';

/* ---------- IRAN TIME AND DATE ---------- */
/* formatters built once and reused every tick, instead of re-created each second */
const _fmtEnTime = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Tehran', hour: '2-digit', minute: '2-digit', second: '2-digit'
});
const _fmtEnYear = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Tehran', year: 'numeric' });
const _fmtEnMonth = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Tehran', month: 'long' });
const _fmtEnDay = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Tehran', day: 'numeric' });
const _fmtEnWeekday = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Tehran', weekday: 'long' });
const _fmtFaTimeParts = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Tehran', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false });
const _fmtFaYear = new Intl.DateTimeFormat('fa-IR', { timeZone: 'Asia/Tehran', calendar: 'persian', year: 'numeric' });
const _fmtFaMonth = new Intl.DateTimeFormat('fa-IR', { timeZone: 'Asia/Tehran', calendar: 'persian', month: 'long' });
const _fmtFaDay = new Intl.DateTimeFormat('fa-IR', { timeZone: 'Asia/Tehran', calendar: 'persian', day: 'numeric' });
const _fmtFaWeekday = new Intl.DateTimeFormat('fa-IR', { timeZone: 'Asia/Tehran', calendar: 'persian', weekday: 'long' });

function updateIranTime() {
  const now = new Date();
  const timeEl = document.getElementById('iranTime');
  const dateEl = document.getElementById('iranDate');

  if (currentLang === 'en') {
    if (timeEl) timeEl.textContent = _fmtEnTime.format(now);

    const y = _fmtEnYear.format(now);
    const m = _fmtEnMonth.format(now);
    const d = _fmtEnDay.format(now);
    const w = _fmtEnWeekday.format(now);
    if (dateEl) dateEl.textContent = `${w}, ${d} ${m} ${y}`;
  } else {
    const parts = _fmtFaTimeParts.formatToParts(now);
    let h = 0, m = 0, s = 0;
    parts.forEach(p => {
      if (p.type === 'hour') h = parseInt(p.value, 10);
      if (p.type === 'minute') m = parseInt(p.value, 10);
      if (p.type === 'second') s = parseInt(p.value, 10);
    });

    let h12 = h % 12;
    if (h12 === 0) h12 = 12;

    let suffix = '';
    if (h >= 20 || h === 0) {
      suffix = 'شب';
    } else if (h >= 1 && h <= 3) {
      suffix = 'نصفه شب';
    } else if (h >= 4 && h <= 11) {
      suffix = 'صبح';
    } else if (h >= 12 && h <= 15) {
      suffix = 'ظهر';
    } else if (h >= 16 && h <= 19) {
      suffix = 'عصر';
    }

    const toFaDigits = num => String(num).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
    const hStr = toFaDigits(String(h12).padStart(2, '0'));
    const mStr = toFaDigits(String(m).padStart(2, '0'));
    const sStr = toFaDigits(String(s).padStart(2, '0'));

    if (timeEl) timeEl.textContent = `${hStr}:${mStr}:${sStr} ${suffix}`;

    const y = _fmtFaYear.format(now);
    const mFa = _fmtFaMonth.format(now);
    const d = _fmtFaDay.format(now);
    const w = _fmtFaWeekday.format(now);
    if (dateEl) dateEl.textContent = `${w} ${d} ${mFa} ${y}`;
  }
}
updateIranTime();
setInterval(updateIranTime, 1000);

let heroFlippedOnce = false;

function toggleHeroFlip() {
  const flipCard = document.getElementById('heroFlipCard');
  const badge = document.getElementById('heroBadge');
  const badgeIcon = document.getElementById('heroBadgeIcon');
  const wrapper = document.getElementById('heroImageWrapper');
  if (flipCard) {
    flipCard.classList.toggle('flipped');
    const isFlipped = flipCard.classList.contains('flipped');

    if (wrapper) {
      wrapper.classList.toggle('glow-on', isFlipped);
    }

    if (isFlipped && badge) {
      badge.classList.remove('pulse');
      badge.classList.add('seen');
    }

    if (badgeIcon) {
      if (isFlipped) {
        heroFlippedOnce = true;
        badgeIcon.textContent = '↺';
      } else {
        badgeIcon.textContent = heroFlippedOnce ? '[i]' : '[?]';
      }
    }
  }
}

/* ---------- PAGE LOADER ---------- */
function initPageLoader() {
  const loader = document.getElementById('page-loader');
  const heroImg = document.querySelector('.hero-flip-front img') || document.querySelector('.hero-image-wrapper img');

  const fontPromise = document.fonts ? document.fonts.ready : Promise.resolve();

  const imgPromise = new Promise((resolve) => {
    if (!heroImg || heroImg.complete) {
      resolve();
    } else {
      heroImg.onload = resolve;
      heroImg.onerror = resolve;
    }
  });

  Promise.all([fontPromise, imgPromise]).then(() => {
    setTimeout(() => {
      if (loader) loader.classList.add('hide-loader');
      setTimeout(() => triggerRingIntroPulse(), RING_INTRO_DELAY_MS);
    }, 300);
  });
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', initPageLoader);
} else {
  initPageLoader();
}

/* ---------- کنترل‌کننده‌ی یکپارچه‌ی حلقه‌ی نورانی دکمه‌ها ----------
   همه‌ی حالت‌ها (نفسِ آرام، چشمک‌زن، فعالِ دائمی، خداحافظی) از یک مسیر واحد
   عبور می‌کنند: فقط دو متغیر CSS به‌نام‌های --ring-opacity و --ring-glow
   تنظیم می‌شوند و خودِ CSS با transition نرم بین هر مقدار قبلی و بعدی حرکت
   می‌کند. چون هیچ‌جا انیمیشنِ جدا/جدید جایگزین نمی‌شود، از هر حالتی به هر
   حالت دیگری برویم، پیوسته و بدون قطعِ ناگهانی خواهد بود. */
const GLOW_ON  = '0 0 22px 4px rgba(255, 45, 85, 0.65)';
const GLOW_OFF = '0 0 0 0 rgba(255, 45, 85, 0)';

function ringButtons() {
  return [document.getElementById('toolsToggleBtn'), document.getElementById('chatToggleBtn')].filter(Boolean);
}
function setRing(opacity, glow) {
  ringButtons().forEach(btn => {
    btn.style.setProperty('--ring-opacity', opacity);
    btn.style.setProperty('--ring-glow', glow == null ? GLOW_OFF : glow);
  });
}

let ringBreatheTimer = null;
let ringAttentionTimer = null;
let ringGentleTimer = null;
let ringSequenceToken = 0; /* برای لغوِ توالی‌های قبلی وقتی توالی جدیدی شروع می‌شود */
const RING_TRANSITION_MS = 1000; /* باید با transition مربوط به opacity در CSS یکی باشد */

function stopRingBreathing() {
  if (ringBreatheTimer) { clearTimeout(ringBreatheTimer); ringBreatheTimer = null; }
}
function stopRingAttention() {
  if (ringAttentionTimer) { clearTimeout(ringAttentionTimer); ringAttentionTimer = null; }
}
function stopRingGentle() {
  if (ringGentleTimer) { clearTimeout(ringGentleTimer); ringGentleTimer = null; }
}
/* نفسِ آرام و پیوسته در حالت خنثی. اولین قدم عمداً «پایین» است (نزدیک به
   جایی که آخرین افکت معمولاً به آن ختم می‌شود) تا بازگشت به نفسِ آرام یک
   ادامه‌ی نرم باشد، نه یک جهش رو به بالا. */
function startRingBreathing() {
  stopRingBreathing();
  stopRingAttention();
  stopRingGentle();
  let high = false;
  const step = () => {
    setRing(high ? 0.34 : 0.14, GLOW_OFF);
    high = !high;
    ringBreatheTimer = setTimeout(step, 1700);
  };
  step();
}

/* افکتِ توجه‌جلب‌کن یکدست: یک ریتم پیوسته و واحد (نه چند افکتِ جدا که پشتِ
   هم وصل شده باشند) که از وقتی «چه کاری از من ساخته است؟» پاک می‌شود شروع
   می‌شود و بدون هیچ تغییری تا شروعِ پاک‌شدنِ «erfanXstudio» ادامه پیدا
   می‌کند — یعنی در تمام بازه‌ی «|»، «صفحه رو به پایین اسکرول کنید»، «シ» و
   تایپِ «erfanXstudio»، دقیقاً همین یک حلقه در حال اجراست، تا توجه کاربر را
   برای رفتن به پایین صفحه و استفاده از ابزارها/گفتگو جلب کند، بدون هیچ پرش
   یا قطعی بین این متن‌ها. */
const RING_ATTENTION_CYCLE = [
  [1,   GLOW_ON,  550],
  [1,   GLOW_OFF, 500],
  [0.5, GLOW_OFF, 750],
];
function startRingAttention() {
  stopRingBreathing();
  stopRingAttention();
  stopRingGentle();
  let i = 0;
  const step = () => {
    const [opacity, glow, delay] = RING_ATTENTION_CYCLE[i % RING_ATTENTION_CYCLE.length];
    setRing(opacity, glow);
    i++;
    ringAttentionTimer = setTimeout(step, delay);
  };
  step();
}

/* چرخه‌ی نرمِ «نفسِ عمیقِ» حلقه بعد از خداحافظیِ افکت توجه‌جلب‌کن: درست
   برخلافِ نفسِ آرامِ خنثی (که تند و کم‌دامنه است)، این یکی دامنه‌ی محسوس‌تر و
   مکث‌های طولانی‌تر دارد تا واقعاً حس «کم‌رنگ شدنِ تدریجی → چند ثانیه ماندن در
   تاریکی → روشن‌شدنِ تدریجی → چند ثانیه ماندن در روشنایی» را بدهد، نه یک
   پرش. چون CSS خودش گذارِ بین هر دو مقدار را با transition نرم انجام می‌دهد،
   کافی‌ست فقط مقدارِ نهایی و مدتِ توقف را عوض کنیم؛ محو/ظاهرشدن خودبه‌خود نرم
   است. آخرین قدم دقیقاً به قدرِ اول برمی‌گردد، پس هر بار که چرخه از نو شروع
   می‌شود، دقیقاً از همان نقطه‌ای ادامه می‌یابد که چرخه‌ی قبل تمام شده — یعنی
   بدون هیچ پرشی. */
const RING_GENTLE_CYCLE = [
  [0.38, GLOW_OFF, 5000],  /* کم‌رنگ؛ ۵ ثانیه در همین حالت می‌ماند */
  [0.85, GLOW_OFF, 4200],  /* پررنگ‌تر؛ مدتی در همین حالت می‌ماند */
];
function startRingGentleCycle() {
  stopRingBreathing();
  stopRingAttention();
  stopRingGentle();
  let i = 0;
  const step = () => {
    const [opacity, glow, hold] = RING_GENTLE_CYCLE[i % RING_GENTLE_CYCLE.length];
    setRing(opacity, glow);
    i++;
    ringGentleTimer = setTimeout(step, hold);
  };
  step();
}

/* اجرای یک توالیِ زمان‌بندی‌شده و یک‌باره از مقادیر opacity/glow (برای پایان
   دادن به افکت توجه‌جلب‌کن)؛ هر مرحله با transition نرمِ همان سیستم واحد
   جابه‌جا می‌شود. در پایان، اگر onDone داده شده باشد، به اندازه‌ی کاملِ زمان
   transition صبر می‌کنیم تا آخرین مقدار واقعاً روی صفحه بنشیند و بعد آن را
   صدا می‌زنیم — تا رفتن به حالت بعدی هم مثل بقیه‌ی حالت‌ها نرم باشد و با
   استارتِ زودهنگامِ آن تداخل/پرش پیش نیاید. */
function runRingSequence(steps, onDone) {
  stopRingBreathing();
  stopRingAttention();
  stopRingGentle();
  const token = ++ringSequenceToken;
  let t = 0;
  steps.forEach(([opacity, glow, delay]) => {
    t += delay;
    setTimeout(() => {
      if (token !== ringSequenceToken) return; /* توالی جدیدتری جایگزین شده */
      setRing(opacity, glow);
    }, t);
  });
  if (onDone) {
    setTimeout(() => {
      if (token !== ringSequenceToken) return;
      onDone();
    }, t + RING_TRANSITION_MS);
  }
}

/* پایان/خداحافظیِ افکت توجه‌جلب‌کن: درست همان لحظه که «erfanXstudio» در حال
   پاک‌شدن است اجرا می‌شود. ابتدا گرادیانت کاملاً واضح می‌ماند و فقط با گلوی
   نورانی چشمک می‌زند، و به‌جای پرش ناگهانی به یک حالتِ کم‌رنگِ ثابت، از همان‌جا
   با یک گذارِ نرم واردِ چرخه‌ی «نفسِ عمیقِ» بالا می‌شود (کم‌رنگ ← چند ثانیه
   مکث ← پررنگ‌تر ← چند ثانیه مکث ← از نو) که تا پاک‌شدنِ دوباره‌ی «چه کاری از
   من ساخته است؟» در دورِ بعدی ادامه دارد. */
function triggerHeroButtonsFarewell() {
  runRingSequence([
    [1,    GLOW_OFF, 0],
    [1,    GLOW_ON,  220],
    [1,    GLOW_OFF, 220],
    [1,    GLOW_ON,  220],
    [0.38, GLOW_OFF, 220],
  ], startRingGentleCycle);
}

/* ---------- افکتِ معرفیِ حلقه، درست بعد از پایانِ پردهٔ لودینگ ----------
   وقتی پردهٔ لودینگ کاملاً محو شد، ۲ ثانیه صبر می‌کنیم (RING_INTRO_DELAY_MS)
   و بعد حلقهٔ دورِ دکمه‌های «ابزارها» و «گفتگو» را یک‌باره کاملاً واضح
   می‌کنیم. چون خودِ چرخشِ گرادیانت (glowSpinAngle) همیشه و بدون وقفه با
   سرعتِ ثابتِ ۲ ثانیه به ازای هر دور در حالِ اجراست، کافی‌ست حلقه را دقیقاً
   به‌اندازهٔ ۳ برابرِ همان مدت (RING_INTRO_SPIN_MS = ۶ ثانیه) واضح نگه داریم
   تا کاربر دقیقاً ۳ دورِ کامل را ببیند. بعد از آن، درست مثلِ بقیهٔ حالت‌ها،
   با همان گذارِ نرمِ یک‌ثانیه‌ایِ همیشگی به کم‌رنگ‌ترین مقدارِ چرخهٔ «نفسِ
   آرام» (۰.۱۴) برمی‌گردد و از همان نقطه startRingBreathing() را دوباره
   استارت می‌زنیم — یعنی دقیقاً همان زمان‌بندیِ سابق (نفسِ آرام → افکتِ
   توجه‌جلب‌کنِ هم‌زمان با تایپ‌رایتر → خداحافظی → نفسِ عمیق) بدونِ هیچ
   تغییری، فقط با یک وقفهٔ کوتاهِ ۶ ثانیه‌ای برای این افکتِ معرفی، ادامه پیدا
   می‌کند. */
const RING_INTRO_DELAY_MS = 2000;
const RING_INTRO_SPIN_MS = 4000; /* ۲ دور × ۲ ثانیه هر دور */

function triggerRingIntroPulse() {
  runRingSequence([
    [1,    GLOW_OFF, 0],
    [0.14, GLOW_OFF, RING_INTRO_SPIN_MS],
  ], startRingBreathing);
}

startRingBreathing();

/* ---------- SOCIAL ICON BUTTONS: یک مکثِ کوتاه قبل از اجرای عمل ---------- */
/* با لمس/کلیک روی هر دکمه‌ی آیکونِ شبکه‌ی اجتماعی، به‌جای بازشدنِ فوریِ
   لینک، ابتدا کلاسِ «pressed» اضافه می‌شود (رنگش قرمزِ اسیدی می‌شود و کمی
   بزرگ‌تر می‌شود) تا کاربر تغییرِ حالتِ دکمه را ببیند، و بعد از یک مکثِ کوتاه
   خودِ عمل (بازکردنِ لینک/تماس/ایمیل) واقعاً اجرا می‌شود — آن‌قدر کوتاه که
   حسِ هنگ‌کردن ندهد، فقط برای دیده‌شدنِ تغییرِ رنگ/حالت قبل از انتقال. اگر
   قبل از تمام‌شدنِ این مکث دوباره لمس شود، نادیده گرفته می‌شود تا چند تایمر
   همزمان اجرا نشود. */
const SOCIAL_BTN_DELAY_MS = 350;
document.querySelectorAll('.social-icon-btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    if (this.classList.contains('pressed')) { e.preventDefault(); return; }
    e.preventDefault();
    const href = this.getAttribute('href');
    const opensNewTab = this.getAttribute('target') === '_blank';
    this.classList.add('pressed');
    setTimeout(() => {
      this.classList.remove('pressed');
      if (opensNewTab) {
        window.open(href, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = href;
      }
    }, SOCIAL_BTN_DELAY_MS);
  });
});

/* ---------- TYPEWRITER EFFECT ---------- */
function getGreetingByTime() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "صبحتون بخیر";
  if (hour >= 12 && hour < 16) return "ظهرتون بخیر";
  if (hour >= 16 && hour < 20) return "عصرتون بخیر";
  return "شبتون بخیر";
}

function getGreetingByTimeEn() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "Good morning";
  if (hour >= 12 && hour < 16) return "Good afternoon";
  if (hour >= 16 && hour < 20) return "Good evening";
  return "Good night";
}

const typeTextsFa = [
  "★★★★★",
  "سلام", getGreetingByTime(),
  "چه کاری از من ساخته است؟",
  "|",
  " !صفحه رو به پایین اسکرول کنید ", "|",
  "erfanXstudio", 
  "Editor", "Programmer", "Graphic Designer", "AI Master","★★","★★★",
  "★★★★"  ,"★★★★★", "〠"
];

const typeTextsEn = [
  "★★★★★",
  "Hello", getGreetingByTimeEn(),
  "What can I do for you?",
  "|",
  " Scroll down the page! ", "|",
  "erfanXstudio",
  "Editor", "Programmer", "Graphic Designer", "AI Master","★★","★★★",
  "★★★★"  ,"★★★★★", "〠"
];

let typeTexts = typeTextsFa;
let typeIndex = 0; let charIndex = 0; let isDeleting = false;
const typeEl = document.getElementById("typewriter");

function restartTypewriter() {
  typeTexts = currentLang === 'en' ? typeTextsEn : typeTextsFa;
  typeIndex = 0; charIndex = 0; isDeleting = false;
  if (typeEl) typeEl.textContent = '';
}

function type() {
  const currentText = typeTexts[typeIndex];

  if (currentText === "★★★★★" || currentText === "|") {
    typeEl.classList.add("gta-wanted-stars");
  } else {
    typeEl.classList.remove("gta-wanted-stars");
  }

  if (isDeleting) {
    typeEl.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typeEl.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }
  
  let typeSpeed = isDeleting ? 50 : 120;
  
  if (!isDeleting && charIndex === currentText.length) {
    typeSpeed = 2000; isDeleting = true;
    if (currentText === "erfanXstudio") {
      setTimeout(() => {
        document.body.classList.remove('glow-ready');
        triggerHeroButtonsFarewell();
      }, 2000);
    }
  } else if (isDeleting && charIndex === 0) {
    if (currentText === "چه کاری از من ساخته است؟" || currentText === "What can I do for you?") {
      document.body.classList.add('glow-ready');
      startRingAttention();
    }
    isDeleting = false; typeIndex = (typeIndex + 1) % typeTexts.length; typeSpeed = 500;
  }
  
  setTimeout(type, typeSpeed);
}
setTimeout(type, 1000);

/* ---------- WEB APP & GALLERY MODAL LOGIC ---------- */
let galleryImages = [];
let currentGalleryIndex = 0;

/* کش حافظه‌ای عکس‌های گالری: هر عکسی که یک‌بار لود بشه، دیگر دوباره از شبکه خوانده نمی‌شود
   و از حافظه (کش مرورگر + شیء Image نگه‌داشته‌شده) بلافاصله نمایش داده می‌شود */
const galleryImageCache = new Map(); // src -> { loaded: boolean, img: Image }

function preloadGalleryImage(src) {
  if (!galleryImageCache.has(src)) {
    const img = new Image();
    const entry = { loaded: false, img };
    galleryImageCache.set(src, entry);
    img.onload = () => { entry.loaded = true; };
    img.src = src;
  }
  return galleryImageCache.get(src);
}

function openWebApp(url, title = 'SUNLIGHT SMART // WEB APP') {
  const modal = document.getElementById('webAppModal');
  const frame = document.getElementById('webAppFrame');
  const imgWrapper = document.getElementById('webAppImgWrapper');
  const titleEl = document.getElementById('webAppTitle');
  
  if (titleEl) titleEl.textContent = title;
  if (imgWrapper) imgWrapper.style.display = 'none';
  if (frame) {
    frame.src = url;
    frame.style.display = 'block';
  }
  if (modal) modal.classList.add('show');
  lockBodyScroll();
}

/* اولین کلیک فقط مشاهده (حالت هاور) را نشان می‌دهد، کلیک دوم گالری را باز می‌کند */
function handleGalleryCardClick(cardEl, images, title) {
  if (!cardEl.classList.contains('active')) {
    document.querySelectorAll('.card.active').forEach(c => {
      if (c !== cardEl) c.classList.remove('active');
    });
    cardEl.classList.add('active');
    return;
  }
  openGalleryModal(images, title);
}

function openGalleryModal(images, title) {
  if (title === undefined) title = currentLang === 'en' ? 'Image Gallery' : 'گالری تصاویر';
  if (!images || images.length === 0) return;
  galleryImages = images;
  currentGalleryIndex = 0;

  const modal = document.getElementById('webAppModal');
  const frame = document.getElementById('webAppFrame');
  const imgWrapper = document.getElementById('webAppImgWrapper');
  const titleEl = document.getElementById('webAppTitle');
  const controlsEl = document.getElementById('galleryControls');

  if (titleEl) titleEl.textContent = title;
  if (frame) {
    frame.src = '';
    frame.style.display = 'none';
  }

  updateGalleryView();

  if (controlsEl) {
    controlsEl.style.display = images.length > 1 ? 'flex' : 'none';
    controlsEl.style.direction = currentLang === 'en' ? 'ltr' : 'rtl';
  }

  if (imgWrapper) imgWrapper.style.display = 'flex';
  if (modal) modal.classList.add('show');
  lockBodyScroll();
}

function updateGalleryView(direction = 'next') {
  const imgEl = document.getElementById('webAppImage');
  const counterEl = document.getElementById('galleryCounter');
  const spinnerEl = document.getElementById('gallerySpinner');
  const prevBtn = document.getElementById('galleryPrevBtn');
  const nextBtn = document.getElementById('galleryNextBtn');
  const controlsEl = document.getElementById('galleryControls');

  if (controlsEl) {
    controlsEl.style.direction = currentLang === 'en' ? 'ltr' : 'rtl';
  }
  if (prevBtn) prevBtn.textContent = currentLang === 'en' ? 'Back' : 'قبلی';
  if (nextBtn) nextBtn.textContent = currentLang === 'en' ? 'Next' : 'بعدی';
  
  if (imgEl && galleryImages[currentGalleryIndex]) {
    const targetSrc = galleryImages[currentGalleryIndex];
    const cached = preloadGalleryImage(targetSrc);

    const showImage = () => {
      imgEl.className = '';
      void imgEl.offsetWidth;
      imgEl.src = targetSrc;
      if (spinnerEl) spinnerEl.style.display = 'none';
      imgEl.style.opacity = '1';
      imgEl.classList.add(direction === 'next' ? 'fade-next' : 'fade-prev');
    };

    if (cached.loaded) {
      /* عکس قبلاً لود شده: بدون اسپینر و بدون تاخیر، فوراً نمایش داده می‌شود */
      showImage();
    } else {
      if (spinnerEl) spinnerEl.style.display = 'flex';
      imgEl.style.opacity = '0';

      cached.img.onload = () => {
        cached.loaded = true;
        showImage();
      };
      cached.img.onerror = () => {
        imgEl.src = targetSrc;
        if (spinnerEl) spinnerEl.style.display = 'none';
        imgEl.style.opacity = '1';
      };
    }

    /* پیش‌بارگذاری عکس بعدی و قبلی در پس‌زمینه تا جابجایی بین عکس‌ها فوری باشد */
    if (galleryImages.length > 1) {
      const nextIdx = (currentGalleryIndex + 1) % galleryImages.length;
      const prevIdx = (currentGalleryIndex - 1 + galleryImages.length) % galleryImages.length;
      preloadGalleryImage(galleryImages[nextIdx]);
      preloadGalleryImage(galleryImages[prevIdx]);
    }
  }
  
  if (counterEl) {
    const numLocale = currentLang === 'en' ? 'en-US' : 'fa-IR';
    const idx = new Intl.NumberFormat(numLocale).format(currentGalleryIndex + 1);
    const total = new Intl.NumberFormat(numLocale).format(galleryImages.length);
    counterEl.textContent = currentLang === 'en' ? `${idx} of ${total}` : `${idx} از ${total}`;
    counterEl.style.direction = currentLang === 'en' ? 'ltr' : 'rtl';
  }
}

function nextGalleryImage() {
  if (galleryImages.length <= 1) return;
  currentGalleryIndex = (currentGalleryIndex + 1) % galleryImages.length;
  updateGalleryView('next');
}

function prevGalleryImage() {
  if (galleryImages.length <= 1) return;
  currentGalleryIndex = (currentGalleryIndex - 1 + galleryImages.length) % galleryImages.length;
  updateGalleryView('prev');
}

function openImageModal(imgUrl, title = 'VIEW') {
  openGalleryModal([imgUrl], title);
}

function closeWebApp() {
  const modal = document.getElementById('webAppModal');
  const frame = document.getElementById('webAppFrame');
  const imgWrapper = document.getElementById('webAppImgWrapper');
  if (modal) modal.classList.remove('show');
  if (frame) {
    frame.src = '';
    frame.style.display = 'none';
  }
  if (imgWrapper) imgWrapper.style.display = 'none';
  unlockBodyScroll();
}

/* ---------- CARD LOGIC ---------- */
function toggleDropCardActive(cardEl) {
  cardEl.classList.toggle('collapsed');
}

/* بستن همه کارت‌های پروژه به‌جز کارت مقصد، سپس اسکرول به سمت آن (استفاده در لینک‌های فوتر) */
function scrollToDropCard(index) {
  const cards = document.querySelectorAll('.drop-card');
  cards.forEach((card, i) => {
    if (i === index) {
      card.classList.remove('collapsed');
    } else {
      card.classList.add('collapsed');
    }
  });
  const targetCard = cards[index];
  if (targetCard) {
    targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

/* پیام «به‌زودی تکمیل می‌شود» برای بخش‌های ناتمام فوتر */
function showComingSoonToast() {
  showToast(currentLang === 'en' ? 'This section is coming soon' : 'این بخش به‌زودی تکمیل می‌شود');
}

