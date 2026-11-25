/* ---------- TOOLS TOGGLE & CALCULATOR ---------- */
function toggleTools() {
  const section = document.getElementById('tools-section');
  const btn = document.getElementById('toolsToggleBtn');

  if (!section.classList.contains('show')) {
    section.style.display = 'block';
    section.style.height = 'auto';
    section.classList.add('show'); /* برای اندازه‌گیری ارتفاع واقعی و نهایی محتوا */
    const targetHeight = section.scrollHeight;
    section.classList.remove('show');
    section.style.height = '0px';
    btn.classList.add('active');
    void section.offsetHeight; /* ثبت حالت بسته به‌عنوان یک فریم واقعی، برای فعال شدن ترنزیشن */

    requestAnimationFrame(() => {
      section.classList.add('show');
      section.style.height = targetHeight + 'px';
      const offset = section.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: offset, behavior: 'smooth' });

      /* بعد از پایان انیمیشن، ارتفاع آزاد می‌شود تا تغییرات بعدیِ محتوا
         (مثل باز کردن یک ابزار داخلی) بدون نیاز به محاسبه‌ی دستی جا باز کند */
      section.addEventListener('transitionend', function onOpenEnd(e) {
        if (e.propertyName === 'height') {
          section.style.height = 'auto';
          section.removeEventListener('transitionend', onOpenEnd);
        }
      });
    });
  } else {
    section.style.height = section.scrollHeight + 'px';
    void section.offsetHeight; /* ثبت ارتفاع فعلی به‌عنوان یک فریم واقعی، برای فعال شدن ترنزیشن */
    section.classList.remove('show');
    btn.classList.remove('active');
    requestAnimationFrame(() => {
      section.style.height = '0px';
    });
    setTimeout(() => {
      section.style.display = 'none';
      section.style.height = 'auto'; /* آماده‌سازی برای اندازه‌گیری درست در باز شدن بعدی */
    }, 450); 
  }
}

function toggleSpecificTool(toolId, btnElement) {
  const content = document.getElementById(toolId);
  const isOpening = (content.style.display === 'none' || content.style.display === '');

  /* بستن تمام ابزارهای دیگری که باز هستند */
  document.querySelectorAll('.tool-detail').forEach(el => {
    if (el.id !== toolId) el.style.display = 'none';
  });
  document.querySelectorAll('.tool-list-btn').forEach(btn => {
    if (btn !== btnElement) btn.classList.remove('active');
  });

  if (isOpening) {
    content.style.display = 'block';
    btnElement.classList.add('active');
  } else {
    content.style.display = 'none';
    btnElement.classList.remove('active');
  }

  /* توجه: بعد از پایان انیمیشن باز شدن، ارتفاع باکس بیرونی روی 'auto'
     تنظیم می‌شود، پس با باز/بسته شدن یک ابزار داخلی، ارتفاع به‌صورت
     خودکار با محتوا هماهنگ می‌شود و نیازی به محاسبه‌ی دستی نیست. */
}

function openToolsFromMenu() {
  const section = document.getElementById('tools-section');
  if (!section.classList.contains('show')) {
    toggleTools();
  } else {
    const offset = section.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  }
}

