import React from 'react'
import { Grid } from '@material-ui/core'

import { SearchBar, VideoDetails, VideosList } from './components'

import youtube from './api'

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount () {
    this.handleSubmit('Top music')
  }

  handleSubmit = async searchTerm => {
    const { data } = await youtube.get('search', {
      params: {
        maxResults: 5,
        part: 'snippet',
        key: process.env.REACT_APP_API_KEY,
        q: searchTerm
      }
    })
    if (data) {
      this.setState({ videos: data.items, selectedVideo: data.items[0] })
    }
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video })
  }

  render () {
    const { videos, selectedVideo } = this.state
    return (
      <Grid container spacing={10} justify='center'>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetails video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideosList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default App
