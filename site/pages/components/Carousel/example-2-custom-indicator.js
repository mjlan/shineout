/**
 * cn - 自定义 Indicator
 *    -- 当 indicatorType 为函数时，可以自定义 Indicator
 * en - Custom Indicator
 *    -- Indicators can be customized when indicatorType is a function.
 */
import React from 'react'
import { Carousel } from 'shineout'
import classnames from 'classnames'
import './style-2-custom-indicator.less'

const duration = 2000
const containerStyle = {
  fontSize: 40,
  color: '#fff',
  display: 'flex',
  margin: 'auto',
}

const items = ['S', 'H', 'I', 'N', 'E']

function indicatorSwitch(current, moveTo) {
  return (
    <div className="indicator">
      {items.map((item, index) => {
        const isActive = current === index
        const itemClassname = classnames('indicator-item', isActive && 'active', index < current && 'beyond')
        const animationStyle = isActive ? { animation: `indicator-rise ${duration / 1000}s linear` } : {}
        return (
          <div key={item} onClick={() => moveTo(index)} className={itemClassname}>
            <span>{item}</span>
            <div className="indicator-progress">
              <div className="fg" style={animationStyle} />
              <div className="bg" />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function() {
  return (
    <Carousel indicatorType={indicatorSwitch} style={{ width: 500, height: 300 }} interval={duration}>
      {items.map(item => (
        <div key={item} style={{ background: '#2e97f1', display: 'flex' }}>
          <div style={containerStyle}>{item}</div>
        </div>
      ))}
    </Carousel>
  )
}