import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import LeadForm from './components/LeadForm'
import QRSection from './components/QRSection'
import SuccessModal from './components/SuccessModal'
import Footer from './components/Footer'

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  const handleProductSelect = (id: string) => {
    setSelectedProduct((prev) => (prev === id ? '' : id))
    setTimeout(() => {
      document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  return (
    <>
      <Header />
      <Hero />
      <Products selectedProduct={selectedProduct} onSelect={handleProductSelect} />
      <LeadForm
        selectedProduct={selectedProduct}
        onSuccess={() => setShowSuccess(true)}
      />
      <QRSection />
      <Footer />
      {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}
    </>
  )
}
