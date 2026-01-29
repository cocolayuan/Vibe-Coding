import { motion } from 'framer-motion'
import { Bot, Github, Twitter, MessageCircle } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()

  const links = [
    {
      title: t.footer.product,
      items: [
        { name: t.footer.features, href: '#features' },
        { name: t.footer.pricing, href: '#pricing' },
        { name: t.footer.changelog, href: '#changelog' },
        { name: t.footer.roadmap, href: '#roadmap' },
      ],
    },
    {
      title: t.footer.resources,
      items: [
        { name: t.footer.docs, href: '#docs' },
        { name: t.footer.api, href: '#api' },
        { name: t.footer.tutorials, href: '#tutorials' },
        { name: t.footer.blog, href: '#blog' },
      ],
    },
    {
      title: t.footer.company,
      items: [
        { name: t.footer.about, href: '#about' },
        { name: t.footer.careers, href: '#careers' },
        { name: t.footer.privacy, href: '#privacy' },
        { name: t.footer.terms, href: '#terms' },
      ],
    },
  ]

  const socials = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: MessageCircle, href: 'https://discord.com', label: 'Discord' },
  ]

  return (
    <footer className="py-16 px-4 border-t border-white/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <motion.a
              href="#"
              className="flex items-center gap-2 mb-4 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-text">ClawdBot</span>
            </motion.a>
            <p className="text-text-muted text-sm mb-6 max-w-xs">
              {t.footer.tagline}
            </p>
            <div className="flex gap-3">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center cursor-pointer"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-text-muted" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {links.map((group, index) => (
            <div key={index}>
              <h4 className="font-heading font-semibold text-text mb-4">{group.title}</h4>
              <ul className="space-y-2">
                {group.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <motion.a
                      href={item.href}
                      className="text-sm text-text-muted cursor-pointer hover:text-text transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      {item.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} ClawdBot. {t.footer.copyright}
          </p>
          <p className="text-sm text-text-muted">
            {t.footer.poweredBy}{' '}
            <a
              href="https://anthropic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline cursor-pointer"
            >
              Claude AI
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
