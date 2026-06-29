

function numMask(element) {
  element = element.replace(/\D/g, "")
  return element
}

const documentoMask = (documento) => {
  documento = numMask(documento)
  documento = documento.slice(0, 11)

  if (documento.length <= 2) {
    return documento
  }
  if (documento.length <= 5) {
    return (`${documento.slice(0, 3)}.${documento.slice(3)}`)
  }
  return (`${documento.slice(0, 3)}.${documento.slice(3, 6)}.${documento.slice(6, 9)}-${documento.slice(9, 11)}`)

}
const phoneMask = (phone) => {
  phone = numMask(phone)
  phone = phone.slice(0, 11)

  if (phone.length <= 2) {
    return phone
  }
  if (phone.length <= 7) {
    return (`(${phone.slice(0, 2)}) ${phone.slice(2)}`)
  }

  return (`(${phone.slice(0, 2)}) ${phone.slice(2, 7)} - ${phone.slice(7)}`)
}

let inputPhone = document.getElementById('telefone')
let inputDocumento = document.getElementById('documento')

inputPhone.addEventListener('input', () => {
  inputPhone.value = phoneMask(inputPhone.value)
})

inputDocumento.addEventListener('input', () => {
  inputDocumento.value = documentoMask(inputDocumento.value)
})