export default function TeamSection({ data }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{data.title}</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {data.members.map((member, i) => (
            <div key={i} className="text-center max-w-xs">
              <div className="w-32 h-32 mx-auto rounded-full bg-gray-200 flex items-center justify-center text-4xl mb-4">
                👤
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
