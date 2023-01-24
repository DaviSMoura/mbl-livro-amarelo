<script setup>
</script>

<template lang="pug">
.header.mb-10
  .header-background
  .py-10.front-header.header-content
    h1.heading.text-3xl.md_text-4xl.mx-auto.flex.justify-center CADASTRO
    img.front-header.flex.justify-center.py-10.header-hero-image.mx-auto(src="/src/assets/brazil-map.svg")
.py-10.container.mx-auto.px-5
  .py-3
    h3.text-xl.accent-text.text-shadow NOME COMPLETO
    input.input.input-bordered.input-sm.w-full.md_input-md(type="text" placeholder="Ex. Renan Santos")
  .py-3
    h3.text-xl.accent-text.text-shadow SEXO
    select.select.select-sm.select-bordered.w-full.md_input-md
      option Masculino
      option Feminino
  .py-3.gap-4.grid.grid-cols-3
    div.col-span-2
      h3.text-xl.accent-text.text-shadow CIDADE
      input.input.input-bordered.input-sm.w-full.md_input-md(type="text" placeholder="Ex. São Paulo")
    div
      h3.text-xl.accent-text.text-shadow ESTADO
      select.select.select-sm.select-bordered.w-full.md_select-md
        option AC
        option AL
        option AP
        option AM
        option BA
        option CE
        option DF
        option ES
        option GO
        option MA
        option MT
        option MS
        option MG
        option PA
        option PB
        option PR
        option PE
        option PI
        option RJ
        option RN
        option RS
        option RO
        option RR
        option SC
        option SP
        option SE
        option TO
  .py-3
    h3.text-xl.accent-text.text-shadow ESCOLARIDADE
    select.select.select-sm.select-bordered.w-full.md_select-md
      option Ensino Médio completo
      option Superior completo
      option Mestre
      option Doutor
  .py-3
    h3.text-xl.accent-text.text-shadow ÁREA DE ATUAÇÃO PROFISSIONAL
    input.input.input-bordered.input-sm.w-full.md_input-md(type="text" placeholder="Ex. Economia")
  .py-3
    h3.text-xl.accent-text.text-shadow CURRICULO VITAE/LATTES (PDF)
    input.file-input.file-input-bordered.file-input-sm.w-full.md_file-input-md(type="file")
  .py-3
    h3.text-xl.accent-text.text-shadow EM QUE ÁREA VOCÊ PRETENDE CONTRIBUIR COM O LIVRO AMARELO?
    input.input.input-bordered.input-sm.w-full.md_input-md(type="text" placeholder="Ex. Economia")
  .py-3
    h3.text-xl.accent-text.text-shadow QUANTAS HORAS POR SEMANA VOCÊ PODE DEDICAR Á PESQUISA ESCRITA DO LIVRO AMARELO?
    input.input.input-bordered.input-sm.w-full.md_input-md(type="text" placeholder="Ex. 10 horas")
  .container.justify-center.flex(class="py-[40px] md_py-[50px]")
    button(class="btn btn-wide btn-accent md_btn-lg") Participar
  .container.py-20.justify-center.flex
    img(src="/src/assets/mbl-gold.svg" class="md_w-1/12 w-1/4")
</template>

<style scoped>
.header {
  position: relative;
  height: 40vh;
  display: block;
}

.header-background {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #E5AE41;
  transform-origin: 0px 0px;
  transform: skewY(-10deg);
  overflow: hidden;
}

.header-hero-image {
  width: 100%;
  height: 40vh;
}


.header-content {
  text-align: center;
  position: relative;
}

.front-header {
  z-index: 2 !important;
}
</style>