import * as React from 'react';
import {Html5Progressbar} from './html5Progressbar';
import {BootstrapProgressbar} from './bootstrapProgressbar';

interface Props {

}

interface State {
  currentValue : number;
  maxValue : number;
}

export class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);


    const defaultUserName = "defaultUserName";
    this.state = {currentValue: 0, maxValue: 10};

  }

  updateProgress(){
    if (this.state.currentValue == this.state.maxValue){
      this.setState({ currentValue: 0, maxValue: this.state.maxValue });
    }
    else{
      this.setState({ currentValue: this.state.currentValue+1, maxValue: this.state.maxValue });
    }
  }

  public render() {
      return (
       <div>
        <h1> Html 5 </h1>
        <Html5Progressbar currentValue={this.state.currentValue} maxValue={this.state.maxValue}  />
        <h1> Bootstrap </h1>
        <BootstrapProgressbar currentValue={this.state.currentValue} maxValue={this.state.maxValue}  />
      </div>
      );
 }

 public componentDidMount(){
    setInterval(this.updateProgress.bind(this), 500);
 }
}
