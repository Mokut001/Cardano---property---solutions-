{-# LANGUAGE DataKinds           #-}
{-# LANGUAGE NoImplicitPrelude   #-}
{-# LANGUAGE TemplateHaskell     #-}
{-# LANGUAGE TypeApplications    #-}
{-# LANGUAGE OverloadedStrings   #-}

module Property.Minting where

import           Plutus.V2.Ledger.Api
import           Plutus.V2.Ledger.Contexts (txSignedBy, scriptContextTxInfo)
import           PlutusTx.Prelude
import qualified PlutusTx
import           Property.Types
import           Property.Safety

{-# INLINABLE mkMintingPolicy #-}
mkMintingPolicy :: PropertyDatum -> ScriptContext -> Bool
mkMintingPolicy datum ctx =
    traceIfFalse "Owner signature missing for minting" (txSignedBy info (ownerPkh datum)) &&
    traceIfFalse "Amount out of range" (validateAmount (totalShares datum))
  where
    info = scriptContextTxInfo ctx

policy :: PropertyDatum -> MintingPolicy
policy datum = mkMintingPolicyScript 
    ($$(PlutusTx.compile [|| mkMintingPolicy ||]) `PlutusTx.applyCode` PlutusTx.liftCode datum)