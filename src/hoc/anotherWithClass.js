import React, {Component} from 'react';
// const anotherWithClass = (WrappedComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedComponent {...props}/>
//         </div>
//     )
// }

const anotherWithClass = (WrappedComponent, className) => {
    const AnotherWithClass = class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrappedComponent ref={this.props.forwardedRef} {...this.props}/>
                </div>
            )
        }
    }
    return React.forwardRef((props, ref) => {
        return <AnotherWithClass {...props} forwardRef={ref} />
    })
}
export default anotherWithClass;

//this function is not a functional component, it is a normal JS function which
//expects 2 args which then returns a function which qualifies as functional component