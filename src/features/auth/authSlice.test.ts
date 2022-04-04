import { store } from "utils/test-utils";

describe('auth info test', () => {
  test('should get initial state', () => {
    expect(store.getState().auth.user).toBe(undefined)
    expect(store.getState().auth.logging).toBe(false)
  })
})