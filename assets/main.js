(() => {
  const controls = document.querySelector('.filters');
  const entries = [...document.querySelectorAll('.publication')];
  const search = document.querySelector('#search');
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const disclosure = document.querySelector('.publication-disclosure');
  const toggle = document.querySelector('#publication-toggle');
  const toggleLabel = toggle.querySelector('.publication-toggle-label');
  const toggleIcon = toggle.querySelector('.publication-toggle-icon');
  const previewCount = 5;
  let topic = 'All';
  let expanded = false;

  function update() {
    const query = search.value.trim().toLowerCase();
    const filtering = topic !== 'All' || query !== '';
    let matching = 0;
    let visible = 0;
    entries.forEach(entry => {
      const matches = (topic === 'All' || entry.dataset.topic.split('|').includes(topic))
        && entry.dataset.search.includes(query);
      const show = matches && (filtering || expanded || matching < previewCount);
      if (matches) matching++;
      entry.hidden = !show;
      if (show) visible++;
    });
    buttons.forEach(button => {
      const selected = button.dataset.filter === topic;
      button.classList.toggle('active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    document.querySelector('#result-count').textContent = `${visible} of ${entries.length} publications`;
    document.querySelector('#no-results').hidden = matching !== 0;
    disclosure.hidden = filtering || entries.length <= previewCount;
    toggle.setAttribute('aria-expanded', String(expanded || filtering));
    toggleLabel.textContent = expanded ? 'Show fewer publications' : `Show all ${entries.length} publications`;
    toggleIcon.textContent = expanded ? '↑' : '↓';
  }

  buttons.forEach(button => button.addEventListener('click', () => {
    topic = button.dataset.filter;
    update();
  }));
  search.addEventListener('input', update);
  toggle.addEventListener('click', () => {
    expanded = !expanded;
    update();
  });

  function revealLinkedPublication() {
    let id;
    try {
      id = decodeURIComponent(window.location.hash.slice(1));
    } catch {
      return;
    }
    const target = id && document.getElementById(id);
    const entry = target && target.closest('.publication');
    if (!entry || !entries.includes(entry)) return;
    if (entry.hidden) {
      topic = 'All';
      search.value = '';
      expanded = true;
      update();
    }
    target.scrollIntoView({ block: 'start' });
  }

  controls.hidden = false;
  update();
  revealLinkedPublication();
  window.addEventListener('hashchange', revealLinkedPublication);
})();
