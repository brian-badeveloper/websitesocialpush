import { QuoteImage } from '../models/QuoteImage'
import { quoteImagesImport } from './quoteImagesImport'

export const QuoteImageFactory = ({
	clStyle,
	name
}: QuoteImage): JSX.Element => {
	const QuoteImageComponent = quoteImagesImport[name]
	return <QuoteImageComponent clStyle={clStyle} />
}
