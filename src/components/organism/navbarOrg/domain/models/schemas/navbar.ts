import { ItemOptionDropdown } from "../interfaces/Navbar";

export const NAVBAR_DROPDOWN_PARAMS:ItemOptionDropdown[] = [
	{
		text: 'Seguidores Threads',
		link: '/',
		tag: '',
    name: 'followers_threads',
		network: 'Threads',
		type: 'followers',
		options: []
	},
	{
		text: 'Likes Threads',
		link: '/',
		tag: '',
    name: 'likes_threads',
		network: 'Threads',
		type: 'likes',
		options: []
	},
	{
		text: 'Seguidores LinkedIn',
		link: '/',
		tag: '',
    name: 'followers_linkedin',
		network: 'LinkedIn',
		type: 'followers',
		options: []
	},
	{
		text: 'Seguidores SoundCloud',
		link: '/',
		tag: '',
    name: 'followers_soundcloud',
		network: 'SoundCloud',
		type: 'followers',
		options: []
	},
	{
		text: 'Seguidores SoundCloud + Me Gustas',
		link: '/',
		tag: '',
    name: 'followers_likes_soundcloud',
		network: 'SoundCloud',
		type: 'followers',
		options: []
	},
	{
		text: 'Seguidores Spotify',
		link: '/',
		tag: '',
		network: 'Spotify',
		type: 'followers',
    name: 'followers_spotify',
		options: []
	},
	{
		text: 'Transmisiones Spotify',
		link: '/',
		tag: '',
    name: 'transmissions_spotify',
		network: 'Spotify',
		type: 'followers',
		options: []
	},
	{
		text: 'Seguidores Twitch',
		link: '/',
		tag: '',
    name: 'followers_twitch',
		network: 'Twitch',
		type: 'followers',
		options: []
	}
]