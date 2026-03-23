import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Building2, Lightbulb, GraduationCap, Landmark } from "lucide-react";

const rotas = [
	{
		icon: Building2,
		title: "Cidadão",
		desc: "Entenda o projeto, acompanhe o andamento e veja as evidências públicas.",
		items: ["Pulso e Agenda", "FAQ de dúvidas difíceis", "Compartilhe prova"],
		color: "distrito-red" as const,
	},
	{
		icon: Lightbulb,
		title: "Imprensa e formadores",
		desc: "Acesse materiais oficiais, provas, contatos e caminhos de checagem.",
		items: ["Press kit e dados", "Como citar", "Contato imprensa"],
		color: "distrito-blue" as const,
	},
	{
		icon: GraduationCap,
		title: "Comunidade científica e acadêmica",
		desc: "Veja como pesquisa, instituições e aplicação pública se conectam no ecossistema.",
		items: ["Critérios e chamadas", "Evidências do ecossistema", "Conexões temáticas"],
		color: "distrito-green" as const,
	},
	{
		icon: Landmark,
		title: "Gestores públicos e articuladores",
		desc: "Entenda como o Distrito pode inspirar, conectar e acelerar soluções no território.",
		items: ["Pilotos e replicação", "Agenda de encontros", "Rotas por território"],
		color: "distrito-yellow" as const,
	},
];

const colorMap = {
	"distrito-red": "bg-primary text-primary-foreground",
	"distrito-blue": "bg-distrito-blue text-secondary-foreground",
	"distrito-green": "bg-distrito-green text-secondary-foreground",
	"distrito-yellow": "bg-distrito-yellow text-foreground",
};

const RotasSection = () => {
	const [openIdx, setOpenIdx] = useState<number | null>(null);

	return (
		<section id="rotas-por-público" className="distrito-section py-16 sm:py-20 bg-gray-300/35">
			<div className="section-container">
				<h2 className="section-title">ROTAS POR PÚBLICO</h2>
				<p className="text-lg text-muted-foreground mb-8">
					Encontre o caminho mais útil para você: conteúdos, provas e acessos organizados por perfil.
				</p>

				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
					{rotas.map((rota, i) => {
						const Icon = rota.icon;
						const isOpen = openIdx === i;
						return (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.1, duration: 0.4 }}
								className="distrito-card flex flex-col p-6"
							>
								<div className={`w-10 h-10 rounded-lg ${colorMap[rota.color]} flex items-center justify-center mb-4`}>
									<Icon size={20} />
								</div>
								<h3 className="font-display font-semibold text-foreground mb-1">{rota.title}</h3>
								<p className="text-sm text-muted-foreground mb-4 flex-1">{rota.desc}</p>

								<button
									onClick={() => setOpenIdx(isOpen ? null : i)}
									className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
								>
									Abrir guia rápido
									{isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
								</button>

								{isOpen && (
									<motion.ul
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: "auto", opacity: 1 }}
										className="mt-3 space-y-1 border-t border-border pt-3"
									>
										{rota.items.map((item, j) => (
											<li key={j} className="text-sm text-muted-foreground">• {item}</li>
										))}
									</motion.ul>
								)}
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default RotasSection;
