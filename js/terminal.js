/* ---------- CYBER TERMINAL & CHAT LOGIC ---------- */
let isTerminalBooted = false; 

function openTerminal() {
  document.getElementById('cyberTerminal').classList.add('show');
  lockBodyScroll();

  if (!isTerminalBooted) {
    isTerminalBooted = true;
    const tBody = document.getElementById('terminalBody');
    tBody.innerHTML = ''; 
    
    const orangeDot = document.querySelector('.status-dot.orange');
    const redDot = document.getElementById('offlineStatusDot');
    if (orangeDot) orangeDot.classList.remove('orange-active');
    if (redDot) redDot.classList.remove('offline-active');

    setTimeout(() => {
      if (orangeDot) orangeDot.classList.add('orange-active');
    }, 1000);

    setTimeout(() => {
      const msg1 = document.createElement('div');
      msg1.className = 'msg system';
      msg1.innerHTML = `
        <span class="sys-label">[root@system-init:~]$</span>
        <div id="msg1FaText" style="font-size: 13px; font-family: 'Vazirmatn', sans-serif; margin-bottom: 2px;">سیستم در حال بارگذاری است<span id="msg1Dots" style="font-family: 'Space Mono', monospace; font-weight: bold; font-size: 14px; margin-left: 2px;"></span></div>
        <div id="msg1EnText" style="font-size: 11px; color: var(--grey); font-family: 'Space Mono', monospace; letter-spacing: 1px;">> THE SYSTEM IS LOADING...</div>
      `;
      tBody.appendChild(msg1);
      tBody.scrollTop = tBody.scrollHeight;

      let msg1DotCount = 0;
      let msg1DotInterval = setInterval(() => {
        msg1DotCount++;
        const el = document.getElementById('msg1Dots');
        if (el) el.textContent = '.'.repeat(msg1DotCount % 4);
      }, 400);

      setTimeout(() => {
        clearInterval(msg1DotInterval);
        const faEl = document.getElementById('msg1FaText');
        const enEl = document.getElementById('msg1EnText');
        if (faEl) faEl.textContent = 'بارگذاری انجام شد';
        if (enEl) enEl.textContent = '> READY TO RUN';

        const typingMsg2 = createTypingIndicator();
        tBody.appendChild(typingMsg2);
        tBody.scrollTop = tBody.scrollHeight;

        setTimeout(() => {
          tBody.removeChild(typingMsg2);
          const msg2 = document.createElement('div');
          msg2.className = 'msg system';
          msg2.innerHTML = `
            <span class="sys-label">[root@security-init:~]$</span>
            <div id="msg2FaText" style="font-size: 13px; font-family: 'Vazirmatn', sans-serif; margin-bottom: 2px;">در حال ایجاد ارتباط امن<span id="msg2Dots" style="font-family: 'Space Mono', monospace; font-weight: bold; font-size: 14px; margin-left: 2px;"></span></div>
            <div id="msg2EnText" style="font-size: 11px; color: var(--grey); font-family: 'Space Mono', monospace; letter-spacing: 1px;">> ESTABLISHING SECURE CONNECTION...</div>
          `;
          tBody.appendChild(msg2);
          tBody.scrollTop = tBody.scrollHeight;

          let msg2DotCount = 0;
          let msg2DotInterval = setInterval(() => {
            msg2DotCount++;
            const dEl = document.getElementById('msg2Dots');
            if (dEl) dEl.textContent = '.'.repeat(msg2DotCount % 4);
          }, 400);

          setTimeout(() => {
            clearInterval(msg2DotInterval);
            const m2Fa = document.getElementById('msg2FaText');
            const m2En = document.getElementById('msg2EnText');
            if (m2Fa) m2Fa.textContent = 'چت امن ایجاد شد';
            if (m2En) m2En.textContent = '> SECURE CHAT ESTABLISHED';

            const typingMsg3 = createTypingIndicator();
            tBody.appendChild(typingMsg3);
            tBody.scrollTop = tBody.scrollHeight;

            setTimeout(() => {
              tBody.removeChild(typingMsg3);
              const msg3 = document.createElement('div');
              msg3.className = 'msg system';
              
              msg3.innerHTML = `
                <span class="sys-label">[root@system-status:~]$</span>
                <div style="font-size: 13px; font-family: 'Vazirmatn', sans-serif; margin-bottom: 2px;">در حال بررسی وضعیت ادمین<span id="loadingDots" style="font-family: 'Space Mono', monospace; font-weight: bold; font-size: 14px; margin-left: 2px;"></span></div>
                <div style="font-size: 11px; color: var(--grey); font-family: 'Space Mono', monospace; letter-spacing: 1px;">> CHECKING ADMIN STATUS...</div>
              `;
              
              tBody.appendChild(msg3);
              tBody.scrollTop = tBody.scrollHeight;

              let dotCount = 0;
              let dotInterval = setInterval(() => {
                dotCount++;
                const lDots = document.getElementById('loadingDots');
                if (lDots) lDots.textContent = '.'.repeat(dotCount % 4);
              }, 400);

              setTimeout(() => {
                clearInterval(dotInterval);
                const lDots = document.getElementById('loadingDots');
                if (lDots) lDots.textContent = '...';
                
                const typingMsg4 = createTypingIndicator();
                tBody.appendChild(typingMsg4);
                tBody.scrollTop = tBody.scrollHeight;

                setTimeout(() => {
                  tBody.removeChild(typingMsg4);
                  
                  const msg4 = document.createElement('div');
                  msg4.className = 'msg system';
                  msg4.style.marginTop = '6px';
                  
                  const errorSpan = document.createElement('span');
                  errorSpan.className = 'check-item text-red';
                  errorSpan.style.cssText = "font-size: 12px; font-family: 'Vazirmatn', sans-serif; line-height: 1.6; white-space: pre-line;";
                  
                  msg4.appendChild(errorSpan);
                  tBody.appendChild(msg4);
                  
                  if (orangeDot) orangeDot.classList.remove('orange-active');
                  if (redDot) redDot.classList.add('offline-active');
                  
                  const failText = "[FAILED] ارتباط برقرار نشد.\nادمین در دسترس نیست ! [OFFLINE]\nدر ساعتی دیگر مجدد امتحان فرمایید";
                  let i = 0;
                  
                  function typeErrorMsg() {
                    if (i < failText.length) {
                      errorSpan.textContent += failText.charAt(i);
                      i++;
                      tBody.scrollTop = tBody.scrollHeight;
                      let randomSpeed = Math.floor(Math.random() * 30) + 20;
                      setTimeout(typeErrorMsg, randomSpeed);
                    } else {
                      showTerminalRetryBtn(tBody, orangeDot, redDot);
                    }
                  }
                  
                  typeErrorMsg();

                }, 2500);

              }, 10000); 

            }, 800); 
          }, 3000); 

        }, 600); 
      }, 2500); 
    }, 800); 
  }
}

