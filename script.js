document.querySelectorAll('nav a').forEach(a=>a.onclick=e=>{e.preventDefault();document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});});

document.querySelectorAll('[data-tab-group]').forEach(group=>{
  const section=group.closest('section');
  const items=section.querySelectorAll('[data-category]');
  group.querySelectorAll('.tab').forEach(tab=>tab.addEventListener('click',()=>{
    group.querySelector('.active').classList.remove('active');
    tab.classList.add('active');
    const category=tab.dataset.tab;
    items.forEach(item=>item.classList.toggle('is-hidden',category!=='all'&&item.dataset.category!==category));
  }));
});

const lb=document.getElementById('lightbox'),lbImg=lb.querySelector('img');
document.querySelectorAll('.thumb').forEach(t=>t.onclick=()=>{lbImg.src=t.src;lbImg.alt=t.alt;lb.classList.add('open');});
lb.onclick=()=>lb.classList.remove('open');
document.addEventListener('keydown',e=>{if(e.key==='Escape')lb.classList.remove('open');});