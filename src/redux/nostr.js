import { createSlice } from '@reduxjs/toolkit'
import {
  generatePrivateKey,
  relayInit, 
  getPublicKey,
  SimplePool,
  validateEvent,
  verifySignature,
  signEvent,
  getEventHash
} from 'nostr-tools'


const nostrInitial = {
    relayList: [
      'wss://nos.lol',
      'wss://relay.snort.social',
      'wss://relay.current.fyi',
      'wss://nostr.relayer.se',
    ],
    events: [],
    privateKey: "",
    publicKey: "",
};

export const nostrSlice = createSlice({
  name: 'nostr',
  initialState: nostrInitial,
  reducers: {
    setRelays: (state, action) => {
        console.log(`setRelays: ${action.payload}`)
        state.relayList = [...state.relayList, action.payload];
    },
    setPrivateKey: (state, action) => {
      console.log(`setPrivateKey: ${action.payload}`);
      state.privateKey = action.payload;
      state.publicKey = getPublicKey(action.payload);
    },
    setEvents: (state, action) => {
      console.log("setEvents: payload " + action.payload)
      state.events = action.payload;
    },
  },
})

export const { setRelays, setPrivateKey, setEvents } = nostrSlice.actions

export default nostrSlice.reducer