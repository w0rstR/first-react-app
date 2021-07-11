import React, {Component} from 'react';

import './post-list-item.css'

export default class PostListItem extends Component {

    render() {
        const {label, onDelete, onToggleImportant, onToggleLike, like, important} = this.props;
        let classNames = 'app-list-item d-flex justify-content-between';

        if (important) {
            classNames +=' important';
        }

        if (like) {
            classNames +=' like';
        }

        return (
            <div className={classNames}>
                <span 
                className="app-list-item-label"
                onClick={onToggleLike}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button 
                    type="button" 
                    className="btn-star btn-sm"
                    onClick={onToggleImportant}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button 
                    type="button" 
                    className="btn-trash btn-sm"
                    onClick={onDelete}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
        }
}

// import React,{Component} from 'react'
// import './post-list-item.css';

// export default class PostListItem extends Component{
//     // constructor(props){
//     //     super(props)
//     //     this.state={
//     //         important:false,
//     //         like:false
//     //     }
//     //     this.onImportant=this.onImportant.bind(this)
//     //     this.onLike=this.onLike.bind(this)
//     // }

//     // onImportant(){
//     //     this.setState(({important})=>({
//     //         important:!important
//     //     }))
//     // }
//     // onLike(){
//     //     this.setState(({like})=>({
//     //         like:!like
//     //     }))
//     // }
//     render(){
//         const {label}=this.props
//         const {onDelete} = this.props
//         const {onToggleImportant,onToggleLike}=this.props
//         const {important,like}=this.props

//         let classNames="app-list-item d-flex justify-content-between"
    
//         if(important){
//             classNames +=' important'
//         }
//         if(like){
//             classNames+=' like'
//         }

//         return(
//             <li className={classNames}>
//                 <span onClick={onToggleLike} className="app-list-item-label">
//                     {label}
//                 </span>
//                 <div className="d-flex justify-content-center align-items-center">
//                     <button type="button" className="btn-star btn-sm"onClick={onToggleImportant}>
//                         <i className="fa fa-star"></i>
//                     </button>
//                     <button onClick={onDelete} type="button" className="btn-trash btn-sm">
//                         <i className="fa fa-trash-o"></i>
//                     </button>
//                     <i className="fa fa-heart"></i>
//                 </div>
//             </li>
//         )
//     }

    
// }
