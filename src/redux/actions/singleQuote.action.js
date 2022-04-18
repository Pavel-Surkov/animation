import { SINGLE_QUOTE_DATA } from '../constant/singleQuote.constant'

export const singleQuoteData = (quote) => {
  return {
    type: SINGLE_QUOTE_DATA,
    quote,
  }
}
