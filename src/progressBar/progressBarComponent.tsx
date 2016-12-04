import * as React from 'react';

interface Props {
    current: number;
    max: number;
    min: number;
}

export class ProgressBarComponent extends React.Component<Props, {}> {

    constructor(props : Props){
        super(props);
    }

    public render() {
        const calculateWidth = function(props: Props){
                return ((props.current - props.min) * 100 / (props.max - props.min)) + "%"; 
        }

        return (
            <div className="progress progress-transition" >
                <div className="progress-bar active" role="progressbar" aria-valuenow={this.props.current}
                    aria-valuemin={this.props.min} aria-valuemax={this.props.max} style={{ width: calculateWidth(this.props) }}>
                </div>
            </div>
        )
    }
};