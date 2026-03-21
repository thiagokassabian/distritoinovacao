import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
	"Entenda o Distrito", "Pulso", "Projetos e Resultados", "Agenda e Marcos", "Ecossistema", "Ecossistema em Rede", "Sala de Imprensa", "Dúvidas", "Participação"
];

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
			<div className="section-container h-24 flex gap-2 flex-col items-start justify-center">
				{/* <a href="#" className="font-display font-bold text-xl tracking-tight text-foreground">
					Distrito de Inovação<span className="text-primary">.</span>
				</a> */}
				<div>
					<a href="#" className="inline-flex"><img src="../assets/img/logo.png" alt="Logo do Distrito" className="h-8 w-auto" /></a>
				</div>

				{/* Desktop nav */}
				<div className="hidden lg:flex items-start gap-3">
					{navItems.map((item) => (
						<a
							key={item}
							href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
							className="px-3 py-2 text-sm font-medium border-b-2 border-b-transparent text-muted-foreground hover:text-foreground transition-colors hover:border-b-2 hover:border-b-primary"
						>
							{item}
						</a>
					))}
				</div>

				{/* <div className="hidden lg:flex items-center gap-3">
					<Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
						Acompanhar (Pulso)
					</Button>
					<Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
						Como participar
					</Button>
				</div> */}

				{/* Mobile toggle */}
				<button
					className="lg:hidden p-2"
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{/* Mobile menu */}
			{isOpen && (
				<div className="lg:hidden border-t border-border bg-background pb-4">
					<div className="section-container flex flex-col gap-2 pt-4">
						{navItems.map((item) => (
							<a
								key={item}
								href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
								className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
								onClick={() => setIsOpen(false)}
							>
								{item}
							</a>
						))}
						{/* <div className="flex flex-col gap-2 mt-4">
							<Button variant="outline" size="sm" className="border-primary text-primary">
								Acompanhar (Pulso)
							</Button>
							<Button size="sm" className="bg-primary text-primary-foreground">
								Como participar
							</Button>
						</div> */}
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
