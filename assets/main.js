(() => {
  const controls = document.querySelector('.filters');
  const entries = [...document.querySelectorAll('.publication')];
  const search = document.querySelector('#search');
  const buttons = [...document.querySelectorAll('[data-filter]')];
  let topic = 'All';
  function update() {
    const query = search.value.trim().toLowerCase();
    let visible = 0;
    entries.forEach(entry => {
      entry.hidden = !(topic === 'All' || entry.dataset.topic.split('|').includes(topic)) || !entry.dataset.search.includes(query);
      if (!entry.hidden) visible++;
    });
    document.querySelector('#result-count').textContent = `${visible} of ${entries.length} publications`;
    document.querySelector('#no-results').hidden = visible !== 0;
  }
  buttons.forEach(button => button.addEventListener('click', () => {
    topic = button.dataset.filter;
    buttons.forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    update();
  }));
  search.addEventListener('input', update);
  controls.hidden = false;
  update();
})();
