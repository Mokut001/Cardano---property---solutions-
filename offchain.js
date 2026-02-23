import { Lucid, Blockfrost } from "lucid-cardano";

export class PropertyEngine {
    constructor() {
        this.lucid = null;
    }

    async init() {
        const bfKey = process.env.NEXT_PUBLIC_BLOCKFROST_KEY;
        this.lucid = await Lucid.new(
            new Blockfrost("https://cardano-mainnet.blockfrost.io/api/v0", bfKey),
            "Mainnet"
        );
        return this.lucid;
    }

    async connect() {
        if (!this.lucid) await this.init();
        const api = await window.cardano.nami.enable();
        this.lucid.selectWallet(api);
        return await this.lucid.wallet.address();
    }
}

export const propertyEngine = new PropertyEngine();