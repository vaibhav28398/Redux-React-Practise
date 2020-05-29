import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class Header extends Component{

    state={
        nums:[
            {id:'a'},
            {id:'b'},
            {id:'c'}
        ]
    }
    render(){
        return(
            <div>
                <Link to='/component1' >
                    Component1
                </Link>
                <Link to='/component2' >
                    Component2
                </Link>
                <Link to='/component3' >
                    Component3
                </Link>
                {this.state.nums.map(num=>
                    <Link key={num.id} to={{pathname:'/component/'+num.id}}>Component {num.id}</Link>
                )}
            </div>

        )
    }
}
export default Header;