import { services, ServicesHeader } from "../../data/proceses";

export default function ServicesSection() {
  return (
    <section>
      <div>
        <h2>{ServicesHeader.title}</h2>
        <p>{ServicesHeader.description}</p>
      </div>
      {services.map((services) => (
        <div
          key={services.id}
          title={services.title}
          description={services.description}
          icon={services.icon}
        ></div>
      ))}
    </section>
  );
}
