import { Repeat } from 'lucide-react'
import { QRCodeSVG } from 'qrcode.react'
import { LANDING_URL } from '../data/products'

export default function QRSection() {
  return (
    <section className="qr-section section" id="qrcode">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Repeat size={14} />
            Acesse pelo celular
          </div>
          <h2 className="section-title">Compartilhe esta página</h2>
          <p className="section-subtitle">
            Escaneie o QR Code abaixo para acessar esta página diretamente do seu celular
            ou compartilhe com quem precisa de crédito.
          </p>
        </div>
        <div className="qr-wrapper">
          <div className="qr-code-container">
            <QRCodeSVG
              value={LANDING_URL}
              size={200}
              bgColor="#ffffff"
              fgColor="#444545"
              level="H"
              includeMargin={false}
            />
          </div>
          <p className="qr-instructions">
            Aponte a câmera do seu celular para o QR Code acima ou{' '}
            <a href={LANDING_URL} style={{ color: 'var(--accent)', fontWeight: 600 }}>
              clique aqui
            </a>{' '}
            para acessar.
          </p>
        </div>
      </div>
    </section>
  )
}
