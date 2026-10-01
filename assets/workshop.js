/* =============================================================
   WORKSHOP EXTRAS
   -------------------------------------------------------------
   Copy buttons on prompt cards, so a teacher can paste a prompt
   straight into Flint or Gemini.

     <div class="prompt-card" data-copy="the exact text to copy">
         <span class="prompt-label">An interactive</span>
         <p class="prompt-text">...</p>
     </div>

   data-copy is optional; without it the card's .prompt-text is copied.
   ============================================================= */
(function () {
    'use strict';

    function copyText(text) {
        if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
        // A page opened from disk, or an older browser: the old way still works.
        return new Promise((resolve, reject) => {
            const ta = document.createElement('textarea');
            ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
            document.body.appendChild(ta); ta.select();
            try { document.execCommand('copy') ? resolve() : reject(new Error('copy failed')); }
            catch (e) { reject(e); }
            ta.remove();
        });
    }

    document.querySelectorAll('.prompt-card').forEach(card => {
        const textEl = card.querySelector('.prompt-text');
        if (!textEl) return;
        const label = (card.querySelector('.prompt-label') || {}).textContent || 'prompt';
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'prompt-copy';
        btn.innerHTML = '<span aria-hidden="true">&#128203;</span><span class="prompt-copy-label">Copy</span>';
        btn.setAttribute('aria-label', 'Copy the prompt: ' + label.trim());
        const status = document.createElement('span');
        status.className = 'sr-only'; status.setAttribute('role', 'status');
        btn.addEventListener('click', () => {
            const text = (card.dataset.copy || textEl.textContent).replace(/\s+/g, ' ').trim();
            const lab = btn.querySelector('.prompt-copy-label');
            copyText(text).then(() => {
                lab.textContent = 'Copied'; btn.classList.add('done'); status.textContent = 'Prompt copied';
            }, () => {
                lab.textContent = 'Select and copy'; status.textContent = 'Copy did not work. Select the text and copy it.';
            });
            setTimeout(() => { lab.textContent = 'Copy'; btn.classList.remove('done'); }, 2200);
        });
        card.appendChild(btn);
        card.appendChild(status);
    });
})();
