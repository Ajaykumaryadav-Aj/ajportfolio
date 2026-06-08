import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { motion } from 'framer-motion'
import { profile, socials } from '../../data/portfolio'
import { fadeUp, stagger } from '../../lib/motion'
import { ButtonLink, Pill } from '../ui'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <motion.section
      id="contact"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="cloud-bg relative overflow-hidden bg-[#f8f8f6] px-[clamp(1rem,3vw,4.5rem)] py-[clamp(5rem,9vw,9rem)] text-center text-[#202020]"
    >
      <div className="mx-auto w-full max-w-[1180px]">
        <motion.div variants={fadeUp}>
          <Pill>
            <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_14px_rgba(16,185,129,0.7)]" />
            {profile.badge}
          </Pill>
        </motion.div>
        <motion.h2 variants={fadeUp} className="mx-auto mt-8 max-w-5xl text-[clamp(2.25rem,6vw,6rem)] font-semibold uppercase leading-[0.98] tracking-normal">
          Have a project in mind?
        </motion.h2>
        <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-[clamp(0.92rem,1.2vw,1.1rem)] leading-7 text-black/62">
          Together, we can create something clear and impactful. Let&apos;s collaborate to bring your ideas to life in a
          way that resonates with everyone.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-8">
          <ButtonLink href={profile.emailHref} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
            Contact Me
          </ButtonLink>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-[clamp(3rem,6vw,6rem)] grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <div className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full !bg-[#202020] px-4 py-3 text-sm font-semibold !text-white shadow-[0_12px_28px_rgba(0,0,0,0.22)]">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-white text-xs text-[#202020]">AJ</span>
            {profile.firstName} {profile.lastName}
          </div>
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-3 text-sm font-semibold text-[#202020] shadow-[0_12px_28px_rgba(0,0,0,0.06)] transition hover:-translate-y-0.5 hover:bg-white"
            >
              <Icon size={15} />
              {label}
            </a>
          ))}
        </motion.div>

        <motion.button
          variants={fadeUp}
          type="button"
          onClick={copyEmail}
          className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-3 text-sm font-semibold text-[#202020] shadow-[0_12px_28px_rgba(0,0,0,0.06)] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/35 sm:w-auto"
        >
          {copied ? <Check size={15} /> : <Copy size={15} />}
          {copied ? 'Copied!' : profile.email}
        </motion.button>
      </div>
    </motion.section>
  )
}
