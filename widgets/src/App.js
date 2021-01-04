import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const options = [
    {
        label : 'The color Red',
        value : 'red'
    },

    {
        label : 'The Color Green',
        value : 'green'
    },
    {
        label : 'A Shade of Blue.',
        value : 'blue'
    }
]

const items =[
    {
        title: 'What is React?',
        content: 'React is a front end java srcipt framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React? ',
        content : 'You use React by creating components.'
    }
];

/*
export default () => {

    const [selected, setSelected] = useState(options[0]);
    const [showDropDown, setShowDropDown]  = useState(true);

    return (
        <div>
            <button onClick={()=> setShowDropDown(!showDropDown)}>Toogle Dropdown</button>
            {showDropDown?
            <Dropdown selected= {selected}
            onSelectedChange= {setSelected} 
            options={options}/>:null
            }
        </div>
    );
};
*/
export default () => {

    const [selected, setSelected] = useState(options[0]);
    const [showDropDown, setShowDropDown]  = useState(true)
    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items}/>
            </Route>
            <Route path="/list">
                <Search ></Search>
            </Route>
            <Route path="/dropdown">
            <button onClick={()=> setShowDropDown(!showDropDown)}>Toogle Dropdown</button>
            {showDropDown?
            <Dropdown selected= {selected}
            onSelectedChange= {setSelected} 
            options={options}/>:null
            }
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    )
};