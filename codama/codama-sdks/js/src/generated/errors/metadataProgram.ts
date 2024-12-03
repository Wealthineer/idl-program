/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  isProgramError,
  type Address,
  type SOLANA_ERROR__INSTRUCTION_ERROR__CUSTOM,
  type SolanaError,
} from '@solana/web3.js';
import { METADATA_PROGRAM_PROGRAM_ADDRESS } from '../programs';

/** WrongAuthority: Only the program upgrade authority can initialize the IDL account */
export const METADATA_PROGRAM_ERROR__WRONG_AUTHORITY = 0x1770; // 6000
/** NotExecutable: The program account is not executable */
export const METADATA_PROGRAM_ERROR__NOT_EXECUTABLE = 0x1771; // 6001
/** NotAProgram: The program account is not a program. Not owned by the BPF loader */
export const METADATA_PROGRAM_ERROR__NOT_A_PROGRAM = 0x1772; // 6002
/** ShouldBeProgramAccount: The program account should not be a program data account */
export const METADATA_PROGRAM_ERROR__SHOULD_BE_PROGRAM_ACCOUNT = 0x1773; // 6003

export type MetadataProgramError =
  | typeof METADATA_PROGRAM_ERROR__NOT_A_PROGRAM
  | typeof METADATA_PROGRAM_ERROR__NOT_EXECUTABLE
  | typeof METADATA_PROGRAM_ERROR__SHOULD_BE_PROGRAM_ACCOUNT
  | typeof METADATA_PROGRAM_ERROR__WRONG_AUTHORITY;

let metadataProgramErrorMessages:
  | Record<MetadataProgramError, string>
  | undefined;
if (process.env.NODE_ENV !== 'production') {
  metadataProgramErrorMessages = {
    [METADATA_PROGRAM_ERROR__NOT_A_PROGRAM]: `The program account is not a program. Not owned by the BPF loader`,
    [METADATA_PROGRAM_ERROR__NOT_EXECUTABLE]: `The program account is not executable`,
    [METADATA_PROGRAM_ERROR__SHOULD_BE_PROGRAM_ACCOUNT]: `The program account should not be a program data account`,
    [METADATA_PROGRAM_ERROR__WRONG_AUTHORITY]: `Only the program upgrade authority can initialize the IDL account`,
  };
}

export function getMetadataProgramErrorMessage(
  code: MetadataProgramError
): string {
  if (process.env.NODE_ENV !== 'production') {
    return (
      metadataProgramErrorMessages as Record<MetadataProgramError, string>
    )[code];
  }

  return 'Error message not available in production bundles.';
}

export function isMetadataProgramError<
  TProgramErrorCode extends MetadataProgramError,
>(
  error: unknown,
  transactionMessage: {
    instructions: Record<number, { programAddress: Address }>;
  },
  code?: TProgramErrorCode
): error is SolanaError<typeof SOLANA_ERROR__INSTRUCTION_ERROR__CUSTOM> &
  Readonly<{ context: Readonly<{ code: TProgramErrorCode }> }> {
  return isProgramError<TProgramErrorCode>(
    error,
    transactionMessage,
    METADATA_PROGRAM_PROGRAM_ADDRESS,
    code
  );
}