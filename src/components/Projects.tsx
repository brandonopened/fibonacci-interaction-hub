import { Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    title: "AI Agent Framework",
    description: "A flexible framework for building and deploying custom LLM agents",
    github: "https://github.com/brandonopened/ai-agent-framework",
    tags: ["Python", "LangChain", "OpenAI"],
  },
  {
    title: "Custom GPT Interface",
    description: "Interactive interface for custom GPT model deployment",
    github: "https://github.com/brandonopened/custom-gpt-interface",
    tags: ["React", "TypeScript", "OpenAI"],
  },
  {
    title: "LLM Training Pipeline",
    description: "End-to-end pipeline for fine-tuning language models",
    github: "https://github.com/brandonopened/llm-training-pipeline",
    tags: ["PyTorch", "Transformers", "MLOps"],
  },
];

export const Projects = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <Github size={20} />
                  View on GitHub
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};