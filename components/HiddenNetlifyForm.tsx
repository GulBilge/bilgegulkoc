// Netlify, form tanımlarını deploy sırasında statik HTML içinde tarayarak
// bulur. EmailPopup istemci tarafında (JS ile) belirdiği için bu taramada
// görünmez — bu yüzden aynı alanlara sahip, gizli ve statik bir kopyasını
// bir sayfada bulundurmamız gerekiyor.
export function HiddenNetlifyForm() {
  return (
    <form name="abone" data-netlify="true" netlify-honeypot="bot-field" hidden>
      <input type="email" name="email" />
      <input type="hidden" name="form-name" value="abone" />
      <input name="bot-field" />
    </form>
  );
}
