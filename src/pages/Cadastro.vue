<script setup>
import { ref } from 'vue'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { vMaska } from 'maska'

const webhookUrl = atob(`aHR0cHM6Ly93b3JrZmxvdy5kYXZpbW91cmEuY29tLmJyL3dlYmhvb2svbWJsL2xpdnJvYW1hcmVsbw==`)

// max file size is 10MB
const MAX_FILE_SIZE = 10 * 1024 * 1024
const fileTestYup = {
  message: `Arquivo muito grande. Máximo ${MAX_FILE_SIZE / 1024 / 1024}MB`,
  test: (file) => {
    if (!file) return true
    const isValid = file?.size < MAX_FILE_SIZE;
    return isValid;
  }
}

yup.setLocale({
  mixed: {
    required: 'Campo obrigatório'
  }
})
const validationSchema = yup.object({
  nome: yup.string().required(),
  email: yup.string().email('Email inválido').required(),
  telefone: yup.string().required(),
  sexo: yup.string().required(),
  cidade: yup.string().required(),
  estado: yup.string().required(),
  escolaridade: yup.string().required().notOneOf(['Selecione'], 'Selecione uma opção'),
  areaAtuacaoProfissional: yup.string().required(),
  expGestaoPublica: yup.string().required(),
  curriculo: yup.mixed().test(fileTestYup),//.required('Selecione um arquivo'),
  areaContribuicao: yup.string().required().notOneOf(['Selecione'], 'Selecione uma opção'),
  horasSemana: yup.string().required().notOneOf(['Selecione'], 'Selecione uma opção'),
})
const { errors, handleSubmit } = useForm({ validationSchema, initialValues: {
  sexo: 'Masculino',
  estado: 'SP',
  escolaridade: 'Selecione',
  areaContribuicao: 'Selecione',
  horasSemana: 'Selecione',
}})
const { value: nome } = useField('nome')
const { value: email } = useField('email')
const { value: telefone } = useField('telefone')
const { value: sexo } = useField('sexo')
const { value: cidade } = useField('cidade')
const { value: estado } = useField('estado')
const { value: escolaridade } = useField('escolaridade')
const { value: areaAtuacaoProfissional } = useField('areaAtuacaoProfissional')
const { value: expGestaoPublica } = useField('expGestaoPublica')
const { value: curriculo } = useField('curriculo')
const { value: areaContribuicao } = useField('areaContribuicao')
const { value: horasSemana } = useField('horasSemana')

const loading = ref(false)
const showSuccess = ref(false)

const submit = handleSubmit(async values => {
  loading.value = true
  console.log('submited', values)

  const formData = new FormData()
  Object.keys(values).forEach(key => {
    formData.append(key, values[key])
  })

  let response
  try {
    response = await fetch(webhookUrl, {
      method: 'POST',
      body: formData
    })
  } catch (ex) {
    response = { ok: false }
  }

  if (response.ok) {
    showSuccess.value = true
  } else {
    alert('Erro ao realizar cadastro! Tente mais tarde.')
  }
  loading.value = false
})


const handleFileChange = async function ($event) {
  const file = $event.target.files[0]
  curriculo.value = file
}

</script>

<template lang="pug">
.header.mb-10
  .header-background
  .py-10.front-header.header-content
    h1.heading.text-3xl.md_text-4xl.mx-auto.flex.justify-center CADASTRO
    img.front-header.flex.justify-center.py-10.header-hero-image.mx-auto(src="/src/assets/brazil-map.svg")
