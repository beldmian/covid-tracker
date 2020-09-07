import React, {useEffect} from 'react'
import { fetchCovid, selectCovid } from './covidSlice'
import { useSelector, useDispatch } from 'react-redux';
import { Country } from './Country'
import styles from './covid.module.sass'


export function CountryList() {
  const covidData = useSelector(selectCovid)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCovid())
  }, [dispatch])
  return (
    <div>
      <div className={ styles.container }>
        <h1>COVID-19 Tracker <span style={{ 'float': 'right' }}>{new Date().toLocaleDateString("ru-RU")}</span></h1>
        <div className={ styles.container_grid }>
          {covidData.Global === undefined ? '' : <Country item={covidData.Global} />}
          {covidData.Countries === undefined ? 'Loading' : covidData.Countries.map(item => (<Country item={item} />))}
        </div>
      </div>
    </div>
  )
}
