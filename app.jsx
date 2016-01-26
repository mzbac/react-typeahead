import React from 'react';
import ReactDOM from 'react-dom';
import {Typeahead}  from './src/Typeahead.jsx';


ReactDOM.render(
    <Typeahead maxHeight="200"
               inputLabelName="typeahead"
               inputPlaceHolder="please enter!"
               source={
                        [{name:'Dapibus ac facilisis in'},
                        {name:'Morbi leo risus'},
                        {name:'Morbi leo risus'},
                        {name:'Morbi leo risus'},
                        {name:'Morbi leo risus'},
                        {name:'Morbi leo risus'},
                        {name:'Vestibulum at eros'}]}
               displayItemName="name"
               selectedValue={(value)=>{console.log('selected +'+value.get('name'))}}
    />,
    document.body
);