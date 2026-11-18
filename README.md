# Günlük v1.8.1 — Parola karakter sınırı düzeltmesi

ZIP'i çıkartıp aşağıdaki dosyaları GitHub deponun ana dizinine yükle ve Commit changes yap.

- `kisiler.html`: Hesap oluşturma, parola değiştirme ve Face ID/Touch ID kaydı için minimum/maksimum parola karakter zorunluluğu yoktur. **Boş parola kabul edilmez.**
- `chat.html`: Önceki ortak parolalı sohbet ekranındaki 12 karakter kontrolü kaldırıldı. Mevcut ortak parola aynen geçerlidir.
- `sw.js`: PWA önbelleği v1.8.1 olarak yenilendi.

Kullanıcı kimliği, şifreleme algoritması, anahtarlar ve mevcut sohbet verileri değiştirilmez.

**Güvenlik:** Kısa parola kullanımı mümkün fakat tahmin edilmesi kolaydır. Uzun ve benzersiz bir parola önerilir, zorunlu değildir.

GitHub: https://github.com/ygzonair/Gunluk/upload/main

ChatGPT sohbet başlığını uygulama menüsünden kullanıcı değiştirebilir; Günlük dosyaları ChatGPT başlığını değiştirmez.
