# Günlük v1.7 — Arayüz ve Profil Güncellemesi

Güncellenen dosyalar: `index.html`, `kisiler.html`, `sw.js`, `install-diary.html`, `install-calendar.html`, `install-calculator.html`, `install-loan.html`, `install-sudoku.html`.

## Değişiklikler
- Görünüm değiştiğinde başlık, uygulama adı metası ve simge eşleşir. iPhone / Android'de mevcut kurulu uygulamanın sistemdeki adı otomatik değişmeyebilir: doğru simge/isim için yeni kurulum sayfası kullanılmalıdır.
- Kullanıcı adı ve görünen ad, özel Kişiler sayfasındaki `Hesap bilgileri` bölümünden düzenlenebilir. Şifreleme anahtarı, kişi ID'si ve mevcut mesajlar değiştirilmez.
- Normal Ayarlar'daki Veriler Bu Cihazda / Belge Güvenliği / sürüm kutusu kaldırıldı. Özel hesabın güvenliği normal Ayarlar'da gösterilmez.
- Özel bölümde kurtarma ve Face ID durumuna göre küçük, zorlamayan güvenlik uyarısı görünür.
- Sohbet ekranı sadeleştirildi; önceki 10 saniye / okumada silme / çıkışta sıfırlama davranışı korundu.
- Ana ekrana ekleme bağlantıları ve cihaz değiştirme uyarısı güncellendi.

## Yayın
ZIP'i açın ve dosyaları `ygzonair/Gunluk` GitHub deposunun `main` dalının ana dizinine yükleyin. 8 güncel dosyayı mevcut dosyaların yerine koyun. GitHub Pages işlemi tamamlandıktan sonra uygulamayı tamamen kapatıp yeniden açın.

## Sunucu
Supabase migrasyonu uygulandı: `gunluk_profiles_owner_edit` RLS politikası, `username`/`display_name` için UPDATE sütun izinleri, `gunluk_security_status` (yalnızca sahibinin kurulum durumunu döndürür). Diğer sunucu verileri değiştirilmedi.

## Güvenlik notu
iOS Safari ve Android gerçek cihazlarda kurulum / Face ID testi ayrıca yapılmalıdır. Hesap kurtarma kodunu kaybetmeyin; yeni simge eskisiyle aynı oturumu paylaşmayabilir. Cihazın ele geçirilmesine karşı mutlak koruma garanti edilmez.
