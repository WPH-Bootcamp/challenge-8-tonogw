import { services } from "../../data/services";

const ServicesSection = () => {
  return (
    <section>
      {services.map((services) => (
        <ServiceCard
          key={services.id}
          title={services.title}
          description={services.description}
          icon={services.icon}
        />
      ))}
    </section>
  );
};

export default ServicesSection;
