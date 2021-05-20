import { PureComponent, Fragment } from 'react';
import CheckoutProgressLine from 'src/component/CheckoutProgressLine/CheckoutProgressLine'
import CheckoutProgressBubble from 'src/component/CheckoutProgressBubble/CheckoutProgressBubble'
import 'src/component/CheckoutProgressBar/CheckoutProgressBar.scss'
import {
    IN_PROGRESS,
    EMPTY,
    DONE,
    ANIMATION_DURATION
} from './CheckoutProgressBar.config'

export default class CheckoutProgressBar extends PureComponent {
    bubbleWidth = 40
    sideLinesWidthPercent = 25
    render() {
        const { checkoutStep, steps } = this.props
        const lastStepIndex = steps.length - 1
        const currentStepIndex = steps.findIndex(item => item.name === checkoutStep)
        const lineWidth = `calc(${(100 - this.sideLinesWidthPercent * 2) / lastStepIndex}% - ${steps.length * this.bubbleWidth / lastStepIndex}px)`
        const lastLineProgress = checkoutStep===steps[lastStepIndex].name
        
        return (
            <div className="checkout-progress-bar">
                <CheckoutProgressLine bubbleWidth={this.bubbleWidth}
                    width={`${this.sideLinesWidthPercent}%`} progress={true} position={'left'} />
                {steps.map(({ title }, index) => {
                    let stage
                    let progress
                    if (index < currentStepIndex) {
                        stage = DONE
                        progress = true
                    }
                    else if (index === currentStepIndex) {
                        stage = IN_PROGRESS
                        progress = false
                    }
                    else {
                        stage = EMPTY
                        progress = false
                    }
                    let lineElement = index === lastStepIndex ? null : <CheckoutProgressLine bubbleWidth={this.bubbleWidth}
                        progress={progress} width={lineWidth} />
                    return (
                        <Fragment>
                            <CheckoutProgressBubble stage={stage} title={title} width={this.bubbleWidth} index={index + 1} />
                            {lineElement}
                        </Fragment>
                    )

                })}

                <CheckoutProgressLine width={`${this.sideLinesWidthPercent}%`}
                    position={'right'} transitionDelay={ANIMATION_DURATION}
                    progress={lastLineProgress} bubbleWidth={this.bubbleWidth} />
            </div>
        )
    }
}