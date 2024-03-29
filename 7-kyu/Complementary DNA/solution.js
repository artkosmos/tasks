// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
// Your function receives one side of the DNA (string, except for Haskell); you need to return
// the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function DNAStrand(dna){
  return dna
    .split('')
    .map(item => {
    if (item === 'A') return 'T'
    if (item === 'T') return 'A'
    if (item === 'C') return 'G'
    if (item === 'G') return 'C'
  })
    .join('')
}

console.log(DNAStrand('AATGC'))