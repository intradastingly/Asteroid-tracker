import React, { Component, CSSProperties, ErrorInfo } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface Props extends RouteComponentProps {}
interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    state: State = {
        hasError: false
    };

    static getDerivedStateFromError(): State {
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log({ error, errorInfo });
    }

    navigateBack = () => this.props.history.goBack();
    
    render() {
        if (this.state.hasError) {
            return (
                <div style={rootStyle}>
                    <p style={textStyle}>Tyvärr gick det inte ladda innehållet.</p>
                    <button onClick={this.navigateBack}>Prova gå tillbaka</button>
                </div>
            );
        }

        return this.props.children;
    }
}

const rootStyle: CSSProperties = {
    background: 'white',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

const textStyle: CSSProperties = {
    textAlign: 'center'
}

export default withRouter(ErrorBoundary);