/* ---------- AUTO-OPEN TOOL FROM URL (?tool=age یا #age) ---------- */
if (window.history && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

function scrollToAgeBtn(ageBtn, smooth) {
  const section = document.getElementById('tools-section');
  const targetY = section.getBoundingClientRect().top + window.scrollY - 100;
  window.scrollTo({ top: Math.max(targetY, 0), behavior: smooth ? 'smooth' : 'auto' });
}

function autoOpenToolFromURL() {
  const params = new URLSearchParams(window.location.search);
  const wanted = (params.get('tool') || window.location.hash.replace('#', '')).toLowerCase();

  if (wanted === 'age' || wanted === 'age-calculator' || wanted === 'ageToolContent') {
    const section = document.getElementById('tools-section');
    const toolsBtn = document.getElementById('toolsToggleBtn');
    const ageBtn = document.querySelector('button[onclick*="ageToolContent"]');

    if (!section || !ageBtn) return;

    // باز کردن بخش «ابزارها» بدون اجرای اسکرول داخلی خودش
    section.style.display = 'block';
    section.style.height = 'auto';
    toolsBtn && toolsBtn.classList.add('active');
    requestAnimationFrame(() => section.classList.add('show'));

    // باز کردن خودِ محاسبه‌گر سن
    toggleSpecificTool('ageToolContent', ageBtn);

    // اسکرول اول (نرم) بعد از باز شدن انیمیشن‌ها
    setTimeout(() => scrollToAgeBtn(ageBtn, true), 400);

    // اسکرول اصلاحی دوم (فوری) برای جبران جابجایی‌های احتمالی ناشی از لود فونت/عکس‌ها
    setTimeout(() => scrollToAgeBtn(ageBtn, false), 1100);
  }
}
window.addEventListener('load', autoOpenToolFromURL);

function formatNumberInput(input) {
  let val = input.value.replace(/,/g, '').replace(/\D/g, '');
  const hintEl = document.getElementById('numberMultiplierHint');
  
  if (val !== '') {
    input.value = Number(val).toLocaleString('en-US');
    const multiplied = Number(val) * 1000;
    const label = currentLang === 'en' ? 'Preview amount:' : 'توجه (پیش‌نمایش مبلغ):';
    const numLocale = currentLang === 'en' ? 'en-US' : 'fa-IR';
    hintEl.innerHTML = `<span style="color:var(--grey); font-size:11.5px; font-weight:500; margin-left:6px; font-family:'Vazirmatn';">${label}</span>` + new Intl.NumberFormat(numLocale).format(multiplied);
  } else {
    input.value = '';
    hintEl.innerHTML = '';
  }
}

function calculatePercent() {
  const percentStr = document.getElementById('calcPercent').value;
  const numberStr = document.getElementById('calcNumber').value.replace(/,/g, '');
  const resultDisplay = document.getElementById('calcResultDisplay');

  if (numberStr.trim() === '' || percentStr.trim() === '') {
    resultDisplay.textContent = currentLang === 'en' ? 'Please fill in both fields!' : 'لطفاً هر دو کادر را پر کنید!';
    resultDisplay.style.color = 'var(--acid)';
    return;
  }

  const percent = parseFloat(percentStr);
  const rawNumber = parseFloat(numberStr);

  if (isNaN(percent) || isNaN(rawNumber)) {
    resultDisplay.textContent = currentLang === 'en' ? 'Please enter a valid number!' : 'لطفاً عدد معتبر وارد کنید!';
    resultDisplay.style.color = 'var(--acid)';
    return;
  }

  const totalAmount = rawNumber * 1000;
  const finalValue = (percent / 100) * totalAmount;
  const numLocale = currentLang === 'en' ? 'en-US' : 'fa-IR';
  const formattedResult = new Intl.NumberFormat(numLocale).format(finalValue);
  
  resultDisplay.textContent = formattedResult + (currentLang === 'en' ? ' Toman' : ' تومان');
  resultDisplay.style.color = 'var(--ink)';
}

function clearCalc() {
  document.getElementById('calcPercent').value = '';
  document.getElementById('calcNumber').value = '';
  document.getElementById('numberMultiplierHint').innerHTML = '';
  
  const resultDisplay = document.getElementById('calcResultDisplay');
  resultDisplay.textContent = '-';
  resultDisplay.style.color = 'var(--ink)';
}

/* ---------- تبدیل تقویم شمسی (جلالی) <-> میلادی ---------- */
function jDiv(a, b) { return ~~(a / b); }
function jMod(a, b) { return a - ~~(a / b) * b; }

function jalCal(jy) {
  const breaks = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];
  const bl = breaks.length;
  let gy = jy + 621, leapJ = -14, jp = breaks[0], jm, jump = 0, n, i;
  for (i = 1; i < bl; i += 1) {
    jm = breaks[i];
    jump = jm - jp;
    if (jy < jm) break;
    leapJ = leapJ + jDiv(jump, 33) * 8 + jDiv(jMod(jump, 33), 4);
    jp = jm;
  }
  n = jy - jp;
  leapJ = leapJ + jDiv(n, 33) * 8 + jDiv(jMod(n, 33) + 3, 4);
  if (jMod(jump, 33) === 4 && jump - n === 4) leapJ += 1;
  const leapG = jDiv(gy, 4) - jDiv((jDiv(gy, 100) + 1) * 3, 4) - 150;
  const march = 20 + leapJ - leapG;
  if (jump - n < 6) n = n - jump + jDiv(jump, 33) * 33;
  let leap = jMod(jMod(n + 1, 33) - 1, 4);
  if (leap === -1) leap = 4;
  return { leap: leap, gy: gy, march: march };
}

