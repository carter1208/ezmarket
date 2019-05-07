/**
 * Created by carter on 8/22/2017.
 */
import React, {Component, PropTypes} from 'react';
import Theme from "./Theme"
import Code from "./Code"
export default class Content extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }

    componentWillUnmount() {
    }
    render() {
        return (
            <div>
                {/*<Theme/>*/}
                <Code/>
            </div>
        )
    }
}