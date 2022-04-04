import { store } from "utils/test-utils";
import '@testing-library/jest-dom'

describe('notes slice test', () => {
  test('should return inital state', () => {
    expect(store.getState().notes.currentNote).toBe(undefined)
    expect(store.getState().notes.notes).toEqual([])
    expect(store.getState().notes.loading).toBe(false)
  })
})