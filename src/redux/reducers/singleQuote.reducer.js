import { SINGLE_QUOTE_DATA } from '../constant/singleQuote.constant'

const INITIAL_STATE = {
  quote: null,
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SINGLE_QUOTE_DATA:
      return {
        ...state,
        quote: action.quote,
      }

    default:
      return state
  }
}

export default reducer
