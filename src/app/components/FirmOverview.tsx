import { motion } from "motion/react";

export function FirmOverview() {
  return (
    <section id="about" className="py-20 bg-[#F5F7F6]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center"
          >
            <h2
              className="text-4xl md:text-5xl text-[#2F4F3E] mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Transforming Performance Across Complex
              Organizations
            </h2>

            <p className="text-lg md:text-xl text-[#2F4F3E]/80 leading-relaxed">
              Innovative Care Catalysts is a consulting firm
              dedicated to advancing performance through
              structured delivery, workforce development, and
              data-informed decision-making. We partner with
              organizations to strengthen operations, improve
              outcomes, and navigate complex regulatory and
              operational environments with confidence.
            </p>

            <p className="text-lg md:text-xl text-[#2F4F3E]/80 leading-relaxed">
              Our expertise spans program and project
              management, implementation, business analysis,
              quality assurance, and workforce training—enabling
              organizations to execute strategic initiatives
              with clarity, consistency, and measurable results.
              Beyond designing solutions, we lead hands-on
              implementation to ensure improvements are
              effectively adopted and sustained across teams and
              systems.
            </p>

            <p className="text-lg md:text-xl text-[#2F4F3E]/80 leading-relaxed">
              By aligning people, processes, and technology, we
              help organizations reduce inefficiencies, minimize
              compliance risks, and achieve meaningful cost
              savings while maintaining high standards of
              performance and care. Our approach combines
              practical execution with continuous improvement,
              supporting the development of efficient,
              well-governed systems that drive long-term
              sustainability.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}