# Günlük v1.8.2 — Gönderdiğim mesajı görüntüleme

## Değişen dosyalar
- `kisiler.html`
- `sw.js` (önbellek sürümü `gunluk-v18-2`)

## Değişiklik
- Gönderdiğin mesajlar kilitli balon hâlindedir; dokununca içeriği 10 saniyeliğine açılır.
- Gönderenin mesajı görüntülemesi sunucudaki mesajı silmez. Alıcı okuduğunda silinir.
- Gönderenin 10 saniyelik önizlemesi bitince balon yeniden kilitlenir; alıcı okumadıysa tekrar açılabilir.
- Bir mesaj açıkken diğerine dokunulursa önceki açık metin hemen temizlenir.
- Alıcı mesajları açınca eskisi gibi tek kullanımlık olarak silinir.
- Gönderen eski bir mesaj balonuna dokunduğunda sunucuya yeniden bakılır: alıcı okumuşsa içerik gösterilmez.

## Kurulum
ZIP içindeki `kisiler.html` ve `sw.js` dosyalarını `ygzonair/Gunluk` deposunun `main` köküne yükleyin. Dosyaların üzerine yazılmasını onaylayıp Commit changes yapın.

Hiçbir veritabanı değişikliği yapılmaz. Mevcut hesap, anahtarlar ve mesajlar korunur. Ekran dışında önbellek değişikliği için ana ekrandaki uygulamayı bir kez kapatıp açın; oturumu veya uygulama verilerini silmeyin.
