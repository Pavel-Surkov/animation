import React from 'react'
import classes from './Tabs.module.scss'
import clsx from 'clsx'

import Search from '../../../common/Search/Search'
import Emailcatcher from '../../../common/Emailcatcher/Emailcatcher'

function Tab(props) {
  const [visibleTab, setVisibleTab] = React.useState(props.data[0].id)
  const [currentTab, setCurrentTab] = React.useState(props.data[0].tabContent)
  const handleClick = (id, tabContent) => {
    setVisibleTab(id)
    setCurrentTab(tabContent)
  }
  const listTitles = props.data.map((item) => (
    <li
      onClick={() => {
        handleClick(item.id, item.tabContent)
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
      <h2 style={visibleTab === item.id ? {} : { display: 'none' }}>
        {item.tabContentHeading}
      </h2>
      <h4 style={visibleTab === item.id ? {} : { display: 'none' }}>
        {item.tabContentSubheading}
      </h4>
    </>
  ))

  return (
    <div className={classes.tabs}>
      <ul className={classes.tabsTitles}>{listTitles}</ul>
      <div className={classes.tabContent}>{listContent}</div>
      {currentTab === 'supplier' ? <Emailcatcher /> : <Search />}
    </div>
  )
}

export default Tab
