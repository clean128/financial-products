import type { LucideIcon } from 'lucide-react'
import {
  Building2, Home, Hammer, Users, Car, Wallet, TrendingUp,
  Landmark, CircleDollarSign, Globe, Briefcase,
} from 'lucide-react'

export interface Product {
  id: string
  name: string
  desc: string
  icon: LucideIcon
}

export const PRODUCTS: Product[] = [
  {
    id: 'financiamento-imobiliario',
    name: 'Financiamento Imobiliário',
    desc: 'Realize o sonho do imóvel próprio com as melhores condições do mercado.',
    icon: Home,
  },
  {
    id: 'home-equity',
    name: 'Home Equity',
    desc: 'Use seu imóvel como garantia e tenha acesso a crédito com taxas reduzidas.',
    icon: Landmark,
  },
  {
    id: 'credito-construcao',
    name: 'Crédito para Construção',
    desc: 'Financiamento específico para construção de imóveis residenciais e comerciais.',
    icon: Hammer,
  },
  {
    id: 'credito-condominio',
    name: 'Crédito para Condomínio',
    desc: 'Soluções de crédito para modernização e manutenção de condomínios.',
    icon: Building2,
  },
  {
    id: 'credito-reformas',
    name: 'Crédito para Reformas',
    desc: 'Financie reformas e melhorias no seu imóvel com condições especiais.',
    icon: Hammer,
  },
  {
    id: 'consorcio',
    name: 'Consórcio Imobiliário, Autos e Serviços',
    desc: 'Consórcios para imóveis, veículos pesados e serviços com parcelas acessíveis.',
    icon: Users,
  },
  {
    id: 'financiamento-veiculos',
    name: 'Financiamento e Refinanciamento de Veículos',
    desc: 'Financie ou refinancie veículos e frotas com as melhores taxas.',
    icon: Car,
  },
  {
    id: 'garantia-veiculo',
    name: 'Empréstimo com Garantia de Veículo',
    desc: 'Utilize seu veículo como garantia para obter crédito com juros reduzidos.',
    icon: Wallet,
  },
  {
    id: 'capital-giro',
    name: 'Capital de Giro',
    desc: 'Crédito para manter e expandir as operações do seu negócio.',
    icon: CircleDollarSign,
  },
  {
    id: 'antecipacao-recebiveis',
    name: 'Antecipação de Recebíveis',
    desc: 'Antecipe seus recebíveis e melhore o fluxo de caixa da empresa.',
    icon: TrendingUp,
  },
  {
    id: 'operacoes-estruturadas',
    name: 'Operações Estruturadas',
    desc: 'Soluções financeiras customizadas para operações de maior complexidade.',
    icon: Briefcase,
  },
  {
    id: 'cambio',
    name: 'Câmbio',
    desc: 'Transações em moeda estrangeira com cotações competitivas e segurança.',
    icon: Globe,
  },
]

export const LANDING_URL = 'https://maximoconceitoassessoria.com.br'

export type PersonType = 'pj' | 'pf'

export interface LeadFormData {
  personType: PersonType
  nome: string
  email: string
  telefone: string
  cnpj: string
  razaoSocial: string
  cpf: string
  faturamento: string
  funcionarios: string
  valorCredito: string
  linhaCredito: string
  nomeSocios: string
  mensagem: string
}

export const INITIAL_FORM_DATA: LeadFormData = {
  personType: 'pj',
  nome: '',
  email: '',
  telefone: '',
  cnpj: '',
  razaoSocial: '',
  cpf: '',
  faturamento: '',
  funcionarios: '',
  valorCredito: '',
  linhaCredito: '',
  nomeSocios: '',
  mensagem: '',
}
