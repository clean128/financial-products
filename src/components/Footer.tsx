import {
  Mail, Phone, MapPin, Instagram, Linkedin, Facebook,
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
            <a href="mailto:contato@maximoconceitoassessoria.com.br">
              <Mail size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />
              contato@maximoconceitoassessoria.com.br
            </a>
            <a href="tel:+551151287108">
              <Phone size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />
              +55 (11) 5128-7108
            </a>
            <a href="https://wa.me/5511940296526">
              <img src="/whatsapp.svg" alt="Whatsapp" width={16} height={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />
              <span>+55 (11) 94029-6526</span>
            </a>
            <a href="https://www.google.com/maps/search/?api=1&query=Rua+Serra+do+Japi,+440+-+Tatuap%C3%A9,+S%C3%A3o+Paulo+-+SP">
              <MapPin size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />
              Rua Serra do Japi, 440 - 3° andar sala 03 - Cep: 03309-000
            </a>
          </div>
        </div>

        <div className="footer-disclaimer">
          A Maximo Conceito Assessoria não é um banco ou uma instituição financeira.
          Oferecemos uma plataforma de acesso ao crédito para pessoas físicas e jurídicas.
          Somos um correspondente bancário.
        </div>

        <div className="footer-bottom">
          <span className="footer-copyright">
            &copy; {new Date().getFullYear()} Maximo Conceito Assessoria. Todos os direitos reservados.
          </span>
          <div className="footer-social">
            <a href="https://www.instagram.com/maximoconceitoassessoria/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://www.linkedin.com/in/maximo-conceito-assessoria-69952b3aa/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="https://www.facebook.com/people/Maximoconceitoassessoria/61587209500658/" aria-label="Facebook">
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
