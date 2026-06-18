module.exports = {
	content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
	theme: {
		extend: {
			borderRadius: {
				custom: '0 200px 200px 200px',
			},
		},
	},
	daisyui: {
		themes: [
			{
				dineos: {
					primary: '#FF6B35', // Vibrant Food-Tech Orange

					secondary: '#1F2937', // Dark Slate

					accent: '#FFC857', // Premium Gold

					neutral: '#111827', // Dashboard Dark

					'base-100': '#FFFFFF',

					'base-200': '#F8FAFC',

					'base-300': '#E2E8F0',

					info: '#3B82F6',

					success: '#10B981',

					warning: '#F59E0B',

					error: '#EF4444',
				},
			},
		],
	},
	plugins: [require('daisyui')],
}
