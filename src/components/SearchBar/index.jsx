import React, { Component } from 'react'
import { Paper, TextField } from '@material-ui/core'
import cx from 'classnames'

import styles from './SearchBar.module.css'

class SearchBar extends Component {
  state = {
    searchTerm: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    const { searchTerm } = this.state
    const { onFormSubmit } = this.props

    onFormSubmit(searchTerm)
  }

  handleChange = e => {
    this.setState({ searchTerm: e.target.value })
  }

  render () {
    const { searchTerm } = this.state
    return (
      <Paper elevation={6} className={cx(styles.pd25)}>
        <form onSubmit={e => this.handleSubmit(e)}>
          <TextField
            onChange={this.handleChange}
            fullWidth
            label='Search...'
            value={searchTerm}
          ></TextField>
        </form>
      </Paper>
    )
  }
}

export default SearchBar
