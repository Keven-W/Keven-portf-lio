# Portfólio Profissional - Keven Wendell

Portfólio profissional desenvolvido com React + TypeScript, apresentando projetos, habilidades e informações de contato.

## Tecnologias Utilizadas

- **React 18** com TypeScript
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações fluidas
- **EmailJS** - Envio de formulário de contato
- **Lucide React** - Ícones

## Características

- Design moderno com cores dourado (#D4AF37) e preto
- Animações suaves e interativas
- Background com efeito Matrix (binário cascata)
- Typing animation no hero
- Skills interativas com modal de detalhes
- Formulário de contato funcional
- Totalmente responsivo
- Acessível (ARIA labels e contraste adequado)

## Configuração

### 1. Instalação de Dependências

```bash
npm install
```

### 2. Configuração do EmailJS

Para que o formulário de contato funcione, você precisa configurar sua chave pública do EmailJS:

1. Acesse [EmailJS](https://www.emailjs.com/)
2. Faça login ou crie uma conta gratuita
3. No painel, vá em **Account** → **General**
4. Copie sua **Public Key**
5. Crie um arquivo `.env` na raiz do projeto (copie do `.env.example`):

```bash
cp .env.example .env
```

6. Cole sua chave no arquivo `.env`:

```env
VITE_EMAILJS_PUBLIC_KEY=sua_chave_publica_aqui
```

**Nota:** As credenciais do serviço e template já estão configuradas no código:
- Service ID: `service_is0kxkg`
- Template ID: `template_e6j2kcp`

### 3. Executar o Projeto Localmente

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Preview da build de produção
- `npm run lint` - Executa o linter
- `npm run typecheck` - Verifica tipos TypeScript

## Personalização

### Atualizar Informações Pessoais

#### Dados de Contato
Edite os componentes para atualizar seus dados:
- **Email, LinkedIn, GitHub**: `src/components/About.tsx` e `src/components/ContactForm.tsx`
- **Nome**: Várias ocorrências em `Header.tsx`, `Hero.tsx`, etc.

#### Skills
Edite o arquivo `src/data/skills.ts` para adicionar/modificar suas habilidades:

```typescript
export const skills: Skill[] = [
  {
    id: 'html',
    name: 'HTML',
    percent: 95,
    domains: ['Semântica e estrutura', 'SEO', 'Forms']
  },
  // adicione mais skills...
];
```

#### Projetos
Edite o arquivo `src/data/projects.ts` para adicionar seus projetos:

```typescript
export const projects: Project[] = [
  {
    title: 'Nome do Projeto',
    description: 'Descrição do projeto...',
    technologies: ['React', 'TypeScript'],
    status: 'completed', // ou 'in-progress'
    statusText: 'Concluído',
    image: 'url_da_imagem',
    github: 'url_do_github',
    live: 'url_do_site', // opcional
    highlights: ['Feature 1', 'Feature 2']
  }
];
```

### Cores do Tema

As cores principais estão definidas usando Tailwind. Para alterar:
- **Dourado**: Substitua `#D4AF37` no código
- **Preto**: Substitua `#000000` ou use as classes `bg-black`, `bg-gray-900`, etc.

## Deploy

### Vercel (Recomendado)

1. Faça push do código para o GitHub
2. Acesse [Vercel](https://vercel.com)
3. Importe seu repositório
4. Adicione a variável de ambiente `VITE_EMAILJS_PUBLIC_KEY`
5. Deploy automático

### Netlify

1. Faça push do código para o GitHub
2. Acesse [Netlify](https://netlify.com)
3. Conecte seu repositório
4. Configure build command: `npm run build`
5. Configure publish directory: `dist`
6. Adicione a variável de ambiente `VITE_EMAILJS_PUBLIC_KEY`

### GitHub Pages

```bash
npm run build
# Faça deploy da pasta dist
```

## Estrutura de Pastas

```
src/
├── components/
│   ├── Header.tsx              # Cabeçalho fixo
│   ├── Hero.tsx                # Seção principal
│   ├── BinaryBackground.tsx    # Efeito Matrix
│   ├── TypingTitle.tsx         # Animação de digitação
│   ├── About.tsx               # Sobre mim
│   ├── Skills.tsx              # Grade de skills
│   ├── SkillCard.tsx           # Card individual
│   ├── SkillModal.tsx          # Modal de detalhes
│   ├── Projects.tsx            # Galeria de projetos
│   ├── ContactForm.tsx         # Formulário de contato
│   └── Footer.tsx              # Rodapé
├── data/
│   ├── skills.ts               # Dados das skills
│   └── projects.ts             # Dados dos projetos
├── App.tsx                     # Componente principal
└── main.tsx                    # Entry point
```

## Acessibilidade

O portfólio foi desenvolvido seguindo boas práticas de acessibilidade:
- Todos os botões possuem `aria-label`
- Contraste adequado entre texto e fundo
- Navegação por teclado funcional
- Formulário com validação e feedback

## Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar como base para seu próprio portfólio.

---

Desenvolvido por Keven Wendell
