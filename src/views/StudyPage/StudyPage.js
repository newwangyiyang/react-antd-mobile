import React, { Component } from 'react';
import styles from './StudyPage.css';
import CSSModules from 'react-css-modules';

//自定义组件
// class Title extends Component {
//     render () {
//         return (
//             <div>
//                 <h1>title</h1>
//             </div>
//         )
//     }
// }

class StudyPage extends Component {
    //条件判断
    // render() {
    //     const flag = 0;
    //     return (
    //         <div styleName="StudyPage">
    //             <h1>React 王一扬 
    //                 {flag 
    //                 ? 
    //                 <b>爱</b> 
    //                 : 
    //                 <i>no</i>}
    //             </h1>
    //         </div>
    //     )
    // }
    //条件判断02
    // render() {
    //     let num = 1;
    //     return (
    //         <div styleName='StudyPage'>
    //             {
    //                 num === 1? 
    //                 <h1>世界</h1> : 
    //                 null 
    //             }
    //             {
    //                 num === 2 ?
    //                 <h2>美好</h2> :
    //                 null
    //             }
    //             {
    //                 !num ? 
    //                 <h3>love</h3> :
    //                 null
    //             }
    //         </div>
    //     )
    // }
    //元素变量
    // render() {
    //     const h1 = <h1>helloworld</h1>
    //     return (
    //         <div styleName='StudyPage'>
    //             <Title />
    //             <Title />
    //             <Title />
    //             <Title />
    //         </div>
    //     )
    // }
    // renderContent(param) {
    //     const h1 = <h1>世界</h1>;
    //     return (
    //         <div>
    //             <h1>{param}</h1>
    //         </div>
    //     )
    // }

    //render联系 01
    render() {
        const n = 1;

        const title = <h1 className='title'>ScriptOJ</h1>
        const page = <div className='content'>{title}</div>
        return (
            <div>
                {n > 0 ? 
                    <span>有({n})条未读消息</span> :
                    <span>没有未读消息</span>
                }
                {page} 
            </div>
        )
    }
}

export default CSSModules(StudyPage, styles);