function createTypingIndicator() {
  const div = document.createElement('div');
  div.className = 'msg system';
  div.innerHTML = `<span class="sys-label">[root@system:~]$</span><div class="typing-indicator"><span></span><span></span><span></span></div>`;
  return div;
}

function closeTerminal() {
  document.getElementById('cyberTerminal').classList.remove('show');
  unlockBodyScroll();
}

function sendTerminalMsg() {
  const inputEl = document.getElementById('terminalInput');
  const msgText = inputEl.value.trim();
  if (!msgText) return;

  const tBody = document.getElementById('terminalBody');
  
  const userDiv = document.createElement('div');
  userDiv.className = 'msg user';
  userDiv.textContent = msgText;
  tBody.appendChild(userDiv);
  
  inputEl.value = '';
  tBody.scrollTop = tBody.scrollHeight;

  const typingDiv = createTypingIndicator();
  tBody.appendChild(typingDiv);
  tBody.scrollTop = tBody.scrollHeight;

  setTimeout(() => {
    tBody.removeChild(typingDiv);
    
    const sysMsg = "> DATA_RECEIVED.\n> پیام شما دریافت شد.\n> [STATUS]: هم اکنون ارتباط ادمین برقرار نیست!  \n>لطفا صبور باشید.";
    
    const sysDiv = document.createElement('div');
    sysDiv.className = 'msg system';
    
    const label = document.createElement('span');
    label.className = 'sys-label';
    label.textContent = '[root@erfanXstudio:~]$';
    sysDiv.appendChild(label);
    
    const textNode = document.createElement('span');
    sysDiv.appendChild(textNode);
    tBody.appendChild(sysDiv);
    
    let i = 0;
    function typeWriter() {
      if (i < sysMsg.length) {
        textNode.textContent += sysMsg.charAt(i);
        i++;
        tBody.scrollTop = tBody.scrollHeight;
        let randomSpeed = Math.floor(Math.random() * 25) + 15; 
        setTimeout(typeWriter, randomSpeed);
      }
    }
    typeWriter();

  }, 1600);
}

