# Günlük v1.8 — Biyometrik kilit, kişisel parola, anında mesaj geçişi

## Güncellenen dosyalar
- `kisiler.html`: Hesap Bilgileri altında parola değiştir; daha dayanıklı WebAuthn PRF ile Face ID / Touch ID açma, uyumluluk modu, biyometrik kaydı güvenli biçimde yeniden ekleme/kaldırma; mesaj açıkken bir sonrakine anında geçiş.
- `sw.js`: Önbellek sürümü `gunluk-v18`. Eski önbelleğin yeni sohbet dosyasını gölgelemesini önler.

## Yayın
1. `Gunluk_v1_8_Guncelleme.zip` içindeki `kisiler.html` ve `sw.js` dosyalarını GitHub `ygzonair/Gunluk` deposunun `main` kök dizinine yükleyip aynı isimli dosyalarla değiştir.
2. GitHub Pages Actions işlemi başarılı olduktan sonra uygulamayı kapatıp yeniden aç.
3. Cache eski sürümde kalırsa Safari/Chrome'da siteyi yeniden yükle. **Uygulama verilerini silme**: anonim oturum ve kişi kimliği kaybolabilir.

## Kullanım
- Parola: Gizli alan → Kişiler → Hesap bilgileri → Kişisel parolayı değiştir. Eski parola gerekir; yeni parola en az 12 karakter.
- Face ID / Touch ID: Kişisel parolayla aç → Güvenlik ve gizlilik → Face ID / Touch ID. Kişisel parolanı doğrula ve ardından ayrı düğmeye dokunarak passkey kaydını başlat. WebAuthn PRF sonucu ilk işlemde gelmezse ayrı doğrulama düğmesine bas. Kayıt bozuksa kişisel parolayla yalnızca sorunlu biyometrik anahtarı kaldırıp yeniden kaydet.
- Mesajlar: Okunmamış mesaj kilitli kalır. Bir mesaj açıkken diğerine dokunulduğunda birinci mesaj anında ekrandan kaldırılır; ikinci mesaj açılınca kendi 10 saniyelik süresine başlar. Sunucudan silme doğrulanmazsa mesaj gösterilmez. Sohbetten çıkınca açık mesaj silinir.

## Test durumu
- JS sözdizimi, HTML ID benzersizliği ve mobil statik görünüm kontrol edildi.
- Node WebCrypto + sahte veritabanı ile parola değiştirme, eski parola reddi, özel anahtar korunması, mesaj geçişi, biyometrik kaydın çözülmesi ve iki dokunuşlu kayıt akışı test edildi.
- **Gerçek iPhone üzerindeki WebAuthn PRF doğrulaması test edilemedi**; Safari/iOS uyumluluğu değişebilir. PRF desteği yoksa kişisel parolayla açma korunur. Bu uygulama bağımsız güvenlik denetiminden geçmiş değildir.

**Not:** Kişisel parola değişikliği diğer güvenilir cihazların oturumlarını kendiliğinden iptal etmez. Ancak sonraki kilit açılışlarında yeni parola gerekir. Biyometrik kayıt aynı özel anahtarı kullandığı için parola değişiminden etkilenmez.
