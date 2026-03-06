import {
  Globe, Mail, Phone, MapPin, Instagram, Linkedin, Facebook,
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-icon">M</div>
              <div className="logo-text">Maximo <span>Conceito</span></div>
            </div>
            <p className="footer-brand-desc">
              Assessoria financeira e crédito estruturado para pequenas, médias e grandes
              empresas. Estruturamos as melhores operações do mercado.
            </p>
          </div>

          <div className="footer-links-group">
            <h4>Produtos</h4>
            <a href="#produtos">Financiamento Imobiliário</a>
            <a href="#produtos">Home Equity</a>
            <a href="#produtos">Capital de Giro</a>
            <a href="#produtos">Consórcio</a>
            <a href="#produtos">Câmbio</a>
          </div>

          <div className="footer-links-group">
            <h4>Contato</h4>
            <a href="https://maximoconceitoassessoria.com.br/" target="_blank" rel="noopener noreferrer">
              <Globe size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />
              maximoconceitoassessoria.com.br
            </a>
            <a href="mailto:contato@maximoconceitoassessoria.com.br">
              <Mail size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />
              contato@maximoconceito.com.br
            </a>
            <a href="tel:+5511999999999">
              <Phone size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />
              (11) 99999-9999
            </a>
            <a href="#">
              <MapPin size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />
              São Paulo, SP
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copyright">
            &copy; {new Date().getFullYear()} Maximo Conceito Assessoria. Todos os direitos reservados.
          </span>
          <div className="footer-social">
            <a href="https://www.instagram.com/maximoconceito/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
