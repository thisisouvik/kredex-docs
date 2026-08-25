import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 800, fontSize: "1.2rem", letterSpacing: "-0.5px" }}>Kredex Docs</span>,
  project: {
    link: 'https://github.com/thisisouvik/kredex',
  },
  docsRepositoryBase: 'https://github.com/thisisouvik/kredex',
  footer: {
    content: '© 2026 Kredex - Decentralized Micro-Lending on Stellar',
  }
}

export default config
