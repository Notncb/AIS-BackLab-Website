(function () {
  'use strict';

  function initSlider(wrap) {
    var before = wrap.querySelector('.s-before');
    var knob   = wrap.querySelector('.s-knob');
    if (!before || !knob) return;

    var pct    = 82;
    var active = false;

    function apply(p) {
      pct = Math.max(1, Math.min(99, p));
      before.style.clipPath = 'inset(0 ' + (100 - pct).toFixed(3) + '% 0 0)';
      wrap.querySelector('.s-handle').style.left = pct.toFixed(3) + '%';
      knob.setAttribute('aria-valuenow', Math.round(pct));
    }

    function fromX(clientX) {
      var r = wrap.getBoundingClientRect();
      apply((clientX - r.left) / r.width * 100);
    }

    wrap.addEventListener('pointerdown', function (e) {
      active = true;
      wrap.classList.add('s-interacted');
      wrap.setPointerCapture(e.pointerId);
      fromX(e.clientX);
    });
    wrap.addEventListener('pointermove', function (e) { if (active) fromX(e.clientX); });
    wrap.addEventListener('pointerup',     function () { active = false; });
    wrap.addEventListener('pointercancel', function () { active = false; });

    knob.setAttribute('tabindex', '0');
    knob.setAttribute('role', 'slider');
    knob.setAttribute('aria-label', 'Before and after comparison');
    knob.setAttribute('aria-valuemin', '0');
    knob.setAttribute('aria-valuemax', '100');
    knob.setAttribute('aria-valuenow', '82');
    knob.addEventListener('keydown', function (e) {
      var step = e.shiftKey ? 10 : 3;
      if (e.key === 'ArrowLeft')  { e.preventDefault(); apply(pct - step); }
      if (e.key === 'ArrowRight') { e.preventDefault(); apply(pct + step); }
    });

    apply(82);
  }

  function init() { document.querySelectorAll('[data-slider]').forEach(initSlider); }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}());
