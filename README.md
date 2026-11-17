# Günlük v1.6 — Güvenlik, Cihazlar ve Gizli Bildirimler

Yeni işlevler Kişiler > Güvenlik ve gizlilik ayarları bölümünde.

- Okunmamış mesaj yalnızca dokununca açılır; okunan mesaj sunucudan silindikten sonra en fazla 10 saniye görüntülenir. Konuşmadan çıkınca ekran hemen temizlenir.
- Face ID / Touch ID (WebAuthn PRF destekleniyorsa): kişisel parolayla etkinleştirilir; özel anahtar biyometrik passkey'den türetilen anahtarla sarılır. Desteklenmiyorsa kişisel parola kullanılır.
- Otomatik kilit: 15/30/60/120/300 saniye ve uygulama arka plana geçtiğinde anında.
- Güvenilir cihazlar: listeleme, cihaz erişimini kaldırma.
- Kurtarma: tek kullanımlık 256 bit kod + kişisel parola; kod kaybedilirse eski kodla yenilenir. Yeni cihazda aynı mesaj kimliğine bağlanır.
- Gizli Web Push: etkinleştirme ve devre dışı bırakma, bildirime mesaj metni ve gönderen adı konmaz. iPhone Home Screen PWA + izin gerektirir.

Yayınlama: Bu paketteki dosyaları GitHub ygzonair/Gunluk `main` ana dizinine yükleyip Commit changes yap. Önce eski PWA'yı silme.

ÖNEMLİ: WebAuthn PRF çalışması gerçek iPhone'da ve Android'de kontrol edilmedi. Bildirimlerin iOS üzerinde uçtan uca teslimi doğrulanmadı. Bu sistem bağımsız güvenlik denetiminden geçmedi. Biyometri iPhone kilit kodunu alternatif kabul edebilir. Görünen metnin silinmesi RAM/ekran görüntüsü/klavye izi/sunucu yedeklerini bütünüyle silmez.
