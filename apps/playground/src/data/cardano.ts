import { applyParamsToScript } from "@meshsdk/core-cst";

export const demoAddresses = {
  mainnet: "addr1v9vx0sacufuypa2k4sngk7q40zc5c4npl337uusdh64kv0c93pyfx",
  testnet: "addr_test1vpvx0sacufuypa2k4sngk7q40zc5c4npl337uusdh64kv0c7e4cxr",
  testnetPayment:
    "addr_test1qpvx0sacufuypa2k4sngk7q40zc5c4npl337uusdh64kv0uafhxhu32dys6pvn6wlw8dav6cmp4pmtv7cc3yel9uu0nq93swx9",
  testnetStake:
    "stake_test1uzw5mnt7g4xjgdqkfa80hrk7kdvds6sa4k0vvgjvlj7w8eskffj2n",
};

export const demoMnemonic = "solution,".repeat(24).split(",").slice(0, 24);

export const demoPrivateKey =
  "xprv1cqa46gk29plgkg98upclnjv5t425fcpl4rgf9mq2txdxuga7jfq5shk7np6l55nj00sl3m4syzna3uwgrwppdm0azgy9d8zahyf32s62klfyhe0ayyxkc7x92nv4s77fa0v25tufk9tnv7x6dgexe9kdz5gpeqgu";

export const demoCLIKey = {
  paymentSkey:
    "5820aaca553a7b95b38b5d9b82a5daa7a27ac8e34f3cf27152a978f4576520dd6503",
  stakeSkey:
    "582097c458f19a3111c3b965220b1bef7d548fd75bc140a7f0a4f080e03cce604f0e",
};

export const demoPlutusMintingScript =
  "5883588101000032323232323232322232533300632323232533300a3370e9000000899b8f375c601c601000e911046d6573680014a0601000260180026018002600800429309b2b19299980319b87480000044c8c94ccc02cc03400852616375c601600260080062c60080044600a6ea80048c00cdd5000ab9a5573aaae7955cfaba15745";

export const demoPlutusAlwaysSucceedScript = "4e4d01000033222220051200120011";

export const demoPolicyId =
  "d9312da562da182b02322fd8acb536f37eb9d29fba7c49dc17255527";
export const demoAssetId = "4d657368546f6b656e";
export const demoAsset = demoPolicyId + demoAssetId;

export const demoAssetMetadata = {
  name: "Mesh Token",
  image: "ipfs://QmRzicpReutwCkM6aotuKjErFCUD213DpwPq6ByuzMJaua",
  mediaType: "image/jpg",
  description: "This NFT was minted by Mesh (https://meshjs.dev/).",
};

export const demoPool =
  "pool107k26e3wrqxwghju2py40ngngx2qcu48ppeg7lk0cm35jl2aenx";

export const demoPubKeyHash =
  "aa048e4cc8a1e67e1d97ffbd4be614388014cbc2b2451527202943b6";

export const demoStakeCredential =
  "9d4dcd7e454d2434164f4efb8edeb358d86a1dad9ec6224cfcbce3e6";

export const oneTimeMintingPolicy =
  "5901e6010000323232323232322232322533300632323232533300a3007300b3754002264a666016601060186ea802454ccc02cc020c030dd519198008009bac3011300e375400844a6660200022980103d87a800013232533300f3375e01c601260226ea80084cdd2a40006602600497ae01330040040013014002301200114a229404c8cc004004c8cc004004c8cc004004dd59809980a180a180a180a18081baa00622533301200114bd6f7b630099191919299980999b9148900002153330133371e91010000210031005133017337606ea4008dd3000998030030019bab3014003375c6024004602c004602800244a666022002297ae01323332223233001001003225333017001100313233019374e660326ea4018cc064c058004cc064c05c0052f5c066006006603600460320026eb8c040004dd5980880099801801980a80118098009129998080008a51132533300e32533300f3371e6eb8c0240040144cdc41bad301430153015001480005289bac301300213300300300114a060260026eb8c03cc030dd50008a50300e300f002300d001300937540044601800229309b2b19299980298010008a99980418039baa00314985854ccc014cdc3a40040022a666010600e6ea800c5261616300537540046e1d20005734aae7555cf2ab9f5740ae855d101";

