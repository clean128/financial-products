import {
  Shield, ArrowRight, Send, BadgeDollarSign, CheckCircle2,
} from 'lucide-react'
import { PRODUCTS } from '../data/products'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="container hero-content">
        <div>
          <div className="hero-badge">
            <Shield size={14} />
            Assessoria Financeira Especializada
          </div>
          <h1 className="hero-title">
            Soluções de <span className="highlight">crédito estruturado</span> para impulsionar seu negócio
          </h1>
          <p className="hero-subtitle">
            Estruturamos as melhores operações de crédito do mercado para pequenas,
            médias e grandes empresas. Financiamento, capital de giro, consórcio e muito mais.
          </p>
          <div className="hero-buttons">
            <a href="#produtos" className="btn-primary">
              Ver Produtos <ArrowRight size={18} />
            </a>
            <a href="#formulario" className="btn-secondary">
              Solicitar Agora <Send size={16} />
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="hero-stat-number">12+</div>
              <div className="hero-stat-label">Linhas de Crédito</div>
            </div>
            <div>
              <div className="hero-stat-number">100+</div>
              <div className="hero-stat-label">Parceiros Financeiros</div>
            </div>
            <div>
              <div className="hero-stat-number">R$ 500M+</div>
              <div className="hero-stat-label">Em Créditos Estruturados</div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card-stack">
            <div className="hero-card">
              <div className="hero-card-header">
                <div className="hero-card-icon">
                  <BadgeDollarSign size={24} />
                </div>
                <div>
                  <div className="hero-card-title">Linhas de Crédito</div>
                  <div className="hero-card-subtitle">Encontre a solução ideal</div>
                </div>
              </div>
              <div className="hero-card-items">
                {PRODUCTS.slice(0, 4).map((p) => (
                  <div className="hero-card-item" key={p.id}>
                    <p.icon size={18} />
                    {p.name}
                  </div>
                ))}
                <div className="hero-card-item" style={{ justifyContent: 'center', color: 'var(--accent)' }}>
                  + {PRODUCTS.length - 4} outras soluções
                </div>
              </div>
            </div>
            <div className="hero-floating-card">
              <div className="hero-floating-icon">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <div className="hero-floating-text">Crédito Aprovado</div>
                <div className="hero-floating-sub">em até 48h úteis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
