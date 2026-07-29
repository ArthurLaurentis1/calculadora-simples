# Calculadora

Calculadora web desenvolvida com HTML, CSS e JavaScript puro.

## 📸 Preview

> Interface escura com tema zinc, construída sem frameworks ou dependências externas.

## 🚀 Tecnologias

- HTML5
- CSS3 (CSS Grid)
- JavaScript (Vanilla)

## ✨ Funcionalidades

- Operações básicas: soma, subtração, multiplicação e divisão
- Botão **AC** para limpar o display completo
- Botão **←** para apagar o último caractere
- Tratamento de erro para expressões inválidas
- Layout responsivo com CSS Grid

## 📁 Estrutura

```
calculadora/
├── index.html       # Estrutura da página
├── style.css        # Estilização
└── calculadora.js   # Lógica das operações
```

## ⚠️ Observações técnicas

O cálculo das expressões utiliza `eval()` do JavaScript, funcional para este contexto porém não recomendado em produção por questões de segurança, já que aceita qualquer expressão JS como entrada. Uma evolução futura seria substituir por `math.evaluate()` da biblioteca [math.js](https://mathjs.org/).

---

Desenvolvido por [Arthur Laurentis](https://github.com/ArthurLaurentis1)
