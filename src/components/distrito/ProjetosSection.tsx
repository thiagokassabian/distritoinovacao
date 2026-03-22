import { motion } from "framer-motion";
import { Heart, Cpu, Building, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projetos = [
	{
		icon: Heart,
		title: "Saúde e biotecnologia",
		desc: "Pesquisas e conexões que ajudam descobertas a chegarem mais perto da aplicação.",
		img: "./assets/img/projetos/saude.jpeg",
	},
	{
		icon: Cpu,
		title: "Dados, IA e decisões",
		desc: "Iniciativas que aproximam inteligência, informação e soluções para problemas reais.",
		img: "./assets/img/projetos/ia.jpeg",
	},
	{
		icon: Building,
		title: "Cidade, clima e infraestrutura",
		desc: "Projetos e articulações voltados a energia, mobilidade e território.",
		img: "./assets/img/projetos/cidade.jpeg",
	},
];

const ProjetosSection = () => {
	return (
		<section id="projetos-e-resultados" className="distrito-section py-16 sm:py-20 bg-gray-300/35">
			<div className="section-container">
				<h2 className="section-title mb-6">PROJETOS & RESULTADOS</h2>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{projetos.map((projeto, i) => {
						const Icon = projeto.icon;
						return (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.1, duration: 0.4 }}
								className="distrito-card flex flex-col"
							>
								<div className="w-full h-52 rounded-t-md overflow-hidden">
									<img src={projeto.img} alt={projeto.title} className="w-full h-full object-cover" />
								</div>
								<div className="p-6">
									<h3 className="font-display font-semibold text-foreground mb-2 flex items-center gap-2">
										<Icon size={20} className="text-primary" /> {projeto.title}
									</h3>
									<p className="text-sm text-muted-foreground flex-1">{projeto.desc}</p>
									<div className="mt-6 flex justify-start">
										<Button variant="outline" size="xs" className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
											Acessar <ArrowRight size={14} />
										</Button>
									</div>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default ProjetosSection;
