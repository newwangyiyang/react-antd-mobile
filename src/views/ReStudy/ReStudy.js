import React, { Component } from 'react'
import CSSModules from 'react-css-modules';
import styles from './ReStudy.css';

// class Title extends Component {
//     static defaultProps = {
//         name: '美丽001'
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.name}</h1>
//             </div>
//         )
//     }
// }

// const Title = props => {
//     return (
//         <div>
//             <h1>{props.name}</h1>
//         </div>
//     )
// }

// class ReStudy extends Component {
//   render() {
//     const num = 0;
//     const h1 = <h1>时间...</h1>
//     return (
//       <div styleName="ReStudy">
//         {num === 1 ? 
//             h1 : 
//             null
//         }
//         <h1 onClick={e => this.handlerClick('1', e)}>reStudyPage</h1>
//         <Title />
//       </div>
//     )
//   }
//   handlerClick(a, e) {
//     console.log(this);
//     console.log(a);
//     console.log(e.target.innerHTML);
// }
// }
// class ReStudy extends Component {
//     constructor() {
//         super();
//         this.state = {isLiked: true};
//     }
//     render() {
//         return (
//             <div>
//                 <h1 onClick={() => this.changeIsLiked()}>{this.state.isLiked ? '已收藏' : '未收藏'}</h1>
//             </div>
//         )
//     }

//     changeIsLiked() {
//         // this.setState({
//         //     isLiked: !this.state.isLiked
//         // });
//         // console.log(this.state.isLiked);

//         this.setState(prvState => {
//             return {isLiked : !prvState.isLiked}
//         })
//         this.setState(prevState => {
//             console.log(prevState.isLiked);
//         })
//     }

//     run() {
//         console.log('run');
//     }

//     bark() {
//         console.log('bark');
//     }
// }



// class ReStudy extends Component {
//     constructor() {
//         super();
//         this.state = {
//             isRunning: false,
//             isBarking: false,
//         };
//     }
//     render() {
//         const arr = [
//             {
//                 name: '张三',
//                 num: 1
//             },
//             {
//                 name: '李四',
//             },
//             {
//                 name: '王五',
//             }
//         ];
//         return (
//             <div>
//                 <h1 onClick={e => {
//                     this.run();
//                     this.touchDog();
//                 }}>dog</h1>

//                 <h2>{this.state.isRunning + ''}</h2>

//                 <Title name='王一扬' />

//                 <div>
//                     {arr.map((v, i) => {
//                         return (
//                             <div key={i}>
//                                 {v.num ? <span>{v.num}</span> : null}
//                                 {v.name}
//                             </div>
//                         )
//                     })}
//                 </div>
//             </div>
//         )
//     }
//     run() {
//         console.log('run');
//     }
//     touchDog() {
//         this.setState(prevStata => {
//             return {
//                 isRunning: true,
//                 isBarking: true,
//             }
//         });

//         setTimeout(() => {
//             this.setState(prevState => {
//                 return {
//                     isRunning: false,
//                     isBarking: false,
//                 }
//             })
//         }, 500);
//     }
// }


class Lesson extends Component {
    static defaultProps = {

    }
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div onClick={e => this.clickHandler(this.props.item.title, this.props.item.description, this.props.index, e)}>
                <h1>{this.props.item.title}</h1>
                <p>{this.props.item.description}</p>
            </div>
        )
    }
    clickHandler(title, description, i, e) {
        console.log(`${title} + ${description} + ${i}`);
    }
}

const Lessons = props => {
    return (
        <div>
            {props.data.map((v, i) => {
                return (
                    <Lesson item={v} key={i} index={i}  /> 
                )
            })}
        </div>
    )
}

class ReStudy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                { title: 'Lesson 1: title', description: 'Lesson 1: description' },
                { title: 'Lesson 2: title', description: 'Lesson 2: description' },
                { title: 'Lesson 3: title', description: 'Lesson 3: description' },
                { title: 'Lesson 4: title', description: 'Lesson 4: description' }
            ]
        };
    }
    render() {
        return (
            <div>
                <Lessons data={this.state.list}  />
            </div>
        )
    }
}






export default CSSModules(ReStudy, styles);