function isLeapJalaaliYear(jy) {
  return jalCal(jy).leap === 0;
}

function jalaaliMonthLength(jy, jm) {
  if (jm <= 6) return 31;
  if (jm <= 11) return 30;
  return isLeapJalaaliYear(jy) ? 30 : 29;
}

function g2d(gy, gm, gd) {
  let d = jDiv((gy + jDiv(gm - 8, 6) + 100100) * 1461, 4)
    + jDiv(153 * jMod(gm + 9, 12) + 2, 5)
    + gd - 34840408;
  d = d - jDiv(jDiv(gy + jDiv(gm - 8, 6) + 100100, 100) * 3, 4) + 752;
  return d;
}

function d2g(jdn) {
  let j = 4 * jdn + 139361631;
  j = j + jDiv(jDiv(4 * jdn + 183187720, 146097) * 3, 4) * 4 - 3908;
  const i = jDiv(jMod(j, 1461), 4) * 5 + 308;
  const gd = jDiv(jMod(i, 153), 5) + 1;
  const gm = jMod(jDiv(i, 153), 12) + 1;
  const gy = jDiv(j, 1461) - 100100 + jDiv(8 - gm, 6);
  return { gy: gy, gm: gm, gd: gd };
}

function j2d(jy, jm, jd) {
  const r = jalCal(jy);
  return g2d(r.gy, 3, r.march) + (jm - 1) * 31 - jDiv(jm, 7) * (jm - 7) + jd - 1;
}

function d2j(jdn) {
  let gy = d2g(jdn).gy, jy = gy - 621;
  const r = jalCal(jy);
  const jdn1f = g2d(gy, 3, r.march);
  let jd, jm, k = jdn - jdn1f;
  if (k >= 0) {
    if (k <= 185) {
      jm = 1 + jDiv(k, 31);
      jd = jMod(k, 31) + 1;
      return { jy: jy, jm: jm, jd: jd };
    }
    k -= 186;
  } else {
    jy -= 1;
    k += 179;
    if (r.leap === 1) k += 1;
  }
  jm = 7 + jDiv(k, 30);
  jd = jMod(k, 30) + 1;
  return { jy: jy, jm: jm, jd: jd };
}

function toJalaali(gy, gm, gd) {
  return d2j(g2d(gy, gm, gd));
}

function toGregorian(jy, jm, jd) {
  return d2g(j2d(jy, jm, jd));
}

/* ---------- ابزار محاسبه سن ---------- */
function calcAgeGregorian(by, bm, bd) {
  const today = new Date();
  let y = today.getFullYear() - by;
  let m = (today.getMonth() + 1) - bm;
  let d = today.getDate() - bd;
  if (d < 0) {
    m -= 1;
    const prevMonthLastDay = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    d += prevMonthLastDay;
  }
  if (m < 0) {
    y -= 1;
    m += 12;
  }
  return { y: y, m: m, d: d };
}

function calcAgeJalali(by, bm, bd) {
  const now = new Date();
  const todayJ = toJalaali(now.getFullYear(), now.getMonth() + 1, now.getDate());
  let y = todayJ.jy - by;
  let m = todayJ.jm - bm;
  let d = todayJ.jd - bd;
  if (d < 0) {
    m -= 1;
    let pm = todayJ.jm - 1, py = todayJ.jy;
    if (pm < 1) { pm = 12; py -= 1; }
    d += jalaaliMonthLength(py, pm);
  }
  if (m < 0) {
    y -= 1;
    m += 12;
  }
  return { y: y, m: m, d: d };
}

