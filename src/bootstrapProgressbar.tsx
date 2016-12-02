import * as React from 'react';

interface Props {
    currentValue: number;
    maxValue: number;
}

function calculatePercentage(currentValue: number, maxValue: number): string {
    return (currentValue * 100 / maxValue) + "%";
}

export const BootstrapProgressbar = (props: Props) => {
    return (
        <div>
            <div className="progress ">
                <div className="progress-bar active progress-bar-stripes" role="progressbar" aria-valuenow={props.currentValue}
                    aria-valuemin="0" aria-valuemax={props.maxValue} style={{ width: calculatePercentage(props.currentValue, props.maxValue) }}>
                </div>
            </div>
            <text>
                {`<javascript>`}
                <br/>
                {`function calculatePercentage(currentValue: number, maxValue: number): string {
                        return (currentValue * 100 / maxVale) + "%";
                    }`}
                <br/>
                {`</javascript>`}
                <br/>
                {`<div className="progress ">`}
                <br/>
                {`<div className="progress-bar active progress-bar-stripes" role="progressbar" aria-valuenow={props.currentValue}`}
                <br/>
                {`aria-valuemin="0" aria-valuemax={props.maxValue} style={{width:calculatePercentage(props.currentValue, props.maxValue)}}>`}
                <br/>
                {`</div>`}
                <br/>
                {`</div>`}
            </text>
        </div>
    );
}