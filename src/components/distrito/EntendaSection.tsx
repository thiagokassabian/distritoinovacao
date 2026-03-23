import { motion } from "framer-motion";
import { Play, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
	{ number: "1", title: "Passo 1 - Conectar", desc: " Distrito aproxima universidades, institutos, empresas e governo." },
	{ number: "2", title: "Passo 2 - Organizar", desc: "Cada iniciativa segue critérios, responsáveis e marcos." },
	{ number: "3", title: "Passo 3 - Entregar", desc: "Resultados são acompanhados por status, marcos e evidências públicas." },
];

const EntendaSection = () => {
	return (
		<section id="entenda-o-distrito" className="distrito-section py-16 sm:py-20 bg-background">
			<div className="section-container">
				{/* <motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				> */}
				<div>
					<h2 className="section-title">
						ENTENDA O DISTRITO
					</h2>
					<p className="text-lg text-muted-foreground mb-8">
						Veja em 30 segundos como o Distrito conecta, organiza e entrega.
					</p>

					<div className="grid md:grid-cols-2 gap-8 lg:gap-12">
						{/* Video placeholder */}
						<div className="aspect-video bg-secondary rounded-lg flex items-center justify-center relative overflow-hidden group cursor-pointer">
							<div className="absolute inset-0 bg-secondary/80 group-hover:bg-secondary/70 transition-colors" />
							<div className="relative z-10 flex flex-col items-center gap-3">
								<div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
									<Play className="text-primary-foreground ml-1" size={28} />
								</div>
								<span className="text-secondary-foreground/60 text-sm">PLAYER VIDEO 1:30</span>
							</div>
						</div>

						{/* Steps */}
						<div className="flex flex-col justify-center gap-6">
							{steps.map((step, i) => (
								<div key={i} className="flex gap-4">
									<div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold font-display shrink-0">
										{step.number}
									</div>
									<div>
										<h3 className="font-display font-semibold text-foreground">{step.title}</h3>
										<p className="text-sm text-muted-foreground">{step.desc}</p>
									</div>
								</div>
							))}
							{/* <Button variant="outline" size="sm" className="w-fit mt-2 gap-2">
								<Download size={16} />
								Baixar MP4
							</Button> */}
						</div>
					</div>
				</div>
				{/* </motion.div> */}
			</div>
		</section>
	);
};

export default EntendaSection;
