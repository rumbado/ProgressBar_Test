import * as React from 'react';

interface Props {
    currentValue: number;
    maxValue: number;
}

export const Html5Progressbar = (props: Props) => {
    return (
        <div>
            <div>
                <progress max={props.maxValue} value={props.currentValue}></progress>
            </div>
            <text>
                {'<progress max={props.maxValue} value={props.currentValue}></progress>'}
            </text>
        </div>
    );
}

