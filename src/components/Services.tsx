import { Brain, Bot, Code, MessageSquare } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Custom AI Solutions",
    description: "Tailored artificial intelligence solutions to meet your specific business needs",
  },
  {
    icon: Bot,
    title: "LLM Agents",
    description: "Development of specialized AI agents powered by large language models",
  },
  {
    icon: Code,
    title: "AI Integration",
    description: "Seamless integration of AI capabilities into your existing systems",
  },
  {
    icon: MessageSquare,
    title: "AI Consulting",
    description: "Expert guidance on AI strategy and implementation",
  },
];

export const Services = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <service.icon
                className="w-12 h-12 text-primary mb-4"
                strokeWidth={1.5}
              />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};