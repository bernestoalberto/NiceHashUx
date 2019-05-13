module.exports = {
api:{
    id: process.env.NH_ID,
    key_read_only:process.env.NH_KEY_RO,
    key: process.env.NH_KEY,
    location:{
        'eu':'Europe',
        'mine': 'USA'
        },
       /* algo: [
0 : Scrypt
1 : SHA256
2 : ScryptNf
3 : X11
4 : X13
5 : Keccak
6 : X15
7 : Nist5
8 : NeoScrypt
9 : Lyra2RE
10 : WhirlpoolX
11 : Qubit
12 : Quark
13 : Axiom
14 : Lyra2REv2
15 : ScryptJaneNf16
16 : Blake256r8
17 : Blake256r14
18 : Blake256r8vnl
19 : Hodl
20 : DaggerHashimoto
21 : Decred
22 : CryptoNight
23 : Lbry
24 : Equihash
25 : Pascal
26 : X11Gost
27 : Sia
28 : Blake2s
29 : Skunk
30 : CryptoNightV7
31 : CryptoNightHeavy
32 : Lyra2Z
33 : X16R
34 : CryptoNightV8
35 : SHA256AsicBoost
36 : Zhash
37 : Beam
38 : GrinCuckaroo29
39 : GrinCuckatoo31
40 : Lyra2REv3
41 : MTP
42 : CryptoNightR

        ]*/
}
};