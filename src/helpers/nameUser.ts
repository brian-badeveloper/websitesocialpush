import { NameUserProps, ObjectUser } from '@/models/interfaces/nameUserProps'

const nameUser = ({full_name}: NameUserProps): ObjectUser => {
  const objUser = {first_name: '', last_name: ''}

  if (full_name) {
    const full_name_arr = full_name?.split("-")
    if (full_name_arr.length > 0) {
      return {first_name: full_name_arr[0], last_name: full_name_arr[1]}
    }

    return objUser
  }

  return objUser 
}

const fullNameUser = ({full_name}: NameUserProps): string => {
  if (full_name) {
    return full_name?.split("-").join(" ")
  }

  return ""
}

export {
  nameUser,
  fullNameUser
}
