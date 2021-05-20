import {
    EMPTY,
    DONE,
    RED_COLOR,
    GRAY_COLOR,
    WHITE_COLOR,
    LIGHT_GRAY_COLOR,
    BLACK_COLOR
} from '../CheckoutProgressBar/CheckoutProgressBar.config'
import '../CheckoutProgressBubble/CheckoutProgressBubble.scss'
const CheckoutProgressBubble = ({ width, stage, title, index }) => {
    const styleBubble = {
        width: `${width}px`,
        height: `${width}px`,
    }
    const styleBubbleCirle = {
        backgroundColor: stage !== EMPTY ? RED_COLOR : LIGHT_GRAY_COLOR,
        color: stage !== EMPTY ? WHITE_COLOR : GRAY_COLOR,
        width: `${width - 10}px`,
        height: `${width - 10}px`,
        margin: '5px 0 0 5px',
    }
    const styleBubbleTitle = {
        color: stage !== EMPTY ? BLACK_COLOR : GRAY_COLOR,
    }
    const sign = stage === DONE ? "✓" : index
    return (
        <div className="bubble" style={styleBubble}>
            <div className="bubble__circle"
                style={styleBubbleCirle}>{sign}</div>
            <div className="bubble__title" style={styleBubbleTitle}>{title}</div>
        </div>
    )
}
export default CheckoutProgressBubble