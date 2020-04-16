import React from 'react'
import { Paper, Grid, Typography } from '@material-ui/core'
import cx from 'classnames'
import ReactHtmlParser from 'react-html-parser'

import styles from './VideoItem.module.css'

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper
        className={cx(styles.videoSnippet)}
        onClick={() => onVideoSelect(video)}
      >
        <img
          className={cx(styles.videoImage)}
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
        <Typography variant='subtitle1' className={cx(styles.videoTitle)}>
          {' '}
          <b>{ReactHtmlParser(video.snippet.title)}</b>
        </Typography>
      </Paper>
    </Grid>
  )
}

export default VideoItem
