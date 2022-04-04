import { toggleModal } from './uiSlice'
import { store } from 'utils/test-utils'


describe('modal reducers test', () => {
  test('should return initial state', () => {
    expect(store.getState().ui.showModal).toBe(false)
  })

  test('should dispatch action', () => {
    store.dispatch(toggleModal())
    expect(store.getState().ui.showModal).toBe(true)

    store.dispatch(toggleModal())
    expect(store.getState().ui.showModal).toBe(false)

  })
})