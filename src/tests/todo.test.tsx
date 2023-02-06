/* eslint-disable testing-library/await-async-query */
import renderer, { ReactTestInstance, act }  from 'react-test-renderer';
import Todo from '../todo/Todo';

describe("Global application",()=>{
    const tree = renderer.create(<Todo/>);
    const instance = tree.root as ReactTestInstance;

    it("Snapshot: render todo component", ()=>{
        expect(tree).toMatchSnapshot()
    })
    it("adding new todo and switch to Done", ()=>{

        const input = instance.findByProps({placeholder: "new todo name"});
        
        act(()=>{
            //Enter the todo name
            input.props.onChange({target: {value: "test"}})
        })
        act(()=>{
            //Press "Enter" to add new todo
            input.props.onKeyDown({key:"Enter"})
        })

        const todoContainerInstance = instance.findByProps({className: "todo-element"});
        //The JSX content in Item component
        const todo = todoContainerInstance.findAllByProps({className:"item-container"})
        
        //The item component called in todo component <Item index=0 element={element} />
        const actualTodo = todoContainerInstance.props.children![0] as ReactTestInstance;
        
        //Only the todo name display in the screen
        const todoName = todo[0].children![0]

        const expectedTodo = {'name':'test','isDone':false}
        //New todo is realy added
        expect(JSON.stringify(actualTodo.props.element)).toBe(JSON.stringify(expectedTodo))
        expect(todoName).toBe("test")



        /** Swithed todo to done */
        const checkbox = todo[0].children![1] as ReactTestInstance;
        act(()=>{
            checkbox.props.onChange()
        })

        const doneContainerInstance = instance.findByProps({className: "done-element"});

        //The item component called in todo component <Item index=0 element={element} />
        const actualDone = doneContainerInstance.props.children![0] as ReactTestInstance;
        
        //The JSX content in Item component
        const done = doneContainerInstance.findAllByProps({className:"item-container"})
        //Only the todo name display in the screen
        const doneName = done[0].children![0]

        const expectedDone = {'name':'test','isDone':true}

        //Todo is realy swithed to done
        expect(JSON.stringify(actualDone.props.element)).toBe(JSON.stringify(expectedDone))
        expect(doneName).toBe("test")
       
    })
})
