import React, { Component } from 'react';

export class Search extends Component {
  state = {
    test: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} action='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.test}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value={'Search'}
            className='btn btn-block btn-dark'
          />
        </form>
      </div>
    );
  }
}

export default Search;
