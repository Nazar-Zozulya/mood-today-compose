import { IconProps } from "@/shared/types/icon-props"

export function ThreeDotsIcon(props: IconProps) {
	return (
		<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="M8 6H21" />
			<path d="M8 12H21" />
			<path d="M8 18H21" />
			<path d="M3 6H3.01" />
			<path d="M3 12H3.01" />
			<path d="M3 18H3.01" />
		</svg>
	)
}
