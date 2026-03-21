import { Button } from "@/components/ui/button";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
	{
		q: "Qual é a função do Distrito?",
		a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien augue. Proin ac neque nec nisl convallis tincidunt. Ver prova: Missão e objetivos oficiais.",
	},
	{
		q: "Quem pode se beneficiar do Distrito?",
		a: "O Distrito pode gerar benefícios para diferentes públicos: cidadãos, gestores, pesquisadores, empresas e instituições parceiras. Isso acontece quando conhecimento e articulação viram soluções, conexões, projetos e melhorias aplicáveis à vida real e às políticas públicas.",
	},
	{
		q: "Onde encontro informações sobre custos e investimentos?",
		a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien augue. Proin ac neque nec nisl convallis tincidunt. Ver prova: Relatórios financeiros e de investimento.",
	},
	{
		q: "Como o Distrito organiza decisões e próximos passos?",
		a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien augue. Proin ac neque nec nisl convallis tincidunt. Ver prova: Governança, comitês e critérios de decisão.",
	},
	{
		q: "O que já está em andamento?",
		a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien augue. Proin ac neque nec nisl convallis tincidunt. Ver prova: Pulso de status, marcos e próximos passos.",
	},
	{
		q: "Como acompanhar o Distrito ao longo do tempo?",
		a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien augue. Proin ac neque nec nisl convallis tincidunt. Ver prova: Pulso de status, marcos e próximos passos.",
	},
	{
		q: "Como posso participar ou sugerir conexões?",
		a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien augue. Proin ac neque nec nisl convallis tincidunt. Ver prova: Pulso de status, marcos e próximos passos.",
	},
	{
		q: "Como as informações são organizadas e atualizadas?",
		a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien augue. Proin ac neque nec nisl convallis tincidunt. Ver prova: Pulso de status, marcos e próximos passos.",
	},
];

const FaqSection = () => {
	return (
		<section id="faq" className="py-16 sm:py-20 bg-gray-300/35">
			<div className="section-container">
				<h2 className="section-title mb-8 uppercase">Dúvidas frequentes</h2>

				<Accordion type="single" collapsible className="space-y-2">
					{faqs.map((faq, i) => (
						<AccordionItem
							key={i}
							value={`faq-${i}`}
							className="bg-background rounded-lg border border-border px-4"
						>
							<AccordionTrigger className="text-sm font-display font-semibold text-foreground hover:no-underline">
								{faq.q}
							</AccordionTrigger>
							<AccordionContent className="text-sm text-muted-foreground">
								{faq.a}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>

				<div className="mt-6">
					<Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
						Ver FAQ completo
					</Button>
				</div>
			</div>
		</section>
	);
};

export default FaqSection;