function showTerminalRetryBtn(tBody, orangeDot, redDot) {
  const btn = document.getElementById('terminalRetryBtn');
  if (!btn) return;
  btn.style.display = 'flex';
  btn.onclick = () => retryAdminConnection(btn, orangeDot, redDot, tBody);
}

function retryAdminConnection(btn, orangeDot, redDot, tBody) {
  /* پنهان کردن دکمه تا امکان کلیک مجدد وجود نداشته باشد */
  btn.style.display = 'none';
  btn.onclick = null;

  /* بلافاصله: چراغ قرمز غیرفعال و چراغ زرد فعال می‌شود */
  if (redDot) redDot.classList.remove('offline-active');
  if (orangeDot) orangeDot.classList.add('orange-active');

  let retryDotInterval = null;

  /* با کمی تاخیر، پیام تلاش مجدد همراه با نقاط پویا نمایش داده می‌شود */
  setTimeout(() => {
    const retryMsg = document.createElement('div');
    retryMsg.className = 'msg system';
    retryMsg.innerHTML = `
      <span class="sys-label">[root@system-retry:~]$</span>
      <div style="font-size: 13px; font-family: 'Vazirmatn', sans-serif; margin-bottom: 2px;">در حال تلاش مجدد<span class="retry-dots" style="font-family: 'Space Mono', monospace; font-weight: bold; font-size: 14px; margin-left: 2px;"></span></div>
      <div style="font-size: 11px; color: var(--grey); font-family: 'Space Mono', monospace; letter-spacing: 1px;">> RETRYING CONNECTION...</div>
    `;
    tBody.appendChild(retryMsg);
    tBody.scrollTop = tBody.scrollHeight;

    const dotsEl = retryMsg.querySelector('.retry-dots');
    let dotCount = 0;
    retryDotInterval = setInterval(() => {
      dotCount++;
      if (dotsEl) dotsEl.textContent = '.'.repeat(dotCount % 4);
    }, 400);
  }, 600);

  /* پس از ۹ ثانیه چشمک‌زدن چراغ زرد: بلافاصله قبل از تایپ پیام ناموفق، چراغ زرد خاموش و چراغ قرمز دوباره فعال می‌شود */
  setTimeout(() => {
    if (retryDotInterval) clearInterval(retryDotInterval);

    const typingMsgFail = createTypingIndicator();
    tBody.appendChild(typingMsgFail);
    tBody.scrollTop = tBody.scrollHeight;

    setTimeout(() => {
      tBody.removeChild(typingMsgFail);

      if (orangeDot) orangeDot.classList.remove('orange-active');
      if (redDot) redDot.classList.add('offline-active');

      const failMsg2 = document.createElement('div');
      failMsg2.className = 'msg system';
      failMsg2.style.marginTop = '6px';

      const errorSpan2 = document.createElement('span');
      errorSpan2.className = 'check-item text-red';
      errorSpan2.style.cssText = "font-size: 12px; font-family: 'Vazirmatn', sans-serif; line-height: 1.6; white-space: pre-line;";

      failMsg2.appendChild(errorSpan2);
      tBody.appendChild(failMsg2);
      tBody.scrollTop = tBody.scrollHeight;

      const failText2 = "[FAILED] تلاش مجدد ناموفق بود.\nادمین همچنان در دسترس نیست ! [OFFLINE]";
      let j = 0;

      function typeErrorMsg2() {
        if (j < failText2.length) {
          errorSpan2.textContent += failText2.charAt(j);
          j++;
          tBody.scrollTop = tBody.scrollHeight;
          let randomSpeed = Math.floor(Math.random() * 30) + 20;
          setTimeout(typeErrorMsg2, randomSpeed);
        } else {
          showTerminalRetryBtn(tBody, orangeDot, redDot);
        }
      }

      typeErrorMsg2();
    }, 2000);
  }, 9000);
}

