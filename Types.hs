{-# LANGUAGE DataKinds           #-}
{-# LANGUAGE DeriveAnyClass      #-}
{-# LANGUAGE DeriveGeneric       #-}
{-# LANGUAGE NoImplicitPrelude   #-}
{-# LANGUAGE TemplateHaskell     #-}

module Property.Types where

import           Plutus.V2.Ledger.Api
import           PlutusTx.Prelude
import qualified PlutusTx
import           GHC.Generics         (Generic)

data PropertyDatum = PropertyDatum
    { ownerPkh     :: PubKeyHash
    , totalShares  :: Integer
    , pricePerUnit :: Integer
    , propertyUid  :: BuiltinByteString
    } deriving (Show, Generic)

PlutusTx.makeIsDataIndexed ''PropertyDatum [('PropertyDatum, 0)]
PlutusTx.makeLift ''PropertyDatum