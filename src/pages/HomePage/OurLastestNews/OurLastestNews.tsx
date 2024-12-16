import React from 'react'
import classes from "./OurLastestNews.module.scss"

const OurLastestNews = () => {
  return (
    <div className={classes['our-latest-news-container']}>
        <div className={classes['heading']}>OUR LATEST NEWS</div>
        <div className={classes["underline-container"]}>
        <div className={classes["underline"]}></div>
      </div>

        <div className={classes['our-latest-news-body']}>

<div className={classes['our-latest-news-card']}>
    <div className={classes['our-latest-news-image']}></div>
    <div className={classes['']}></div>
</div>
<div className={classes['our-latest-news-card']}>
    <div className={classes['our-latest-news-image']}></div>
</div>
<div className={classes['our-latest-news-card']}>
    <div className={classes['our-latest-news-image']}></div>
</div>
        </div>
    </div>
  )
}

export default OurLastestNews