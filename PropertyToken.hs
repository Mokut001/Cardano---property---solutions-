{-# LANGUAGE DataKinds           #-}
{-# LANGUAGE NoImplicitPrelude   #-}
{-# LANGUAGE TemplateHaskell     #-}
{-# LANGUAGE TypeApplications    #-}

module PropertyToken where

import           Plutus.V2.Ledger.Api
import           Plutus.V2.Ledger.Contexts (txSignedBy)
import           PlutusTx.Prelude
import qualified PlutusTx

-- | Property Tokenization Parameters
data PropertyParams = PropertyParams
    { ownerPkh    :: PubKeyHash
    , propertyId  :: BuiltinByteString
    , totalShares :: Integer
    }
PlutusTx.makeLift ''PropertyParams

{-# INLINABLE mkPolicy #-}
mkPolicy :: PropertyParams -> BuiltinData -> ScriptContext -> Bool
mkPolicy params _ ctx = 
    traceIfFalse "Signature Missing" (txSignedBy info (ownerPkh params)) &&
    traceIfFalse "Limit Exceeded" (mintedAmount <= totalShares params)
  where
    info = scriptContextTxInfo ctx
    mintedAmount = getLovelace (fromValue (txInfoMint info))

policy :: PropertyParams -> MintingPolicy
policy params = mkMintingPolicyScript 
    ($$(PlutusTx.compile [|| mkPolicy ||]) `PlutusTx.applyCode` PlutusTx.liftCode params)