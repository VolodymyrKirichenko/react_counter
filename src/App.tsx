import React from 'react';
import './App.scss';
import {
  Paper,
  Box,
  Button,
  ButtonGroup,
} from '@mui/material';

type State = {
  count: number,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    count: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      count: state.count + 100,
    }));
  };

  increase = () => {
    this.addOne();

    if (this.state.count % 5 === 0) {
      this.add100();
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div className="app">
        <Paper elevation={10}>
          <Box
            sx={{
              width: 300,
              height: 180,
              backgroundColor: 'lightgrey',
            }}
          >
            <div className="app__content">
              <h1 className="app__title">
                {`Count: ${count}`}
              </h1>

              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
              >
                <Button onClick={this.addOne}>add 1</Button>
                <Button onClick={this.add100}>add 100</Button>
                <Button onClick={this.increase}>Increase</Button>
              </ButtonGroup>
            </div>
          </Box>
        </Paper>
      </div>
    );
  }
}
