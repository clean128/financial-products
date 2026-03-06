import { useState, useEffect, useRef } from 'react'
import {
  Send, Clock, Shield, CheckCircle2, BadgeDollarSign,
} from 'lucide-react'
import { PRODUCTS, INITIAL_FORM_DATA } from '../data/products'
import type { LeadFormData } from '../data/products'

interface LeadFormProps {
  selectedProduct: string
  onSuccess: () => void
}

export default function LeadForm({ selectedProduct, onSuccess }: LeadFormProps) {
  const [form, setForm] = useState<LeadFormData>({
    ...INITIAL_FORM_DATA,
    linhaCredito: selectedProduct,
  })
  const [submitting, setSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    setForm((prev) => ({ ...prev, linhaCredito: selectedProduct }))
  }, [selectedProduct])

  const update = (field: keyof LeadFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1500))
    console.log('Lead data:', form)
    setSubmitting(false)
    onSuccess()
  }

  const isPJ = form.personType === 'pj'

  return (
    <section className="form-section section" id="formulario">
      <div className="container form-wrapper">
        <FormSidebar />
        <div className="form-container">
          <h3 className="form-title">Dados para Análise</h3>
          <p className="form-subtitle">Preencha o formulário abaixo com seus dados</p>

          <div className="form-type-toggle">
            <button
              type="button"
              className={`form-type-btn ${isPJ ? 'active' : ''}`}
              onClick={() => update('personType', 'pj')}
            >
              Pessoa Jurídica
            </button>
            <button
              type="button"
              className={`form-type-btn ${!isPJ ? 'active' : ''}`}
              onClick={() => update('personType', 'pf')}
            >
              Pessoa Física
            </button>
          </div>

          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-grid">
              <FormField label="Nome Completo *" type="text" placeholder="Seu nome completo" value={form.nome} onChange={(v) => update('nome', v)} required />
              <FormField label="E-mail *" type="email" placeholder="seu@email.com" value={form.email} onChange={(v) => update('email', v)} required />
              <FormField label="Telefone / WhatsApp *" type="tel" placeholder="(11) 99999-9999" value={form.telefone} onChange={(v) => update('telefone', v)} required />

              {isPJ ? (
                <>
                  <FormField label="CNPJ *" type="text" placeholder="00.000.000/0000-00" value={form.cnpj} onChange={(v) => update('cnpj', v)} required />
                  <FormField label="Razão Social *" type="text" placeholder="Nome da empresa" value={form.razaoSocial} onChange={(v) => update('razaoSocial', v)} required />
                  <div className="form-group">
                    <label className="form-label">Faturamento Mensal</label>
                    <select className="form-select" value={form.faturamento} onChange={(e) => update('faturamento', e.target.value)}>
                      <option value="">Selecione</option>
                      <option value="ate-100k">Até R$ 100 mil</option>
                      <option value="100k-500k">R$ 100 mil a R$ 500 mil</option>
                      <option value="500k-1m">R$ 500 mil a R$ 1 milhão</option>
                      <option value="1m-5m">R$ 1 milhão a R$ 5 milhões</option>
                      <option value="5m-10m">R$ 5 milhões a R$ 10 milhões</option>
                      <option value="acima-10m">Acima de R$ 10 milhões</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Nº de Funcionários</label>
                    <select className="form-select" value={form.funcionarios} onChange={(e) => update('funcionarios', e.target.value)}>
                      <option value="">Selecione</option>
                      <option value="1-10">1 a 10</option>
                      <option value="11-50">11 a 50</option>
                      <option value="51-200">51 a 200</option>
                      <option value="201-500">201 a 500</option>
                      <option value="500+">Mais de 500</option>
                    </select>
                  </div>
                  <FormField label="Nome dos Sócios" type="text" placeholder="Nomes dos sócios da empresa" value={form.nomeSocios} onChange={(v) => update('nomeSocios', v)} fullWidth />
                </>
              ) : (
                <FormField label="CPF *" type="text" placeholder="000.000.000-00" value={form.cpf} onChange={(v) => update('cpf', v)} required />
              )}

              <div className="form-group">
                <label className="form-label">Linha de Crédito *</label>
                <select className="form-select" value={form.linhaCredito} onChange={(e) => update('linhaCredito', e.target.value)} required>
                  <option value="">Selecione o produto</option>
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </select>
              </div>
              <FormField label="Valor Desejado *" type="text" placeholder="R$ 0,00" value={form.valorCredito} onChange={(v) => update('valorCredito', v)} required />

              <div className="form-group full-width">
                <label className="form-label">Observações</label>
                <textarea
                  className="form-input"
                  placeholder="Informações adicionais sobre sua necessidade..."
                  value={form.mensagem}
                  onChange={(e) => update('mensagem', e.target.value)}
                  rows={3}
                  style={{ resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="form-submit" disabled={submitting}>
                {submitting ? 'Enviando...' : (<>Enviar Solicitação <Send size={18} /></>)}
              </button>
              <p className="form-disclaimer">
                Ao enviar, você concorda com nossa política de privacidade.
                Seus dados serão utilizados exclusivamente para análise de crédito.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function FormSidebar() {
  const benefits = [
    { icon: Clock, text: 'Resposta em até 24 horas úteis' },
    { icon: Shield, text: 'Seus dados estão protegidos e seguros' },
    { icon: CheckCircle2, text: 'Sem compromisso — análise gratuita' },
    { icon: BadgeDollarSign, text: 'Melhores taxas do mercado' },
  ]

  return (
    <div className="form-info">
      <div className="section-tag">
        <Send size={14} />
        Solicite seu Crédito
      </div>
      <h2 className="form-info-title">
        Preencha seus dados e receba uma proposta personalizada
      </h2>
      <p className="form-info-desc">
        Após o envio, nossa equipe de especialistas analisará seu perfil
        e entrará em contato com a melhor proposta para sua necessidade.
      </p>
      <div className="form-benefits">
        {benefits.map(({ icon: Icon, text }) => (
          <div className="form-benefit" key={text}>
            <div className="form-benefit-icon"><Icon size={20} /></div>
            <span className="form-benefit-text">{text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

interface FormFieldProps {
  label: string
  type: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  required?: boolean
  fullWidth?: boolean
}

function FormField({ label, type, placeholder, value, onChange, required, fullWidth }: FormFieldProps) {
  return (
    <div className={`form-group ${fullWidth ? 'full-width' : ''}`}>
      <label className="form-label">{label}</label>
      <input
        className="form-input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
      />
    </div>
  )
}
