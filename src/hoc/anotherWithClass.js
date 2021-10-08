import React, {Component} from 'react';
// const anotherWithClass = (WrappedComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedComponent {...props}/>
//         </div>
//     )
// }

const anotherWithClass = (WrappedComponent, className) => {
    return class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrappedComponent {...this.props}/>
                </div>
            )
        }
    }
}
export default anotherWithClass;

//this function is not a functional component, it is a normal JS function which
//expects 2 args which then returns a function which qualifies as functional component