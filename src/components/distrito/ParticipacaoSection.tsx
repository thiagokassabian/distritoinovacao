import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

const ParticipacaoSection = () => {
	return (
		<section id="participe" className="bg-gray-300/75">
			<div className="section-container py-16 sm:py-20 relative">
				<h2 className="section-title">PARTICIPE DO ECOSSISTEMA</h2>
				<p className="text-lg text-muted-foreground mb-8">
					Quer acompanhar, participar ou sugerir conexões? Direcione seu interesse por aqui.
				</p>

				<div className="grid md:grid-cols-2 gap-8">
				{/* <div className="flex flex-col md:flex-row items-start gap-8"> */}
					{/* Form */}
					<div>
						<img src="../assets/img/foto1.png" alt="" className="absolute bottom-0 max-w-5xl" />
					</div>
					<div className="distrito-card w-full relative">
						<h3 className="font-display font-semibold text-foreground mb-2 flex items-center gap-2">
							<Send size={18} className="text-primary" />
							Leve sua ideia, desafio ou iniciativa para a rede certa
						</h3>
						<p className="text-xs text-muted-foreground mb-6">Se você tem uma proposta, desafio, conexão ou possibilidade de colaboração, registre aqui seu interesse.</p>

						<div className="space-y-4">
								<Input placeholder="Nome completo" className="bg-muted/50" />
								<Input placeholder="Instituição / organização" className="bg-muted/50" />
							<div className="grid grid-cols-2 gap-4">
								<Input placeholder="E-mail" type="email" className="bg-muted/50" />
								<Input placeholder="Telefone" className="bg-muted/50" />
							</div>
							<Input placeholder="Assunto / frente de interesse" className="bg-muted/50" />
							<Textarea placeholder="Conte, em poucas linhas, sua proposta, desafio ou interesse" className="bg-muted/50" rows={4} />
							<Textarea placeholder="Links ou materiais de apoio (opcional)" className="bg-muted/50" rows={3} />


							{/* <Select>
								<SelectTrigger className="bg-muted/50">
									<SelectValue placeholder="Categoria" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="empresa">Empresa</SelectItem>
									<SelectItem value="startup">Startup</SelectItem>
									<SelectItem value="academia">Academia</SelectItem>
									<SelectItem value="governo">Governo</SelectItem>
									<SelectItem value="cidadao">Cidadão</SelectItem>
								</SelectContent>
							</Select> */}
							<Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
								<Send size={16} />
								Enviar interesse
							</Button>
						</div>
					</div>

					{/* Newsletter 
					<div className="distrito-card flex flex-col w-full">
						<h3 className="font-display font-semibold text-foreground mb-2 flex items-center gap-2">
							<Mail size={18} className="text-primary" />
							Receba atualizações do Distrito
						</h3>
						<p className="text-xs text-muted-foreground mb-6">Escolha o que você quer acompanhar e receba novidades pelos canais oficiais.</p>

						<div className="space-y-4 flex-1">
							<Input placeholder="E-mail" type="email" className="bg-muted/50" />
							{/* <Input placeholder="Nome" className="bg-muted/50" /> 

							<div>
								<div><Checkbox className="mr-2" />Pulso do Distrito</div>
								<div><Checkbox className="mr-2" />Agenda e marcos</div>
								<div><Checkbox className="mr-2" />Materiais para imprensa</div>
							</div>
							{/* <Select>
								<SelectTrigger className="bg-muted/50">
									<SelectValue placeholder="Interesse principal" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="pd">P&D</SelectItem>
									<SelectItem value="educacao">Educação</SelectItem>
									<SelectItem value="gov">Governança</SelectItem>
									<SelectItem value="geral">Geral</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2 mt-3">
							Receber atualizações
						</Button>
					</div>*/}
				</div>
			</div>
		</section>
	);
};

export default ParticipacaoSection;
