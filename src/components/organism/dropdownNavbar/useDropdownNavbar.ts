import { useRef, useEffect, MouseEventHandler, useContext } from 'react'

import styles from './dropdownNavbar.module.css'

const useDropdownNavbar = () => {

  const content = useRef<HTMLLIElement>(null)

  const changeActive = () => {
		const dropdowns = document.querySelectorAll(`.${styles.dropdown_navbar__content}`);
    const dropdownsSub = document.querySelectorAll(`.${styles.dropdown_navbar__subitem}`);
		let active = false;
		dropdowns.forEach((item) => {
			if (item.classList.contains(styles.active) && item !== content.current) {
				item.classList.remove(styles.active)
			}
			
			if (item.classList.contains(styles.active) && item === content.current) {
				item.classList.remove(styles.active)
				active = true;
			}

			if (!item.classList.contains(styles.active) && !active && item === content.current) {
				item.classList.add(styles.active)
			}
		});
    
    dropdownsSub.forEach((item) => {
      if (item.classList.contains(styles.active)) {
				item.classList.remove(styles.active)
			}
    })
	}

  const changeActiveSub = () => {
		const dropdowns = document.querySelectorAll(`.${styles.dropdown_navbar__subitem}`);
		let active = false;
		dropdowns.forEach((item) => {
			if (item.classList.contains(styles.active) && item !== content.current) {
				item.classList.remove(styles.active)
			}
			
			if (item.classList.contains(styles.active) && item === content.current) {
				item.classList.remove(styles.active)
				active = true;
			}

			if (!item.classList.contains(styles.active) && !active && item === content.current) {
				item.classList.add(styles.active)
			}
		});
	}

  const validateDropdown = (e: MouseEvent) => {
    const target = e.target as HTMLLIElement|HTMLElement;
    if (!target.matches(`.${styles.dropdown_navbar__content} > .${styles.dropdown_navbar__text}`)
       && !target.matches(`.${styles.dropdown_navbar__content} > .${styles.dropdown_navbar__subitems}`)
       && !target.matches(`.${styles.dropdown_navbar__content} > .${styles.dropdown_navbar__subitems} > ul`)
       && !target.matches(`.${styles.dropdown_navbar__content} > .${styles.dropdown_navbar__subitems} > ul > li`)
       && !target.matches(`.${styles.dropdown_navbar__content} > .${styles.dropdown_navbar__subitems} > ul > li > a`)
       && !target.matches(`.${styles.dropdown_navbar__content} > .${styles.dropdown_navbar__subitems} > ul > li > .${styles.dropdown_navbar__text}`)
       && !target.matches(`.${styles.dropdown_navbar__content} > .${styles.dropdown_navbar__subitems} > ul > li > .${styles.dropdown_navbar__subitems}`)
       && !target.matches(`.${styles.dropdown_navbar__content} > .${styles.dropdown_navbar__subitems} > ul > li > .${styles.dropdown_navbar__subitems} > ul`)
       && !target.matches(`.${styles.dropdown_navbar__content} > .${styles.dropdown_navbar__subitems} > ul > li > .${styles.dropdown_navbar__subitems} > ul > li`)
       && !target.matches(`.${styles.dropdown_navbar__content} > .${styles.dropdown_navbar__subitems} > ul > li > .${styles.dropdown_navbar__subitems} > ul > li > a`)
       ) {
        const dropdowns = document.querySelectorAll(`.${styles.dropdown_navbar__content}`);
        dropdowns.forEach((item) => {
          if (item.classList.contains(styles.active)) {
            item.classList.remove(styles.active)
          }
        });
    }
  } 

  const addClick = () => {
    window.addEventListener('click', (e) => validateDropdown(e))
  }

  const removeClick = () => {
    window.removeEventListener('click', validateDropdown, true)
  }

  useEffect(() => {
    addClick()

    return () => {
      removeClick()
    }
  }, []);

  return {
    content,
    changeActive,
    changeActiveSub,
    addClick,
    removeClick
  }
}

export default useDropdownNavbar