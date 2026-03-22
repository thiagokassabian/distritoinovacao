import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const Footer = () => {
	return (
		<footer className="bg-secondary text-secondary-foreground py-12">
			<div className="section-container">
				<div className="grid md:grid-cols-3 gap-8 mb-8">
					<div className="flex flex-col gap-8">
						<div>
							<img src="./assets/img/sec-gov-sp-branca.png" alt="Secretaria de Estado de São Paulo" className="w-10/12 mx-auto" />
						</div>
						<div>
							<h3 className="font-display font-bold text-lg mb-3">
								Distrito de Inovação<span className="text-primary">.</span>
							</h3>
							<p className="text-sm text-secondary-foreground/60">
								Distrito de Inovação de São Paulo — projeto público de governança, ciência e inovação para a cidade.
							</p>
						</div>
						<div>
							<h4 className="font-display font-semibold text-sm mb-3 text-secondary-foreground/80">Endereço</h4>
							<div className="text-sm text-secondary-foreground/60">SCTI — Governo do Estado de São Paulo</div>
						</div>
					</div>
					<div>
						<h4 className="font-display font-semibold text-sm mb-3 text-secondary-foreground/80">Links</h4>
						<ul className="space-y-2 text-sm text-secondary-foreground/60">
							<li><a href="#" className="hover:text-primary transition-colors">Acessibilidade</a></li>
							<li><a href="#" className="hover:text-primary transition-colors">LGPD/Privacidade</a></li>
							<li><a href="#" className="hover:text-primary transition-colors">SIC</a></li>
							<li><a href="#" className="hover:text-primary transition-colors">Transparência</a></li>
							<li><a href="#" className="hover:text-primary transition-colors">Termos</a></li>
						</ul>
					</div>
					<div className="bg-neutral-800 p-5 rounded-md">
						{/* Newsletter */}
						{/* <div className="distrito-card flex flex-col w-full"> */}
						<h3 className="font-display font-semibold text-sm mb-3 text-secondary-foreground/80 flex items-center gap-2">
							<Mail size={18} className="text-primary" />
							Receba atualizações do Distrito
						</h3>
						<p className="text-xs text-muted-foreground mb-6">Escolha o que você quer acompanhar e receba novidades pelos canais oficiais.</p>

						<div className="space-y-4 flex-1">
							<Input placeholder="E-mail" type="email" className="bg-transparent border-gray-400" />
							{/* <Input placeholder="Nome" className="bg-muted/50" /> */}

							<div className="flex flex-col gap-1">
								<div className="flex items-center"><Checkbox className="mr-2" /><span className="text-sm text-secondary-foreground/60">Pulso do Distrito</span></div>
								<div className="flex items-center"><Checkbox className="mr-2" /><span className="text-sm text-secondary-foreground/60">Agenda e marcos</span></div>
								<div className="flex items-center"><Checkbox className="mr-2" /><span className="text-sm text-secondary-foreground/60">Materiais para imprensa</span></div>
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
							</Select> */}
						</div>
						<Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2 mt-3">
							Receber atualizações
						</Button>
						{/* </div> */}
					</div>
				</div>
				<div className="border-t border-secondary-foreground/10 pt-6 text-center text-xs text-secondary-foreground/40">
					© 2026 Distrito de Inovação de São Paulo. Todos os direitos reservados.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
