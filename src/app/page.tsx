import Image from "next/image";
import HeroSection from "./components/hero";
import Comitment from "./components/comitment";
import Navbar from "./components/layout/navigation/Navbar";
import Footer from "./components/layout/Footer";
import CaraouselCard from "./components/carousel";
import OurClient from "./components/ourClient";
import ContactUs from "./components/contactUs";

export default function Home() {
    return (
        <main className="w-full h-full space-y-10 bg-slate-500">
            <Navbar />
            <HeroSection />
            <div className="px-5">
                <Comitment />
            </div>
            <CaraouselCard />
            <OurClient />
            <div className="px-5">
                <ContactUs />
            </div>
            <Footer />
        </main>
    );
}
