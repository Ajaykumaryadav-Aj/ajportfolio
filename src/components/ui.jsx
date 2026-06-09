import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { fadeUp, stagger } from '../lib/motion'

export function Section({ id, eyebrow, title, dark = false, children, className = '' }) {
  return (
    <motion.section
      id={id}
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      className={`container-pad section-pad relative overflow-hidden ${dark ? 'bg-[#252525] text-white' : 'bg-[#f8f8f6] text-[#202020]'} ${className}`}
    >
      <div className="mx-auto w-full max-w-[1180px] min-w-0">
        {title ? (
          <motion.div variants={fadeUp} className="relative mb-[clamp(2rem,5vw,5rem)] min-w-0 text-center">
            <p
              className={`pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-[72%] text-[clamp(3.35rem,13vw,12rem)] font-black uppercase leading-none tracking-normal sm:block ${
                dark ? 'text-white/[0.035]' : 'text-black/[0.035]'
              }`}
            >
              {eyebrow}
            </p>
            <h2 className="relative mx-auto max-w-[12ch] text-[clamp(2rem,5.2vw,5.25rem)] font-semibold uppercase leading-[0.95] tracking-normal sm:max-w-none">
              /{title}
            </h2>
          </motion.div>
        ) : null}
        {children}
      </div>
    </motion.section>
  )
}

export function Pill({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-black/10 bg-white/80 px-3 py-1.5 text-xs font-medium text-[#202020] shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur ${className}`}
    >
      {children}
    </span>
  )
}

export function ButtonLink({ href, children, variant = 'dark', className = '', target, rel, download, icon: Icon = ArrowUpRight, ariaLabel }) {
  const classes =
    variant === 'dark'
      ? '!bg-[#202020] !text-white shadow-[0_12px_24px_rgba(0,0,0,0.24)] hover:!bg-black'
      : 'border border-black/10 !bg-white/85 !text-[#202020] shadow-[0_12px_24px_rgba(0,0,0,0.08)] hover:!bg-white'

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      download={download}
      aria-label={ariaLabel}
      whileHover={{ y: -2, scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`inline-flex min-h-11 min-w-0 max-w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-sm font-semibold leading-tight transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 ${classes} ${className}`}
    >
      <span className="relative z-10 min-w-0 whitespace-nowrap">{children}</span>
      <Icon className="relative z-10 shrink-0" size={16} />
    </motion.a>
  )
}
