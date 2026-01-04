export default function ContactSection({ data }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl font-bold mb-4">{data.title}</h2>
        <p className="text-gray-600 mb-8">{data.subtitle}</p>
        <div className="space-y-3 text-lg">
          <p>📧 <a href={`mailto:${data.email}`} className="text-blue-600 hover:underline">{data.email}</a></p>
          <p>📞 {data.phone}</p>
          <p>📍 {data.address}</p>
        </div>
      </div>
    </section>
  );
}
