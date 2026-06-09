import { motion } from 'framer-motion'
import { ArrowUpRight, Download } from 'lucide-react'
import { navItems, profile, socials } from '../../data/portfolio'
import { fadeUp, stagger } from '../../lib/motion'
import { ButtonLink, Pill } from '../ui'

export function Hero() {
  return (
    <section
      id="home"
      className="container-pad relative min-h-[100svh] overflow-hidden bg-white py-[clamp(1rem,3vw,2.5rem)] text-[#202020]"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="hero-stage relative mx-auto grid min-h-[calc(100svh-2rem)] w-full max-w-[1280px] min-w-0 content-between overflow-hidden sm:min-h-[calc(100svh-3rem)]"
      >
        <motion.nav variants={fadeUp} className="relative z-40 flex min-h-12 items-center justify-between gap-2 sm:gap-3">
          <a href="#home" className="min-w-0 shrink-0">
            <Pill className="px-3 py-2 shadow-none">
              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_14px_rgba(16,185,129,0.7)]" />
              <span className="hidden sm:inline">{profile.badge}</span>
              <span className="sm:hidden">Available</span>
            </Pill>
          </a>

          <div className="hidden items-center gap-[clamp(2rem,4vw,4.5rem)] xl:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-semibold text-[#202020] transition hover:text-black/50">
                {item.label}
                {item.count ? <span className="ml-1 text-[10px] text-black/35">[{item.count}]</span> : null}
              </a>
            ))}
          </div>

          <a
            href={profile.emailHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full !bg-[#202020] px-3 py-2.5 text-sm font-semibold !text-white shadow-[0_12px_26px_rgba(0,0,0,0.30)] transition hover:-translate-y-0.5 hover:!bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/35 sm:px-4"
          >
            <span className="hidden sm:inline">Let&apos;s Talk</span>
            <span className="sm:hidden">Talk</span>
            <ArrowUpRight size={15} />
          </a>
        </motion.nav>

        <motion.div variants={fadeUp} className="hero-wordmark pointer-events-none relative z-0 mt-[clamp(3rem,10vw,6rem)] text-center font-black uppercase tracking-normal md:absolute md:inset-x-0 md:top-[28%] md:mt-0 xl:top-[19%]">
          <span className="hero-wordmark-outline text-transparent">{profile.firstName}</span>
          <span className="hero-wordmark-solid text-[#202020]">{profile.lastName}</span>
        </motion.div>

        <div className="relative z-20 mt-[clamp(2rem,9vw,5rem)] grid gap-[clamp(1.5rem,3vw,2.5rem)] pb-[clamp(1rem,3vw,2rem)] md:mt-auto md:grid-cols-[minmax(0,1fr)_minmax(180px,0.62fr)] md:items-end">
          <motion.div variants={fadeUp} className="max-w-[22rem] min-w-0 sm:max-w-[28rem] md:max-w-[22rem]">
            <h1 className="text-[clamp(1.5rem,6.5vw,2.45rem)] font-semibold leading-[1.02] tracking-normal">{profile.role}</h1>
            <p className="mt-3 text-[clamp(0.82rem,1vw,0.95rem)] leading-6 text-black/62">{profile.intro}</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={profile.emailHref} target="_blank" rel="noreferrer" className="w-full px-4 py-2.5 text-xs sm:w-max">
                Let&apos;s collaborate
              </ButtonLink>
              <ButtonLink
                href={profile.resumeHref}
                download="Ajay-Kumar-Resume.pdf"
                icon={Download}
                variant="light"
                className="w-full px-4 py-2.5 text-xs sm:w-max"
              >
                Download Resume
              </ButtonLink>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="grid min-w-0 gap-3 sm:grid-cols-3 md:grid-cols-1 md:justify-items-end">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-black/10 bg-white/85 px-4 py-3 text-sm font-semibold text-[#202020] shadow-[0_12px_28px_rgba(0,0,0,0.07)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 md:w-[min(100%,12rem)]"
              >
                <Icon size={15} />
                {label}
              </a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
