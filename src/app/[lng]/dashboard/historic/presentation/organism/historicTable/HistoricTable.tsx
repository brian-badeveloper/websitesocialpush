import { useContext, useEffect, useState } from 'react'

import './historicTable.css'

import HistoricTableItem from '../historicTableItem/HistoricTableItem'
import { SiteContext } from '@/context/SiteContext'
import { Product } from '@/context/cartReducerProps'
import { HistoricTableProps } from './HistoricTableProps'
import getLanguage from '@/models/i18n'

const HistoricTable = ({lng}: HistoricTableProps) => {

  const { getInitHistoric, getAllHistoric } = useContext(SiteContext)
  const [items, setItems] = useState<Product[]>([])
  const [show, setShow] = useState<boolean>(false)
  const translate = getLanguage(lng)

  useEffect(() => {
    setShow(getAllHistoric.length === 0)
    setItems(getAllHistoric)
  },[getAllHistoric])

  useEffect(() => {
    getInitHistoric()
  },[])


  return (
    <div className="historic-table">
      <div className="historic-table__responsive">
        <table className="historic-table__table">
          <thead>
            <tr>
              <th>{translate.DASHBOARD.HISTORIC_ITEM_PRODUCT}</th>
              <th>{translate.DASHBOARD.HISTORIC_ITEM_STATUS}</th>
              <th>{translate.DASHBOARD.HISTORIC_ITEM_AMOUNT}</th>
              <th>{translate.DASHBOARD.HISTORIC_ITEM_DATE}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              items.map((item, key) => (
                <HistoricTableItem
                  item={item}
                  lng={lng}
                  key={`table-item-${key}`}
                />
                )                
              )              
            }
            {
              items.length == 0 && (
                <tr>
                  <td colSpan={12}>
                    <p className="historic-table__empty">
                      {
                        show ? (
                          translate.DASHBOARD.HISTORIC_EMPTY
                        ) : (
                          translate.DASHBOARD.HISTORIC_LOADING
                        )
                      }
                    </p>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default HistoricTable