function populateAgeSelectors() {
  const daySel = document.getElementById('ageDay');
  const monthSel = document.getElementById('ageMonth');
  const yearSel = document.getElementById('ageYear');
  if (!daySel || !monthSel || !yearSel) return;

  const prevMonth = monthSel.value;
  const prevYear = yearSel.value;
  const prevDay = daySel.value;

  const dayPlaceholder = currentLang === 'en' ? 'Day' : 'روز';
  const monthPlaceholder = currentLang === 'en' ? 'Month' : 'ماه';
  const yearPlaceholder = currentLang === 'en' ? 'Year' : 'سال';
  daySel.dataset.placeholder = dayPlaceholder;

  const monthNamesFa = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
  const monthNamesEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthNames = currentLang === 'en' ? monthNamesEn : monthNamesFa;

  monthSel.innerHTML = `<option value="" disabled selected>${monthPlaceholder}</option>` +
    monthNames.map((name, i) => `<option value="${i + 1}">${name}</option>`).join('');

  const now = new Date();
  const currentYear = currentLang === 'en'
    ? now.getFullYear()
    : toJalaali(now.getFullYear(), now.getMonth() + 1, now.getDate()).jy;

  const numLocale = currentLang === 'en' ? 'en-US' : 'fa-IR';
  const fmt = new Intl.NumberFormat(numLocale, { useGrouping: false });

  let yearOptions = '';
  for (let yr = currentYear; yr >= currentYear - 100; yr -= 1) {
    yearOptions += `<option value="${yr}">${fmt.format(yr)}</option>`;
  }
  yearSel.innerHTML = `<option value="" disabled selected>${yearPlaceholder}</option>` + yearOptions;

  if (prevMonth) monthSel.value = prevMonth;
  if (prevYear) yearSel.value = prevYear;

  updateAgeDayOptions();

  if (prevDay) daySel.value = prevDay;
}

function updateAgeDayOptions() {
  const daySel = document.getElementById('ageDay');
  const monthSel = document.getElementById('ageMonth');
  const yearSel = document.getElementById('ageYear');
  if (!daySel || !monthSel || !yearSel) return;

  const prevDay = daySel.value;
  const dayPlaceholder = daySel.dataset.placeholder || (currentLang === 'en' ? 'Day' : 'روز');

  const m = parseInt(monthSel.value, 10);
  const y = parseInt(yearSel.value, 10);
  let maxDays = 31;

  if (m) {
    if (currentLang === 'en') {
      const yr = y || new Date().getFullYear();
      maxDays = new Date(yr, m, 0).getDate();
    } else {
      const now = new Date();
      const yr = y || toJalaali(now.getFullYear(), now.getMonth() + 1, now.getDate()).jy;
      maxDays = jalaaliMonthLength(yr, m);
    }
  }

  const numLocale = currentLang === 'en' ? 'en-US' : 'fa-IR';
  const fmt = new Intl.NumberFormat(numLocale, { useGrouping: false });

  let dayOptions = '';
  for (let dd = 1; dd <= maxDays; dd += 1) {
    dayOptions += `<option value="${dd}">${fmt.format(dd)}</option>`;
  }
  daySel.innerHTML = `<option value="" disabled selected>${dayPlaceholder}</option>` + dayOptions;

  if (prevDay && parseInt(prevDay, 10) <= maxDays) {
    daySel.value = prevDay;
  }
}

function calculateAge() {
  const daySel = document.getElementById('ageDay');
  const monthSel = document.getElementById('ageMonth');
  const yearSel = document.getElementById('ageYear');

  const d = parseInt(daySel.value, 10);
  const m = parseInt(monthSel.value, 10);
  const y = parseInt(yearSel.value, 10);

  if (!d || !m || !y) {
    showToast(currentLang === 'en' ? 'Please select a full date!' : 'لطفاً تاریخ تولد را کامل انتخاب کنید!');
    return;
  }

  let age;
  if (currentLang === 'en') {
    const birthDateObj = new Date(y, m - 1, d);
    if (birthDateObj > new Date()) {
      showToast('Please select a valid past date!');
      return;
    }
    age = calcAgeGregorian(y, m, d);
  } else {
    const now = new Date();
    const todayJ = toJalaali(now.getFullYear(), now.getMonth() + 1, now.getDate());
    const isFuture = (y > todayJ.jy) ||
      (y === todayJ.jy && m > todayJ.jm) ||
      (y === todayJ.jy && m === todayJ.jm && d > todayJ.jd);
    if (isFuture) {
      showToast('لطفاً یک تاریخ معتبر (گذشته) انتخاب کنید!');
      return;
    }
    age = calcAgeJalali(y, m, d);
  }

  triggerAgeCalcLoading(y, m, d, age);
}

function triggerAgeCalcLoading(y, m, d, age) {
  const btn = document.getElementById('ageCalcBtn');
  if (btn) {
    btn.disabled = true;
    btn.classList.add('loading');
    btn.innerHTML = `<span class="btn-spinner"></span>${currentLang === 'en' ? 'Calculating...' : 'در حال محاسبه...'}`;
  }

  setTimeout(() => {
    if (btn) {
      btn.disabled = false;
      btn.classList.remove('loading');
      btn.textContent = currentLang === 'en' ? 'Calculate' : 'محاسبه';
    }
    openAgeDetailModal(y, m, d, age);
  }, 1500);
}