export const demoTransactionCbor =
  "84a70081825820859d3b4fd3a4c012b43ee1bbbc99240aec1827c3b8a74b867d10a7f4759149bc00018382583900e4cfbbc317c718f78d137b6535d8940618cc3d2ac04f1f35acf78e53a1521c2cea3cc79762d575581e47ea60b8eaa03430716cfd6140c796821a0011b0dea1581c67dd133868f14107b25772f3c5abaa1e0549f4b400b5e0e3a1136152a149000643b0546573743101a300581d7067dd133868f14107b25772f3c5abaa1e0549f4b400b5e0e3a113615201821a001ad510a1581c67dd133868f14107b25772f3c5abaa1e0549f4b400b5e0e3a1136152a149000de140546573743101028201d8185882d8799fa4446e616d6545546573743145696d6167655835697066733a2f2f516d527a6963705265757477436b4d36616f74754b6a4572464355443231334470775071364279757a4d4a617561496d656469615479706549696d6167652f6a70674b6465736372697074696f6e5348656c6c6f20776f726c64202d20434950363802ff825839003659ed2a30abb32e97589f2a01c8500ce8fc4897b868ebe42fbf4a8aa1521c2cea3cc79762d575581e47ea60b8eaa03430716cfd6140c7961a00134249021a000c830909a1581c67dd133868f14107b25772f3c5abaa1e0549f4b400b5e0e3a1136152a249000643b054657374310149000de1405465737431010b58207ae25a8a9286347cc1e0444a0de75e07432a6ed243591ef673fd837bb5235a670d82825820859d3b4fd3a4c012b43ee1bbbc99240aec1827c3b8a74b867d10a7f4759149bc00825820859d3b4fd3a4c012b43ee1bbbc99240aec1827c3b8a74b867d10a7f4759149bc050e81581ce4cfbbc317c718f78d137b6535d8940618cc3d2ac04f1f35acf78e53a206815883588101000032323232323232322232533300632323232533300a3370e9000000899b8f375c601c601000e911046d6573680014a0601000260180026018002600800429309b2b19299980319b87480000044c8c94ccc02cc03400852616375c601600260080062c60080044600a6ea80048c00cdd5000ab9a5573aaae7955cfaba157450581840100d8799f446d657368ff821a006acfc01ab2d05e00f5f6";

// from content ownership mint policy
export const demoTransactionCborScript =
  "84a600d901028182582056ae6e2d8c419ab279ecd308040b8f56025cd4a287c75c182f8ccc0fd4115b0700018182583900556f3a70b8a68081cf36c918dd9933abdca34f20fc534499c817182b8cfb40854d41392b624b678012443d61015f5575627a467c450396c9821a008c2c8fa1581c8251cfa433b84ed4357143657f1c33740caa9e953c5f266c86ecfaf5a14001021a000c69f109a1581c8251cfa433b84ed4357143657f1c33740caa9e953c5f266c86ecfaf5a140010b58204fb018afc3952620696789649a8447595f9895ec48bda9c2596f0507e9b43f360dd9010281825820e8b1c89936d747185cf77c3eb42a37749cb4bdfee36d8763cfffad264ecbe0b900a207d90102815901cc5901c901010033232323232323222533300332323232325332330093001300a37540042646464a66601860080022a66601e601c6ea8018540085854ccc030cdc3a40040022a66601e601c6ea8018540085858c030dd50028992999805980198061baa0051533300b3003300c375464660020026eb0c044c038dd50041129998080008a6103d87a800013232533300f3375e01c600a60226ea80084cdd2a40006602600497ae01330040040013014002301200114a229404c8cc004004c8cc004004dd59809180998099809980998079baa00922533301100114bd70099199911191980080080191299980b80088018991980c9ba733019375200c66032602c00266032602e00297ae033003003301b0023019001375c60200026eacc044004cc00c00cc054008c04c004894ccc040004528899299980719299980799b8f375c600a00200c266e20dd6980a180a980a800a40002944dd618098010998018018008a50301300123010001375c601c60166ea8008dc3a40002c6018601a004601600260160046012002600a6ea8004526136565734aae7555cf2ab9f5740ae855d1260127d8799f582056ae6e2d8c419ab279ecd308040b8f56025cd4a287c75c182f8ccc0fd4115b0700ff000105a182010082d87980821a006acfc01ab2d05e00f5f6";

export const yaci = {
  mnemonic: [
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "sauce",
  ],
  address:
    "addr_test1qryvgass5dsrf2kxl3vgfz76uhp83kv5lagzcp29tcana68ca5aqa6swlq6llfamln09tal7n5kvt4275ckwedpt4v7q48uhex",
};
export const alwaysSucceedMintingStakingScriptCbor = (pubKeyHash: string) =>
  applyParamsToScript("55010000322322253330054a229309b2b1bae0015735", [
    pubKeyHash,
  ]);
