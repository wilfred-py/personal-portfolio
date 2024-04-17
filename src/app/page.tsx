import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
    return (
        <main>
            <Navbar />
            <section className="" id="#intro">
                <Intro />
            </section>

            <section className="" id="#projects">
                <Projects />
            </section>

            <section className="" id="#contact"></section>
        </main>
    );
}
