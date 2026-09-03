// <-- Translate DNA in 6 frames -->

/*
  In genetics a reading frame is a way to divide a sequence of nucleotides (DNA bases) into a set of consecutive non-overlapping triplets (also called codon). Each of this triplets is translated into an amino-acid during a translation process to create proteins.

  In a single strand of DNA you find 3 Reading frames, for example the following sequence:

  AGGTGACACCGCAAGCCTTATATTAGC
  will be decompose in:

  Frame 1: AGG·TGA·CAC·CGC·AAG·CCT·TAT·ATT·AGC
  Frame 2: A·GGT·GAC·ACC·GCA·AGC·CTT·ATA·TTA·GC
  Frame 3: AG·GTG·ACA·CCG·CAA·GCC·TTA·TAT·TAG·C
  In a double strand DNA you find 3 more Reading frames base on the reverse complement-strand, given the previous DNA sequence, in the reverse complement ( A-->T, G-->C, T-->A, C-->G). Due to the splicing of DNA strands and the fixed reading direction of a nucleotide strand, the reverse complement gets read from right to left

                          AGGTGACACCGCAAGCCTTATATTAGC
  Reverse complement:     TCCACTGTGGCGTTCGGAATATAATCG  
  reversed reverse frame: GCTAATATAAGGCTTGCGGTGTCACCT
  You have:

  Reverse Frame 1: GCT AAT ATA AGG CTT GCG GTG TCA CCT
  reverse Frame 2: G CTA ATA TAA GGC TTG CGG TGT CAC CT
  reverse Frame 3: GC TAA TAT AAG GCT TGC GGT GTC ACC T
  You can find more information about the Open Reading frame in wikipedia just [here] (https://en.wikipedia.org/wiki/Reading_frame)

  Given the standard table of genetic code:

      AAs  = FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG
    Base1  = TTTTTTTTTTTTTTTTCCCCCCCCCCCCCCCCAAAAAAAAAAAAAAAAGGGGGGGGGGGGGGGG
    Base2  = TTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGGTTTTCCCCAAAAGGGG
    Base3  = TCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAGTCAG
  The tri-nucleotide TTT = F, TTC = F, TTA = L...

  So our 6 frames will be translate as:

  Frame 1: AGG·TGA·CAC·CGC·AAG·CCT·TAT·ATT·AGC
            R   *   H   R   K   P   Y   I   S
          
  Frame 2: A·GGT·GAC·ACC·GCA·AGC·CTT·ATA·TTA·GC
              G  D   T   A   S   L   I   L  
              
  Frame 3: AG·GTG·ACA·CCG·CAA·GCC·TTA·TAT·TAG·C
              V   T   P   Q   A   L   Y   *
              
  Reverse Frame 1: GCT AAT ATA AGG CTT GCG GTG TCA CCT
                    A   N   I   R   L   A   V   S   P

  Reverse Frame 2: G CTA ATA TAA GGC TTG CGG TGT CAC CT
                      L   I   *   G   L   R   C   H

  Reverse Frame 3: GC TAA TAT AAG GCT TGC GGT GTC ACC T
                      *   Y   K   A   C   G   V   T
              
  In this kata you should create a function that translates DNA on all 6 frames, this function takes 2 arguments. The first one is the DNA sequence the second one is an array of frame number for example if we want to translate in Frame 1 and Reverse 1 this array will be [1,-1]. Valid frames are 1, 2, 3 and -1, -2, -3.

  The translation table is available for you under a preloaded hash/dictionary/table $codons (Ruby) or codons (other languages). For example to access value of 'TTT' you should call $codons['TTT'] => 'F' in Ruby. See the initial code in your language for more information on the preloaded table.

  The function should return an array with all translation asked for, by default the function do the translation on all 6 frames.
*/

// <-- Solution -->
function translateWithFrame(dna, frames = [1, 2, 3, -1, -2, -3]) {
  let reversed;

  return frames.map((f) => (f > 0 ? translateDNA(dna, f) : translateDNA(reversed || (reversed = reverseDNA(dna)), -f)));
}

function translateDNA(dna, frame) {
  let res = "";

  for (let i = frame - 1; dna.length - i >= 3; i += 3) {
    res += codons[dna.slice(i, i + 3)];
  }

  return res;
}

function reverseDNA(dna) {
  const pairs = { A: "T", T: "A", G: "C", C: "G" };

  return dna
    .split("")
    .map((c) => pairs[c])
    .reverse()
    .join("");
}
