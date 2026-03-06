import { Briefcase, CheckCircle2 } from 'lucide-react'
import { PRODUCTS } from '../data/products'

interface ProductsProps {
  selectedProduct: string
  onSelect: (id: string) => void
}

export default function Products({ selectedProduct, onSelect }: ProductsProps) {
  return (
    <section className="products section" id="produtos">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            Nossos Produtos
          </div>
          <h2 className="section-title">
            Soluções financeiras sob medida para cada necessidade
          </h2>
          <p className="section-subtitle">
            Selecione a linha de crédito desejada e preencha o formulário abaixo.
            Nossa equipe entrará em contato para estruturar a melhor operação para você.
          </p>
        </div>
        <div className="products-grid">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className={`product-card ${selectedProduct === product.id ? 'selected' : ''}`}
              onClick={() => onSelect(product.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onSelect(product.id)}
            >
              {selectedProduct === product.id && (
                <div className="product-selected-badge">
                  <CheckCircle2 size={14} />
                </div>
              )}
              <div className="product-icon">
                <product.icon size={26} />
              </div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-desc">{product.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
