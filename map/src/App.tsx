import React from 'react';
import styled from 'styled-components';

import { Filter } from './data';

import Filters, { FilterMutator } from './components/filters';
import Map from './components/map';
import Results from './components/results';

interface Props {
  className?: string;
}

interface State {
  filter: Filter;
}

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      filter: {}
    };
  }

  private updateFilter = (mutator: FilterMutator) => {
    this.setState(state => ({filter: mutator(state.filter)}))
  }

  public render() {
    const {className} = this.props;
    const {filter} = this.state;
    return (
      <div className={className}>
        <header>
          <h1>Reach4Help</h1>
          <Filters filter={filter} updateFilter={this.updateFilter} />
        </header>
        <main>
          <Map filter={filter} />
          <Results />
        </main>
      </div>
    );
  }
}

export default styled(App)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;

  > header {
    > h1 {
      margin: 0;
      padding: 10px;
    }
  }
  > main {
    display: flex;
    flex-grow: 1;
  }
`;