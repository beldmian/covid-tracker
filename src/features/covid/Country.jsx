import React from 'react'
import styles from './covid.module.sass'

export function Country({ item }) {
  return (
    <div>
      <div className={ styles.country }>
        <h2 className={ item.NewConfirmed > item.NewRecovered ? styles.red : styles.green }>{item.Country || 'World'}</h2>
        <div className={ styles.country_body}>
          <li>TotalConfirmed: { item.TotalConfirmed } (+{item.NewConfirmed})</li>
          <li>TotalDeaths: { item.TotalDeaths } (+{item.NewDeaths})</li>
          <li>TotalRecovered: { item.TotalRecovered } (+{item.NewRecovered})</li>
        </div>
      </div>
    </div>
  )
}
