import { MessageCustomProps } from "@/models/interfaces/MessageCustom"

// message custom
const messageCustom = ({message, params}: MessageCustomProps): string => {
	let messageResponse = message
	for (let i = 0; i < params.length; i++) {
		messageResponse = messageResponse.split(`:${params[i].replace}`).join(`${params[i].to}`)
	}

	return messageResponse
}

export {
  messageCustom
}