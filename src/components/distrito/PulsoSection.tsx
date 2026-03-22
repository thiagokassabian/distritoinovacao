import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, History } from "lucide-react";

const stats = [
	{ number: "4", label: "Marcos concluídos (60d)" },
	{ number: "9", label: "Iniciativas em andamento" },
	{ number: "6", label: "Próximos passos (30d)" },
	{ number: "14", label: "Parceiros âncora" },
	{ number: "2", label: "Atividades abertas" },
];

const timeline = [
	{ date: "20/01/2026", text: "Comitê de governança instalado (Ata/registro PDF)", tag: "P&D" },
	{ date: "05/02/2026", text: "1ª rodada de mapeamento de desafios (Resumo executivo)", tag: "Governança" },
	{ date: "27/02/2026", text: "Régua de critérios publicada (Documento)", tag: "Inovação" },
	{ date: "18/03/2026", text: "Divulgação do calendário trimestral", tag: "Inovação" },
	{ date: "25/03/2026", text: "Encontro técnico “Conexões do Distrito” (Registro + transmissão)", tag: "Inovação" },
	{ date: "30/03/2026", text: "Atualização do Pulso (Histórico)", tag: "Inovação" },
];

const PulsoSection = () => {
	return (
		<section id="pulso" className="distrito-section py-16 sm:py-20 bg-background">
			<div className="section-container">
				<h2 className="section-title mb-2">PULSO DO DISTRITO</h2>
				<p className="text-sm text-muted-foreground mb-10">
					Atualizado em: 12/03/2026 | Próxima atualização prevista: 26/03/2026 | Fonte: Hub + registros oficiais vinculados
				</p>

				{/* Stats grid */}
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
					{stats.map((stat, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 15 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.08, duration: 0.4 }}
							className="distrito-card text-center p-6"
						>
							<div className="stat-number text-primary">{stat.number}</div>
							<p className="text-xs text-muted-foreground mt-2">{stat.label}</p>
						</motion.div>
					))}
				</div>

				{/* Timeline */}
				<h3 className="font-display font-semibold text-foreground mb-4">Linha do tempo (marcos, ajustes e polêmicas)</h3>
				<div className="space-y-3 mb-8">
					{timeline.map((item, i) => (
						<div key={i} className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg border border-border">
							<span className="text-xs text-muted-foreground font-mono whitespace-nowrap mt-0.5">{item.date}</span>
							<p className="text-sm text-foreground flex-1"><a href="#" className="underline hover:text-primary transition-colors">{item.text}</a></p>
							{/* <span className="distrito-tag text-xs">{item.tag}</span> */}
						</div>
					))}
				</div>

				{/* Bottom stats */}
				<div className="grid sm:grid-cols-3 gap-4 mb-8">
					<div className="distrito-card p-6">
						<p className="text-md  font-display font-bold text-foreground mb-1">Critérios e governança</p>
						<p className="text-xs text-muted-foreground">Status: Publicado</p>
						<p className="text-xs text-muted-foreground">Prova: Documento PDF (27/02/2026)</p>
					</div>
					<div className="distrito-card p-6">
						<p className="text-md font-display font-bold text-foreground mb-1">Mapa do ecossistema</p>
						<p className="text-xs text-muted-foreground">Status: Em atualização</p>
						<p className="text-xs text-muted-foreground">Prova: Lista inicial de atores + categorias (12/03/2026) </p>
					</div>
					<div className="distrito-card p-6">
						<p className="text-md font-display font-bold text-foreground mb-1">Agenda trimestral</p>
						<p className="text-xs text-muted-foreground">Status: Em validação</p>
						<p className="text-xs text-muted-foreground">Prova: Calendário preliminar (10/03/2026) </p>
					</div>
				</div>

				<div className="flex flex-wrap gap-3">
					<Button variant="outline" size="sm" className="gap-2">
						<History size={16} />
						Ver histórico de atualização
					</Button>
					<Button variant="outline" size="sm" className="gap-2">
						<Download size={16} />
						Baixar Pulso (PDF)
					</Button>
				</div>
			</div>
		</section>
	);
};

export default PulsoSection;
