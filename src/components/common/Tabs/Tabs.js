import React, { useState } from 'react'
import classes from './Tabs.module.scss'
import clsx from 'clsx'

function Tab(props) {
  const [visibleTab, setVisibleTab] = useState(props.data[0].id)

  const handleClick = (id) => {
    setVisibleTab(id)
  }
  const listTitles = props.data.map((item) => (
    <li
      onClick={() => {
        handleClick(item.id)
      }}
      className={
        visibleTab === item.id
          ? clsx(classes.tabTitle, classes.tabTitleActive)
          : classes.tabTtitle
      }
    >
      {item.tabTitle}
    </li>
  ))

  const listContent = props.data.map((item) => (
    <>
      {item.tabContentHeading !== '' ? (
        <h2 style={visibleTab === item.id ? {} : { display: 'none' }}>
          {item.tabContentHeading}
        </h2>
      ) : null}
      {item.itemContentSubheading !== '' ? (
        <h4 style={visibleTab === item.id ? {} : { display: 'none' }}>
          {item.tabContentSubheading}
        </h4>
      ) : null}
    </>
  ))

  return (
    <div className={classes.tabs}>
      <ul className={classes.tabsTitles}>{listTitles}</ul>
      <div className={classes.tabContent}>{listContent}</div>
    </div>
  )
}

export default Tab
