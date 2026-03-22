function navigate(e, pageId) {
  if (e) e.preventDefault();
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  // Detail pages (prefixed cs-) keep the Case Studies nav item active
  const navTarget = pageId.startsWith('cs-') ? 'casestudies' : pageId;
  const navLink = document.querySelector(`nav a[data-page="${navTarget}"]`);
  if (navLink) navLink.classList.add('active');
  // Page-specific themes
  document.querySelector('.main').classList.toggle('theme-material', pageId === 'cs-materialdesign');
  document.querySelector('.main').scrollTop = 0;
}
