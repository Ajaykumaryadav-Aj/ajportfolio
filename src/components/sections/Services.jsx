import { motion } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'
import { services } from '../../data/portfolio'
import { fadeUp, stagger } from '../../lib/motion'
import { Section } from '../ui'

export function Services() {
  const featured = services.find((service) => service.featured)
  const rest = services.filter((service) => !service.featured)
  const FeaturedIcon = featured.icon

  return (
    <Section id="service" eyebrow="Service" title="Service" className="cloud-bg">
      <motion.div variants={stagger} className="mx-auto w-full max-w-[1180px]">
        <motion.div
          variants={fadeUp}
          whileHover={{ y: -4 }}
          className="group relative mb-5 overflow-hidden rounded-md bg-[#232323] p-[clamp(1rem,1.8vw,1.5rem)] text-white shadow-[0_20px_48px_rgba(0,0,0,0.20)] transition hover:bg-white"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(255,255,255,0.16),transparent_24%),linear-gradient(120deg,rgba(255,255,255,0.08),transparent_42%)] transition group-hover:opacity-0" />
          <div className="relative grid items-center gap-[clamp(1rem,2vw,2rem)] md:grid-cols-[1fr_minmax(180px,260px)_32px]">
            <div>
              <h3 className="text-[clamp(2rem,4vw,4.25rem)] font-medium uppercase leading-[0.98] tracking-normal text-white transition group-hover:text-[#202020]">{featured.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/70 transition group-hover:text-black/55">{featured.description}</p>
            </div>
            <div className="relative mx-auto h-[clamp(6.5rem,11vw,9rem)] w-[min(100%,clamp(12rem,18vw,16rem))] rotate-3 rounded-md border border-black/10 bg-white p-2 shadow-2xl md:rotate-6">
              <div className="grid h-full grid-cols-3 gap-2">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="rounded-[clamp(0.9rem,1.6vw,1.25rem)] border border-black/10 bg-[#f4f4f2] p-[clamp(0.4rem,0.8vw,0.6rem)]">
                    <div className="mb-2 h-2 w-[60%] rounded-full bg-black/20" />
                    <div className="grid h-[clamp(2.75rem,4.5vw,4rem)] place-items-center rounded-xl bg-white">
                      <FeaturedIcon size={20} className="text-black/70" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <X className="hidden justify-self-end text-white/75 transition group-hover:text-[#202020] md:block" size={30} />
          </div>
        </motion.div>

        <div className="grid gap-3">
          {rest.map(({ title, icon: Icon, description }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="group grid gap-3 rounded-md border border-white/10 bg-[#202020] px-[clamp(0.9rem,1.5vw,1.25rem)] py-[clamp(1.1rem,2vw,1.65rem)] text-white shadow-[0_14px_34px_rgba(0,0,0,0.10)] transition hover:bg-white sm:grid-cols-[1fr_auto] sm:items-center"
            >
              <div>
                <h3 className="text-[clamp(1.75rem,3.7vw,4rem)] font-medium uppercase leading-[1.02] tracking-normal text-white transition group-hover:translate-x-2 group-hover:text-[#202020]">
                  {title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-white/58 opacity-100 transition group-hover:text-black/55 sm:opacity-0 sm:group-hover:opacity-100">
                  {description}
                </p>
              </div>
              <span className="grid h-[clamp(2.75rem,4vw,3.5rem)] w-[clamp(2.75rem,4vw,3.5rem)] place-items-center rounded-full bg-white text-[#202020] shadow-[0_12px_25px_rgba(0,0,0,0.08)] transition group-hover:-translate-y-1 group-hover:bg-[#202020] group-hover:text-white">
                <Icon className="absolute opacity-0 transition group-hover:opacity-100" size={17} />
                <ArrowUpRight className="transition group-hover:opacity-0" size={22} />
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