/* ---------- مودال جزئیات کامل سن ---------- */
function openAgeDetailModal(by, bm, bd, age) {
  const now = new Date();
  let birthG, birthJ;

  if (currentLang === 'en') {
    birthG = { gy: by, gm: bm, gd: bd };
    birthJ = toJalaali(by, bm, bd);
  } else {
    birthJ = { jy: by, jm: bm, jd: bd };
    birthG = toGregorian(by, bm, bd);
  }

  const todayG = { gy: now.getFullYear(), gm: now.getMonth() + 1, gd: now.getDate() };
  const todayJ = toJalaali(todayG.gy, todayG.gm, todayG.gd);

  const totalDays = g2d(todayG.gy, todayG.gm, todayG.gd) - g2d(birthG.gy, birthG.gm, birthG.gd);
  const totalMonths = age.y * 12 + age.m;

  const weekdayIdx = new Date(birthG.gy, birthG.gm - 1, birthG.gd).getDay();
  const weekdayNamesFa = ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'];
  const weekdayNamesEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const monthNamesFa = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
  const monthNamesFaTranslit = ['Farvardin', 'Ordibehesht', 'Khordad', 'Tir', 'Mordad', 'Shahrivar', 'Mehr', 'Aban', 'Azar', 'Dey', 'Bahman', 'Esfand'];
  const zodiacMonthFa = ['حَمَل - بره', 'ثَور - گاو', 'جَوزا - دوپیکر', 'سَرَطان - خرچنگ', 'اَسَد - شیر', 'سُنبله - خوشه', 'میزان - ترازو', 'عَقرَب - کژدم', 'قَوس - کماندار', 'جَدی - بزغاله', 'دَلو - آبریز', 'حوت - ماهی'];
  const monthNamesEnFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const animalsFa = ['موش', 'گاو', 'پلنگ', 'خرگوش', 'نهنگ', 'مار', 'اسب', 'گوسفند', 'میمون', 'مرغ', 'سگ', 'خوک'];
  const animalsEn = ['Mouse', 'Cow', 'Leopard', 'Rabbit', 'Whale', 'Snake', 'Horse', 'Sheep', 'Monkey', 'Hen', 'Dog', 'Pig'];
  const animalIdx = (((birthJ.jy + 621 - 4) % 12) + 12) % 12;

  let daysUntil, nextBirthdayStr;
  const candleAge = age.y + 1;
  if (currentLang === 'en') {
    let candidateYear = todayG.gy;
    const todayDateOnly = new Date(todayG.gy, todayG.gm - 1, todayG.gd);
    let bdayThisYear = new Date(candidateYear, bm - 1, bd);
    if (bdayThisYear < todayDateOnly) {
      candidateYear += 1;
      bdayThisYear = new Date(candidateYear, bm - 1, bd);
    }
    daysUntil = Math.round((bdayThisYear - todayDateOnly) / 86400000);
    nextBirthdayStr = `${bd} / ${bm} / ${candidateYear}`;
  } else {
    let candidateYear = todayJ.jy;
    if (j2d(candidateYear, bm, bd) < j2d(todayJ.jy, todayJ.jm, todayJ.jd)) candidateYear += 1;
    daysUntil = j2d(candidateYear, bm, bd) - j2d(todayJ.jy, todayJ.jm, todayJ.jd);
    nextBirthdayStr = `${bd} / ${bm} / ${candidateYear}`;
  }

  let hijriStr = '';
  try {
    const gDateObj = new Date(birthG.gy, birthG.gm - 1, birthG.gd);
    const loc = currentLang === 'en' ? 'en-US-u-ca-islamic' : 'fa-IR-u-ca-islamic';
    const parts = new Intl.DateTimeFormat(loc, { day: 'numeric', month: 'long', year: 'numeric' }).formatToParts(gDateObj);
    const hDay = parts.find(p => p.type === 'day').value;
    const hMonth = parts.find(p => p.type === 'month').value;
    const hYear = parts.find(p => p.type === 'year').value;
    hijriStr = currentLang === 'en' ? `${hMonth} ${hDay}, ${hYear} AH` : `${hDay} ${hMonth} ${hYear} قمری`;
  } catch (e) {
    hijriStr = '';
  }

  const numLocale = currentLang === 'en' ? 'en-US' : 'fa-IR';
  const fmt = new Intl.NumberFormat(numLocale);
  const fmtNG = new Intl.NumberFormat(numLocale, { useGrouping: false });

  const headline = currentLang === 'en'
    ? `${fmtNG.format(age.y)} Years, ${fmtNG.format(age.m)} Months and ${fmtNG.format(age.d)} Days`
    : `${fmtNG.format(age.y)} سال و ${fmtNG.format(age.m)} ماه و ${fmtNG.format(age.d)} روز`;

  const equivDays = currentLang === 'en'
    ? `<b>${fmt.format(totalDays)}</b> days`
    : `معادل <b>${fmt.format(totalDays)}</b> روز`;
  const equivMonths = currentLang === 'en'
    ? `<b>${fmt.format(totalMonths)}</b> months and <b>${fmt.format(age.d)}</b> days`
    : `معادل <b>${fmt.format(totalMonths)}</b> ماه و <b>${fmt.format(age.d)}</b> روز`;

  const dividerLabel = currentLang === 'en' ? 'Date of Birth' : 'تاریخ تولد';

  let primaryDateRow, secondaryDateRow;
  if (currentLang === 'en') {
    primaryDateRow = `${weekdayNamesEn[weekdayIdx]}, ${monthNamesEnFull[birthG.gm - 1]} ${birthG.gd}, ${birthG.gy}`;
    secondaryDateRow = `${fmtNG.format(birthJ.jd)} ${monthNamesFaTranslit[birthJ.jm - 1]} ${fmtNG.format(birthJ.jy)}`;
  } else {
    primaryDateRow = `${weekdayNamesFa[weekdayIdx]}، ${fmtNG.format(birthJ.jd)} ${monthNamesFa[birthJ.jm - 1]} [ ${zodiacMonthFa[birthJ.jm - 1]} ] ${fmtNG.format(birthJ.jy)}`;
    secondaryDateRow = `${birthG.gy} ${monthNamesEnFull[birthG.gm - 1]} ${birthG.gd} , ${weekdayNamesEn[weekdayIdx]}`;
  }

  const zodiacRow = currentLang === 'en'
    ? `Year ${fmtNG.format(birthJ.jy)}: Year of the ${animalsEn[animalIdx]}`
    : `سال ${fmtNG.format(birthJ.jy)} : سال ${animalsFa[animalIdx]}`;

  const remainingRow = daysUntil === 0
    ? (currentLang === 'en' ? '🎉 Today is your birthday!' : '🎉 امروز سالروز تولد شماست!')
    : (currentLang === 'en'
      ? `<b>${fmt.format(daysUntil)}</b> days left until your birthday`
      : `<b>${fmt.format(daysUntil)}</b> روز تا سالروز تولد شما مانده است`);

  const candleRow = currentLang === 'en'
    ? `On <b>${nextBirthdayStr}</b> your birthday candle count will be <b>${fmt.format(candleAge)}</b>`
    : `در تاریخ <b>${nextBirthdayStr}</b> عدد شمع تولد شما <b>${fmt.format(candleAge)}</b> باید باشد`;

  const rowsHtml = [
    { text: primaryDateRow, cls: '' },
    { text: secondaryDateRow, cls: 'dim ltr-force' },
    hijriStr ? { text: hijriStr, cls: 'dim' } : null,
    { text: zodiacRow, cls: '' },
    { text: remainingRow, cls: daysUntil === 0 ? 'birthday-today' : 'highlight' },
    { text: candleRow, cls: 'dim' }
  ].filter(Boolean).map(r => `<div class="age-modal-row ${r.cls}">${r.text}</div>`).join('');

  const body = document.getElementById('ageModalBody');
  body.innerHTML = `
    <div class="age-modal-headline">${headline}</div>
    <div class="age-modal-equiv">${equivDays}</div>
    <div class="age-modal-equiv">${equivMonths}</div>
    <div class="age-modal-divider"><span>${dividerLabel}</span></div>
    ${rowsHtml}
  `;

  const modal = document.getElementById('ageResultModal');
  if (modal) modal.classList.add('show');
  lockBodyScroll();
}

