import React from 'react';
import Immutable from 'immutable';
export class Typeahead extends React.Component {
    constructor(props) {
        super(props);
        this.state={};
        this.state.input='';
    }
    componentWillMount(){
        this.state.source=Immutable.fromJS(this.props.source);
    }
    render() {
        if (this.state.source&&this.state.input)
            var options = this.state.source.filter((x) =>{
             return (x.get(this.props.displayItemName).toUpperCase().indexOf(this.state.input.toUpperCase()) !==-1)
            }).map((value)=> {
                return <a className="list-group-item">{value.get(this.props.displayItemName)}</a>
            })
        return (<div>
            <div className="form-group" style={{marginBottom:0}}>
                <label>{this.props.inputLabelName}</label>
                <input type="text" className="form-control" placeholder={this.props.inputPlaceHolder} onChange={this.onChange.bind(this)}/>
            </div>
            <div className="list-group" style={{maxHeight: this.props.maxHeight,
                                            overflowY:'auto' }}>
                {options}
            </div>
        </div>);

    }
    onChange(event){
        this.setState({input:event.target.value});
    }
}