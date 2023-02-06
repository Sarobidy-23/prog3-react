import renderer, { ReactTestInstance, ReactTestRendererJSON } from 'react-test-renderer';
import { act } from 'react-test-renderer';

import TodoInput from '../todo/TodoInput';

it("Snapshot: render TodoInput component", () => {
    const tree = renderer.create(
        <TodoInput insert={jest.fn}/>
    ).toJSON()
    expect(tree).toMatchSnapshot()
})

it("Verify input placeholder", () => {
    const tree = renderer.create(
        <TodoInput insert={jest.fn}/>
    ).toJSON() as ReactTestRendererJSON;
    expect(tree.props.placeholder).toBe("new todo name")
})

it("Verify onChange in the input", () => {
    const tree = renderer.create(<TodoInput insert={jest.fn()}/>);
    const instance = tree.root as ReactTestInstance;
    
    // eslint-disable-next-line testing-library/await-async-query
    let input = instance.findByProps({placeholder: "new todo name"});
    act(()=>{
        input.props.onChange({target: {value: "test"}})
    })

    expect(input.props.value).toBe("test")
})