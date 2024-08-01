import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Social Push",
  description: "",
}

// components, interfaces, types and functions

import { SearchParams } from '@/models/interfaces/ParamsProps'
import ProfileView from './presentation/organism/profileView/ProfileView'

const ProfilePage = ({params: { lng }}: SearchParams) => {
	return (
		<ProfileView lng={lng} />
	)
}

export default ProfilePage