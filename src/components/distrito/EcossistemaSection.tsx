import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Building, Globe, Landmark } from "lucide-react";

const categories = [
	{ label: "Ciência & tecnologia", icon: Globe, count: 12, desc: "Pesquisa, laboratórios e instituições que geram conhecimento e evidência." },
	{ label: "Governo & políticas públicas", icon: Landmark, count: 8, desc: "Desafios públicos, articulação institucional e capacidade de escala." },
	{ label: "Empresas & startups", icon: Building, count: 23, desc: "Aplicação, teste, desenvolvimento e adoção de soluções." },
];


const logos = [
	{ src: "./assets/img/logos/logo-usp.png", alt: "USP" },
	{ src: "./assets/img/logos/logo-butantan.png", alt: "Instituto Butantan" },
	{ src: "./assets/img/logos/logo-ipt.png", alt: "IPT" },
	{ src: "./assets/img/logos/logo-ipen.png", alt: "IPEN" },
	{ src: "./assets/img/logos/logo-fapesp.png", alt: "FAPESP" },
	{ src: "./assets/img/logos/logo-prefeiturasp.png", alt: "Prefeitura de São Paulo" },
];

// const links = [
// 	"Saúde digital — Integração de dados (Em andamento)",
// 	"Gov Digital — Prova rápida (Em andamento)",
// 	"Mobilidade — Piloto de rotas (Próximo passo)",
// 	"Clima — Observatório beta (Em validação)",
// 	"Segurança — PoC em triagem (Em triagem)",
// 	"Talentos — Trilha CPS/Fatec (Em andamento)"
// ];

// const tags = ["Saúde", "Mobilidade", "Gov Digital", "Clima/Energia", "Segurança", "Talentos"];

const EcossistemaSection = () => {
	// const [activeTag, setActiveTag] = useState("P&D");

	return (
		<section id="ecossistema-em-rede" className="distrito-section py-16 sm:py-20 bg-gray-300/35">
			<div className="section-container">
				<h2 className="section-title">ECOSSISTEMA EM REDE</h2>
				<p className="text-lg text-muted-foreground mb-10">
					Instituições, governo e empresas conectados para transformar conhecimento em soluções reais.
				</p>

				<div className="flex flex-wrap items-center justify-center sm:justify-around mb-10 gap-6">
					{logos.map((logo, i) => (
						<img src={logo.src} alt={logo.alt} className="h-10 sm:h-16" />
					))}
				</div>

				<div className="grid sm:grid-cols-3 gap-4 mb-8">
					{categories.map((cat, i) => {
						const Icon = cat.icon;
						return (
							// <motion.div
							// 	key={i}
							// 	initial={{ opacity: 0, y: 15 }}
							// 	whileInView={{ opacity: 1, y: 0 }}
							// 	viewport={{ once: true }}
							// 	transition={{ delay: i * 0.1 }}
							// 	className="distrito-card flex items-center gap-4 p-6"
							// >
							<div key={i} className="distrito-card flex items-center gap-4 p-6">
								<div className="w-12 h-12 rounded-lg bg-secondary text-secondary-foreground flex items-center justify-center shrink-0">
									<Icon size={22} />
								</div>
								<div>
									<p className="font-display font-semibold text-sm text-foreground">{cat.label}</p>
									<p className="text-xs text-muted-foreground">{cat.desc}</p>
								</div>
							</div>
							// </motion.div>
						);
					})}
				</div>
				<div className="flex items-start flex-col gap-4 justify-center">
					<div>
						Leve sua ideia, desafio ou iniciativa para a rede certa.
					</div>
					<Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
						Faça novas conexões <ArrowRight size={16} />
					</Button>
				</div>

				{/* <div className="flex flex-wrap gap-2 mb-4">
					{tags.map((tag) => (
						<button
							key={tag}
							onClick={() => setActiveTag(tag)}
							className={`distrito-tag transition-colors ${activeTag === tag ? "bg-primary text-primary-foreground border-primary" : "hover:border-foreground/30"
								}`}
						>
							{tag}
						</button>
					))}
				</div>
				<div className="p-6 bg-background rounded-lg border border-border hover:shadow-sm transition-shadow">
					<ul className="">
						{links.map((link, i) => (
							<li key={i} className="text-sm text-foreground mb-2 last:mb-0">{link}</li>
						))}
					</ul>
					<div className="flex justify-end">
						<Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
							Explorar conexões <ArrowRight size={16} />
						</Button>
					</div>
				</div> */}
			</div>
		</section>
	);
};

export default EcossistemaSection;
