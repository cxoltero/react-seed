import * as React from 'react';

interface AboutPropsInterface {
}

interface AboutStateInterface {
}

export default class About extends React.Component<AboutPropsInterface, AboutStateInterface> {
  render() {
    return (
      <div className='about'>
        <h1>About React-Typescript Seed</h1>
      </div>
    )
  }
}