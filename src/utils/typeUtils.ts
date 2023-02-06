export type todoElement = {
    name: string,
    isDone: boolean
  }

export type itemPropType = {
    element: todoElement,
    onCheck: (index: number)=>void,
    index: number
}