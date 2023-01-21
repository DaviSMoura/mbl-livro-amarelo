<script setup>
import arvoreHeader from './assets/arvore-header.svg'
</script>

<template lang="pug">
.holder
  h1.white-content.heading.holder-content.text-3xl.md_text-5xl O LIVRO AMARELO
  img.holder-content.holder-arvore(src="/src/assets/arvore-header.svg" alt="Arvore" class="md_w-1/5 w-1/2")
.container.mx-auto.my-10
  h1.text-4xl.accent-text.shadow-text.md_text-5xl.sm_px-5.mx-10
    | O QUE É
    br
    | O LIVRO AMARELO?
  .container.px-5.py-10.box-what-is.my-10
    p.accent-text O Livro Amarelo é a cartilha do posicionamento que o Movimento Brasil Livre defenderá oficialmente, perante a sociedade brasileira, sobre os mais significativos problemas nacionais. Ele é o norte ideológico, o garantidor da fidelidade de nossas promessas, o horizonte intelectual de longo prazo de nossa ação política. O Livro Amarelo contém o planejamento do que deve ser concretizado em cada esfera, seja municipal, estadual ou federal.
    p.mt-5.accent-text O Livro Amarelo é tudo isso e mais. Primeiro, pelo seu caráter de libertação de ideias importadas do caldo intelectual amorfo da nova direita, mistura de liberalismo austríaco e conservadorismo de importação; segundo, pela sua inovadora proposta: a de ser, pelo que alcança nosso conhecimento, o primeiro programa holístico, orgânico e verdadeiramente objetivo na história da democracia brasileira.
    p.mt-5.accent-text Livro Amarelo é a cartilha do posicionamento que o Movimento Brasil Livre defenderá oficialmente, perante a sociedade brasileira, sobre os mais significativos problemas nacionais. Ele é o norte ideológico, o garantidor da fidelidade de nossas promessas, o horizonte intelectual de longo prazo de nossa ação política. O Livro Amarelo contém o planejamento do que deve ser concretizado em cada esfera, seja municipal, estadual ou federal.
    p.mt-5.accent-text Ordinariamente, os programas de governo são feitos por alguns intelectuais, publicitários e gestores. No melhor dos casos. Nosso programa de governo, contudo, não será assim. Ele reunirá a inteligência dispersa de centenas dos mais qualificados apoiadores do MBL. A cada edição, irá incorporar novas perspectivas e a nossa experiência executiva; será renovado em permanente confronto com as melhores experiências em gestão do mundo - e de todas as matrizes ideológicas. Do milagre alemão à ascensão da China, da governança dos países do Sul Global às experiências liberais, nacionalistas, de esquerda e de direita, tudo será examinado com olhar equânime.
    p.mt-5.accent-text Essa grande ambição começa por você, acreditando em nossa missão e na seriedade do projeto, inscrever-se como um possível autor do Livro.
</template>

<style>
.holder{
  position:relative;
  width:100%;
  display:flex;
  height:70vh;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  overflow:hidden;
}
.holder:before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  height:100%;
  width:100%;
  background: #E5AE41;
  border-radius:0 0 50% 50%/0 0 100% 100%;
  transform:scaleX(1.5);
}
.heading {
  color: #29373A;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  font-family: 'Montserrat', sans-serif;
}
.holder-content {
  z-index: 1;
}
.holder-arvore {
  margin-top: 50px;
  border-radius:100% 100% 100% 100%;
  box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.5);
}
.accent-text {
  color: #E5AE41
}
.shadow-text {
  text-shadow: 0px 0px 5px rgba(0, 0, 0, .5);
}
.box-what-is {
  background-color: #1C2323;
  font-size: 150%;
  font-family: 'Mongolian Baiti'
}
</style>