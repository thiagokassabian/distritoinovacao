import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
	return (
		<section className="hero relative overflow-hidden bg-secondary text-secondary-foreground py-20 sm:py-28 lg:py-36">
			{/* Subtle grid pattern */}
			{/* <div className="absolute inset-0 opacity-5" style={{
				backgroundImage: "linear-gradient(hsl(var(--distrito-red) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--distrito-red) / 0.3) 1px, transparent 1px)",
				backgroundSize: "60px 60px"
			}} /> */}
			<div className="mask" />

			<div className="section-container relative">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="max-w-3xl"
				>
					<h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-[1.05] tracking-tight mb-6">
						Distrito de Inovação
						<br />
						de São Paulo.
						<br />
						<span className="text-primary">Na direção do futuro.</span>
					</h1>
					<p className="text-lg sm:text-xl text-secondary-foreground/90 mb-8">
						Um ambiente público que conecta ciência, governo e empresas para transformar conhecimento em soluções reais — com direção, acompanhamento e prova pública.
					</p>
					{/* <ul className="text-sm sm:text-base text-secondary-foreground/70 space-y-1.5 mb-8 max-w-xl">
						<li>Entender em 30 segundos (o que é e como funciona)</li>
						<li>Ver prova pública (status, marcos e fontes)</li>
						<li>Acompanhar e participar (agenda, rotas e canais oficiais)</li>
					</ul> */}

					{/* <div className="flex flex-wrap gap-4">
						<Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
							<Play size={18} />
							Entenda em 30s
						</Button>
						<Button size="lg" variant="outline" className="border-secondary-foreground/30 text-secondary hover:bg-primary-foreground/80 gap-2">
							Ver prova (Pulso)
							<ArrowRight size={18} />
						</Button>
					</div> */}
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSection;
