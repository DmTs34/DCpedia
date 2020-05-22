//import React from 'react';

//Pre-loader image
class ReactPreLoader extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return e(
            'div', {id:"pre-loader", style:"display:block"},
            e('p', null,"Hello World from react"),
            e('img',{src: "Images/preLoader.gif", width:'100px'})
        )
    }
}

//Main window
class MainDiv extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return e(
            'div', {className:"test-class"}, 'You can start working now'
        )
    }
}
