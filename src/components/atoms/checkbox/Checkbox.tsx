import React, {
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react'

import styles from './checkbox.module.css'

import { CheckboxProps } from './CheckboxProps'
import { IconFactory } from '../icons/domain/use-cases/factoryIcon'

const Checkbox = ({
  onChange,
  label,
  name,
  checked,
  size,
  color,
  colorActive,
  colorText = '#787575',
  redirectTo
}: CheckboxProps) => {
  const input = useRef<HTMLInputElement>(null);
  const [check, setCheck] = useState<boolean>(checked);

  const onChangeInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCheck(!check);
    onChange(e);
  };

  useEffect(() => {
    setCheck(checked);
  }, [checked]);

  return (
    <>
      <div className={styles.checkbox__content}>
        <label>
          <input
            className={styles.checkbox}
            onChange={onChangeInput}
            name={name}
            checked={check}
            type="checkbox"
            ref={input}
          />
          <span className={styles.checkbox__icon}>
            <IconFactory
              color={check ? colorActive : color}
              name={check ? "SquareCheck" : "Square"}
              width={size}
              height={size}
            />
          </span>
          {
            (!redirectTo || redirectTo === "#") && (
              <span className={styles.checkbox_label} style={{ color: colorText }} dangerouslySetInnerHTML={{ __html: label ?? '' }}></span>
            )
          }
        </label>
        {
          (redirectTo && redirectTo !== "#") && (
            <span className={styles.checkbox_label} style={{ color: colorText }}>
              <a 
                href={redirectTo} 
                target="_blank" 
                style={{ color: colorText }}
              >{label}</a>
            </span>
          )
        }
      </div>
    </>
  );
};

export default Checkbox
