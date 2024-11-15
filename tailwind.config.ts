import type { Config } from "tailwindcss";


const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
    	extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
              },
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			carnation: {
    				'50': '#fff1f1',
    				'100': '#ffe1e1',
    				'200': '#ffc7c7',
    				'250': '#FFE4E4',
    				'300': '#ffa0a0',
    				'350': '#FDCCCC',
    				'400': '#ff5757',
    				'450': '#FFC9C9',
    				'500': '#f83b3b',
    				'550': '#FD7B7B',
    				'600': '#e51d1d',
    				'700': '#c11414',
					'750': '#922323',
    				'800': '#a01414',
    				'900': '#841818',
    				'950': '#480707'
    			},
    			red: {
    				'50': '#fef2f2',
    				'100': '#fee2e2',
    				'200': '#fecaca',
    				'300': '#fca5a5',
    				'400': '#f87171',
    				'500': '#ef4444',
    				'600': '#dc2626',
    				'700': '#b91c1c',
    				'800': '#991b1b',
    				'900': '#7f1d1d'
    			},
				fontFamily: {
					inter: 'Inter'
				},
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			},
    			sidebar: {
    				DEFAULT: 'hsl(var(--sidebar-background))',
    				foreground: 'hsl(var(--sidebar-foreground))',
    				primary: 'hsl(var(--sidebar-primary))',
    				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
    				accent: 'hsl(var(--sidebar-accent))',
    				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
    				border: 'hsl(var(--sidebar-border))',
    				ring: 'hsl(var(--sidebar-ring))'
    			},
                progress: {
                    background: 'hsl(var(--progress-background))',
                    foreground: 'hsl(var(--progress-foreground))'
                }
    		},
    		fontSize: {
    			xs: '0.75rem',
    			sm: '0.875rem',
    			base: '1rem',
    			lg: '1.125rem',
    			xl: '1.25rem',
    			'2xl': '1.5rem',
    			'3xl': '1.875rem',
    			'4xl': '2.25rem',
    			'5xl': '3rem',
    			'6xl': '3.75rem',
    			'7xl': '4.5rem',
    			'8xl': '6rem',
    			'9xl': '8rem'
    		},
    		screens: {
    			sm: '640px',
    			md: '768px',
    			lg: '1024px',
    			xl: '1280px',
    			'2xl': '1536px'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },

    plugins: [
        require("tailwindcss-animate"),
        function ({ addUtilities }: { addUtilities: (utilities: Record<string, any>) => void }) {
            addUtilities({
              '.clickEffect': {
                // Click Animation
                transition: 'all 150ms ease-out',
                cursor: 'pointer',
              },
              '.clickEffect:active': {
                transform: 'scale(0.95)',
              },
            });
          },
    ],
};

export default config;
