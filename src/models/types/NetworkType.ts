export const NetworkName = ['Instagram','Tiktok','Youtube','Facebook','Twitter','Threads','LinkedIn','Spotify','SoundCloud','Twitch'] as const

export type NetworkType = typeof NetworkName[number]
