{-# LANGUAGE DataKinds           #-}
{-# LANGUAGE NoImplicitPrelude   #-}
{-# LANGUAGE TemplateHaskell     #-}
{-# LANGUAGE TypeApplications    #-}

module Property.Market where

import           Plutus.V2.Ledger.Api
import           Plutus.V2.Ledger.Contexts (valuePaidTo, scriptContextTxInfo)
import           PlutusTx.Prelude
import qualified PlutusTx
import           Property.Types

{-# INLINABLE mkMarketValidator #-}
mkMarketValidator :: PropertyDatum -> () -> ScriptContext -> Bool
mkMarketValidator datum _ ctx = 
    traceIfFalse "Insufficient payment to owner" (payment >= pricePerUnit datum)
  where
    info = scriptContextTxInfo ctx
    payment = getLovelace (fromValue (valuePaidTo info (ownerPkh datum)))

validator :: PropertyDatum -> Validator
validator datum = mkValidatorScript 
    ($$(PlutusTx.compile [|| mkMarketValidator ||]) `PlutusTx.applyCode` PlutusTx.liftCode datum)