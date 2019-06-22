import React, {Component} from 'react';

class Four0Four extends Component {

    componentDidMount(){
        if(localStorage.getItem('currState') === null || this.props.history.location.search === "?rdr=true"){
            localStorage.setItem('currState',this.props.history.location.pathname);
        }else {
            this.props.history.push(localStorage.getItem('currState'));
        }
    }

    render() {
        return(
           <h3>error</h3>
        )
    }
}
export default Four0Four;
