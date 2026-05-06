# ⚡ Code to Frame — Figma Plugin

Converte código **HTML + CSS** em frames Figma **totalmente editáveis** — com auto layout, cores, tipografia, bordas, sombras e muito mais.

---

## 🚀 Instalação

### Método 1 — Desenvolvimento local (recomendado)

1. No Figma Desktop, vá em **Plugins → Development → Import plugin from manifest...**
2. Selecione o arquivo `manifest.json` desta pasta
3. O plugin aparece em **Plugins → Development → Code to Frame**

### Método 2 — Publicar no Figma Community

1. Faça login em [figma.com](https://figma.com)
2. Vá em **Plugins → Publish new plugin**
3. Faça upload dos arquivos `manifest.json`, `code.js` e `ui.html`

---

## 📁 Estrutura

```
figma-code-to-frame/
├── manifest.json   ← Configuração do plugin
├── code.js         ← Lógica principal (roda no sandbox do Figma)
├── ui.html         ← Interface do usuário
└── README.md
```

---

## ✨ O que é suportado

| Feature | Status |
|---|---|
| Divs, sections, articles | ✅ |
| Headings h1–h6 | ✅ |
| Parágrafos, spans, links | ✅ |
| Flexbox → Auto Layout | ✅ |
| background-color | ✅ |
| border-radius | ✅ |
| padding, gap | ✅ |
| border | ✅ |
| box-shadow | ✅ |
| font-size, font-weight | ✅ |
| color, text-align | ✅ |
| `<style>` CSS externo | ✅ |
| Imagens (placeholder) | ⚠️ |
| SVG inline | ❌ |
| Grid complexo | ❌ |

---

## 💡 Dicas de uso

- **Inline styles** funcionam melhor: `<div style="background:#fff;...">`
- Para CSS externo, use um bloco `<style>` no mesmo HTML
- Comece pelos **Exemplos** na aba "Exemplos" do plugin
- Ajuste a **largura** antes de converter (Mobile 375px, Desktop 1280px etc.)

---

## 🛠 Desenvolvimento

O plugin funciona com a API v1 do Figma. Para editar:

- `code.js` — parser HTML/CSS e criação de nós Figma
- `ui.html` — interface (HTML/CSS/JS puro, sem bundler necessário)

Após editar, recarregue o plugin no Figma com **Ctrl+Alt+P** (ou clique direito → Plugins → Development → Code to Frame → Run).
