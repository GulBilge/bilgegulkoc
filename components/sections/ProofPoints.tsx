const points = [
  {
    title: "Teknik derinlik",
    body: "Yazılım mühendisi ve AI mimarı olarak yapay zekayı işine gerçekten uyarlanabilir hale getiriyorum — yüzeysel değil, sistemli.",
  },
  {
    title: "Bizden biri",
    body: "Ben de evden çalışan, küçük bir çocuk büyüten bir anneyim. Bölünmüşlüğü, görünürlük kaygısını, \"yetebilir miyim\" sorusunu kendim de yaşıyorum.",
  },
  {
    title: "Kadından kadına güven",
    body: "Kadın kadına çalışmanın verdiği güveni biliyorum. Burada seni anlayan biriyle, saygı çerçevesinde ilerliyorsun.",
  },
];

export function ProofPoints() {
  return (
    <div className="grid gap-8 sm:grid-cols-3">
      {points.map((point) => (
        <div key={point.title} className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-stone-950">
            {point.title}
          </h3>
          <p className="text-sm leading-relaxed text-stone-600">
            {point.body}
          </p>
        </div>
      ))}
    </div>
  );
}
