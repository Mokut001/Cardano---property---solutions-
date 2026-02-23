import { Lucid, Blockfrost, MintingPolicy, PolicyId, Unit } from "lucid-cardano";

/**
 * START OF OFF-CHAIN CARDANO LOGIC
 * Optimized for Mainnet Real Estate Tokenization
 */

export class PropertyEngine {
  public lucid: Lucid | null = null;

  async init() {
    // MAINNET CONFIG - Requires Blockfrost Key
    const bfKey = process.env.NEXT_PUBLIC_BLOCKFROST_KEY || "mainnet_YOUR_KEY";
    
    this.lucid = await Lucid.new(
      new Blockfrost("https://cardano-mainnet.blockfrost.io/api/v0", bfKey),
      "Mainnet"
    );
    return this.lucid;
  }

  async connect() {
    if (!this.lucid) await this.init();
    const api = await window.cardano.nami.enable();
    this.lucid!.selectWallet(api);
    return await this.lucid!.wallet.address();
  }

  async mintFractionalTokens(assetName: string, amount: number) {
    if (!this.lucid) throw new Error("Wallet not connected");

    const address = await this.lucid.wallet.address();
    const { paymentCredential } = this.lucid.utils.getAddressDetails(address);

    const mintingPolicy: MintingPolicy = this.lucid.utils.nativeScriptFromJson({
      type: "all",
      scripts: [{ type: "sig", keyHash: paymentCredential?.hash! }],
    });

    const policyId: PolicyId = this.lucid.utils.validatorToScriptHash(mintingPolicy);
    const unit: Unit = policyId + Buffer.from(assetName).toString("hex");

    const tx = await this.lucid
      .newTx()
      .mintAssets({ [unit]: BigInt(amount) })
      .attachMintingPolicy(mintingPolicy)
      .attachMetadata(721, {
        [policyId]: {
          [assetName]: {
            name: assetName,
            image: "ipfs://QmProperty",
            description: "Fractional Ownership Token",
          },
        },
      })
      .complete();

    const signedTx = await tx.sign().complete();
    return await signedTx.submit();
  }
}

export const propertyEngine = new PropertyEngine();