import renderer, { ReactTestRendererJSON, ReactTestRendererNode } from 'react-test-renderer';
import Item from '../todo/Item';
import { todoElement } from '../utils/typeUtils';

const element: todoElement ={"name":"todoItem","isDone":false};
const check = ()=>{};

it("Snapshot: render Item component", ()=>{
    const tree = renderer.create(
        <Item onCheck={check} index={1} element={element}/>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})

it("Item text is present in screen", ()=>{
    const tree = renderer.create(
        <Item onCheck={jest.fn()} index={1} element={element}/>
    ).toJSON() as ReactTestRendererJSON;
    
    expect(tree.children![0]).toBe("todoItem")
})