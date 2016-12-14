import * as React from 'react';

interface Props {
    current: number;
    max: number;
    min: number;
}

export const ProgressBarComponent = (props: Props) => {

    function calculateWidth(props: Props): string {
        return ((props.current - props.min) * 100 / (props.max - props.min)) + "%";
    }

    return (
        <progress min={props.min} max={props.max} value={props.current} />
    );
}