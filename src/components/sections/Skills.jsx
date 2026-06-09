import { motion } from 'framer-motion'
import { skills } from '../../data/portfolio'
import { fadeUp, stagger } from '../../lib/motion'
import { Section } from '../ui'

export function Skills() {
  return (
    <Section id="skills" eyebrow="Stack" title="Skills" className="bg-white">
      <motion.div variants={stagger} className="grid min-w-0 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {skills.map(({ name, level, description, icon: Icon }) => (
          <motion.article
            key={name}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 240, damping: 20 }}
            className="group relative min-w-0 overflow-hidden rounded-md border border-black/10 bg-[#f8f8f6] p-[clamp(1rem,2vw,1.25rem)] shadow-[0_18px_45px_rgba(0,0,0,0.06)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(0,0,0,0.055),transparent_26%)] opacity-0 transition duration-500 group-hover:opacity-100" />
            <div className="relative flex items-start justify-between gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#202020] text-white shadow-[0_14px_28px_rgba(0,0,0,0.18)]">
                <Icon size={20} />
              </span>
              <span className="min-w-0 rounded-full border border-black/10 bg-white px-3 py-1.5 text-right text-xs font-semibold leading-tight text-black/60">
                {level}
              </span>
            </div>
            <div className="relative mt-8">
              <h3 className="text-[clamp(1.45rem,2vw,2rem)] font-semibold leading-tight">{name}</h3>
              <p className="mt-3 text-sm leading-6 text-black/58">{description}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  )
}