function closeAgeModal() {
  const modal = document.getElementById('ageResultModal');
  if (modal) modal.classList.remove('show');
  unlockBodyScroll();
}

/* ---------- راهنمای نصب (Install Guide) ---------- */
let installGuideTargetUrl = '';

function openInstallGuideModal(url, appName) {
  installGuideTargetUrl = url || '';

  const nameEl = document.getElementById('installGuideAppName');
  if (nameEl && appName) nameEl.textContent = appName;

  const link = document.getElementById('installGuideImageLink');
  const img = document.getElementById('installGuideImage');
  if (link && img) {
    link.classList.remove('is-loaded');
    const freshSrc = 'images/toman-install-guide.jpg?v=' + Date.now();
    img.onload = function () { link.classList.add('is-loaded'); };
    img.onerror = function () {
      const spinner = document.getElementById('installGuideSpinner');
      if (spinner) spinner.style.display = 'none';
    };
    img.src = freshSrc;
  }

  const modal = document.getElementById('installGuideModal');
  if (modal) modal.classList.add('show');
  lockBodyScroll();
}

function closeInstallGuideModal() {
  const modal = document.getElementById('installGuideModal');
  if (modal) modal.classList.remove('show');
  unlockBodyScroll();
}

function goToInstallSite() {
  if (installGuideTargetUrl) {
    window.open(installGuideTargetUrl, '_blank', 'noopener,noreferrer');
  }
  closeInstallGuideModal();
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeAgeModal();
    closeInstallGuideModal();
  }
});

