export function getMsUntilMidnight(): number {
	const now = new Date()
	const next = new Date()

	next.setHours(24, 0, 0, 0) // Устанавливаем на 00:00 следующего дня

	return next.getTime() - now.getTime()
}
