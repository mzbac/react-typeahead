import React from 'react';
import Immutable from 'immutable';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group';
export class Typeahead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.input = '';
        this.state.select = '';
        this.state.selected = false;
    }

    componentWillMount() {
        this.state.source = Immutable.fromJS(this.props.source);
    }

    render() {
        if (this.state.source && this.state.input && !this.state.selected)
            var options = this.state.source.filter((x) => {
                return (x.get(this.props.displayItemName).toUpperCase().indexOf(this.state.input.toUpperCase()) !== -1)
            }).map((value)=> {
                return <a className="list-group-item"
                          onClick={this.select.bind(this,value)}>{value.get(this.props.displayItemName)}</a>
            })
        return (<div>
            <div className="form-group" style={{marginBottom:0}}>
                <label>{this.props.inputLabelName}</label>
                <input type="text" className="form-control"
                       value={this.state.input}
                       placeholder={this.props.inputPlaceHolder}
                       onChange={this.onChange.bind(this)}
                       onBlur={this.onBlur.bind(this)}
                />
            </div>
            <div className="list-group " style={{maxHeight: this.props.maxHeight,
                                            width:'100%',
                                            overflowY:'auto',
                                            overflowX:'hidden',
                                            position:'absolute',
                                            zIndex: '1'}}>
                <ReactCSSTransitionGroup transitionName="fadeIn" transitionEnterTimeout={500}
                                         transitionLeaveTimeout={300}>
                    {options}
                </ReactCSSTransitionGroup>
            </div>

        </div>);

    }

    onChange(event) {
        this.setState({input: event.target.value, selected: false});
    }

    onBlur(event) {

    }

    select(value) {
        this.setState({
            input: value.get(this.props.displayItemName),
            select: value.get(this.props.displayItemName),
            selected: true
        });
        this.props.selectedValue(value);
    }
}