function clearAgeCalc() {
  const daySel = document.getElementById('ageDay');
  const monthSel = document.getElementById('ageMonth');
  const yearSel = document.getElementById('ageYear');
  if (daySel) daySel.selectedIndex = 0;
  if (monthSel) monthSel.selectedIndex = 0;
  if (yearSel) yearSel.selectedIndex = 0;
  updateAgeDayOptions();
}

function toggleMenu() {
  const burger = document.getElementById('burger');
  const menu = document.getElementById('mobileMenu');
  if (burger) burger.classList.toggle('open');
  if (menu) menu.classList.toggle('open');
}

function closeMenu() {
  const burger = document.getElementById('burger');
  const menu = document.getElementById('mobileMenu');
  if (burger) burger.classList.remove('open');
  if (menu) menu.classList.remove('open');
}

document.addEventListener('click', function(e) {
  const menu = document.getElementById('mobileMenu');
  const burger = document.getElementById('burger');
  if (menu && menu.classList.contains('open')) {
    if (!menu.contains(e.target) && (!burger || !burger.contains(e.target))) {
      closeMenu();
    }
  }
});

window.addEventListener('scroll', function() {
  const menu = document.getElementById('mobileMenu');
  if (menu && menu.classList.contains('open')) {
    closeMenu();
  }
}, { passive: true });

document.addEventListener('touchmove', function() {
  const menu = document.getElementById('mobileMenu');
  if (menu && menu.classList.contains('open')) {
    closeMenu();
  }
}, { passive: true });

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const scrollProgressEl = document.getElementById('scroll-progress');
const scrollProgressTrackEl = document.getElementById('scroll-progress-track');
const scrollTopBtnEl = document.getElementById('scrollTopBtn');
const newsSectionEl = document.getElementById('news');
const headerElCached = document.querySelector('header');

let scrollTicking = false;
function handleScrollUpdate() {
  scrollTicking = false;
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

  if (totalHeight > 0) {
    const progress = (window.scrollY / totalHeight) * 100;
    const isVisible = window.scrollY > 50 ? '1' : '0';
    if (scrollProgressEl) {
      scrollProgressEl.style.width = progress + '%';
      scrollProgressEl.style.opacity = isVisible;
    }
    if (scrollProgressTrackEl) {
      scrollProgressTrackEl.style.opacity = isVisible;
    }
  }

  if (scrollTopBtnEl && newsSectionEl) {
    const headerHeight = headerElCached ? headerElCached.offsetHeight : 0;
    const newsTop = newsSectionEl.getBoundingClientRect().top;
    if (newsTop <= headerHeight) {
      scrollTopBtnEl.classList.add('show');
    } else {
      scrollTopBtnEl.classList.remove('show');
    }
  }
}

window.addEventListener('scroll', () => {
  if (!scrollTicking) {
    scrollTicking = true;
    requestAnimationFrame(handleScrollUpdate);
  }
}, { passive: true });

function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  if (toast && toastMsg) {
    toastMsg.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
}

