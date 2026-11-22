const CACHE='gunluk-v21-minimal';
const ASSETS=['./', './index.html', './chat.html', './kisiler.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './install-diary.html', './manifest-diary.webmanifest', './icon-diary-192.png', './icon-diary-512.png', './install-calendar.html', './manifest-calendar.webmanifest', './icon-calendar-192.png', './icon-calendar-512.png', './install-calculator.html', './manifest-calculator.webmanifest', './icon-calculator-192.png', './icon-calculator-512.png', './install-loan.html', './manifest-loan.webmanifest', './icon-loan-192.png', './icon-loan-512.png', './install-sudoku.html', './manifest-sudoku.webmanifest', './icon-sudoku-192.png', './icon-sudoku-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const req=e.request;if(req.method!=='GET')return;const url=new URL(req.url);if(url.origin!==self.location.origin)return;if(req.mode==='navigate'){e.respondWith(fetch(req).then(res=>{if(res.ok){const copy=res.clone();caches.open(CACHE).then(c=>c.put(req,copy))}return res}).catch(()=>caches.match(req).then(r=>r||caches.match('./index.html'))));return;}e.respondWith(caches.match(req).then(r=>r||fetch(req)))});

// No message text, sender, or identifiers are ever placed into a push notification.
self.addEventListener('push',event=>{
 event.waitUntil(self.registration.showNotification('Bildirim',{body:'Yeni bildirimin var.',icon:'./icon-192.png',badge:'./icon-192.png',tag:'gunluk-private-notice',renotify:false,data:{url:'./index.html'}}));
});
self.addEventListener('notificationclick',event=>{
 event.notification.close();
 event.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(wins=>{
  const existing=wins.find(w=>new URL(w.url).origin===self.location.origin&&new URL(w.url).pathname.startsWith(new URL(self.registration.scope).pathname));
  if(existing)return existing.focus();
  return self.clients.openWindow('./index.html');
 }));
});
