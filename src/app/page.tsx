import About from "@/components/home/about";
import ProjectSummary from "@/components/home/projectSummary";
import Socials from "@/components/home/socials";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="container mx-auto mb-24 max-w-2xl items-center p-4 md:p-0">
      <Navbar />
      <About />
      <Socials />
      <ProjectSummary />
      {/* <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <About />
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Socials />
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <ProjectSummary />
      </motion.div> */}
    </div>
  );
}
