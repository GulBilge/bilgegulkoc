const points = [
  { title: "[Kanıt noktası 1]", body: "[Kısa açıklama buraya gelecek]" },
  { title: "[Kanıt noktası 2]", body: "[Kısa açıklama buraya gelecek]" },
  { title: "[Kanıt noktası 3]", body: "[Kısa açıklama buraya gelecek]" },
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
