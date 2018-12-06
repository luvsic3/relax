import { createStore } from './stamen'

const { useStore, dispatch, query } = createStore({
  state: {
    count: 10,
    name: 'Counter',
  },
  reducers: {
    increment(state, payload: number = 1) {
      state.count += payload
    },
    decrement(state) {
      state.count--
    },
  },
  effects: {
    async asyncIncrement() {
      await sleep(1000)
      dispatch('increment')
    },
    async asyncDecrement() {
      await sleep(1000)
      dispatch('decrement', 1)
    },
  },
})

function sleep(time: number) {
  return new Promise(resove => {
    setTimeout(() => {
      resove()
    }, time)
  })
}

export default { useStore, dispatch, query }
export { useStore, dispatch, query }