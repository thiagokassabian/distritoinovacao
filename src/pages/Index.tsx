import Navbar from "@/components/distrito/Navbar";
import HeroSection from "@/components/distrito/HeroSection";
import EntendaSection from "@/components/distrito/EntendaSection";
import RotasSection from "@/components/distrito/RotasSection";
import PulsoSection from "@/components/distrito/PulsoSection";
import ProjetosSection from "@/components/distrito/ProjetosSection";
import AgendaSection from "@/components/distrito/AgendaSection";
import EcossistemaSection from "@/components/distrito/EcossistemaSection";
import ImprensaSection from "@/components/distrito/ImprensaSection";
import FaqSection from "@/components/distrito/FaqSection";
import ParticipacaoSection from "@/components/distrito/ParticipacaoSection";
import Footer from "@/components/distrito/Footer";
import BannerSection from "@/components/distrito/BannerSection";

const Index = () => {
	return (
		<div className="min-h-screen bg-background">
			<Navbar />
			<HeroSection />
			<EntendaSection />
			<RotasSection />
			<PulsoSection />
			<BannerSection />
			<ProjetosSection />
			<AgendaSection />
			<EcossistemaSection />
			<ImprensaSection />
			<FaqSection />
			<ParticipacaoSection />
			<Footer />
		</div>
	);
};

export default Index;
