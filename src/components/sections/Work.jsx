import { motion } from 'framer-motion'
import { ArrowUpRight, BarChart3, CircleDot } from 'lucide-react'
import { projects } from '../../data/portfolio'
import { fadeUp, stagger } from '../../lib/motion'
import { ButtonLink, Section } from '../ui'

function ProjectMockup({ project }) {
  const Icon = project.icon

  return (
    <div className="relative h-[clamp(17rem,36vw,27rem)] overflow-hidden rounded-sm border border-black/10 bg-[#151515] p-[clamp(0.9rem,1.5vw,1.35rem)] shadow-[0_28px_70px_rgba(0,0,0,0.16)] transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_36px_90px_rgba(0,0,0,0.22)]">
      <div className={`absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t ${project.accent} opacity-70 blur-2xl`} />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent_34%),radial-gradient(circle_at_50%_78%,rgba(255,255,255,0.18),transparent_28%)]" />
      <div className="relative flex items-center justify-between gap-2 text-[clamp(0.58rem,0.75vw,0.72rem)] font-semibold uppercase text-white/70">
        <span className="rounded-full border border-white/15 bg-white/10 px-2 py-1">{project.category}</span>
        <span className="hidden sm:inline">{project.href ? 'Live Site' : 'Case Study 2026'}</span>
      </div>
      <div className="relative mt-[clamp(1.75rem,3vw,3rem)] max-w-[72%]">
        <div className="mb-4 inline-flex rounded-full border border-white/15 px-3 py-1 text-[clamp(0.58rem,0.75vw,0.72rem)] text-white/70">
          {project.kicker || 'Featured Build'}
        </div>
        <h3 className="text-[clamp(1.25rem,2.2vw,2.25rem)] font-semibold leading-tight text-white">{project.title.split(' - ')[0]}</h3>
      </div>

      {project.logo ? (
        <div className="pointer-events-none absolute inset-0 z-0 grid place-items-center pt-[clamp(2.5rem,7vw,4.5rem)]">
          <div className="absolute inset-0 rounded-full bg-white/10 blur-2xl" />
          <img
            src={project.logo}
            alt={`${project.title.split(' - ')[0]} logo`}
            className="relative h-[clamp(13rem,28vw,21rem)] w-[min(76%,clamp(13rem,30vw,22rem))] object-contain drop-shadow-[0_26px_45px_rgba(0,0,0,0.35)] transition duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="absolute bottom-[clamp(1rem,2vw,1.5rem)] left-[clamp(1rem,2vw,1.5rem)] grid h-[clamp(5.8rem,10vw,8rem)] w-[clamp(3.7rem,6vw,5.2rem)] place-items-center rounded-[clamp(1.1rem,2vw,1.7rem)] border border-white/20 bg-white/12 shadow-2xl backdrop-blur">
          <Icon className="text-white" size={24} />
        </div>
      )}

      {!project.logo ? (
        <div className="absolute bottom-[clamp(1.4rem,2.8vw,2.2rem)] left-[clamp(6.3rem,11vw,8.8rem)] hidden h-[clamp(4rem,6vw,5.4rem)] w-[clamp(8.5rem,14vw,12rem)] rounded-xl border border-white/15 bg-black/30 p-3 backdrop-blur sm:block">
          <div className="mb-3 flex items-center gap-1.5">
            <CircleDot size={10} className="text-emerald-300" />
            <span className="text-[clamp(0.52rem,0.65vw,0.65rem)] uppercase text-white/60">Live Metrics</span>
          </div>
          <div className="flex items-end gap-1.5">
            {[32, 46, 24, 56, 40, 68].map((height) => (
              <span key={height} style={{ height: `clamp(${height * 0.62}px, ${height / 9}vw, ${height}px)` }} className="w-3 rounded-t bg-white/75" />
            ))}
          </div>
        </div>
      ) : null}

      {!project.logo ? (
        <div className="absolute right-3 top-[clamp(4rem,7vw,6rem)] grid gap-2 sm:right-6">
          <div className="h-[clamp(5rem,8vw,7rem)] w-[clamp(6.5rem,10vw,9rem)] rounded-sm bg-white/92 p-3">
            <BarChart3 size={18} />
            <div className="mt-6 h-2 w-2/3 rounded bg-black/15" />
            <div className="mt-2 h-2 w-full rounded bg-black/10" />
          </div>
          <div className="h-[clamp(3.7rem,6vw,5rem)] w-[clamp(6.5rem,10vw,9rem)] rounded-sm bg-white/70" />
          <div className="h-[clamp(4.5rem,7vw,6rem)] w-[clamp(6.5rem,10vw,9rem)] rounded-sm bg-white/86" />
        </div>
      ) : null}
      <motion.span
        whileHover={{ scale: 1.08, rotate: 8 }}
        className="absolute right-[clamp(1rem,2vw,1.5rem)] top-1/2 grid h-[clamp(2.75rem,4vw,3.5rem)] w-[clamp(2.75rem,4vw,3.5rem)] place-items-center rounded-full bg-white text-black shadow-xl"
      >
        <ArrowUpRight size={18} />
      </motion.span>
    </div>
  )
}

export function Work() {
  return (
    <Section id="work" eyebrow="Portfolio" title="Selected Work" className="bg-white">
      <motion.div variants={fadeUp} className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex max-w-full flex-wrap gap-2 text-xs font-semibold">
          {['All', 'React.js', 'Tailwind CSS'].map((filter) => (
            <button
              key={filter}
              type="button"
              className="rounded-full px-3 py-2 text-black/70 transition hover:bg-black hover:text-white"
            >
              {filter}
            </button>
          ))}
        </div>
        <ButtonLink href="#contact" variant="light" className="w-full px-4 py-2.5 text-xs sm:w-auto">
          View All Work
        </ButtonLink>
      </motion.div>

      <motion.div variants={stagger} className="grid gap-x-[clamp(2rem,4vw,4.5rem)] gap-y-[clamp(2.5rem,5vw,5rem)] md:grid-cols-2">
        {projects.map((project) => (
          <motion.article key={project.title} variants={fadeUp} className="group">
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.title}`}
              className="block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/35 focus-visible:ring-offset-4"
            >
              <ProjectMockup project={project} />
              <div className="mt-4">
                <h3 className="max-w-xl text-[clamp(1.1rem,1.8vw,1.6rem)] font-semibold leading-tight">{project.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-black/58">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  )
}
