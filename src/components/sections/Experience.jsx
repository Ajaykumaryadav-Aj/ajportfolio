import { motion } from 'framer-motion'
import { MousePointer2 } from 'lucide-react'
import { experience, profile } from '../../data/portfolio'
import { fadeUp, stagger } from '../../lib/motion'
import { Section } from '../ui'

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Experience" dark className="border-y border-black/10">
      <motion.div variants={stagger} className="relative mx-auto w-full max-w-[1180px] min-w-0">
        <motion.p variants={fadeUp} className="mb-8 text-left text-sm text-white/80 sm:text-right">
          {profile.experience}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="pointer-events-none absolute right-[22%] top-10 hidden w-[clamp(9rem,12vw,13rem)] rotate-6 rounded-md bg-white p-2 shadow-2xl md:block"
        >
          <div className="grid grid-cols-3 gap-1">
            {[1, 2, 3].map((item) => (
              <div key={item} className="h-[clamp(5rem,7vw,7rem)] rounded-xl bg-[#ececea] p-1">
                <div className="mb-1 h-1 w-2/3 rounded-full bg-pink-400/70" />
                <div className="h-1/2 rounded-lg bg-[#202020]" />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={stagger} className="min-w-0 rounded-md border border-white/8 bg-white/[0.015] px-[clamp(1rem,2vw,2rem)]">
          {experience.map((item) => (
            <motion.article
              key={`${item.company}-${item.period}`}
              variants={fadeUp}
              className="group grid min-w-0 gap-3 border-b border-white/12 py-[clamp(1.25rem,2.4vw,2rem)] last:border-b-0 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center"
            >
              <div className="min-w-0">
                <h3 className="text-[clamp(1rem,1.25vw,1.25rem)] font-semibold text-white transition group-hover:translate-x-2">{item.company}</h3>
                <p className="mt-2 text-[clamp(0.88rem,1vw,1rem)] text-white/58">{item.role}</p>
              </div>
              <p className="text-[clamp(0.88rem,1vw,1rem)] text-white/62 sm:text-right">{item.period}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-7 inline-flex max-w-full items-start gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-2 text-left text-sm leading-5 text-white/70 sm:items-center sm:rounded-full"
        >
          <MousePointer2 className="shrink-0" size={15} />
          <span className="min-w-0">Available for React, Flutter, and API integration projects</span>
        </motion.div>
      </motion.div>
    </Section>
  )
}
