{-# LANGUAGE NoImplicitPrelude   #-}

module Property.Core where

import           PlutusTx.Prelude
import           Property.Types
import           Property.Minting
import           Property.Market

-- | Main entry point for gathering on-chain logic
compileAll :: PropertyDatum -> (MintingPolicy, Validator)
compileAll d = (policy d, validator d)