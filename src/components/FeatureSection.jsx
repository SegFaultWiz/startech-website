export default function FeatureSection({ data }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{data.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.items.map((item, i) => (
            <div key={i} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
