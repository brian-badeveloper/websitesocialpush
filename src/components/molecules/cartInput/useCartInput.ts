import { ChangeEvent, useState, useRef, MouseEventHandler, KeyboardEventHandler } from 'react'
import { CartInputProps, CartInputType } from './CartInputProps';

export const useCartInput = ({valueInitial = '', onQuantity}: CartInputProps) => {

    const [input, setInput] = useState<number | string>(valueInitial);

    const format = (num:number) => {
      const nf = new Intl.NumberFormat("en-US");
      return !Number.isNaN(nf.format(num)) ? nf.format(num) : num;
    }
    
    const onInput = ({target}: ChangeEvent<HTMLInputElement>) => {
      const {value} = target as HTMLInputElement;

      if (!Number.isNaN(Number(value))) {
        setInput(Number(value) > 0 ? value : '');
      } 
    }

    const increment:MouseEventHandler<HTMLButtonElement> = (e) => {
      e.preventDefault()
      let number = Number(input) + 1
      setInput(number)
      onQuantity(number as number)
    }

    const decrement:MouseEventHandler<HTMLButtonElement> = (e) => {
      e.preventDefault()
      let number = Number(input) > 1 ? (Number(input) - 1) : 1
      setInput(number)
      onQuantity(number as number)
    }

    const onChangeInput:KeyboardEventHandler<HTMLInputElement> = (e) => {
      var key=e.keyCode || e.which;
      if (key==13){
         onQuantity(Number(input) as number)
      }
    }
 
    return {
      input,
      onInput,
      format,
      increment,
      decrement,
      onChangeInput
    }
}