function navigate(e, pageId) {
  if (e) e.preventDefault();
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  document.querySelector(`nav a[data-page="${pageId}"]`).classList.add('active');
  document.querySelector('.main').scrollTop = 0;
}
