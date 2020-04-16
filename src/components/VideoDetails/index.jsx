import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import cx from 'classnames'
import ReactHtmlParser from 'react-html-parser'

import styles from './VideoDetails.module.css'

const VideoDetails = ({ video }) => {
  if (!video) return <div>Loading...</div>
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  return (
    <>
      <Paper className={cx(styles.h70)} elevation={6}>
        <iframe
          frameBorder={0}
          className={cx(styles.iframe)}
          title={'Video Player'}
          src={videoSrc}
        ></iframe>
      </Paper>
      <Paper className={cx(styles.pd15)} elevation={6}>
        <Typography variant='h4'>
          {ReactHtmlParser(video.snippet.title)} -{' '}
          {ReactHtmlParser(video.snippet.channelTitle)}
        </Typography>
        <Typography variant='subtitle1'>
          {ReactHtmlParser(video.snippet.channelTitle)}
        </Typography>
        <Typography variant='subtitle2'>
          {ReactHtmlParser(video.snippet.description)}
        </Typography>
      </Paper>
    </>
  )
}

export default VideoDetails
