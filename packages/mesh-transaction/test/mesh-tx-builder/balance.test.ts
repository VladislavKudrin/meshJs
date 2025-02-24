import { blake2b, Transaction, TxCBOR } from "@meshsdk/core-cst";
import { MeshTxBuilder } from "@meshsdk/transaction";

describe("MeshTxBuilder", () => {
  let txBuilder: MeshTxBuilder;

  beforeEach(() => {
    txBuilder = new MeshTxBuilder();
  });

  const txHash = (tx: string) => {
    return blake2b(32).update(Buffer.from(tx, "utf-8")).digest("hex");
  };

  it("Should add remaining value as fees if insufficient for minUtxoValue", async () => {
    const tx = await txBuilder
      .txIn(
        txHash("tx0"),
        0,
        [
          {
            unit: "lovelace",
            quantity: "1200000",
          },
        ],
        "addr_test1qpvx0sacufuypa2k4sngk7q40zc5c4npl337uusdh64kv0uafhxhu32dys6pvn6wlw8dav6cmp4pmtv7cc3yel9uu0nq93swx9",
        0,
      )
      .txOut(
        "addr_test1qpvx0sacufuypa2k4sngk7q40zc5c4npl337uusdh64kv0uafhxhu32dys6pvn6wlw8dav6cmp4pmtv7cc3yel9uu0nq93swx9",
        [
          {
            unit: "lovelace",
            quantity: "1000000",
          },
        ],
      )
      .changeAddress(
        "addr_test1qpvx0sacufuypa2k4sngk7q40zc5c4npl337uusdh64kv0uafhxhu32dys6pvn6wlw8dav6cmp4pmtv7cc3yel9uu0nq93swx9",
      )
      .complete();

    const cardanoTx = Transaction.fromCbor(TxCBOR(tx));
    expect(cardanoTx.body().fee()).toEqual(BigInt(200000));
  });

  it("Transaction should be exactly balanced with change output", async () => {
    const tx = await txBuilder
      .txIn(
        txHash("tx0"),
        0,
        [
          {
            unit: "lovelace",
            quantity: "3000000",
          },
        ],
        "addr_test1qpvx0sacufuypa2k4sngk7q40zc5c4npl337uusdh64kv0uafhxhu32dys6pvn6wlw8dav6cmp4pmtv7cc3yel9uu0nq93swx9",
        0,
      )
      .txOut(
        "addr_test1qpvx0sacufuypa2k4sngk7q40zc5c4npl337uusdh64kv0uafhxhu32dys6pvn6wlw8dav6cmp4pmtv7cc3yel9uu0nq93swx9",
        [
          {
            unit: "lovelace",
            quantity: "1000000",
          },
        ],
      )
      .changeAddress(
        "addr_test1qpvx0sacufuypa2k4sngk7q40zc5c4npl337uusdh64kv0uafhxhu32dys6pvn6wlw8dav6cmp4pmtv7cc3yel9uu0nq93swx9",
      )
      .complete();
    const cardanoTx = Transaction.fromCbor(TxCBOR(tx));
    expect(
      cardanoTx.body().fee() +
        cardanoTx.body().outputs().pop()!.amount().coin(),
    ).toEqual(BigInt(2000000));
  });
});
