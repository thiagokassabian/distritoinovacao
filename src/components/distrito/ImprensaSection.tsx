import { useState } from "react";
import { FileText, Database, Image } from "lucide-react";
import { Button } from "../ui/button";

const tabs = [
	{ label: "Press kit (PDF)", icon: FileText },
	{ label: "Dados copiáveis (CSV)", icon: Database },
	{ label: "Imagens & Vídeos", icon: Image },
];

const pressItems = [
	"Guia de Imprensa: Cobertura completa do Distrito de Inovação — versão dez/2024.",
	"Nota oficial: Resultados do 1º ciclo de P&D publicados em nov/2024.",
	"Dados verificáveis: link para o Pulso em tempo real, dados de acompanhamento.",
];

const ImprensaSection = () => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<section id="sala-de-imprensa" className="distrito-section py-16 sm:py-20 bg-background">
			<div className="section-container">
				<h2 className="section-title">SALA DE IMPRENSA</h2>
				<p className="text-lg text-muted-foreground mb-8">
					Materiais oficiais para download, citação e cobertura.
				</p>

				<div className="mb-8 p-6 bg-muted/50 rounded-lg border border-border">
					<div className="mb-8">
						<p className="font-semibold">Guia rápido para pauta e checagem</p>
						<ul className="list-disc list-inside text-sm text-foreground mt-2">
							<li className="list-item">Press kit para contexto e definição oficial.</li>
							<li className="list-item">Pulso para status, marcos e atualização com data.</li>
							<li className="list-item">Dados, imagens e vídeos para download e cobertura.</li>
						</ul>
						<p className="text-xs mt-4">
							Contato imprensa: <a href="mailto:imprensa.scti@sp.gov.br" className="text-primary hover:underline">imprensa.scti@sp.gov.br</a> | seg–sex 9h–18h
						</p>
					</div>
					<div className="flex flex-wrap gap-2">
						{tabs.map((tab, i) => {
							const Icon = tab.icon;
							return (
								// <button
								// 	key={i}
								// 	onClick={() => setActiveTab(i)}
								// 	className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg border transition-colors ${activeTab === i
								// 			? "bg-secondary text-secondary-foreground border-secondary"
								// 			: "bg-background text-muted-foreground border-border hover:border-foreground/30"
								// 		}`}
								// >
								<Button variant="outline" size="sm" className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
									<Icon size={16} />
									{tab.label}
								</Button>
							);
						})}
					</div>
				</div>

				{/* <div className="space-y-3">
					{pressItems.map((item, i) => (
						<div key={i} className="p-4 bg-muted/50 rounded-lg border border-border">
							<p className="text-sm text-foreground">{item}</p>
						</div>
					))}
				</div> */}
			</div>
		</section>
	);
};

export default ImprensaSection;
