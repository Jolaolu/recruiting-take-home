export function convertToconverted (inputNum) {
  let num = inputNum
  let converted = ''
  const a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen ']
  const b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  const c = ['thousand', 'million', '']

  num = ('000000000' + num.toString()).substr(-9) // Make number into a predictiable nine character string
    .match(/.{3}/g) // Split string into chuncks of three numbers then reverse order of returned array

  for (var i = 0; i < c.length; i++) {
    var n = num[i]
    var str = ''
    str += (converted !== '') ? ' ' + c[c.length - 1 - i] + ' ' : ''
    str += (n[0] !== 0) ? (a[Number(n[0])] + 'hundred ') : ''
    n = n.substr(1)
    str += (n !== 0) ? ((str !== '') ? 'and ' : '') + (a[Number(n)] || b[n[0]] + ' ' + a[n[1]]) : ''
    converted += str
  }
  return converted.replace(/ +/g, ' ').replace(/ $/, '')
}
