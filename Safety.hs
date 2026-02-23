{-# LANGUAGE NoImplicitPrelude   #-}

module Property.Safety where

import           Plutus.V2.Ledger.Api
import           PlutusTx.Prelude

{-# INLINABLE validateAmount #-}
validateAmount :: Integer -> Bool
validateAmount amt = amt > 0 && amt <= 1000000000

{-# INLINABLE isMainnetReady #-}
isMainnetReady :: Bool
isMainnetReady = True