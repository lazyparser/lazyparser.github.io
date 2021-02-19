---
title: "Hello Firefox 18: Benchmark Results, Comparing with Firefox 17.0.1 and Chromium 18"
date: "2013-01-10"
categories: 
  - "spidermonkey"
tags: 
  - "benchmark"
  - "chromium"
  - "firefox"
  - "ionmonkey"
  - "kraken"
  - "mozilla"
  - "octane"
  - "spidermonkey"
  - "sunspider"
  - "v8-benchmrak"
---

Firefox 18 发布了，新闻说启用了IonMonkey JIT的SpiderMonkey性能提升了25%（Kraken）。今天测试了一下，发现在 Linux上，Firefox 18 比 Firefox 17 的提升，甚至可以达到 47%，跟 Chromium 的速度旗鼓相当。以下是用我的台式机跑出来的 Kraken、V8、SunSpider、Octane 四个Benchmark的结果。

## Kraken Benchmark

### Firefox 18

[详细结果](http://krakenbenchmark.mozilla.org/kraken-1.1/results.html?%7B%22v%22:%20%22kraken-1.1%22,%20%22ai-astar%22:%5B150,151,152,153,152,152,152,153,152,151%5D,%22audio-beat-detection%22:%5B339,341,340,350,350,339,348,353,349,345%5D,%22audio-dft%22:%5B348,352,431,351,362,350,426,360,363,418%5D,%22audio-fft%22:%5B218,219,225,222,222,220,230,223,222,226%5D,%22audio-oscillator%22:%5B267,197,204,204,202,201,204,201,201,203%5D,%22imaging-gaussian-blur%22:%5B377,377,378,373,368,368,388,377,369,379%5D,%22imaging-darkroom%22:%5B292,294,291,294,294,295,289,300,292,295%5D,%22imaging-desaturate%22:%5B200,208,201,192,189,207,188,209,191,210%5D,%22json-parse-financial%22:%5B110,110,109,111,109,111,109,111,109,112%5D,%22json-stringify-tinderbox%22:%5B95,97,95,94,95,98,95,96,95,99%5D,%22stanford-crypto-aes%22:%5B191,217,208,192,201,203,191,201,196,194%5D,%22stanford-crypto-ccm%22:%5B167,173,170,170,170,174,167,175,170,245%5D,%22stanford-crypto-pbkdf2%22:%5B346,345,380,345,348,350,365,353,348,353%5D,%22stanford-crypto-sha256-iterative%22:%5B110,111,115,183,111,113,115,196,111,114%5D%7D)

\===============================================
RESULTS (means and 95% confidence intervals)
-----------------------------------------------
Total:                        3237.6ms +/- 1.4%
-----------------------------------------------

  ai:                          151.8ms +/- 0.4%
    [astar](http://krakenbenchmark.mozilla.org/explanations/astar.html):                     151.8ms +/- 0.4%

  audio:                      1152.6ms +/- 2.3%
    [beat-detection](http://krakenbenchmark.mozilla.org/explanations/beat-detection.html):            345.4ms +/- 1.1%
    [dft](http://krakenbenchmark.mozilla.org/explanations/dft.html):                       376.1ms +/- 6.5%
    [fft](http://krakenbenchmark.mozilla.org/explanations/fft.html):                       222.7ms +/- 1.1%
    [oscillator](http://krakenbenchmark.mozilla.org/explanations/oscillator.html):                208.4ms +/- 7.1%

  imaging:                     868.5ms +/- 1.0%
    [gaussian-blur](http://krakenbenchmark.mozilla.org/explanations/gaussian-blur.html):             375.4ms +/- 1.2%
    [darkroom](http://krakenbenchmark.mozilla.org/explanations/darkroom.html):                  293.6ms +/- 0.7%
    [desaturate](http://krakenbenchmark.mozilla.org/explanations/desaturate.html):                199.5ms +/- 3.2%

  json:                        206.0ms +/- 0.8%
    [parse-financial](http://krakenbenchmark.mozilla.org/explanations/parse-financial.html):           110.1ms +/- 0.7%
    [stringify-tinderbox](http://krakenbenchmark.mozilla.org/explanations/stringify-tinderbox.html):        95.9ms +/- 1.2%

  stanford:                    858.7ms +/- 3.1%
    crypto-aes:                199.4ms +/- 3.0%
    crypto-ccm:                178.1ms +/- 9.5%
    crypto-pbkdf2:             353.3ms +/- 2.2%
    crypto-sha256-iterative:   127.9ms +/- 18.2%

### Firefox 17

[详细结果](http://krakenbenchmark.mozilla.org/kraken-1.1/results.html?%7B%22v%22:%20%22kraken-1.1%22,%20%22ai-astar%22:%5B165,164,166,169,166,150,165,167,167,167%5D,%22audio-beat-detection%22:%5B419,421,410,413,409,412,411,412,407,409%5D,%22audio-dft%22:%5B626,633,672,661,669,659,664,670,648,661%5D,%22audio-fft%22:%5B302,297,301,298,388,310,298,300,300,306%5D,%22audio-oscillator%22:%5B303,234,231,294,232,300,297,363,329,296%5D,%22imaging-gaussian-blur%22:%5B1143,1151,1140,1142,1138,1147,1140,1145,1143,1154%5D,%22imaging-darkroom%22:%5B377,377,373,377,377,378,375,379,380,375%5D,%22imaging-desaturate%22:%5B321,320,316,321,331,316,440,401,322,325%5D,%22json-parse-financial%22:%5B104,105,111,105,107,104,111,119,104,105%5D,%22json-stringify-tinderbox%22:%5B75,80,79,101,82,78,79,78,78,76%5D,%22stanford-crypto-aes%22:%5B219,221,215,216,218,219,218,222,222,222%5D,%22stanford-crypto-ccm%22:%5B154,158,165,159,155,155,157,159,157,155%5D,%22stanford-crypto-pbkdf2%22:%5B395,379,391,388,461,387,393,388,388,379%5D,%22stanford-crypto-sha256-iterative%22:%5B114,114,116,114,114,114,115,114,116,113%5D%7D)

\===============================================
RESULTS (means and 95% confidence intervals)
-----------------------------------------------
Total:                        4767.5ms +/- 1.2%
-----------------------------------------------

  ai:                          164.6ms +/- 2.3%
    [astar](http://krakenbenchmark.mozilla.org/explanations/astar.html):                     164.6ms +/- 2.3%

  audio:                      1666.5ms +/- 1.9%
    [beat-detection](http://krakenbenchmark.mozilla.org/explanations/beat-detection.html):            412.3ms +/- 0.8%
    [dft](http://krakenbenchmark.mozilla.org/explanations/dft.html):                       656.3ms +/- 1.7%
    [fft](http://krakenbenchmark.mozilla.org/explanations/fft.html):                       310.0ms +/- 6.4%
    [oscillator](http://krakenbenchmark.mozilla.org/explanations/oscillator.html):                287.9ms +/- 10.8%

  imaging:                    1862.4ms +/- 1.6%
    [gaussian-blur](http://krakenbenchmark.mozilla.org/explanations/gaussian-blur.html):            1144.3ms +/- 0.3%
    [darkroom](http://krakenbenchmark.mozilla.org/explanations/darkroom.html):                  376.8ms +/- 0.4%
    [desaturate](http://krakenbenchmark.mozilla.org/explanations/desaturate.html):                341.3ms +/- 9.0%

  json:                        188.1ms +/- 3.2%
    [parse-financial](http://krakenbenchmark.mozilla.org/explanations/parse-financial.html):           107.5ms +/- 3.2%
    [stringify-tinderbox](http://krakenbenchmark.mozilla.org/explanations/stringify-tinderbox.html):        80.6ms +/- 6.6%

  stanford:                    885.9ms +/- 1.8%
    crypto-aes:                219.2ms +/- 0.8%
    crypto-ccm:                157.4ms +/- 1.5%
    crypto-pbkdf2:             394.9ms +/- 4.3%
    crypto-sha256-iterative:   114.4ms +/- 0.6%

### Firefox 18 vs. Firefox 17

（为了防止折行，将“FROM”和“TO”列隐去了，可以参看上面的结果）：

从结果来看引入了IonMonkey之后加速了将近47%。但是同时，个别程序性能反而下降了。

TEST                         COMPARISON            DETAILS

=============================================================

\*\* TOTAL \*\*:                 1.47x as fast        significant

=============================================================

  ai:                        1.084x as fast       significant
    astar:                   1.084x as fast       significant

  audio:                     1.45x as fast        significant
    beat-detection:          1.194x as fast       significant
    dft:                     1.75x as fast        significant
    fft:                     1.39x as fast        significant
    oscillator:              1.38x as fast        significant

  imaging:                   2.14x as fast        significant
    gaussian-blur:           3.05x as fast        significant
    darkroom:                1.28x as fast        significant
    desaturate:              1.71x as fast        significant

  json:                      \*1.095x as slow\*     significant
    parse-financial:         ??     might be \*1.024x as slow\*
    stringify-tinderbox:     \*1.190x as slow\*     significant

  stanford:                  - 
    crypto-aes:              1.099x as fast       significant
    crypto-ccm:              \*1.132x as slow\*     significant
    crypto-pbkdf2:           1.118x as fast       significant
    crypto-sha256-iterative: ??     might be \*1.118x as slow\*

### Chromium

作为对比，一并测试了一下 Chromium 的得分，版本号 18.0.1025.168（[详细结果](http://krakenbenchmark.mozilla.org/kraken-1.1/results.html?%7B%22v%22:%20%22kraken-1.1%22,%20%22ai-astar%22:%5B242,247,244,243,244,246,246,243,242,244%5D,%22audio-beat-detection%22:%5B419,467,425,460,430,460,460,423,459,443%5D,%22audio-dft%22:%5B475,468,477,478,473,470,470,473,465,467%5D,%22audio-fft%22:%5B299,299,298,298,301,299,296,298,298,300%5D,%22audio-oscillator%22:%5B236,234,229,234,230,231,231,232,228,232%5D,%22imaging-gaussian-blur%22:%5B259,261,260,259,259,260,260,260,259,259%5D,%22imaging-darkroom%22:%5B216,217,216,218,217,215,217,218,216,216%5D,%22imaging-desaturate%22:%5B222,226,229,232,227,234,221,236,227,231%5D,%22json-parse-financial%22:%5B101,102,102,106,104,103,106,102,105,101%5D,%22json-stringify-tinderbox%22:%5B70,70,72,96,71,70,70,71,70,70%5D,%22stanford-crypto-aes%22:%5B105,108,107,128,104,106,106,107,107,104%5D,%22stanford-crypto-ccm%22:%5B108,119,118,135,112,109,111,110,107,121%5D,%22stanford-crypto-pbkdf2%22:%5B132,144,142,141,131,137,127,136,138,139%5D,%22stanford-crypto-sha256-iterative%22:%5B78,80,75,83,79,81,77,80,76,80%5D%7D)）：

\===============================================
RESULTS (means and 95% confidence intervals)
-----------------------------------------------
Total:                        3010.3ms +/- 1.0%
-----------------------------------------------

  ai:                          244.1ms +/- 0.5%
    [astar](http://krakenbenchmark.mozilla.org/explanations/astar.html):                     244.1ms +/- 0.5%

  audio:                      1446.5ms +/- 0.8%
    [beat-detection](http://krakenbenchmark.mozilla.org/explanations/beat-detection.html):            444.6ms +/- 3.0%
    [dft](http://krakenbenchmark.mozilla.org/explanations/dft.html):                       471.6ms +/- 0.7%
    [fft](http://krakenbenchmark.mozilla.org/explanations/fft.html):                       298.6ms +/- 0.3%
    [oscillator](http://krakenbenchmark.mozilla.org/explanations/oscillator.html):                231.7ms +/- 0.8%

  imaging:                     704.7ms +/- 0.5%
    [gaussian-blur](http://krakenbenchmark.mozilla.org/explanations/gaussian-blur.html):             259.6ms +/- 0.2%
    [darkroom](http://krakenbenchmark.mozilla.org/explanations/darkroom.html):                  216.6ms +/- 0.3%
    [desaturate](http://krakenbenchmark.mozilla.org/explanations/desaturate.html):                228.5ms +/- 1.5%

  json:                        176.2ms +/- 3.7%
    [parse-financial](http://krakenbenchmark.mozilla.org/explanations/parse-financial.html):           103.2ms +/- 1.3%
    [stringify-tinderbox](http://krakenbenchmark.mozilla.org/explanations/stringify-tinderbox.html):        73.0ms +/- 7.9%

  stanford:                    438.8ms +/- 3.2%
    crypto-aes:                108.2ms +/- 4.7%
    crypto-ccm:                115.0ms +/- 5.3%
    crypto-pbkdf2:             136.7ms +/- 2.8%
    crypto-sha256-iterative:    78.9ms +/- 2.2%

 

总体上而言还是 Chromium 快一点，但是得分很接近，在一些分项上 Firefox 18.0 速度比Chromium更快。

### Firefox 18.0 vs Chromium

TEST                         COMPARISON           DETAILS

====================================================================================

\*\* TOTAL \*\*:                 \*1.076x as slow\*    significant

============================================================

  ai:                        1.61x as fast       significant
    astar:                   1.61x as fast       significant

  audio:                     1.25x as fast       significant
    beat-detection:          1.29x as fast       significant
    dft:                     1.25x as fast       significant
    fft:                     1.34x as fast       significant
    oscillator:              1.112x as fast      significant

  imaging:                   \*1.23x as slow\*     significant
    gaussian-blur:           \*1.45x as slow\*     significant
    darkroom:                \*1.36x as slow\*     significant
    desaturate:              1.145x as fast      significant

  json:                      \*1.169x as slow\*    significant
    parse-financial:         \*1.067x as slow\*    significant
    stringify-tinderbox:     \*1.31x as slow\*     significant

  stanford:                  \*1.96x as slow\*     significant
    crypto-aes:              \*1.84x as slow\*     significant
    crypto-ccm:              \*1.55x as slow\*     significant
    crypto-pbkdf2:           \*2.58x as slow\*     significant
    crypto-sha256-iterative: \*1.62x as slow\*     significant

 

## Sunspider 0.91 Benchmark

SunSpider 0.9.1 的测试结果，有点意外的是 Firefox 17.0.1 最快，其次是Firefox 18.0，Chromium最慢。嗯，一定是我打开的方式不对。

测试地址：[http://www.webkit.org/perf/sunspider-0.9.1/sunspider-0.9.1/driver.html](http://www.webkit.org/perf/sunspider-0.9.1/sunspider-0.9.1/driver.html)

### Firefox 18.0

\============================================
RESULTS (means and 95% confidence intervals)
--------------------------------------------
Total:                 269.7ms +/- 0.9%
--------------------------------------------

  3d:                   46.5ms +/- 1.1%
    cube:               16.7ms +/- 2.1%
    morph:               8.8ms +/- 3.4%
    raytrace:           21.0ms +/- 0.0%

  access:               23.7ms +/- 2.9%
    binary-trees:        3.3ms +/- 10.5%
    fannkuch:           11.7ms +/- 3.0%
    nbody:               4.6ms +/- 8.0%
    nsieve:              4.1ms +/- 5.5%

  bitops:               14.1ms +/- 5.0%
    3bit-bits-in-byte:   1.3ms +/- 26.6%
    bits-in-byte:        5.0ms +/- 0.0%
    bitwise-and:         3.6ms +/- 10.3%
    nsieve-bits:         4.2ms +/- 7.2%

  controlflow:           3.5ms +/- 14.4%
    recursive:           3.5ms +/- 14.4%

  crypto:               28.7ms +/- 7.0%
    aes:                13.5ms +/- 7.6%
    md5:                10.5ms +/- 15.5%
    sha1:                4.7ms +/- 12.5%

  date:                 36.8ms +/- 2.4%
    format-tofte:       23.1ms +/- 1.8%
    format-xparb:       13.7ms +/- 4.9%

  math:                 22.5ms +/- 2.7%
    cordic:              4.1ms +/- 5.5%
    partial-sums:       14.8ms +/- 2.0%
    spectral-norm:       3.6ms +/- 13.9%

  regexp:               15.6ms +/- 2.4%
    dna:                15.6ms +/- 2.4%

  string:               78.3ms +/- 2.6%
    base64:              6.3ms +/- 5.5%
    fasta:               9.0ms +/- 0.0%
    tagcloud:           22.5ms +/- 1.7%
    unpack-code:        29.3ms +/- 5.9%
    validate-input:     11.2ms +/- 2.7%

### Chromium

[详细结果](http://www.webkit.org/perf/sunspider-0.9.1/sunspider-0.9.1/results.html?%7B%22v%22:%20%22sunspider-0.9.1%22,%20%223d-cube%22:%5B10,13,10,14,12,14,13,12,15,13%5D,%223d-morph%22:%5B12,12,12,11,11,11,11,11,11,11%5D,%223d-raytrace%22:%5B19,19,11,22,17,16,21,12,18,16%5D,%22access-binary-trees%22:%5B2,2,2,3,2,3,3,2,3,3%5D,%22access-fannkuch%22:%5B11,11,11,10,10,10,11,11,13,11%5D,%22access-nbody%22:%5B8,8,9,9,8,8,9,8,8,7%5D,%22access-nsieve%22:%5B6,6,6,6,4,5,5,5,5,5%5D,%22bitops-3bit-bits-in-byte%22:%5B6,6,6,6,6,5,7,7,5,5%5D,%22bitops-bits-in-byte%22:%5B8,8,8,9,7,8,8,9,9,6%5D,%22bitops-bitwise-and%22:%5B19,15,18,19,18,16,20,18,18,17%5D,%22bitops-nsieve-bits%22:%5B8,8,6,8,7,8,6,8,8,6%5D,%22controlflow-recursive%22:%5B5,5,3,4,5,5,3,4,5,5%5D,%22crypto-aes%22:%5B12,12,11,12,12,11,10,11,13,12%5D,%22crypto-md5%22:%5B4,5,5,5,5,5,5,4,5,5%5D,%22crypto-sha1%22:%5B4,6,5,6,5,6,5,5,7,5%5D,%22date-format-tofte%22:%5B15,15,20,16,15,15,16,18,16,15%5D,%22date-format-xparb%22:%5B23,24,26,23,28,23,23,23,25,28%5D,%22math-cordic%22:%5B6,6,6,6,5,6,6,5,5,5%5D,%22math-partial-sums%22:%5B12,12,13,13,13,12,12,14,13,11%5D,%22math-spectral-norm%22:%5B5,5,7,7,6,7,5,5,6,6%5D,%22regexp-dna%22:%5B10,10,10,10,10,10,9,10,10,10%5D,%22string-base64%22:%5B8,7,7,8,8,8,8,8,8,6%5D,%22string-fasta%22:%5B12,13,14,15,14,13,15,15,13,15%5D,%22string-tagcloud%22:%5B20,21,20,20,21,20,20,21,20,20%5D,%22string-unpack-code%22:%5B30,30,29,30,29,30,28,29,28,29%5D,%22string-validate-input%22:%5B16,16,16,17,15,16,15,18,14,16%5D%7D)

\============================================
RESULTS (means and 95% confidence intervals)
--------------------------------------------
Total:                 294.6ms +/- 1.5%
--------------------------------------------

  3d:                   41.0ms +/- 7.6%
    cube:               12.6ms +/- 9.3%
    morph:              11.3ms +/- 3.1%
    raytrace:           17.1ms +/- 14.8%

  access:               26.9ms +/- 3.9%
    binary-trees:        2.5ms +/- 15.1%
    fannkuch:           10.9ms +/- 5.7%
    nbody:               8.2ms +/- 5.5%
    nsieve:              5.3ms +/- 9.1%

  bitops:               39.0ms +/- 4.8%
    3bit-bits-in-byte:   5.9ms +/- 8.9%
    bits-in-byte:        8.0ms +/- 8.4%
    bitwise-and:        17.8ms +/- 5.9%
    nsieve-bits:         7.3ms +/- 9.3%

  controlflow:           4.4ms +/- 13.7%
    recursive:           4.4ms +/- 13.7%

  crypto:               21.8ms +/- 5.3%
    aes:                11.6ms +/- 5.2%
    md5:                 4.8ms +/- 6.3%
    sha1:                5.4ms +/- 11.2%

  date:                 40.7ms +/- 4.6%
    format-tofte:       16.1ms +/- 7.4%
    format-xparb:       24.6ms +/- 6.0%

  math:                 24.0ms +/- 4.0%
    cordic:              5.6ms +/- 6.6%
    partial-sums:       12.5ms +/- 4.9%
    spectral-norm:       5.9ms +/- 10.6%

  regexp:                9.9ms +/- 2.3%
    dna:                 9.9ms +/- 2.3%

  string:               86.9ms +/- 1.8%
    base64:              7.6ms +/- 6.6%
    fasta:              13.9ms +/- 5.7%
    tagcloud:           20.3ms +/- 1.7%
    unpack-code:        29.2ms +/- 1.9%
    validate-input:     15.9ms +/- 4.9%

### Firefox 17.0.1

[详细结果](http://www.webkit.org/perf/sunspider-0.9.1/sunspider-0.9.1/results.html?%7B%22v%22:%20%22sunspider-0.9.1%22,%20%223d-cube%22:%5B17,17,16,16,17,16,16,16,16,16%5D,%223d-morph%22:%5B8,8,8,8,8,8,8,8,8,8%5D,%223d-raytrace%22:%5B19,19,19,18,18,18,18,18,18,18%5D,%22access-binary-trees%22:%5B3,3,3,2,3,3,3,2,3,3%5D,%22access-fannkuch%22:%5B9,9,9,10,10,9,9,10,10,9%5D,%22access-nbody%22:%5B6,6,5,5,6,5,5,6,5,5%5D,%22access-nsieve%22:%5B5,5,5,4,5,4,4,5,5,4%5D,%22bitops-3bit-bits-in-byte%22:%5B1,1,1,1,1,2,1,1,1,1%5D,%22bitops-bits-in-byte%22:%5B6,6,6,6,6,6,5,6,6,6%5D,%22bitops-bitwise-and%22:%5B4,4,4,5,4,4,5,5,4,4%5D,%22bitops-nsieve-bits%22:%5B5,4,4,4,4,4,5,4,5,4%5D,%22controlflow-recursive%22:%5B3,3,3,2,3,3,3,3,3,3%5D,%22crypto-aes%22:%5B16,14,14,13,14,14,13,13,13,13%5D,%22crypto-md5%22:%5B7,7,7,7,7,8,7,7,10,8%5D,%22crypto-sha1%22:%5B4,4,3,4,4,4,3,3,4,4%5D,%22date-format-tofte%22:%5B23,22,22,23,23,23,22,22,23,21%5D,%22date-format-xparb%22:%5B15,15,14,15,14,14,14,14,14,15%5D,%22math-cordic%22:%5B4,4,4,4,4,4,5,5,4,4%5D,%22math-partial-sums%22:%5B14,14,14,14,13,13,13,14,13,15%5D,%22math-spectral-norm%22:%5B4,4,4,4,3,4,4,4,3,5%5D,%22regexp-dna%22:%5B16,16,15,15,15,15,15,15,15,15%5D,%22string-base64%22:%5B5,5,5,5,5,5,5,6,5,6%5D,%22string-fasta%22:%5B9,9,9,9,9,9,8,9,9,9%5D,%22string-tagcloud%22:%5B21,20,21,20,20,20,20,20,20,21%5D,%22string-unpack-code%22:%5B24,23,23,23,23,23,24,24,24,24%5D,%22string-validate-input%22:%5B9,8,8,8,8,9,8,8,8,9%5D%7D)

\============================================
RESULTS (means and 95% confidence intervals)
--------------------------------------------
Total:                 248.2ms +/- 1.1%
--------------------------------------------

  3d:                   42.6ms +/- 1.4%
    cube:               16.3ms +/- 2.1%
    morph:               8.0ms +/- 0.0%
    raytrace:           18.3ms +/- 1.9%

  access:               22.2ms +/- 3.7%
    binary-trees:        2.8ms +/- 10.8%
    fannkuch:            9.4ms +/- 3.9%
    nbody:               5.4ms +/- 6.8%
    nsieve:              4.6ms +/- 8.0%

  bitops:               15.6ms +/- 2.4%
    3bit-bits-in-byte:   1.1ms +/- 20.5%
    bits-in-byte:        5.9ms +/- 3.8%
    bitwise-and:         4.3ms +/- 8.0%
    nsieve-bits:         4.3ms +/- 8.0%

  controlflow:           2.9ms +/- 7.8%
    recursive:           2.9ms +/- 7.8%

  crypto:               24.9ms +/- 4.2%
    aes:                13.7ms +/- 4.9%
    md5:                 7.5ms +/- 9.3%
    sha1:                3.7ms +/- 9.3%

  date:                 36.8ms +/- 1.5%
    format-tofte:       22.4ms +/- 2.2%
    format-xparb:       14.4ms +/- 2.6%

  math:                 21.8ms +/- 4.0%
    cordic:              4.2ms +/- 7.2%
    partial-sums:       13.7ms +/- 3.5%
    spectral-norm:       3.9ms +/- 10.4%

  regexp:               15.2ms +/- 2.0%
    dna:                15.2ms +/- 2.0%

  string:               66.2ms +/- 1.5%
    base64:              5.2ms +/- 5.8%
    fasta:               8.9ms +/- 2.5%
    tagcloud:           20.3ms +/- 1.7%
    unpack-code:        23.5ms +/- 1.6%
    validate-input:      8.3ms +/- 4.2%

## V8-v7 Benchmark

V8的测试结果，Firefox 18.0 > Chromium > Firefox 17.0.1

测试地址：[http://v8.googlecode.com/svn/data/benchmarks/v7/run.html](http://v8.googlecode.com/svn/data/benchmarks/v7/run.html)

### Firefox 18.0

**Score: 7671**

Richards: 8811 DeltaBlue: 10991 Crypto: 11226 RayTrace: 6761 EarleyBoyer: 11968 RegExp: 904 Splay: 9461 NavierStokes: 15932

### Chromium

**Score: 7298**

Richards: 10584 DeltaBlue: 14030 Crypto: 13852 RayTrace: 8836 EarleyBoyer: 19236 RegExp: 2368 Splay: 3268 NavierStokes: 2974

### Firefox 17.0.1

**Score: 5695**

Richards: 6499 DeltaBlue: 7061 Crypto: 9931 RayTrace: 3211 EarleyBoyer: 7682 RegExp: 1447 Splay: 7603 NavierStokes: 8945

## Octane v1 Benchmark

最后是 Octane 的测试结果。Octane Benchmark 的结果是一个分数，得分越高越好。总体得分来看，Chromium > Firefox 18.0 > Firefox 17.0.1。

关于这个Benchmark，Mozilla的开发人员Nicholas Nethercote并不认可，发表了[一篇博客](https://blog.mozilla.org/nnethercote/2012/08/24/octane-minus-v8/)，认为测试程序的选取不具有代表性，过度的考虑了Chrome Apps。

测试地址：[http://octane-benchmark.googlecode.com/svn/latest/index.html](http://octane-benchmark.googlecode.com/svn/latest/index.html)

### Firefox 18：

**Octane Score: 6754** Richards 8977 Deltablue 9984 Crypto 9910 Raytrace 6326 EarleyBoyer 11472 Regexp 634 Splay 9192 NavierStokes 15768 pdf.js 3452 Mandreel 6184 GB Emulator 8755 CodeLoad 7924 Box2DWeb 6940

### Firefox 17：

**Octane Score: 5618**

Richards 6365 Deltablue 7425 Crypto 9962 Raytrace 3217 EarleyBoyer 7217 Regexp 1410 Splay 7896 NavierStokes 8877 pdf.js 4050 Mandreel 5447 GB Emulator 5096 CodeLoad 8622 Box2DWeb 5306

### Chromium 18.0

**Octane Score: 7735**

Richards 8804 Deltablue 14116 Crypto 13961 Raytrace 9028 EarleyBoyer 19073 Regexp 2419 Splay 3726 NavierStokes 3112 pdf.js 10526 Mandreel 7992 GB Emulator 11014 CodeLoad 8310 Box2DWeb 5498

## 说明

- 测试的机器的配置是 Intel(R) Core(TM)2 Quad CPU Q9400 @ 2.66GHz， 8G DDR2， Ubuntu 10.04 x86\_64。
- 我机器上的 Chromium 的版本号似乎比 Chrome 的小，不确定是不是最新的版本（用的 stable release channel），对于测试结果有影响。
- 发现默认情况下Firefox 17和Firefox 18不会同时运行。Firefox在启动的时候会检查一下是否已经有了Firefox进程，如果有的话就不开新的进程了。这使得在测试的时候必须先关闭所有的Firefox浏览器窗口才能够换一个版本。为了避免乌龙我在每次测试之前，通过“About Firefox”菜单确认了版本。
- 这个测试结果仅限于Linux，在Windows环境下或许是完全另外的一个结果。相比而言各个浏览器对于Linux环境下的性能优化都不是很上心，小小失落。
