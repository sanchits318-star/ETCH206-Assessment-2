document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
    });
  }
  document.querySelectorAll('.nav-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.closest('.nav-group');
      const open = group.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
  });
  document.querySelectorAll('[data-tabs]').forEach(tabs => {
    const buttons = tabs.querySelectorAll('[data-tab]');
    buttons.forEach(button => button.addEventListener('click', () => {
      buttons.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
      tabs.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      button.classList.add('active'); button.setAttribute('aria-selected','true');
      const panel = tabs.querySelector('#' + button.dataset.tab);
      if (panel) panel.classList.add('active');
    }));
  });
  const cycleData = {
    observe: ['01','Observe','Gather authentic documentation such as anecdotal observations, learning stories, photographs and family insights. Notice pre-verbal gestures, play schemas, interests and physiological rhythms without interrupting deep engagement.',['Anecdotal notes','Photos','Family insights']],
    assess: ['02','Assess','Interpret observations in context. Consider the child’s strengths, dispositions, relationships, interests, culture, current capabilities and possible learning. Connect interpretations to the EYLF without reducing the child to a checklist.',['Learning analysis','EYLF links','Child strengths']],
    plan: ['03','Plan','Identify meaningful next steps and design responsive experiences. Consider resources, environment, intentional teaching, accessibility, family perspectives and individual rhythms.',['Intentions','Resources','Inclusion']],
    implement: ['04','Implement','Put the plan into practice while remaining responsive. Follow children’s cues, adapt the experience, sustain shared thinking and document what happens.',['Responsive teaching','Play','Documentation']],
    evaluate: ['05','Evaluate','Reflect on what children experienced and learned, whose voices were heard, what worked and what should change. Use the evaluation to inform the next observation and planning cycle.',['Reflection','Impact','Next steps']]
  };
  document.querySelectorAll('[data-cycle]').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('[data-cycle]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const d = cycleData[btn.dataset.cycle];
    if (!d) return;
    document.getElementById('cycle-kicker').textContent = 'STAGE ' + d[0];
    document.getElementById('cycle-title').textContent = d[1];
    document.getElementById('cycle-copy').textContent = d[2];
    document.getElementById('cycle-tags').innerHTML = d[3].map(t => `<span class="tag">${t}</span>`).join('');
  }));
  const search = document.getElementById('reference-search');
  const filter = document.getElementById('reference-filter');
  const refs = [...document.querySelectorAll('.reference-item')];
  function filterRefs() {
    if (!search || !filter) return;
    const q = search.value.toLowerCase();
    let count = 0;
    refs.forEach(ref => {
      const show = ref.textContent.toLowerCase().includes(q) && (filter.value === 'all' || ref.dataset.category === filter.value);
      ref.hidden = !show;
      if (show) count++;
    });
    const counter = document.getElementById('reference-count');
    if (counter) counter.textContent = `Showing ${count} of ${refs.length} references.`;
  }
  if (search) search.addEventListener('input', filterRefs);
  if (filter) filter.addEventListener('change', filterRefs);
});