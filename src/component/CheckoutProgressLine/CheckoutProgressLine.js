import './CheckoutProgressLine.scss'
import { LIGHT_GRAY_COLOR, RED_COLOR, ANIMATION_DURATION } from '../CheckoutProgressBar/CheckoutProgressBar.config'

const CheckoutProgressLine = ({ width, progress, bubbleWidth, position, transitionDelay='0s' }) => {
    let borderRadius
    switch (position) {
        case 'left': {
            borderRadius = '0 5px 5px 0'
            break
        }
        case 'right': {
            borderRadius = '5px 0 0 5px'
            break
        }
        default: {
            borderRadius = '5px'
        }
    }
    const outerLineStyle = {
        width: width,
        backgroundColor: LIGHT_GRAY_COLOR,
        marginTop: `${(bubbleWidth - 5) / 2}px`,
        borderRadius

    }
    const innerLineStyle = {
        width: progress ? "100%" : 0,
        backgroundColor: RED_COLOR,
        transition: `width ${ANIMATION_DURATION}`,
        borderRadius,
        transitionDelay: transitionDelay
    }
    return (
        <div className="outer-line" style={outerLineStyle}>
            <div className="inner-line" style={innerLineStyle}></div>
        </div>
    )
}
export default CheckoutProgressLine