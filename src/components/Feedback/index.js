import {Component} from 'react'
import './index.css'

class Feedback extends Component{
    state = {isEmojiClicked:true}
    setEmojiClicked =()=>{
        this.setState(prevState => ({isEmojiClicked: false}))
    }
    renderEmojiContainer = () =>{
        const {feedbackData} = this.props
        const {emojis} = feedbackData
        return(
            <div>
                <h1 className='heading1'>How are you satisfied with our customer support?</h1>
                <ul className='emojiContainer'>
                    {emojis.map(eachEmoji => (
                        <li key = {eachEmoji.id} onClick={this.setEmojiClicked} className='emojiContainer2'>
                            <div>
                                <img src ={eachEmoji.imageUrl} className='img1' alt={eachEmoji.name}/>
                                <p className='para'>{eachEmoji.name}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    renderSucessContainer = () =>{
        const {feedbackData} = this.props
        const {loveEmojiUrl} = feedbackData
        return(
            <div className='sucessContainer'>
                <img src={loveEmojiUrl} className='img2' alt='like'/>
                <h1>Thank you for your feedback</h1>
            </div>
        )
    }

    render(){
        const {isEmojiClicked} = this.state
        return(
            <div className='main-container'>
                <div className='sub-container'>
                    {isEmojiClicked ? this.renderEmojiContainer() : this.renderSucessContainer()}
                </div>
            </div>
        )
    }
}

export default Feedback