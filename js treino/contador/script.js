function contar() {
    var primeiro = window.document.getElementById('inc')
    var segundo = window.document.getElementById('fim')
    var terceiro = window.document.getElementById('pass')
    var quarto = window.document.getElementById('ress')

if (primeiro.value.length == 0 || segundo.value.length == 0 || terceiro.value.length == 0) {
    quarto.innerHTML = 'impossivel contar!'
    window.alert('ai voce me quebra irmao!')
} else {
    quarto.innerHTML = 'contando: '} 
    var i = Number(primeiro.value)
    var f = Number(segundo.value)
    var p = Number(terceiro.value)
    if (i < f) {for (var c = i; c <= f; c += p) {
        quarto.innerHTML += `${c} \u{1F449}`
    }

    } else {
        for (var c = i; c >= f; c -= p) {
            quarto.innerHTML += `${c} \u{1F449}`
        }
    } 
    {quarto.innerHTML += `\u{1F3C1}`
}
 }


