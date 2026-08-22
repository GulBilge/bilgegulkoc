// Netlify, form tanımlarını deploy sırasında statik HTML içinde tarayarak
// bulur. DanismanlikForm istemci tarafında (JS ile) belirdiği için bu
// taramada görünmez — bu yüzden aynı alanlara sahip, gizli ve statik bir
// kopyasını sayfada bulundurmamız gerekiyor.
export function DanismanlikHiddenForm() {
  return (
    <form
      name="danismanlik"
      data-netlify="true"
      netlify-honeypot="bot-field"
      hidden
    >
      <input type="text" name="ad-soyad" />
      <input type="email" name="email" />
      <input type="text" name="instagram" />
      <select name="meslek">
        <option>Koç</option>
        <option>Diyetisyen</option>
        <option>Eğitmen / atölye sahibi</option>
        <option>Danışman</option>
        <option>Terapist</option>
        <option>Diğer</option>
      </select>
      <textarea name="konu" />
      <textarea name="zorluk" />
      <input type="radio" name="ai-duzeyi" value="Hiç kullanmadım" />
      <input type="radio" name="ai-duzeyi" value="Ara sıra" />
      <input type="radio" name="ai-duzeyi" value="Düzenli kullanıyorum" />
      <select name="uygun-zaman">
        <option>Hafta içi gündüz</option>
        <option>Hafta içi akşam</option>
        <option>Hafta sonu</option>
        <option>Farketmez</option>
      </select>
      <input type="checkbox" name="kvkk" />
      <input type="hidden" name="form-name" value="danismanlik" />
      <input name="bot-field" />
    </form>
  );
}
