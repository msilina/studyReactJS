import React, { Component } from 'react';
import { Skeleton } from '@material-ui/lab';

const withLoadingDelay = (WrappedComponent, height) => {
    class Loading extends Component {
        constructor(props) {
            super(props);

            this.state = {
                loading: true
            }
        }

        componentDidMount() {        
            setTimeout(() => {
                this.setState({ loading: false })
            }, 2000);
        };

        render() {
            return (
                <div>
                    { !this.state.loading ?
                        <WrappedComponent {...this.props} /> :
                        <Skeleton
                            animation="wave"
                            height= { height }
                        />
                    }
                </div>
            )
        }
    }
    return Loading;
}

export default withLoadingDelay;
