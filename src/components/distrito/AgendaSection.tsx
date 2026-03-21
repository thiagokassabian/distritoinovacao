import { Button } from "@/components/ui/button";
import { CalendarDays, ArrowRight } from "lucide-react";

const events = [
	{ date: "18/03/2026", title: "Publicação do calendário trimestral — Por que importa: previsibilidade pública." },
	{ date: "19/03/2026", title: "Workshop técnico (Saúde Digital) — escopo e critérios." },
	{ date: "22/03/2026", title: "Rodada de testes #1 (Gov Digital) — validação com usuários." },
	{ date: "25/03/2026", title: "Encontro “Conexões do Distrito” — aproxima atores." },
	{ date: "26/03/2026", title: "Comitê de decisão (Segurança PoC) — entrada/saída." },
	{ date: "30/03/2026", title: "Atualização do Pulso — prestação de contas." },
];

const AgendaSection = () => {
	return (
		<section id="agenda" className="py-16 sm:py-20 bg-background">
			<div className="section-container">
				<h2 className="section-title flex items-center gap-3">
					<CalendarDays className="text-primary" size={28} />
					AGENDA & MARCOS
				</h2>
				<p className="text-lg text-muted-foreground mb-8">
					Acompanhe os marcos mais recentes e os próximos passos do Distrito.
				</p>

				<div className="bg-muted/50 rounded-lg border border-border p-6">
					<div className="space-y-4">
						{events.map((event, i) => (
							<div key={i} className="flex items-start gap-4 pb-4 border-b border-border last:border-b-0 last:pb-0">
								<span className="font-mono text-xs text-muted-foreground whitespace-nowrap bg-background px-2 py-1 rounded">
									{event.date}
								</span>
								<p className="text-sm text-foreground">{event.title}</p>
							</div>
						))}
					</div>

					<div className="mt-6 flex">
						<Button variant="outline" size="sm" className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
							Ver agenda completa <ArrowRight size={14} />
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AgendaSection;
