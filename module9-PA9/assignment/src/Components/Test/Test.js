import React, { Component } from 'react'

class Test extends Component {
state = {
    title:'',
    body:''
};

    componentDidMount(){
        fetch
        ('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => this.setState({
            title: data.title,
            body: data.body
        }))
    }
    // componentWillMount(){
    //     console.log("ComponentWillMount....")
    // }
    // componentWillRecieveProps(nextProps, nextState){
    //     console.log("ComponentWillRecieveProps....")
    // }
    // static getSerivedStateFromProps(nextProps, prevState){
    //     console.log("ComponentWillRecieveProps....")
    //     return {
    //         test: 'something'
    //     }
    // }
    // getSnapshotBeforeUpdate(prevProps, prevState){
    //     console.log('getSnapshotBeforeUpdate...');
    // }
    render() {
        const {title,body} = this.state
        return (
            <div>
                <h1>{ title }</h1>
        <p>{ body }</p>
            </div>
        )
    }
}
export default Test;
