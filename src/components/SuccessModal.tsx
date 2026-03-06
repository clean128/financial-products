import { CheckCircle2 } from 'lucide-react'

interface SuccessModalProps {
  onClose: () => void
}

export default function SuccessModal({ onClose }: SuccessModalProps) {
  return (
    <div className="success-overlay" onClick={onClose}>
      <div className="success-card" onClick={(e) => e.stopPropagation()}>
        <div className="success-icon">
          <CheckCircle2 size={36} />
        </div>
        <h3 className="success-title">Solicitação Enviada!</h3>
        <p className="success-text">
          Recebemos seus dados com sucesso. Nossa equipe de especialistas
          entrará em contato em até 24 horas úteis com a melhor proposta para você.
        </p>
        <button className="success-btn" onClick={onClose}>
          Entendido
        </button>
      </div>
    </div>
  )
}
