import './historicTableItem.css'

import { IconFactory } from '@/components/atoms/icons/domain/use-cases/factoryIcon'
import { HistoricTableItemParams } from './HistoricTableItemProps'
import useHistoricTableItem  from './useHistoricTableItem'
import Button from '@/components/atoms/button/Button'
import { IconsType } from '@/components/atoms/icons/domain/models/IconsType'
import Status from '@/components/atoms/status/Status'
import { StatusType } from '@/models/types/Status'

const CartTableItem = ({
  lng,
  item
}: HistoricTableItemParams) => {

  const { language, format, onAddProduct, translate } = useHistoricTableItem(lng, item)
    
  return (
    <tr>
      <td className="historic-table-item__first">
        <div className="historic-table-item__product">
          <div className="historic-table-item__card">
            <span className="historic-table-item__card-number">{item.i18n[language].scope}</span>
          </div>
          <div className="historic-table-item__text">
            <span className="historic-table-item__title">{item.i18n[language].name}</span>
            <span className="historic-table-item__network"><b>{translate.DASHBOARD.HISTORIC_NETWORK}:</b> <span>{ item.name_social && <IconFactory name={item.name_social as IconsType} width={20} height={20} color="var(--black)" />} {item.name_social}</span></span>
          </div>
        </div>
      </td>
      <td>
        <span className="historic-table-item__status">
          <Status
            status={
              item.status ? {
                1: 'paid',
                2: 'unpaid',
                3: 'cancel',
                default: 'cancel'
              }[item.status] as StatusType : 'cancel'
            }
            language={language}
            textSize={12}
          />
        </span>
      </td>
      <td>
        <span className="historic-table-item__price">{format(Number(item.price))}</span>
      </td>
      <td>
        <span className="historic-table-item__date">{item.date}</span>
      </td>
      <td className="historic-table-item__last">
        <Button
        bgStyle="tertiary"
        textSize={14}
        onClick={(e) => {
          e.preventDefault()
          onAddProduct()
        }}
        >
          {translate.DASHBOARD.HISTORIC_BTN_PRODUCT}
        </Button>
      </td>
    </tr>
  )
}

export default CartTableItem