form.py-10.container.mx-auto.px-5.form-container(@submit="submit")
  .py-3
    h3.text-xl.accent-text.text-shadow.mb-2 NOME COMPLETO
    input.input.input-bordered.input-sm.w-full.md_input-md(type="text" placeholder="Ex. Kim Kataguiri" v-model.trim="nome")
    .text-red-500.text-sm.mt-1(v-if="errors.nome") {{ errors.nome }}
  .py-3
    h3.text-xl.accent-text.text-shadow.mb-2 EMAIL DE CONTATO
    input.input.input-bordered.input-sm.w-full.md_input-md(type="text" placeholder="Ex. suporte@mbl.org.br" v-model="email")
    .text-red-500.text-sm.mt-1(v-if="errors.email") {{ errors.email }}
  .py-3
    h3.text-xl.accent-text.text-shadow.mb-2 TELEFONE DE CONTATO
    input.input.input-bordered.input-sm.w-full.md_input-md(type="text" v-maska data-maska="['(##) #####-####','+#######################']" placeholder="Ex. (11) 91234-1234" v-model="telefone")
    .text-red-500.text-sm.mt-1(v-if="errors.telefone") {{ errors.telefone }}
  .py-3
    h3.text-xl.accent-text.text-shadow.mb-2 SEXO
    select.select.select-sm.select-bordered.w-full.md_input-md(v-model="sexo")
      option Masculino
      option Feminino
    .text-red-500.text-sm.mt-1(v-if="errors.sexo") {{ errors.sexo }}
  .py-3.gap-4.grid.grid-cols-3
    div.col-span-2
      h3.text-xl.accent-text.text-shadow.mb-2 CIDADE
      input.input.input-bordered.input-sm.w-full.md_input-md(type="text" placeholder="Ex. São Paulo" v-model="cidade")
      .text-red-500.text-sm.mt-1(v-if="errors.cidade") {{ errors.cidade }}
    div
      h3.text-xl.accent-text.text-shadow.mb-2 ESTADO
      select.select.select-sm.select-bordered.w-full.md_select-md(v-model="estado")
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
      .text-red-500.text-sm.mt-1(v-if="errors.estado") {{ errors.estado }}
  .py-3
    h3.text-xl.accent-text.text-shadow.mb-2 ESCOLARIDADE
    select.select.select-sm.select-bordered.w-full.md_select-md(v-model="escolaridade")
      option(selected disabled) Selecione
      option Ensino Médio incompleto
      option Ensino Médio completo
      option Graduação incompleto
      option Graduação completo
      option Pós-graduação
      option Mestrado
      option Doutorado
      option Pós-doutorado
    .text-red-500.text-sm.mt-1(v-if="errors.escolaridade") {{ errors.escolaridade }}
  .py-3
    h3.text-xl.accent-text.text-shadow.mb-2 ÁREA DE ATUAÇÃO PROFISSIONAL
    input.input.input-bordered.input-sm.w-full.md_input-md(type="text" placeholder="Ex. Economia" v-model="areaAtuacaoProfissional")
    .text-red-500.text-sm.mt-1(v-if="errors.areaAtuacaoProfissional") {{ errors.areaAtuacaoProfissional }}
  .py-3
    h3.text-xl.accent-text.text-shadow.mb-2 EXPERIÊNCIA EM GESTÃO PÚBLICA
    input.input.input-bordered.input-sm.w-full.md_input-md(type="text" placeholder="Ex. Nenhuma" v-model="expGestaoPublica")
    .text-red-500.text-sm.mt-1(v-if="errors.expGestaoPublica") {{ errors.expGestaoPublica }}
  .py-3
    h3.text-xl.accent-text.text-shadow.mb-2 CURRICULO VITAE/LATTES (PDF)
    input.file-input.file-input-bordered.file-input-sm.w-full.md_file-input-md(type="file" @change="handleFileChange" accept="application/pdf")
    .text-red-500.text-sm.mt-1(v-if="errors.curriculo") {{ errors.curriculo }}
  .py-3
    h3.text-xl.accent-text.text-shadow EM QUE ÁREA VOCÊ PRETENDE CONTRIBUIR COM O LIVRO AMARELO?
    h3.accent-text.text-shadow.mb-2 *A área de contribuição deve convergir com sua área de atuação acadêmica/profissional.
    select.select.select-sm.select-bordered.w-full.md_select-md(v-model="areaContribuicao")
      option(disabled selected) Selecione
      option Economia
      option Saúde
      option Segurança Pública
      option Cultura
      option Infraestrutura
      option Ciência e Tecnologia
      option Política Externa
      option Defesa
      option Meio Ambiente
      option Revisão de Texto
      option Reforma Política
      option Agro
      option Justiça
      option Redes Sociais e Liberdade de Imprensa
      option Social
      option Educação
    .text-red-500.text-sm.mt-1(v-if="errors.areaContribuicao") {{ errors.areaContribuicao }}
  .py-3
    h3.text-xl.accent-text.text-shadow.mb-2 QUANTAS HORAS POR SEMANA VOCÊ PODE DEDICAR Á PESQUISA ESCRITA DO LIVRO AMARELO?
    select.select.select-sm.select-bordered.w-full.md_select-md(v-model="horasSemana")
      option(disabled selected) Selecione
      option 1 hora por semana
      option 2-3 horas por semana
      option 3-5 horas por semana
      option + de 5 horas por semana
    .text-red-500.text-sm.mt-1(v-if="errors.horasSemana") {{ errors.horasSemana }}
  .alert.alert-success.shadow-lg(v-if="showSuccess")
    div
      svg.stroke-current.flex-shrink-0.h-6.w-6(xmlns='http://www.w3.org/2000/svg' fill='none' viewbox='0 0 24 24')
        path(stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z')
      span Enviado com sucesso!
  .container.justify-center.flex(class="py-[40px] md_py-[50px]")
    button.btn.btn-wide.btn-accent.md_btn-lg(:class="{loading}" type="submit" value="Participar") Participar
  .container.py-20.justify-center.flex
    img(src="/src/assets/mbl-gold.svg" class="md_w-1/6 w-1/4")
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

.form-container {
  max-width: 1000px;
}

.header-content {
  text-align: center;
  position: relative;
}

.front-header {
  z-index: 2 !important;
}
</style>